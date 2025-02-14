import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sakamichi Members",
  description: "All Sakamichi Song Released",
  generator: "sakamichi.cloud",
  applicationName: "sakamichi.cloud",
  referrer: "origin-when-cross-origin",
  keywords: ["Sakamichi Group", "Song", "Single"],
  authors: [
    { name: "Sakamichi.cloud" },
    { name: "Sakamichi Fansite", url: "https://sakamichi.cloud" },
  ],
  creator: "Sakamichi Fansite",
  publisher: "Sakamichi Fansite",
};

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="flex justify-center m-4">{children}</section>;
}
