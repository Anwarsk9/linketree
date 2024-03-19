import type { Metadata } from "next";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "../globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alpha-links",
  description:
    "Share your links, social profiles, contact info and more on one page.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen flex flex-col"}>
        <Header />
        <main className="grow">
          <div className="max-w-4xl mx-auto p-8">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
