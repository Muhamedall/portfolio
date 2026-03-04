import type { Metadata } from "next";
import Projects from "./Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Mohamed Allaoui's full stack development projects built with Next.js, Laravel, and Node.js.",
  alternates: { canonical: "https://www.mohamedallaoui.com/projects" },
};

export default function Page() {
  return <Projects />;
}