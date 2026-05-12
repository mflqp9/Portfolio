import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected web and software projects by Muhammad Faisal, including Next.js and MERN stack work.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
