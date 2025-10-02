import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalEffects } from "@/app/components/Effects";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bojun Zhang - XJTU PhD Candidate",
  description:
    "PhD Candidate in Mechanical Engineering at Xi'an Jiaotong University. Specializing in AI applications, human factors engineering, and medical technology innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalEffects />
        {children}
      </body>
    </html>
  );
}
