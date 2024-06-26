"use client";

import { useVapi } from "../../hooks/useVapi";
import { AssistantButton } from "./assistantButton";
import { Display } from "./display";

function Paul() {
  const { toggleCall, callStatus, audioLevel } = useVapi("paul");
  return (
    <>
      <div className="chat-history">
        <Display />
      </div>
      <div className="user-input">
        <AssistantButton
          audioLevel={audioLevel}
          callStatus={callStatus}
          toggleCall={toggleCall}
        ></AssistantButton>
      </div>
    </>
  );
}

export { Paul };
