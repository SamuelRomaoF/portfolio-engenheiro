import React, { useState } from 'react';
import Image from 'next/image';

// Dados de exemplo para os projetos
const projectsData = [
  {
    id: 1,
    title: 'Edifício Residencial Aurora',
    category: 'Residencial',
    description: 'Projeto estrutural para edifício residencial de 15 andares com 60 apartamentos. Inclui cálculos estruturais, dimensionamento de vigas, pilares e lajes.',
    image: '/placeholder.jpg',
    yearCompleted: '2022',
  },
  {
    id: 2,
    title: 'Centro Empresarial Horizonte',
    category: 'Comercial',
    description: 'Projeto e supervisão da construção de centro empresarial com 5 torres interligadas e estacionamento subterrâneo para 200 veículos.',
    image: '/placeholder.jpg',
    yearCompleted: '2021',
  },
  {
    id: 3,
    title: 'Complexo Industrial Techmetal',
    category: 'Industrial',
    description: 'Projeto estrutural para galpão industrial com mezanino, doca de carga e área administrativa. Área total construída de 12.000m².',
    image: '/placeholder.jpg',
    yearCompleted: '2020',
  },
  {
    id: 4,
    title: 'Condomínio Parque das Palmeiras',
    category: 'Residencial',
    description: 'Conjunto residencial com 12 casas de alto padrão, incluindo projeto estrutural, hidráulico e de fundações.',
    image: '/placeholder.jpg',
    yearCompleted: '2019',
  },
  {
    id: 5,
    title: 'Hospital Regional Bem Estar',
    category: 'Institucional',
    description: 'Projeto estrutural para hospital com 5 pavimentos, incluindo estruturas especiais para salas de cirurgia e áreas de equipamentos pesados.',
    image: '/placeholder.jpg',
    yearCompleted: '2021',
  },
  {
    id: 6,
    title: 'Ponte Rodoviária Rio Verde',
    category: 'Infraestrutura',
    description: 'Projeto estrutural para ponte de concreto protendido com extensão de 120m, incluindo análise de esforços dinâmicos e dimensionamento de fundações.',
    image: '/placeholder.jpg',
    yearCompleted: '2018',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Residencial', 'Comercial', 'Industrial', 'Institucional', 'Infraestrutura'];

  const filteredProjects = filter === 'Todos' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projetos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Projetos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos principais projetos desenvolvidos ao longo da minha carreira
            em diversas áreas da engenharia civil.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        {/* Filtros de categorias */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition duration-300 ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 w-full">
                {/* Substitua com imagens reais */}
                <div className="bg-gray-300 h-full w-full flex items-center justify-center">
                  <p className="text-gray-600">Imagem do Projeto</p>
                  {/* Descomente quando tiver imagens reais 
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                    {project.category}
                  </span>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full ml-2">
                    {project.yearCompleted}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <a 
                  href={`#project-${project.id}`} 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                >
                  Ver detalhes
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 