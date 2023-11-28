"use client";

import {
  ChangeEvent,
  KeyboardEvent,
  RefObject,
  useEffect,
  useState,
} from "react";
import { Prompt } from "./Prompt";
import { useHistoryContext } from "@/hooks/HistoryContext";
import { shell, hasCommand } from "@/utils/shell";

interface InputProps {
  username: string;
  hostname: string;
  inputRef: RefObject<HTMLInputElement>;
}

export function Input(props: InputProps) {
  const { history, addToHistory, clearHistory } = useHistoryContext();
  const [command, setCommand] = useState<string>("");

  useEffect(() => {
    if (props.inputRef.current) {
      props.inputRef.current.scrollIntoView();
    }
  }, [history, props.inputRef]);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCommand(event.target.value);
  };

  const handleOnKeyDownCapture = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

      shell(command, addToHistory, clearHistory);

      setCommand("");
    }

    if (event.ctrlKey && event.key === "l") {
      event.preventDefault();
      shell("clear", addToHistory, clearHistory);
    }
  };

  return (
    <div className="flex">
      <Prompt username={props.username} hostname={props.hostname} />
      <input
        className={`w-full bg-transparent focus:outline-none caret-white ${
          hasCommand(command) ? "text-teal-300" : "text-red-300"
        }`}
        autoFocus={true}
        type="text"
        autoComplete="off"
        spellCheck="false"
        value={command}
        onChange={(event) => handleOnChange(event)}
        onKeyDownCapture={(event) => handleOnKeyDownCapture(event)}
        ref={props.inputRef}
      />
    </div>
  );
}
