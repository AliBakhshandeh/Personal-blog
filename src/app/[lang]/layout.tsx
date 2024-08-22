import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ali Bakhshandeh Ardestani - Frontend Engineer",
  description:
    "Portfolio of Ali Bakhshandeh Ardestani, an experienced Frontend Engineer specializing in React, Redux, and modern web technologies.",
  authors: { name: "Ali Bakhshandeh Ardestani" },
  keywords:
    "Frontend Engineer, React, Redux, JavaScript, Portfolio, Web Development, Tehran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
