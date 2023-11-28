interface PromptProps {
  username: string;
  hostname: string;
}

export function Prompt(props: PromptProps) {
  return (
    <label>
      <span className="text-blue-300">{props.username}</span>
      <span className="text-white">@</span>
      <span className="text-teal-300">{props.hostname}</span>
      <span className="text-white whitespace-pre">:$ ~ </span>
    </label>
  );
}
