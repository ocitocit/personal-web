import SocialIcon from '@/components/SocialIcon';
import Navbar from '@/section/Navbar';
import { Fira_Code, Raleway } from 'next/font/google';
import '../scss/index.scss';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export const metadata = {
  title: 'ocitocit | A passionate frontend developer from Indonesia',
  description: 'A passionate frontend developer from Indonesia',
  verification: {
    google: 'JZ25rAK1bmrTlhyIZdIylQxObcro3f65HbLGBJiY_Hc'
  }
};
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
