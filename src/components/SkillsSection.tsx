
import React from 'react';
import Section from './Section';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus/00599C' },
  { name: 'ROS', icon: 'https://cdn.simpleicons.org/ros/22314E' },
  { name: 'PyTorch', icon: 'https://cdn.simpleicons.org/pytorch/EE4C2C' },
  { name: 'TensorFlow', icon: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'SQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
];

const SkillsSection = () => {
  return (
    <Section id="skills" title="My Skills">
      <TooltipProvider delayDuration={100}>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {skills.map((skill) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <div
                  className="group w-28 h-[129px] flex items-center justify-center cursor-pointer"
                >
                  <div className="clip-hexagon w-full h-full bg-card group-hover:bg-primary/10 border border-border/80 group-hover:border-primary transition-all duration-300 flex items-center justify-center">
                    <img src={skill.icon} alt={skill.name} className="h-9 w-9 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </Section>
  );
};

export default SkillsSection;
