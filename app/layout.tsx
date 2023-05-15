import { inter } from '../util/fonts';
import '../scss/index.scss';

export const metadata = {
  title: 'ocitocit | A passionate frontend developer from Indonesia',
  description: 'A passionate frontend developer from Indonesia'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>{children}</>
      </body>
    </html>
  );
}
