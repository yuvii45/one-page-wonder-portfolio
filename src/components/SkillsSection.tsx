
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
        <div className="relative max-w-6xl mx-auto">
          {/* Central glow effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          {/* Skills constellation */}
          <div className="skill-constellation relative min-h-[600px] flex items-center justify-center">
            {skills.map((skill, index) => {
              // Create a more balanced circular constellation pattern
              const angle = (index * 360) / skills.length;
              // Use different radii for inner and outer rings
              const radius = index < 6 ? 120 : 200;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <Tooltip key={skill.name}>
                  <TooltipTrigger asChild>
                    <div
                      className="absolute group cursor-pointer animate-fade-in"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div className="relative">
                        {/* Glowing background */}
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
                        
                        {/* Main skill bubble */}
                        <div className="relative w-16 h-16 bg-card/80 backdrop-blur-sm border border-border/30 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-primary/25 group-hover:shadow-xl group-hover:scale-110 group-hover:bg-card transition-all duration-300">
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" 
                          />
                        </div>
                        
                        {/* Connecting lines to center (subtle) */}
                        <div 
                          className="absolute w-px bg-gradient-to-r from-transparent via-border/20 to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                          style={{
                            height: `${radius}px`,
                            left: '50%',
                            top: '50%',
                            transformOrigin: 'top',
                            transform: `rotate(${angle + 180}deg)`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-card/90 backdrop-blur-sm border-border/50">
                    <p className="font-medium">{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </TooltipProvider>
    </Section>
  );
};

export default SkillsSection;
