import React from 'react';
import './globals.css';
import Providers from '../Redux/providers';
import { Sora } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarRenderer } from '../utils/NavbarRenderer';
import AuthProvider from '../features/AuthProvider';
import Footer from '../Components/Footer/Footer';

const sora = Sora({ subsets: ['latin'] });

export const metadata = {
  title: 'Deal Up!',
  description: 'Connecting enterpreneurs with investors',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={sora.className}>
        <Providers>
          <AuthProvider>
            <NavbarRenderer />
            {children}
          </AuthProvider>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
