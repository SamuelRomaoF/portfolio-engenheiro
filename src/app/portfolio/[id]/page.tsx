import { redirect } from 'next/navigation';
import { projectsData, SERVICOS, TAGS } from '../../components/portfolio/projectsData';
import ProjectDetailClient from './ProjectDetailClient';

// Define o tipo dos parâmetros
interface PageParams {
  id: string;
}

// Mapeamento de tags para nomes amigáveis (movido para uma constante)
const TAG_NAMES: Record<string, string> = {
  [TAGS.ADVOGADOS]: 'Advogados e Escritórios',
  [TAGS.PROPRIETARIOS]: 'Proprietários de Imóveis',
  [TAGS.EMPRESAS]: 'Empresas e Incorporadoras',
  [TAGS.RURAIS]: 'Propriedades Rurais',
  [TAGS.ORGAOS_PUBLICOS]: 'Órgãos Públicos',
  [SERVICOS.LAUDOS_TECNICOS]: 'Laudos técnicos',
  [SERVICOS.PARECERES]: 'Pareceres e quesitos técnicos',
  [SERVICOS.ASSISTENCIA_JUDICIAL]: 'Assistência técnica judicial',
  [SERVICOS.LAUDO_RURAL]: 'Laudo de avaliação rural',
  [SERVICOS.AVALIACAO_IMOBILIARIA]: 'Avaliação imobiliária',
  [SERVICOS.PROJETOS_RESIDENCIAIS]: 'Projetos residenciais',
  [SERVICOS.REGULARIZACOES]: 'Regularizações',
  [SERVICOS.LAUDOS_AVALIACAO]: 'Laudos de avaliação',
  [SERVICOS.DESDOBROS]: 'Desdobros de lotes',
  [SERVICOS.FINANCIAMENTOS]: 'Financiamentos',
  [SERVICOS.PROJETOS_COMERCIAIS]: 'Projetos comerciais',
  [SERVICOS.GESTAO_OBRAS]: 'Gestão de obras',
  [SERVICOS.COMPATIBILIZACAO_BIM]: 'Compatibilização BIM',
  [SERVICOS.PROJETOS_MEP]: 'Projetos MEP',
  [SERVICOS.GEORREFERENCIAMENTO]: 'Georreferenciamento rural',
  [SERVICOS.TOPOGRAFIA]: 'Topografia',
  [SERVICOS.PROJETOS_INFRAESTRUTURA]: 'Projetos de infraestrutura',
  [SERVICOS.LICITACOES]: 'Licitações',
  [SERVICOS.REGULARIZACAO_FUNDIARIA]: 'Regularização Fundiária',
};

// Gera parâmetros estáticos para a página
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetail({ params }: { params: PageParams }) {
  const projectId = params.id;
  
  // Encontra o projeto com base no ID da URL
  const project = projectsData.find(p => p.id === projectId);
  
  if (!project) {
    redirect('/portfolio');
  }

  return <ProjectDetailClient project={project} tagNames={TAG_NAMES} />;
} 