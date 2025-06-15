
import React from 'react';
import Section from './Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Optimizing Robot Path Planning with AI',
    description: 'A deep dive into how machine learning algorithms can revolutionize pathfinding for autonomous systems, reducing computation time and improving efficiency.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    link: '#',
  },
  {
    title: 'The Future of Human-Robot Collaboration',
    description: 'Exploring the synergy between humans and robots in the workplace. How can we design systems that are both safe and intuitive for collaboration?',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
    link: '#',
  },
  {
    title: 'A Beginner\'s Guide to Sensor Fusion',
    description: 'Breaking down the complex topic of sensor fusion. Learn how combining data from multiple sensors leads to more robust and reliable robotic perception.',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    link: '#',
  },
];

const BlogSection = () => {
  return (
    <Section id="blog" title="From My Blog">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="overflow-hidden bg-secondary border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-muted-foreground mb-4 flex-grow">{post.description}</p>
              <a href={post.link} className="mt-auto self-start">
                <Button variant="link" className="p-0 h-auto text-primary">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default BlogSection;
