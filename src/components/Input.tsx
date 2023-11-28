"use client";

import { ChangeEvent, KeyboardEvent, LegacyRef, useState } from "react";
import { Prompt } from "./Prompt";
import { useHistoryContext } from "@/hooks/HistoryContext";
import { shell, hasCommand } from "@/utils/shell";

interface InputProps {
  username: string;
  hostname: string;
  inputRef: LegacyRef<HTMLInputElement>;
}

export function Input(props: InputProps) {
  const { addToHistory, clearHistory } = useHistoryContext();
  const [command, setCommand] = useState<string>("");

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCommand(event.target.value);
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

      shell(command, addToHistory, clearHistory);

      setCommand("");
    }

    if (event.ctrlKey && event.key === "l") {
      shell("clear", addToHistory, clearHistory);
    }
  };

  return (
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
        ref={props.inputRef}
      />
    </div>
  );
}
