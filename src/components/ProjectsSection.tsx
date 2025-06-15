
import React from 'react';
import Section from './Section';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Autonomous Navigation System',
    description: 'Developed a SLAM-based navigation algorithm for a mobile robot, enabling it to map and navigate unknown environments.',
    tags: ['ROS', 'Python', 'SLAM', 'OpenCV'],
    image: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=400&fit=crop`,
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'ML Model Optimization',
    description: 'An exploration of various optimization techniques to improve the performance and efficiency of deep learning models for image recognition.',
    tags: ['PyTorch', 'TensorFlow', 'Optimization', 'AI'],
    image: `https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=400&fit=crop`,
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Robotic Arm Controller',
    description: 'Designed and built a web-based interface to control a 6-DOF robotic arm in real-time, using inverse kinematics.',
    tags: ['React', 'WebSockets', 'Robotics', 'TypeScript'],
    image: `https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=400&fit=crop`,
    liveUrl: '#',
    repoUrl: '#',
  },
];

const ProjectsSection = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-card overflow-hidden group transition-all duration-300 border hover:shadow-lg hover:border-primary">
            <div className="overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex justify-end space-x-4">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={20} />
                </a>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
