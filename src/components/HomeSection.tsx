
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center bg-grid-white/[0.05] relative">
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" style={{ animation: 'fade-in 0.5s ease-out forwards' }}>
          Jane Doe
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto" style={{ animation: 'fade-in 0.5s ease-out 0.2s forwards', opacity: 0 }}>
          Creative Frontend Developer | Building Beautiful & Usable Web Experiences
        </p>
        <div className="flex justify-center gap-4" style={{ animation: 'fade-in 0.5s ease-out 0.4s forwards', opacity: 0 }}>
          <a href="#projects">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View My Work
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Get In Touch
            </Button>
          </a>
        </div>
      </div>
       <a href="#experience" className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-foreground/50" />
        </a>
    </section>
  );
};

export default HomeSection;
