
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Instagram } from 'lucide-react';

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#blog', label: 'Blog' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const HomeSection = ({ activeSection }: { activeSection: string }) => {
  return (
    <section id="home" className="h-auto md:h-screen flex flex-col text-center relative p-8 md:py-6 md:px-12 overflow-hidden bg-background">
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Main content area */}
      <div className="flex-grow flex flex-col items-center justify-center relative z-10 py-4">
        <div className="flex justify-center mb-6">
          <div className="w-40 h-40 rounded-lg overflow-hidden border-4 border-primary/20 shadow-xl bg-card">
            <img src="/placeholder.svg" alt="Yuvraj Parekh" className="w-full h-full object-cover" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-primary">
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
      </div>

      {/* Navigation */}
      <nav className="relative z-10 pb-4">
        <ul className="flex flex-col items-start space-y-1 w-fit mx-auto">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "group relative inline-block px-3 py-1.5 text-sm font-heading uppercase tracking-wider text-foreground/80 transition-colors duration-300 hover:text-primary",
                    { "text-primary": isActive }
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 block h-[1px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full",
                      isActive ? 'w-full' : 'w-0'
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Socials & Copyright */}
      <div className="relative z-10 mt-auto pt-4 text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-primary transition-colors"><Github size={24}/></a>
          <a href="#" className="hover:text-primary transition-colors"><Linkedin size={24}/></a>
          <a href="#" className="hover:text-primary transition-colors"><Instagram size={24}/></a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Yuvraj Parekh. All rights reserved.</p>
      </div>


      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-blob -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl opacity-30 animate-blob -z-10" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HomeSection;
