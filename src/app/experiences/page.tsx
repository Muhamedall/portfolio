import type { Metadata } from "next";
import ExperiencePage from "./experiences";

export const metadata: Metadata = {
  title: "Experiences",
  description: "Mohamed Allaoui's professional experience as a Full Stack Developer — roles, technologies, and achievements.",
  alternates: { canonical: "https://www.mohamedallaoui.com/experiences" },
};

export default function Page() {
  return <ExperiencePage />;
}