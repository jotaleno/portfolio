interface PromptProps {
  username: string;
  hostname: string;
}

export function Prompt(props: PromptProps) {
  return (
    <div>
      <label>
        <span className="text-blue-300">{props.username}</span>
        <span className="text-zinc-300">@</span>
        <span className="text-teal-300">{props.hostname}</span>
        <span className="text-zinc-300 whitespace-pre">:$ ~ </span>
      </label>
    </div>
  );
}
