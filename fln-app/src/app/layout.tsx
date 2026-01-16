import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fontHeading = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const fontBody = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Female Lawyers Network | Empowering Women in Law",
  description: "The Female Lawyers Network (FLN) is a dedicated organization promoting gender equality, professional development, and leadership for female lawyers in Uganda. Join us in our mission to empower women in law.",
  keywords: ["Female Lawyers Network", "FLN", "Uganda Lawyers", "Women in Law", "Legal Aid", "Gender Equality", "Women Empowerment"],
  openGraph: {
    title: "Female Lawyers Network | Empowering Women in Law",
    description: "Promoting gender equality and professional development for female lawyers.",
    type: "website",
  },
};

import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontHeading.variable} ${fontBody.variable} antialiased font-body`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
