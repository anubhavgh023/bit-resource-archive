import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import TitleBar from "@/components/TitleBar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="flex justify-center items-center py-5">
          <TitleBar></TitleBar>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-10 justify-between p-10">
          <SideBar></SideBar>
          <Analytics></Analytics>
          {children}
        </div>
      </body>
    </html>
  );
}
