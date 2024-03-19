import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Alpha-Links",
    template: "%s | Alpha-Links",
  },
  description:
    "Share your links, social profiles, contact info and more on one page.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-blue-950">
      <body className={inter.className}>
        <div className="bg-blue-950 text-white max-h-max">{children}</div>
      </body>
    </html>
  );
}
