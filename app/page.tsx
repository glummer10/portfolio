import { useEffect } from 'react';
import SobreMin from '@/components/sections/sobre';
import ContactSection from '@/components/sections/contato';
import ProjetosSection from '@/components/sections/projetos';
import HeroSection from '@/components/sections/hero';

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const options = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div  className='min-h-screen'>
        <HeroSection/>
        <SobreMin />
        <ProjetosSection />
        <ContactSection />
    </div>
  )
}