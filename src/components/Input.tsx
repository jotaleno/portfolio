"use client";

import { ChangeEvent, KeyboardEvent, useState } from "react";
import { Prompt } from "./Prompt";
import { hasCommand, executeCommand } from "@/data/commands";
import { useHistoryContext } from "@/hooks/HistoryContext";

interface InputProps {
  username: string;
  hostname: string;
}

export function Input(props: InputProps) {
  const { logs, setLogs } = useHistoryContext();
  const [command, setCommand] = useState<string>("");

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCommand(event.target.value);
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const output = executeCommand(command);
      setLogs([...logs, { command, output }]);
      setCommand("");
    }
  };

  return (
    <div>
      <div className="flex">
        <Prompt username={props.username} hostname={props.hostname} />
        <input
          className={`w-full bg-transparent focus:outline-none caret-white ${
            hasCommand(command) ? "text-teal-300" : "text-white"
          }`}
          autoFocus={true}
          type="text"
          autoComplete="off"
          spellCheck="false"
          value={command}
          onChange={(event) => onChangeHandler(event)}
          onKeyDownCapture={(event) => onKeyDownHandler(event)}
        />
      </div>
    </div>
  );
}
