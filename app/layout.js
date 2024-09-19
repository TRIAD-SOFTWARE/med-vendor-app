"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Products from "./products/page";
import Footer from "./footer/page";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
        <Navbar/>
        {children}
        </AuthContextProvider>
      </body>
      <Footer/>
    </html>
  );
}
