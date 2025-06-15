
import React from 'react';
import Section from './Section';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A cutting-edge data visualization dashboard built with React and D3.js for a fintech client.',
    tags: ['React', 'TypeScript', 'D3.js', 'SCSS'],
    image: `https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=400&fit=crop`,
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'E-commerce Store',
    description: 'A full-featured online store with a custom CMS, payment gateway integration, and user accounts.',
    tags: ['Next.js', 'Stripe', 'GraphQL', 'Tailwind CSS'],
    image: `https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=400&fit=crop`,
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'This very portfolio website, built to be fast, responsive, and showcase my skills.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    image: `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=600&h=400&fit=crop`,
    liveUrl: '#',
    repoUrl: '#',
  },
];

const ProjectsSection = () => {
  return (
    <Section id="projects" title="Featured Projects" className="bg-secondary">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-background overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
            <div className="overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold bg-primary/20 text-primary px-2 py-1 rounded-full">{tag}</span>
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
