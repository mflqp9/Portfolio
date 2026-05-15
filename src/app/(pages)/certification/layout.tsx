import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certification - Muhammad Faisal",
  description:
    "Education, MERN stack training, and certifications for Muhammad Faisal.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
