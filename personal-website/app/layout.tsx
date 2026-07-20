import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { CommandMenu } from "@/components/layout/cmdk-dialog";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "James Win — Philosopher Builder",
  description: "Philosopher builder. Founder of TalentOS — AI teammates for every talent — and Build Myanmar, the country's largest tech community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} font-sans antialiased`}
      >
        <Sidebar />
        <CommandMenu />
        <main className="lg:pl-36">
          <div className="px-6 pb-16 pt-24 lg:px-12 lg:py-24">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
