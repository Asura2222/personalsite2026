import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contribution pages — Local preview | James Win",
  robots: { index: false, follow: false },
};

export default function ContributionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
