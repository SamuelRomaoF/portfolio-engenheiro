"use client";
import Image from "next/image";
import ZangaoImg from './icons/zangao.png';

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Coluna da esquerda */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800 mb-6">
              Por Que Escolher a Rekai Arquitetura e Engenharia?
            </h2>
            
            <p className="text-lg text-gray-600 mb-10">
              Na Rekai Arquitetura e Engenharia, combinamos conhecimento técnico especializado 
              com tecnologia de ponta para oferecer soluções completas em arquitetura, urbanismo 
              e engenharia civil. Seja para laudos técnicos, projetos arquitetônicos, gestão de 
              obras ou regularizações, nosso compromisso é entregar excelência, precisão e 
              inovação em cada projeto. Conte com uma equipe dedicada e equipamentos modernos 
              para garantir a segurança e a qualidade que você merece.
            </p>
            
            <div className="flex items-center">
              <div className="w-16 h-16 flex-shrink-0 mr-4 bg-gray-100 rounded-full flex items-center justify-center">
                <div className="text-gray-900 font-bold text-sm">
                  ABNT
                  <br />
                  NBR
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Em conformidade com as normas técnicas regulamentadas pela NBR/ABNT.
              </p>
            </div>
          </div>
          
          {/* Coluna da direita */}
          <div className="md:w-1/2 space-y-10">
            {/* Benefício 1 */}
            <div className="flex items-start">
              <div className="w-14 h-14 flex-shrink-0 mr-5">
                <Image 
                  src={ZangaoImg} 
                  alt="Drone" 
                  width={56} 
                  height={56}
                  className="w-14 h-14"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Tecnologia de Ponta</h3>
                <p className="text-gray-600">
                  Utilizamos equipamentos e softwares modernos, como drones e ferramentas BIM, 
                  para garantir análises precisas e projetos detalhados.
                </p>
              </div>
            </div>
            
            {/* Benefício 2 */}
            <div className="flex items-start">
              <div className="w-14 h-14 flex-shrink-0 mr-5">
                <div className="w-14 h-14 text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                    <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.175 7.616.514a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Experiência e Conhecimento Técnico</h3>
                <p className="text-gray-600">
                  Nossa equipe de engenheiros e arquitetos possui vasta experiência em 
                  projetos residenciais, comerciais e industriais, garantindo um olhar 
                  analítico e profissional em cada desafio.
                </p>
              </div>
            </div>
            
            {/* Benefício 3 */}
            <div className="flex items-start">
              <div className="w-14 h-14 flex-shrink-0 mr-5">
                <div className="w-14 h-14 text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Compromisso com a Qualidade</h3>
                <p className="text-gray-600">
                  Nos preocupamos com cada detalhe, desde o planejamento até a entrega, 
                  para garantir que você receba um serviço completo e de alta qualidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 