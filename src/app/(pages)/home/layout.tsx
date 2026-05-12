import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore Muhammad Faisal's portfolio, skills, and full-stack development experience.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
