import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product Lamp",
  description: "Turning Great ideas Intro Meaningfull Digital Ecoerience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
