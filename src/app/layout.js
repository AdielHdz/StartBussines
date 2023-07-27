"use client";
import React from "react";
import { usePathname } from 'next/navigation';
import Navbar from '../Components/Navbar/Navbar'
import './globals.css'
import Providers from "../Redux/providers";
import { Sora } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

const sora = Sora({ subsets: ["latin"] });

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  const router = usePathname();

  return (
    <html lang="en">
      <body className={sora.className}>
        <Providers>
          {router !== "/" && router !== "/logIn" && router !== "/register" && (
            <Navbar />
          )}
          {children}
        </Providers>
      </body>
    </html>
  );
}
