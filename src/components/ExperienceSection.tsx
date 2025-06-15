
import React from 'react';
import Section from './Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Briefcase, Building, Factory } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: 'Leading the development of a large-scale e-commerce platform using React, Next.js, and TypeScript. Responsible for architecture decisions, code quality, and mentoring junior developers.',
    icon: Briefcase,
  },
  {
    role: 'Frontend Developer',
    company: 'Innovate Co.',
    period: '2020 - 2022',
    description: 'Developed and maintained several client-facing websites and applications. Worked closely with UI/UX designers to translate mockups into pixel-perfect, responsive web pages.',
    icon: Building,
  },
  {
    role: 'Junior Web Developer',
    company: 'WebCrafters',
    period: '2019 - 2020',
    description: 'Assisted in the development of WordPress sites and learned the fundamentals of HTML, CSS, and JavaScript in a professional environment.',
    icon: Factory,
  },
];

const ExperienceSection = () => {
  return (
    <Section id="experience" title="My Experience">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" aria-hidden="true"></div>
        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div key={index} className="relative flex items-center odd:flex-row-reverse">
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                <div className="w-[calc(50%-2rem)]">
                  <Card className="bg-secondary border-border hover:border-primary transition-colors duration-300">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <Icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <CardTitle>{exp.role}</CardTitle>
                          <CardDescription>{exp.company} | {exp.period}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
