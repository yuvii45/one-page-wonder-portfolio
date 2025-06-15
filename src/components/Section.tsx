
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  title: string;
}

const Section = ({ id, title, children, className, ...props }: SectionProps) => {
  return (
    <section id={id} className={cn('py-20 lg:py-32', className)} {...props}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12 text-foreground">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
