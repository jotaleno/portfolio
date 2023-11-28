import { Terminal } from "@/components/Terminal";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 h-full bg-slate-800">
      <Terminal username="jotaleno" hostname="cloud" />
    </main>
  );
}
