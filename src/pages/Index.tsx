
import React, { useState } from 'react';
import HomeSection from '@/components/HomeSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import SkillsSection from '@/components/SkillsSection';

const sectionIds = ['experience', 'projects', 'skills', 'blog', 'about', 'contact'];

const Index = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = (event: React.UIEvent<HTMLElement>) => {
    const scrollPosition = event.currentTarget.scrollTop;
    let currentSectionId = '';
    
    // Use an offset to trigger the active state when the section is near the top of the viewport
    const offset = event.currentTarget.offsetHeight * 0.4;

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element && element.offsetTop <= scrollPosition + offset) {
        currentSectionId = id;
      }
    }
    
    setActiveSection(currentSectionId);
  };

  return (
    <div className="bg-background text-foreground">
      <div className="relative md:flex">
        {/* Left, fixed panel */}
        <aside className="w-full md:w-2/5 md:h-screen md:fixed md:left-0 md:top-0">
          <HomeSection activeSection={activeSection} />
        </aside>

        {/* Right, scrollable panel */}
        <div className="w-full md:ml-[40%] md:w-3/5">
          <main className="h-auto md:h-screen md:overflow-y-auto" onScroll={handleScroll}>
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <BlogSection />
            <AboutSection />
            <ContactSection />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
