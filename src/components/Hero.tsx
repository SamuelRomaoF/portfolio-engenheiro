import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-32 md:pb-24 bg-gray-100 overflow-hidden">
      {/* Imagem de fundo (planta/desenho de engenharia) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[url('/images/blueprint-background.jpg')] bg-cover bg-center" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Conteúdo textual */}
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <h2 className="text-yellow-600 font-medium mb-4">
              Perícia de Engenharia
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-700 mb-6">
              Laudos<br />
              Técnicos de<br />
              Engenharia
            </h1>
            <p className="text-gray-700 text-lg mb-8 max-w-xl">
              Se você está procurando por Laudos de Avaliação Estrutural, Laudo Cautelar
              de Vizinhança, Inspeção Predial, Laudo de Patologias Pós Obra, Laudo de
              Fissuras e Trincas, Projetos de Estruturas Metálicas e de Concreto, Assistência
              Técnica Judicial ou outros tipos de Laudo de Engenharia, nós podemos te
              ajudar! Fale conosco agora mesmo.
            </p>
            <a 
              href="#contato" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-md shadow-md transition duration-300 font-medium"
            >
              ENTRE EM CONTATO
            </a>
          </div>
          
          {/* Imagem do engenheiro sobreposta */}
          <div className="md:w-1/2 relative">
            <div className="relative h-96 md:h-[550px] w-full">
              {/* Substituir com imagem real do engenheiro quando disponível */}
              <div className="h-full w-full">
                <div className="bg-gray-300 h-full w-full flex items-center justify-center absolute opacity-0">
                  <p className="text-gray-600">Imagem do Engenheiro</p>
                </div>
                <div className="absolute bottom-0 right-0 w-full h-full">
                  <Image
                    src="/images/engineer-yellow-helmet.png"
                    alt="Engenheiro Civil com capacete amarelo"
                    fill
                    className="object-contain object-bottom"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 