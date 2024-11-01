import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GridPatternLinearGradient } from "@/components/main/GridPatternDemo";
import Navbar from "@/components/main/Navbar";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import { ImagesSliderDemo } from "@/components/sub/ImageSlider";
import Footer from "@/components/main/Footer";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ashitosh's Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020617] overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <GridPatternLinearGradient />   
        <Skills />
        <Projects />
        <p className="z-10 mb-20 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">Certifications</p>
        <ImagesSliderDemo />
        <Footer />
        {/* <StarsCanvas /> */}
      </body>
    </html>
  );
}
