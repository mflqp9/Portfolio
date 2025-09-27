import type { Metadata } from "next";
import { Geist, Geist_Mono,Roboto,Work_Sans } from "next/font/google";
import "./globals.css"
import Footer from "@/components/footer/footer";
import  Navbar  from "@/components/navbar/navbar";
import { choosenTheme } from "@/components/util/theme";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 const roboto =Roboto({
  subsets:["latin"],
  variable:"--font-roboto"
});
 const worksans =Work_Sans({
  subsets:["latin"],
  variable:"--font-work-sans"
});

export const metadata: Metadata = {
  title:{
    default:"My Portfolio | Muhammad Faisal",
    template: "%s | Muhammad Faisal"
  },
  description: "Experienced in VB.NET and React.js, with additional exposure to Flutter. Passionate about solving real-world problems and committed to continuous learning and improvement in every project",
keywords:['MERN Stack','MERN','Mongodb','Expressjs','Rectjs','Nodejs','Zustand','ReactQuery','TanStack'],
icons:{icon:"./favicon.svg"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${roboto.variable} ${worksans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar theme={choosenTheme}/>
        {children}
        <Footer theme={choosenTheme}/>
      </body>
    </html>
  );
}
