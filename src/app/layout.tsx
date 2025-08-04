import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./navbar/layout";
import { ThemeProvider } from "./components/theme-provider";
import Footer from './footer/layout';
import Head from 'next/head';

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
      <Head>
  <title>Mohamed Allaoui | Full Stack Developer</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <meta name="google-site-verification" content="KGVJCC9CTnHxW6UK_V-LfXurz0vFdwdhDtiSTTQDpfA" />
  <meta name="description" content="Portfolio website of Mohamed Allaoui, a Full Stack Developer specializing in modern web technologies like Next.js, Node.js, and Laravel." />
  <meta name="keywords" content="Mohamed Allaoui, Full Stack Developer, Web Developer Morocco, Next.js Portfolio, Node.js Developer" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Mohamed Allaoui | Full Stack Developer" />
  <meta property="og:description" content="Explore the professional portfolio of Mohamed Allaoui. Projects, experience, education, and contact." />
  <meta property="og:image" content="https://portfolio-mohamedallaoui.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.0e5df6d9.png&w=3840&q=75" />
  <meta property="og:url" content="https://portfolio-mohamedallaoui.vercel.app" />
  <meta name="twitter:card" content="https://portfolio-mohamedallaoui.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.0e5df6d9.png&w=3840&q=75" />
</Head>

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
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
