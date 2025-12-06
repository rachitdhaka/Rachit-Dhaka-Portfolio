import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/Providers/Theme-providers";
import { ThemeShortcutListener } from "@/components/ThemeShortcutListener";
import ogImg from "@/public/Images/OgImage.jpg"


export const metadata: Metadata = {
  title: "Rachit Dhaka",
  description:
    "Rachit Dhaka's personal website showcasing projects, blog posts, and contact information.",
  
   openGraph: {
    title: "Rachit Dhaka Portfolio",
    description: "Rachit Dhaka's personal website showcasing projects, blog posts, and contact information.",
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
    description: "Rachit Dhaka's personal website showcasing projects, blog posts, and contact information.",
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
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
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
        </ThemeProvider>
      </body>
    </html>
  );
}
