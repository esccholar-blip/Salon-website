import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Looks Hair Professional Salon | Premium Hair & Beauty Services",
  description:
    "Discover professional hair styling, haircuts, hair coloring, hair spa and beauty services at Looks Hair Professional Salon. Book your appointment on WhatsApp.",
  keywords: [
    "Looks Hair Professional Salon",
    "hair salon",
    "haircut",
    "hair styling",
    "hair spa",
    "hair coloring",
    "beauty salon",
  ],
  openGraph: {
    title: "Looks Hair Professional Salon",
    description: "Your Style. Your Identity. Our Expertise.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

