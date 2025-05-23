import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Portfolio | Where Code Meets Creativity",
  description:
    "A showcase of my journey as a developer and teacher, featuring projects, teaching experiences, and creative works.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} min-h-screen flex flex-col`}
        style={{ backgroundColor: "#FFF7ED", color: "#1E1E1E" }}
      >
        <Navigation />
        <main style={{ paddingTop: "4rem" }} className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
