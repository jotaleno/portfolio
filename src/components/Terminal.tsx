"use client";

import { Input } from "./Input";
import { History } from "./History";
import { useRef } from "react";

interface TerminalProps {
  username: string;
  hostname: string;
}

export function Terminal(props: TerminalProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputRef.current?.focus();
  };
  return (
    <div className="p-6 bg-slate-800 h-full border-2 rounded" onClick={onClick}>
      <div className="h-full overflow-y-scroll overflow-x-hidden">
        <History username={props.username} hostname={props.hostname} />
        <Input
          username={props.username}
          hostname={props.hostname}
          inputRef={inputRef}
        />
      </div>
    </div>
  );
}
