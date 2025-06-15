
import React from 'react';
import Section from './Section';

const AboutSection = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-2">
          <img 
            src={`https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=800&fit=crop`}
            alt="Jane Doe" 
            className="rounded-lg shadow-lg w-full h-auto object-cover" 
          />
        </div>
        <div className="md:col-span-3 text-lg text-foreground/80 space-y-4">
          <p>
            Hello! I'm Jane, a passionate front-end developer with a love for creating intuitive and dynamic user interfaces. My journey into web development started with a fascination for how beautiful design and powerful technology can come together to create amazing online experiences.
          </p>
          <p>
            Over the years, I've honed my skills in a variety of modern web technologies, with a strong focus on the React ecosystem. I thrive on solving complex problems and am always eager to learn new things to stay at the forefront of the ever-evolving world of web development.
          </p>
          <p>
            When I'm not coding, you can find me exploring new hiking trails, trying out new recipes in the kitchen, or getting lost in a good book.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
