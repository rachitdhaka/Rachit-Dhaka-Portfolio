import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/Providers/Theme-providers";
import { ThemeShortcutListener } from "@/components/ThemeShortcutListener";
export const metadata: Metadata = {
  title: "Rachit Dhaka",
  description:
    "Rachit Dhaka's personal website showcasing projects, blog posts, and contact information.",
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
