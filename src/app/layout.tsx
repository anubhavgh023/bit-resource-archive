import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import TitleBar from "@/components/TitleBar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/Footer";

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
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <div className="flex justify-center items-center py-5 md:hidden">
          <TitleBar />
        </div>
        <div className="flex-grow flex flex-col md:flex-row lg:flex-row gap-10 justify-between p-10">
          <SideBar />
          <main className="flex-grow">
            <div className="hidden justify-center items-center py-5 md:flex">
              <TitleBar />
            </div>
            {children}
          </main>
          <Analytics />
          <SpeedInsights/>
        </div>
        <footer className="mt-auto w-full px-10">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
