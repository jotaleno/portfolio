import { Prompt } from "./Prompt";

interface InputProps {
  username: string;
  hostname: string;
}

export function Input(props: InputProps) {
  return (
    <div>
      <div className="flex">
        <Prompt username={props.username} hostname={props.hostname} />
        <input
          className="w-full bg-transparent text-zinc-300 focus:outline-none"
          autoFocus={true}
          type="text"
          autoComplete="off"
          spellCheck="false"
        />
      </div>
    </div>
  );
}
