import BenefitsSection from './components/BenefitsSection';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
// import ScrollingText from './components/ScrollingText';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProjectsSection />
      {/* 
        Componente de texto deslizante (comentado) - pode ser reativado quando necessário
        <ScrollingText /> 
      */}
      <BenefitsSection />
      <Footer />
    </main>
  );
}
