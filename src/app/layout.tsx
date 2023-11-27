import type { Metadata } from "next";
import "./globals.css";
import { HistoryProvider } from "@/context/History";

export const metadata: Metadata = {
  title: "Leno",
  description: "Leno Terminal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <HistoryProvider>
        <body className="h-screen">{children}</body>
      </HistoryProvider>
    </html>
  );
}
