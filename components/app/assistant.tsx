"use client";

import { useEffect } from "react";
import { useVapi } from "../../hooks/useVapi";
import { Button } from "../ui/button";
import { AssistantButton } from "./assistantButton";
import { Display } from "./display";
import { vapi } from "@/lib/vapi.sdk";

interface AssistantProps {
  assistant: {
    Id: number;
    assistantId: string;
    name: string;
    userId: string;
  };
}

function Assistant({ assistant }: AssistantProps) {
  const launch = () => {
    console.log(assistant.assistantId);
    let assId = assistant.assistantId;
    vapi.start(assId);
  };

  // const deleteAssistant = (id: string) => {
  //   console.log("deletingAssistant", id);
  //   const options = {
  //     method: "DELETE",
  //     headers: {
  //       Authorization: "Bearer " + process.env.NEXT_PUBLIC_VAPI_KEY,
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   fetch("https://api.vapi.ai/assistant/" + assistant.assistantId, options)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log("deleted from vapi", response);
  //       let url =
  //         "https://nocodb.tavonni.com/api/v2/tables/m7locaqms45qixf/records";

  //       const requestOptions: RequestInit = {
  //         method: "DELETE",
  //         headers: {
  //           "xc-auth": process.env.NEXT_PUBLIC_NOCODB_TOKEN || "",
  //           "xc-token": process.env.NEXT_PUBLIC_NOCODB_TOKEN || "",
  //         },
  //         body: JSON.stringify({
  //           Id: assistant.Id,
  //         }),
  //       };

  //       fetch(url, requestOptions)
  //         .then((res) => res.json())
  //         .then((json) => {
  //           console.log("deleted all");
  //         })
  //         .catch((err) => console.error("error:" + err));
  //     })
  //     .catch((err) => console.error(err));
  // };

  const { toggleCall, callStatus, audioLevel } = useVapi();
  return (
    <>
      <div className="user-input">
        <Button onClick={launch}>Start</Button>
        <AssistantButton
          audioLevel={audioLevel}
          callStatus={callStatus}
          toggleCall={toggleCall}
        ></AssistantButton>
      </div>
      {/* <Button onClick={deleteAssistant(assistant.assistantId)}>Delete</Button> */}
    </>
  );
}

export { Assistant };
