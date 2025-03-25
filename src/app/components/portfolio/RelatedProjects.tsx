'use client';

import { useRouter } from 'next/navigation';
import { projectsData } from './projectsData';

interface RelatedProjectsProps {
  currentProjectId: string;
  tags: string[];
}

export default function RelatedProjects({ currentProjectId, tags }: RelatedProjectsProps) {
  const router = useRouter();
  
  // Filtrar projetos que compartilham pelo menos uma tag com o projeto atual
  // e não são o próprio projeto atual
  const relatedProjects = projectsData
    .filter(project => 
      project.id !== currentProjectId && 
      project.tags.some(tag => tags.includes(tag))
    )
    .slice(0, 3); // Limitar a 3 projetos

  if (relatedProjects.length === 0) {
    return null; // Não mostrar a seção se não houver projetos relacionados
  }

  const handleCardClick = (id: string) => {
    router.push(`/portfolio/${id}`);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-blue-500 text-lg font-medium mb-8">PROJETOS RELACIONADOS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProjects.map((project) => (
            <div 
              key={project.id}
              className="cursor-pointer bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              onClick={() => handleCardClick(project.id)}
            >
              <div className="aspect-[4/3] relative">
                <img 
                  src={project.mainImage}
                  alt={project.nome}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-gray-800 font-semibold">{project.nome}</h3>
                <p className="text-gray-600 text-sm mt-1">{project.local}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 