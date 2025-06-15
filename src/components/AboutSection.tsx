
import React from 'react';
import Section from './Section';

const AboutSection = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-5 gap-10 items-center">
        <div className="md:col-span-2">
          <img 
            src={`https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=800&fit=crop`}
            alt="Robotics and AI" 
            className="rounded-lg shadow-lg w-full h-auto object-cover" 
          />
        </div>
        <div className="md:col-span-3 text-lg text-foreground/80 space-y-4">
          <p>
            Hello! I'm Yuvraj, a robotics engineer and student passionate about creating intelligent systems that interact with the physical world. My journey is driven by a fascination with the intersection of hardware, software, and artificial intelligence.
          </p>
          <p>
            I have a strong foundation in robotics principles, control systems, and machine learning. I enjoy tackling complex optimization problems and am constantly exploring new algorithms and techniques in AI to build more efficient and autonomous solutions.
          </p>
          <p>
            When I'm not in the lab, you can find me tinkering with personal robotics projects, contributing to open-source AI libraries, or exploring the latest research in the field.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
