"use client";

import { assistant } from "@/assistants/assistant";
import { Paul } from "@/assistants/paul";
import { tinydigs } from "@/assistants/tinydigs";
import { arthur } from "@/assistants/arthur";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

import {
  Message,
  MessageTypeEnum,
  TranscriptMessage,
  TranscriptMessageTypeEnum,
} from "@/lib/types/conversation.type";
import { useEffect, useState } from "react";
// import { MessageActionTypeEnum, useMessages } from "./useMessages";
import { vapi } from "@/lib/vapi.sdk";

export enum CALL_STATUS {
  INACTIVE = "inactive",
  ACTIVE = "active",
  LOADING = "loading",
}

export function useVapi(assistantName?: string, assistantId?: string) {
  const [isSpeechActive, setIsSpeechActive] = useState(false);
  const [callStatus, setCallStatus] = useState<CALL_STATUS>(
    CALL_STATUS.INACTIVE
  );

  const [messages, setMessages] = useState<Message[]>([]);

  const [activeTranscript, setActiveTranscript] =
    useState<TranscriptMessage | null>(null);

  const [audioLevel, setAudioLevel] = useState(0);

  useEffect(() => {
    const onSpeechStart = () => setIsSpeechActive(true);
    const onSpeechEnd = () => {
      console.log("Speech has ended");
      setIsSpeechActive(false);
    };

    const onCallStartHandler = () => {
      console.log("Call has started");
      setCallStatus(CALL_STATUS.ACTIVE);
    };

    const onCallEnd = () => {
      console.log("Call has stopped");
      setCallStatus(CALL_STATUS.INACTIVE);
    };

    const onVolumeLevel = (volume: number) => {
      setAudioLevel(volume);
    };

    const onMessageUpdate = (message: Message) => {
      console.log("message", message);
      if (
        message.type === MessageTypeEnum.TRANSCRIPT &&
        message.transcriptType === TranscriptMessageTypeEnum.PARTIAL
      ) {
        setActiveTranscript(message);
      } else {
        setMessages((prev) => [...prev, message]);
        setActiveTranscript(null);
      }
    };

    const onError = (e: any) => {
      setCallStatus(CALL_STATUS.INACTIVE);
      console.error(e);
    };

    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);
    vapi.on("call-start", onCallStartHandler);
    vapi.on("call-end", onCallEnd);
    vapi.on("volume-level", onVolumeLevel);
    vapi.on("message", onMessageUpdate);
    vapi.on("error", onError);

    return () => {
      vapi.off("speech-start", onSpeechStart);
      vapi.off("speech-end", onSpeechEnd);
      vapi.off("call-start", onCallStartHandler);
      vapi.off("call-end", onCallEnd);
      vapi.off("volume-level", onVolumeLevel);
      vapi.off("message", onMessageUpdate);
      vapi.off("error", onError);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const start = async (id: string) => {
    setCallStatus(CALL_STATUS.LOADING);
    console.log("Start Id", id);
    //const response = vapi.start("3395b2c0-8ca1-451a-b9db-3814fc317f7b");
    let response = new Promise((resolve) => resolve({}));
    // // pass in the assistant name
    // if (assistantName === "paul") {
    //   response = vapi.start(Paul);
    // }
    // if (assistantName === "geoffrey") {
    //   response = vapi.start(assistant);
    // }
    // if (assistantName === "tinydigs") {
    //   response = vapi.start(tinydigs);
    // }
    // if (assistantName === "arthur") {
    //   response = vapi.start(arthur);
    // }
    // console.log(assistantId);
    if (assistantId !== undefined) {
      console.log(assistantId);
      //response = vapi.start(assistantId);
    }
    response.then((res) => {
      console.log("call", res);
    });
  };

  const stop = () => {
    setCallStatus(CALL_STATUS.LOADING);
    vapi.stop();
  };

  const toggleCall = () => {
    if (callStatus == CALL_STATUS.ACTIVE) {
      stop();
    } else {
      start();
    }
  };

  return {
    isSpeechActive,
    callStatus,
    audioLevel,
    activeTranscript,
    messages,
    start,
    stop,
    toggleCall,
  };
}
