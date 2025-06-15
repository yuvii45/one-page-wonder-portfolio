
import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background py-8">
      <div className="container mx-auto px-6 text-left text-muted-foreground">
        <div className="flex justify-start space-x-6 mb-4">
          <a href="#" className="hover:text-primary transition-colors"><Github size={24}/></a>
          <a href="#" className="hover:text-primary transition-colors"><Linkedin size={24}/></a>
          <a href="#" className="hover:text-primary transition-colors"><Instagram size={24}/></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Yuvraj Parekh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

