
import React from 'react';
import { cn } from '@/lib/utils';
import { useFadeIn } from '@/hooks/useFadeIn';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  title: string;
}

const Section = ({ id, title, children, className, ...props }: SectionProps) => {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      id={id}
      ref={ref as React.Ref<HTMLElement>}
      className={cn(
        'py-20 lg:py-32 transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold font-heading text-center mb-12 text-foreground">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
