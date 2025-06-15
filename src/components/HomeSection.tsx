
import React from 'react';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 p-4">
        <div className="flex justify-center mb-6">
          <div className="w-40 h-40 rounded-lg overflow-hidden border-4 border-primary/20 shadow-xl bg-card">
            <img src="/placeholder.svg" alt="Yuvraj Parekh" className="w-full h-full object-cover" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-primary" style={{ animation: 'fade-in 0.5s ease-out forwards' }}>
          Yuvraj Parekh
        </h1>
        <TypeAnimation
          sequence={[
            'A Robotics Engineer.',
            2000,
            'I build intelligent systems.',
            2000,
            'I solve complex optimization problems.',
            2000,
            'Specializing in AI and Machine Learning.',
            2000,
          ]}
          wrapper="p"
          speed={50}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto min-h-16"
          repeat={Infinity}
        />
        <div className="flex justify-center gap-4" style={{ animation: 'fade-in 0.5s ease-out 0.4s forwards', opacity: 0 }}>
          <a href="#projects">
            <Button size="lg">
              View My Work
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline">
              Get In Touch
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
