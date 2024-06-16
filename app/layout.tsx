import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import {Providers} from "./providers";
import Header from "@components/components/header";
export const metadata: Metadata = {
  title: "Travophila",
  description: "Tours | Himalayan Adventures | Treks | Camping & things to do | Travophila",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='light'>
    <body>
      <Providers>
        <Header/>
        {children}
      </Providers>
    </body>
  </html>
  );
}
// app/layout.tsx
