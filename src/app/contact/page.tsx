import React from "react";
import ContactPage from "./contact"; // Adjust the path based on your folder structure

const Page: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen  dark:bg-gray-900">
      <ContactPage />
    </main>
  );
};

export default Page;
