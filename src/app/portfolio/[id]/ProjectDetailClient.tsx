'use client';

import { useRouter } from 'next/navigation';
import Footer from '../../components/Footer';
import ProjectGallery from '../../components/portfolio/ProjectGallery';
import ProjectInfo from '../../components/portfolio/ProjectInfo';
import RelatedProjects from '../../components/portfolio/RelatedProjects';
import { ServiceDetail } from '../../components/portfolio/types';

interface Project {
  id: string;
  nome: string;
  local: string;
  tags?: string[];
  location?: string;
  projectDate?: string;
  completionDate?: string;
  siteArea?: string;
  builtArea?: string;
  description1?: string;
  description2?: string;
  gallery?: string[];
  serviceDetails?: ServiceDetail[];
  subtitulo?: string;
}

interface ProjectDetailClientProps {
  project: Project;
  tagNames: Record<string, string>;
}

export default function ProjectDetailClient({ project, tagNames }: ProjectDetailClientProps) {
  const router = useRouter();

  // Função para obter o nome da tag a partir do mapeamento
  const getTagName = (tagId: string): string => {
    return tagNames[tagId] || tagId;
  };

  // Re-introducing simplified CTA logic
  const getCtaContent = () => {
    // Define a mensagem personalizada usando o nome do projeto
    const personalizedWhatsappText = `Olá, vi o projeto '${project.nome}' em seu site e gostaria de mais informações sobre os serviços relacionados.`;

    // Always return the specific title and the NEW description
    return {
      title: "Precisa de Soluções Técnicas? Fale Conosco!",
      description: "Precisa deste serviço para um processo em andamento? Fale com nossos especialistas agora mesmo!",
      // Using a relevant WhatsApp text
      whatsappText: personalizedWhatsappText // <-- Usa a mensagem personalizada
    };
  };
  const ctaContent = getCtaContent();

  return (
    <main className="min-h-screen bg-white">
      {/* Botão Voltar */}
      <div className="py-6 px-6 border-b border-gray-200">
        <button 
          onClick={() => router.push('/portfolio')}
          className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Voltar para projetos
        </button>
      </div>
      
      <h1 className="text-3xl font-bold text-center mt-8 mb-2">{project.nome}</h1>
      <h2 className="text-xl text-gray-600 text-center mb-4">{project.local}</h2>
      
      {/* Tags do Projeto */}
      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-8 px-4">
          {project.tags.map((tag: string, index: number) => (
            <span 
              key={index} 
              className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
            >
              {getTagName(tag)}
            </span>
          ))}
        </div>
      )}
      
      {/* Informações do Projeto - Passando as props necessárias */}
      <ProjectInfo 
        serviceDetails={project.serviceDetails}
        subtitulo={project.subtitulo}
      />
      
      {/* Galeria do Projeto */}
      {project.gallery && project.gallery.length > 0 && (
        <ProjectGallery images={project.gallery} />
      )}
      
      {/* RESTORING ORIGINAL CTA STRUCTURE with CORRECTED description */}
      <div className="py-12 bg-green-50"> 
        <div className="container mx-auto px-4 text-center">
          {/* Title remains */}
          <h2 className="text-2xl font-bold text-primary mb-4">{ctaContent.title}</h2> 
          {/* NEW Description text goes here */}
          <p className="text-gray-600 mb-6">{ctaContent.description}</p> 
          {/* Button remains */}
          <a 
            href={`https://wa.me/5511976428037?text=${encodeURIComponent(ctaContent.whatsappText)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent-hover transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.967 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Conversar no WhatsApp
          </a>
        </div>
      </div>
      
      {/* Projetos Relacionados */}
      <RelatedProjects
        currentProjectId={project.id}
        tags={project.tags || []}
      />
      
      <Footer />
    </main>
  );
} 