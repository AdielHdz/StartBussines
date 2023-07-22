"use client";
import React from "react";
import { usePathname } from 'next/navigation';
import Navbar from '../Components/Navbar'
import './globals.css'
import Providers from "../Redux/providers";
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const router = usePathname();
 
  return (
    <html lang="en">
        <body className={inter.className}>
        <Providers>
          {
          router !== "/" && router 
          !== "/login" && router
          !== "/register" && <Navbar />
          }
          {children}
        </Providers>
        </body>
      
    </html>
  )
}
