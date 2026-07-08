import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { ThemeProvider } from "@/app/components/ThemeProvider";

export const metadata: Metadata = {
  title: "AmarCanvas - Free Bangla Design Templates",
  description: "100% Free Bangla Templates for your Personal & Commercial Projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground font-[Inter,sans-serif] flex flex-col" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
