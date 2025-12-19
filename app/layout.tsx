import type { Metadata } from "next";
import "@/styles/globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Krishala Shrestha | Backend & AI Developer",
  description: "Modern portfolio of a Backend & AI Developer. Full-scholarship Computer Engineering student building real-world systems with thoughtful technology.",
  keywords: ["Backend Developer", "AI Developer", "Computer Engineering", "Portfolio", "Krishala Shrestha"],
  authors: [{ name: "Krishala Shrestha" }],
  openGraph: {
    title: "Krishala Shrestha | Backend & AI Developer",
    description: "Building core systems where logic and architecture matter. Driven by curiosity and creating real impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-navy-900 text-cream overflow-x-hidden">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
