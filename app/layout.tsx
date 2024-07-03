import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import {Providers} from "./providers";
import Header from "@components/components/header";
import Footer from "@components/components/Footer";
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
    <body >
      <Providers>
        <Header/>
        <div className="main-content min-h-[100vh]"> {children}</div>
       
        <Footer/>
      </Providers>
    </body>
  </html>
  );
}
// app/layout.tsx
