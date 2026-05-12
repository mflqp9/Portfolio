import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience in VB.NET, React, Next.js, Node.js, MongoDB, and desktop software development.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
