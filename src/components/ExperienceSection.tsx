
import React from 'react';
import Section from './Section';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Brain, Cpu, Wrench } from 'lucide-react';

const experiences = [
  {
    role: 'Lead Robotics Engineer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: 'Leading the development of autonomous systems, focusing on perception and control algorithms. Responsible for system architecture, performance optimization, and mentoring a team of engineers.',
    icon: Brain,
  },
  {
    role: 'Robotics Software Engineer',
    company: 'Innovate Co.',
    period: '2020 - 2022',
    description: 'Developed and maintained software for robotic platforms. Worked closely with hardware teams to integrate sensors and actuators, and implemented path planning algorithms.',
    icon: Cpu,
  },
  {
    role: 'Engineering Intern',
    company: 'Automation Labs',
    period: '2019 - 2020',
    description: 'Assisted in the design and testing of robotic components. Gained hands-on experience with CAD software, sensor calibration, and data analysis.',
    icon: Wrench,
  },
];

const ExperienceSection = () => {
  return (
    <Section id="experience" title="My Experience">
      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <Card key={index} className="transition-colors duration-300 hover:border-primary/50 bg-card/70 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary mt-1">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                       <CardTitle className="text-lg font-semibold">{exp.role}</CardTitle>
                       <CardDescription className="text-xs font-mono tracking-wider">{exp.period}</CardDescription>
                    </div>
                    <CardDescription>{exp.company}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pl-16 pb-4 pt-0">
                <p className="text-muted-foreground text-sm">{exp.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default ExperienceSection;
