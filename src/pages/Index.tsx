
import HomeSection from '@/components/HomeSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import SkillsSection from '@/components/SkillsSection';

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <div className="relative md:flex">
        {/* Left, fixed panel */}
        <aside className="w-full md:w-2/5 md:h-screen md:fixed md:left-0 md:top-0">
          <HomeSection />
        </aside>

        {/* Right, scrollable panel */}
        <div className="w-full md:ml-[40%] md:w-3/5">
          <main className="h-auto md:h-screen md:overflow-y-auto">
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
