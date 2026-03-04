import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./navbar/layout";
import { ThemeProvider } from "./components/theme-provider";
import Footer from "./footer/layout";
import Script from "next/script";
import Stars from "./components/Stars";

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

// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://www.mohamedallaoui.com"), 
  title: {
    default: "Mohamed Allaoui | Full Stack Developer",
    template: "%s | Mohamed Allaoui", 
  },
  
  description:
    "Mohamed Allaoui is a Full Stack Developer from Morocco specializing in Next.js, Node.js, and Laravel. View my projects, experience, and contact me.",
  keywords: [
    "Mohamed Allaoui",
    "Full Stack Developer Morocco",
    "Next.js Developer",
    "Node.js Developer",
    "Laravel Developer",
    "Web Developer Rabat",
    "Software Engineer Morocco",
  ],
  authors: [{ name: "Mohamed Allaoui", url: "https://www.mohamedallaoui.com" }],
  creator: "Mohamed Allaoui",
  alternates: {
    canonical: "https://www.mohamedallaoui.com", 
  },
  openGraph: {
    title: "Mohamed Allaoui | Full Stack Developer",
    description: "Full Stack Developer from Morocco — Next.js, Node.js, Laravel , Java, Angular ,Vue.js.",
    url: "https://www.mohamedallaoui.com",
    siteName: "Mohamed Allaoui Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Mohamed Allaoui — Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Allaoui | Full Stack Developer",
    description: "Full Stack Developer from Morocco — Next.js, Node.js, Laravel , Java, Angular ,Vue.js.",
    creator: "@_Muhamedall",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


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
        <Script
  id="json-ld-person"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mohamed Allaoui",
      url: "https://www.mohamedallaoui.com",
      jobTitle: "Full Stack Developer",
      worksFor: { "@type": "Organization", name: "Freelance" },
      address: { "@type": "PostalAddress", addressCountry: "MA" },
      sameAs: [
        "https://www.linkedin.com/in/mohamed-allaoui",
        "https://github.com/Muhamedall",
        "https://x.com/_Muhamedall",
      ],
    }),
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
          <Stars />

          <Navbar>{children}</Navbar>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
