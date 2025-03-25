import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Dados de exemplo para projetos destacados
const featuredProjects = [
  {
    id: 1,
    title: 'Laudo Técnico Estrutural',
    description: 'Avaliação completa da estrutura de um edifício comercial de 15 andares.',
    image: '/images/projeto-estrutural.jpg',
    category: 'Laudo Estrutural'
  },
  {
    id: 2,
    title: 'Perícia Judicial',
    description: 'Perícia técnica para caso de infiltrações em condomínio residencial.',
    image: '/images/pericia-judicial.jpg',
    category: 'Perícia'
  },
  {
    id: 3,
    title: 'Inspeção Predial',
    description: 'Inspeção predial completa em edifício residencial com mais de 30 anos.',
    image: '/images/inspecao-predial.jpg',
    category: 'Inspeção'
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Projetos Destacados
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos principais projetos e laudos técnicos realizados 
            para clientes de diversos segmentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 w-full bg-gray-200">
                {/* Substituir por imagens reais posteriormente */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Imagem do Projeto</p>
                </div>
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                /> */}
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link 
                  href="/servicos" 
                  className="text-green-600 font-medium hover:text-green-700 flex items-center"
                >
                  Ver detalhes
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/servicos" 
            className="inline-block border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-3 px-8 rounded-md transition duration-300 font-medium"
          >
            VER TODOS OS SERVIÇOS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 