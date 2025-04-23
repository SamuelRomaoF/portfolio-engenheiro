import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CareerSection from './components/CareerSection';
import ContactFAQForm from './components/ContactFAQForm';
import ContactHeader from './components/ContactHeader';

export default function Contato() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="flex-grow pt-20">
        <ContactHeader />
        <CareerSection />
        <ContactFAQForm />
        
        {/* Seção de localização será adicionada posteriormente
        <div className="container mx-auto px-4 py-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">NOSSA LOCALIZAÇÃO</h2>
            <div className="h-[450px] w-full bg-gray-200">
              [Mapa será inserido posteriormente]
            </div>
          </div>
        </div>
        */}
      </div>
      
      <Footer />
    </main>
  );
} 