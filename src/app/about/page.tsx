
import type { Metadata } from "next";
import About from "./About"; 

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Mohamed Allaoui — a Full Stack Developer from Morocco skilled in Next.js, Node.js, Laravel, and more.",
  alternates: { canonical: "https://www.mohamedallaoui.com/about" },
};

export default function Page() {
  return <About />;
}