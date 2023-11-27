import { Prompt } from "./Prompt";

interface LogProps {
  username: string;
  hostname: string;
  output: string;
  command: string;
}

export function Log(props: LogProps) {
  return (
    <div>
      <div className="flex">
        <Prompt username={props.username} hostname={props.hostname} />
        <span className="w-full text-zinc-300 ">{props.command}</span>
      </div>

      <span className="text-zinc-300 whitespace-pre-wrap">{props.output}</span>
    </div>
  );
}
