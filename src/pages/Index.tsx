
import Header from '@/components/Header';
import HomeSection from '@/components/HomeSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';

const Index = () => {
  return (
    <div className="text-foreground bg-fancy-pattern">
      <Header />
      <main>
        <HomeSection />
        <ExperienceSection />
        <ProjectsSection />
        <BlogSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
