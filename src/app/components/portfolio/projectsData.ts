import { Project } from './types';

// Tags constantes para categorias
export const TAGS = {
  ADVOGADOS: 'advogados',
  PROPRIETARIOS: 'proprietarios',
  EMPRESAS: 'empresas',
  RURAIS: 'rurais',
  ORGAOS_PUBLICOS: 'orgaos_publicos'
};

// Tags para tipos de serviços
export const SERVICOS = {
  // Advogados
  LAUDOS_TECNICOS: 'laudos-tecnicos',
  PARECERES: 'pareceres-quesitos',
  ASSISTENCIA_JUDICIAL: 'assistencia-judicial',
  LAUDO_RURAL: 'laudo-rural',
  AVALIACAO_IMOBILIARIA: 'avaliacao-imobiliaria',
  
  // Proprietários
  PROJETOS_RESIDENCIAIS: 'projetos-residenciais',
  REGULARIZACOES: 'regularizacoes',
  LAUDOS_AVALIACAO: 'laudos-avaliacao',
  DESDOBROS: 'desdobros-lotes',
  FINANCIAMENTOS: 'financiamentos-cef',
  
  // Empresas e Incorporadoras
  PROJETOS_COMERCIAIS: 'projetos-comerciais',
  GESTAO_OBRAS: 'gestao-obras',
  COMPATIBILIZACAO_BIM: 'compatibilizacao-bim',
  PROJETOS_MEP: 'projetos-mep',
  
  // Propriedades Rurais
  GEORREFERENCIAMENTO: 'georreferenciamento',
  TOPOGRAFIA: 'topografia',
  
  // Órgãos Públicos
  PROJETOS_INFRAESTRUTURA: 'projetos-infraestrutura',
  LICITACOES: 'licitacoes',
  REGULARIZACAO_FUNDIARIA: 'regularizacao-fundiaria'
};

