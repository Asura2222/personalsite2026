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
  title: "Personal Website",
  description: "Builder, Philosopher, and Entrepreneur dedicated to rebuilding Myanmar",
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
          <div className="px-6 py-16 lg:px-12 lg:py-24">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
