import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import MyProfile from "./components/MyProfile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rahul's Blog",
  description: "Created by Rahul",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-slate-800`}>
        <Navbar/>
        <MyProfile/>
        {children}
        </body>
    </html>
  );
}
