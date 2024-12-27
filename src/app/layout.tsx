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
  description: "Portfolio of Mohamed Allaoui",
  viewport: "width=device-width, initial-scale=1", // Use the `viewport` property directly
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const generateStars = (num: number) =>
    Array.from({ length: num }).map((_, index) => (
      <div
        key={index}
        className="star"
        style={{
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 2 + 1}s`,
        }}
      />
    ));

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="stars">{generateStars(100)}</div>
          <Navbar>{children}</Navbar>
        </ThemeProvider>
      </body>
    </html>
  );
}
