
import Header from '@/components/Header';
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
    <div className="text-foreground">
      <Header />
      <main>
        <HomeSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <BlogSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
