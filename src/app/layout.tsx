import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luis Marino | UX/UI Designer",
  description:
    "UX/UI Designer with expertise in graphic and industrial design. Creating meaningful digital experiences.",
  keywords: ["UX", "UI", "Design", "Portfolio", "Luis Marino"],
  openGraph: {
    title: "Luis Marino | UX/UI Designer",
    description: "UX/UI Designer creating meaningful digital experiences.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Pre-paint theme: prevents FOUC by reading localStorage before first render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('portfolio-theme')||'light';document.documentElement.setAttribute('data-theme',t);})();`,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
