import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroSection from './components/HeroSection';
import QSMSSection from './components/QSMSSection';
import StatsSection from './components/StatsSection';
import TeamSection from './components/TeamSection';

export default function QuemSomos() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <TeamSection />
      <QSMSSection />
      <Footer />
    </main>
  );
} 