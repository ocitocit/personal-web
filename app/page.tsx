import About from '@/section/About';
import Contact from '@/section/Contact';
import Experience from '@/section/Experience';
import Hero from '@/section/Hero';
import Work from '@/section/Work';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
    </main>
  );
}
