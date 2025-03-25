import React from 'react';
import Link from 'next/link';

// Dados de exemplo para serviços principais
const keyServices = [
  {
    id: 1,
    title: 'Laudos Técnicos',
    description: 'Avaliação estrutural, laudos cautelares de vizinhança e laudos judiciais para diversos fins.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Inspeção Predial',
    description: 'Avaliação das condições técnicas da edificação, identificação de anomalias e falhas de manutenção.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Perícias Judiciais',
    description: 'Análise técnica especializada para processos judiciais, fornecendo pareceres fundamentados.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Consultoria Técnica',
    description: 'Orientação especializada para problemas estruturais, patologias construtivas e manutenção preventiva.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  }
];

const KeyServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Oferecemos um conjunto completo de serviços de engenharia civil para 
            atender às necessidades específicas de cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyServices.map((service) => (
            <div 
              key={service.id} 
              className="bg-white border border-gray-100 rounded-lg shadow-sm p-8 transition-all duration-300 hover:shadow-lg hover:border-green-100"
            >
              <div className="text-green-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                href="/servicos" 
                className="text-green-600 font-medium hover:text-green-700 flex items-center"
              >
                Saiba mais
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/servicos" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-md shadow-md transition duration-300 font-medium"
          >
            VER TODOS OS SERVIÇOS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KeyServices; 