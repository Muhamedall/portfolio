import type { Metadata } from "next";
import Home from "./Home"; 

export const metadata: Metadata = {
  title: "Mohamed Allaoui | Full Stack Developer",
  description: "Full Stack Developer with 2+ years building production-grade marketplaces, booking platforms, and dashboards using React, Angular, Laravel, and Spring Boot.",
  alternates: { canonical: "https://www.mohamedallaoui.com" },
};

export default function Page() {
  return <Home />;
}