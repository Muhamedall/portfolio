import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./navbar/layout";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mohamed Allaoui",
  description: "Portfolio Mohamed Allaoui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const generateStars = (num: number) => {
    return Array.from({ length: num }).map((_, index) => (
      <div
        key={index}
        className="star"
        style={{
          top: `${Math.random() * 100}vh`, // Random vertical position
          left: `${Math.random() * 100}vw`, // Random horizontal position
          animationDuration: `${Math.random() * 2 + 1}s`, // Random twinkle speed
        }}
      />
    ));
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Background elements */}
          <div className="stars">
            {generateStars(100)} {/* Generate 100 stars */}
          </div>

          
          <Navbar>{children}</Navbar>
        </ThemeProvider>
      </body>
    </html>
  );
}