export const projectsData: Project[] = [
  {
    id: "1",
    nome: "ADVOGADOS E ESCRITÓRIOS",
    local: "SÃO PAULO",
    mainImage: "/images/advogados-cover.jpeg",
    subtitulo: "Soluções Técnicas Especializadas para Demandas Judiciais",
    serviceDetails: [
      { 
        title: 'Laudos técnicos', 
        description: 'Elaboramos laudos detalhados com embasamento em normas técnicas (ABNT, INCRA, CREA), comprovando fatos materiais em disputas judiciais. Inclui fotos, mapas, tabelas e conclusões periciais.' 
      },
      { 
        title: 'Assistência técnica judicial', 
        description: 'Acompanhamento em audiências e diligências como perito assistente, defendendo tecnicamente os interesses do seu cliente.' 
      },
      { 
        title: 'Laudo de avaliação',
        description: 'Avaliação de terrenos, benfeitorias e cultivos para: Divisão de herança, Financiamento bancário e Desapropriações' 
      },
      { 
        title: 'Avaliação imobiliária', 
        description: 'Determinação de valor de mercado para imóveis urbanos e rurais, com metodologia reconhecida pelo IBAPE e tribunais.' 
      }
    ],
    gallery: [
        "/images/advogados-cover.jpeg"
    ],
    tags: [TAGS.ADVOGADOS, SERVICOS.LAUDOS_TECNICOS, SERVICOS.ASSISTENCIA_JUDICIAL, SERVICOS.AVALIACAO_IMOBILIARIA]
  },
  {
    id: "2",
    nome: "PROPRIETÁRIOS DE IMÓVEIS",
    local: "SÃO PAULO",
    mainImage: "/images/proprietarios-cover.jpeg",
    location: "São Paulo, Brasil",
    projectDate: "março 2018",
    completionDate: "julho 2021",
    siteArea: "950 m²",
    builtArea: "780 m²",
    description1: `A Casa Vila foi concebida para atender às necessidades de uma família urbana contemporânea, buscando privacidade em meio ao contexto denso de uma vila residencial. O projeto explora a interação entre volumes sólidos e vazios, criando um diálogo entre introversão e extroversão dos espaços.
    
As áreas sociais se desenvolvem no pavimento térreo, com ampla integração entre sala, jantar e cozinha, abrindo-se para um jardim interno que traz luz natural e ventilação para o interior da residência.`,
    description2: `A materialidade da casa combina estrutura de concreto aparente com fechamentos em painel metálico perfurado que filtra a luz e proporciona privacidade, criando jogos de luz e sombra nos ambientes internos.
    
A sustentabilidade é parte integrante do projeto, com sistema de captação de águas pluviais, painéis solares e estratégias passivas de conforto térmico. A cobertura verde contribui para o isolamento térmico e a integração visual com a vegetação circundante quando vista dos pavimentos superiores.`,
    gallery: [
      "/images/proprietarios-cover.jpeg"
    ],
    tags: [TAGS.PROPRIETARIOS, SERVICOS.PROJETOS_RESIDENCIAIS, SERVICOS.REGULARIZACOES]
  },
  {
    id: "3",
    nome: "EMPRESAS E INCORPORADORAS",
    local: "SÃO PAULO",
    mainImage: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subtitulo: "Engenharia de Alta Performance para seu Negócio",
    location: "Lisboa, Portugal",
    projectDate: "setembro 2019",
    completionDate: "dezembro 2022",
    siteArea: "1.620 m²",
    builtArea: "980 m²",
    serviceDetails: [
      {
        title: 'Projetos Comerciais e Industriais',
        description: 'Desenvolvemos projetos arquitetônicos e estruturais sob medida para Lojas, escritórios e galpões, Indústrias e centros logísticos e Edifícios corporativos.'
      },
      {
        title: 'Gestão de Obras',
        description: 'Gerenciamento integrado desde a licitação até a entrega, com Controle de prazos e custos em tempo real, Relatórios semanais de andamento e Mediação entre todos os stakeholders.'
      },
      {
        title: 'Compatibilização BIM',
        description: 'Integração de projetos (arquitetura, estrutura e MEP) em modelo BIM para Evitar conflitos entre disciplinas, Reduzir retrabalhos em obra e Otimizar prazos e materiais.'
      },
      {
        title: 'Projetos MEP (Hidráulica, Elétrica e Fundações)',
        description: 'Projetos executivos de instalações prediais com Memorial de cálculo detalhado, Especificação de materiais e Atendimento a normas ABNT e concessionárias.'
      }
    ],
    gallery: [
      "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    tags: [TAGS.EMPRESAS, SERVICOS.PROJETOS_COMERCIAIS, SERVICOS.GESTAO_OBRAS, SERVICOS.COMPATIBILIZACAO_BIM, SERVICOS.PROJETOS_MEP]
  },
  {
    id: "4",
    nome: "ÓRGÃOS PÚBLICOS",
    local: "SÃO PAULO",
    mainImage: "https://images.pexels.com/photos/8837715/pexels-photo-8837715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subtitulo: "Soluções Técnicas para Gestão Pública Eficiente",
    location: "São Paulo, Brasil",
    projectDate: "janeiro 2023",
    completionDate: "fevereiro 2023",
    siteArea: "N/A",
    builtArea: "450 m²",
    serviceDetails: [
      {
        title: 'Projetos de Infraestrutura',
        description: 'Elaboração de projetos executivos para Escolas, postos de saúde e prédios administrativos, Sistemas viários e drenagem urbana, Iluminação pública e saneamento básico.'
      },
      {
        title: 'Licitações e Consultorias Técnicas',
        description: 'Serviços completos para editais e fiscalização, como Planilhas orçamentárias detalhadas, Termos de referência e especificações técnicas, Auditoria em obras públicas.'
      },
      {
        title: 'Regularização Fundiária',
        description: 'Regularização de imóveis públicos para Titulação de terras (Programa Morar Feliz, CDHU), Desapropriações e reintegrações de posse, Adequação ao Marco Legal da Regularização Fundiária.'
      },
      {
        title: 'Avaliação Imobiliária',
        description: 'Valoração técnica de bens públicos para Alienação de imóveis, Permutas e compensações, Indenizações em desapropriações.'
      }
    ],
    gallery: [
      "https://images.pexels.com/photos/8837715/pexels-photo-8837715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    tags: [TAGS.ORGAOS_PUBLICOS, SERVICOS.PROJETOS_INFRAESTRUTURA, SERVICOS.LICITACOES, SERVICOS.REGULARIZACAO_FUNDIARIA, SERVICOS.AVALIACAO_IMOBILIARIA]
  },
  {
    id: "6",
    nome: "PROPRIEDADES URBANAS E RURAIS",
    local: "SÃO PAULO",
    mainImage: "https://images.unsplash.com/photo-1628158088936-68ccaaa400dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subtitulo: "Precisão Técnica para o Seu Patrimônio Rural e Urbano",
    location: "Sul de Minas, Brasil",
    projectDate: "junho 2022",
    completionDate: "agosto 2022",
    siteArea: "350 hectares",
    builtArea: "2.800 m²",
    serviceDetails: [
      {
        title: 'Laudo de Avaliação de Propriedade Rural',
        description: 'Avaliação técnica de terras, benfeitorias e cultivos para Financiamentos bancários, Divisão de heranças, Processos judiciais e Venda ou compra segura.'
      },
      {
        title: 'Georreferenciamento Rural (INCRA)',
        description: 'Demarcação de propriedades rurais conforme exigências do INCRA, incluindo Memorial descritivo, Plantas georreferenciadas e Certificação CAR (Cadastro Ambiental Rural).'
      },
      {
        title: 'Topografia',
        description: 'Levantamentos topográficos para Projetos de loteamento urbano/rural, Desmembramento de terras, Retificações de áreas, Estudos preliminares, Terraplanagem e obras de infraestrutura.'
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1628158088936-68ccaaa400dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    tags: [TAGS.RURAIS, TAGS.ADVOGADOS, SERVICOS.LAUDO_RURAL, SERVICOS.GEORREFERENCIAMENTO, SERVICOS.TOPOGRAFIA]
  }
]; 