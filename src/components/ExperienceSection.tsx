
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
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" aria-hidden="true"></div>
        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div key={index} className="relative flex items-center odd:flex-row-reverse group">
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                <div className="w-[calc(50%-2rem)]">
                  <Card className="bg-secondary border-border group-hover:border-primary transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <Icon className="w-12 h-12 text-primary flex-shrink-0 mt-1" />
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

