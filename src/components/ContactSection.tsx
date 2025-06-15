
import React from 'react';
import Section from './Section';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto">
        <p className="text-center text-base text-muted-foreground mb-8">
          Have a project in mind or just want to say hello? Drop me a line!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea placeholder="Your Message" required rows={5} />
          <Button type="submit" size="lg" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </Section>
  );
};

export default ContactSection;
