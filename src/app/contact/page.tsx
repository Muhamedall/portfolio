import React from "react";
import type { Metadata } from "next";
import ContactPage from "./contact"; // Adjust the path based on your folder structure
export const metadata : Metadata = {
  title: "Contact",
  description: "Get in touch with Mohamed Allaoui — Full Stack Developer available for freelance and full-time opportunities.",
  alternates: { canonical: "https://www.mohamedallaoui.com/contact" },
};
const Page: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center   dark:bg-gray-900">
      <ContactPage />
    </main>
  );
};

export default Page;
