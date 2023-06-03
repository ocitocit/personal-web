'use client';

import SocialIcon from '@/components/SocialIcon';
import Navbar from '@/section/Navbar';
import { useState } from 'react';
import { Fira_Code, Raleway } from 'next/font/google';
import '../scss/index.scss';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--raleway'
});

const firacode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--firacode'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>ocitocit | A passionate frontend developer from Indonesia</title>
        <meta name="description" content="A passionate frontend developer from Indonesia" />
        <meta
          name="google-site-verification"
          content="JZ25rAK1bmrTlhyIZdIylQxObcro3f65HbLGBJiY_Hc"
        />
      </head>

      <body className={`app ${raleway.variable} ${firacode.variable}`}>
        <>
          <Navbar />
          {children}
          <SocialIcon />
          <ScrollToTopButton />
        </>
      </body>
    </html>
  );
}
