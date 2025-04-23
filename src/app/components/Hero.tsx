import Link from 'next/link';

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.im.ge/2025/01/03/zzqr4S.gestao-projetos-engenharia.jpeg" 
          alt="Fundo de Engenharia" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="absolute inset-0 bg-gray-100 opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          {/* Conteúdo textual centralizado */}
          <div className="w-full mb-10 md:mb-0 text-center">
            <h2 className="text-yellow-600 font-medium mb-4 font-sans">
              Arquitetura e Urbanismo
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 font-serif">
              Serviços Técnicos em<br />
              Arquitetura, Urbanismo e<br />
              Engenharia Civil
            </h1>
            <p className="text-gray-700 text-lg mb-8 mx-auto font-sans">
              Somos a Rekai Arquitetura e Engenharia, uma empresa dedicada a garantir o bem-estar 
              e a segurança dos nossos clientes. Nosso compromisso é entregar excelência em cada 
              projeto, oferecendo soluções inovadoras, eficientes e alinhadas com as melhores 
              práticas do setor.
            </p>
            <Link 
              href="/contato" 
              className="inline-block bg-primary hover:bg-accent-hover text-white py-3 px-8 rounded-md shadow-md transition duration-300 font-medium"
            >
              FALE CONOSCO
            </Link>
          </div>
          
          {/* Imagem do engenheiro removida */}
        </div>
      </div>
    </section>
  );
};

export default Hero; 