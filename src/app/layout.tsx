import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manish Chavan | Flutter Developer",
  description: "Passionate Flutter Developer with 2+ years of experience building cross-platform mobile applications for Android & iOS.",
  keywords: ["Flutter Developer", "Mobile App Developer", "Dart", "Android", "iOS", "Firebase"],
  themeColor: "#0a0118",
  openGraph: {
    title: "Manish Chavan | Flutter Developer",
    description: "Passionate Flutter Developer with 2+ years of experience",
    type: "website",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
