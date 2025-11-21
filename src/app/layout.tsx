import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./navbar/layout";
import { ThemeProvider } from "./components/theme-provider";
import Footer from "./footer/layout";
import { useMemo } from "react";
import Script from "next/script";

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
  title: "Mohamed Allaoui | Full Stack Developer",
  description:
    "Portfolio of Mohamed Allaoui, Full Stack Developer specializing in Next.js, Node.js, Laravel, and modern web development.",
  keywords:
    "Mohamed Allaoui, Full Stack Developer, Web Developer Morocco, Next.js Portfolio, Node.js Developer, Laravel Developer, Software Engineer",
  authors: [{ name: "Mohamed Allaoui" }],
  openGraph: {
    title: "Mohamed Allaoui | Full Stack Developer",
    description:
      "Explore the professional portfolio of Mohamed Allaoui. Projects, experience, education, and contact.",
    url: "https://www.mohamedallaoui.com",
    siteName: "Mohamed Allaoui Portfolio",
    images: [
      {
        url: "https://www.mohamedallaoui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.0e5df6d9.png&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "Mohamed Allaoui Profile Picture",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Allaoui | Full Stack Developer",
    description:
      "Explore the professional portfolio of Mohamed Allaoui. Projects, experience, education, and contact.",
    image:
      "https://www.mohamedallaoui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.0e5df6d9.png&w=3840&q=75",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const stars = useMemo(
    () =>
      Array.from({ length: 100 }).map(() => ({
        id: crypto.randomUUID(),
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        duration: `${Math.random() * 2 + 1}s`,
      })),
    []
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="KGVJCC9CTnHxW6UK_V-LfXurz0vFdwdhDtiSTTQDpfA"
        />
        <link rel="icon" href="/logo-port.png" />

        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-QYH98JC8K2"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QYH98JC8K2', { page_path: window.location.pathname });
          `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="stars">
            {stars.map((star) => (
              <div
                key={star.id}
                className="star"
                style={{
                  top: star.top,
                  left: star.left,
                  animationDuration: star.duration,
                }}
              />
            ))}
          </div>

          <Navbar>{children}</Navbar>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
