'use client';

import SocialIcon from '@/components/SocialIcon';
import Navbar from '@/section/Navbar';
import { useState } from 'react';
import { Fira_Code, Raleway } from 'next/font/google';
import '../scss/index.scss';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Loader from '@/components/Loader';

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
  // animation loading intro page
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const loaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

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
        {showContent && (
          <>
            <Navbar />
            {children}
            <SocialIcon />
            <ScrollToTopButton />
          </>
        )}
        <Loader isLoading={isLoading} const setIsLoading={loaderLoaded} />
      </body>
    </html>
  );
}
