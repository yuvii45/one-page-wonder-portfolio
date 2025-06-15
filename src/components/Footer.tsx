
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background py-8">
      <div className="container mx-auto px-6 text-center text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-primary transition-colors"><Twitter size={24}/></a>
          <a href="#" className="hover:text-primary transition-colors"><Github size={24}/></a>
          <a href="#" className="hover:text-primary transition-colors"><Linkedin size={24}/></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
