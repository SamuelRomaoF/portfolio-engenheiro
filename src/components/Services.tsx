import React from 'react';

const servicesData = [
  {
    id: 1,
    title: 'Projetos Estruturais',
    description: 'Elaboração de projetos estruturais completos para edificações residenciais, comerciais e industriais, incluindo dimensionamento de elementos em concreto armado, aço e madeira.',
    icon: (
      <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Consultoria Técnica',
    description: 'Assessoria especializada para problemas estruturais, patologias em edificações, análise de conformidade com normas técnicas e otimização de projetos.',
    icon: (
      <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Gerenciamento de Obras',
    description: 'Planejamento, organização e controle de obras civis, garantindo o cumprimento de prazos, qualidade e orçamentos previstos, com acompanhamento técnico especializado.',
    icon: (
      <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Laudos e Perícias',
    description: 'Elaboração de laudos técnicos e perícias para avaliação de estruturas, diagnóstico de patologias, análise de acidentes estruturais e vistorias em edificações.',
    icon: (
      <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Projetos de Fundações',
    description: 'Dimensionamento e detalhamento de fundações rasas e profundas, incluindo estacas, sapatas, radiers e blocos, com base em estudos geotécnicos e cargas estruturais.',
    icon: (
      <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Reformas e Retrofit',
    description: 'Planejamento e execução de reformas estruturais, reforços, adequações e modernização de edificações existentes, com soluções técnicas adequadas e seguras.',
    icon: (
      <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11h2v5m-2 0h4m-2.6-8.6l.6.6m-3-3l3 3m-3 0l3-3m-3 3l-.6.6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofereço soluções completas em engenharia civil, desde o projeto até
            a entrega final, com qualidade, segurança e inovação.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Precisa de um serviço personalizado?
          </h3>
          <a 
            href="#contato" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md shadow-md transition duration-300 font-medium"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services; 