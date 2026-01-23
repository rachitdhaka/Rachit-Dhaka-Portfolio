import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/Providers/Theme-providers";
import { ThemeShortcutListener } from "@/components/ThemeShortcutListener";
import ogImg from "@/public/Images/OgImage.jpg";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://rachitdhaka.me"),
  title: "Rachit Dhaka",
  description:
    "Full-stack developer crafting modern web applications with cutting-edge technologies. Explore my portfolio showcasing innovative projects and connect for collaboration opportunities.",

  openGraph: {
    title: "Rachit Dhaka Portfolio",
    description:
      "Full-stack developer crafting modern web applications with cutting-edge technologies. Explore my portfolio showcasing innovative projects and connect for collaboration opportunities.",
    url: "https://rachitdhaka.me",
    siteName: "Rachit Dhaka Portfolio",
    images: [
      {
        url: ogImg.src,
        width: 1200,
        height: 630,
        alt: "My Website Social Card",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rachit Dhaka Portfolio",
    description:
      "Full-stack developer crafting modern web applications with cutting-edge technologies. Explore my portfolio showcasing innovative projects and connect for collaboration opportunities.",
    images: [ogImg.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
        style={{ fontWeight: 400 }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeShortcutListener />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
