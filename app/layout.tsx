import { Anaheim, Sawarabi_Gothic, Radio_Canada } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navigation from "./components/navigation/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sakamichi Fanpage",
  description: "A Sakamichi fansite website",
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
const jpgothic = Sawarabi_Gothic({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-jpgothic",
});

const ltanaheim = Anaheim({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  variable: "--font-ltanaheim",
});

const ltradio = Radio_Canada({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ltradio",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ltanaheim.variable} ${jpgothic.variable} ${ltradio.variable} antialiased`}
      >
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
