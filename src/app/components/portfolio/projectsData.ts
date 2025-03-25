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
    nome: "GEORREFERENCIAMENTO RURAL",
    local: "BRASIL",
    mainImage: "https://blog.climatefieldview.com.br/hs-fs/hubfs/georreferenciamento%20(3).jpg?width=1200&height=799&name=georreferenciamento%20(3).jpg",
    location: "Interior de São Paulo, Brasil",
    projectDate: "março 2023",
    completionDate: "maio 2023",
    siteArea: "500 hectares",
    builtArea: "N/A",
    description1: `Realizamos o georreferenciamento rural de uma propriedade de 500 hectares, atendendo às exigências do INCRA. Utilizamos equipamentos de alta precisão e softwares especializados para garantir a exatidão das medições e a regularização do imóvel.

Nossa equipe técnica realizou o levantamento completo da área, incluindo demarcação de divisas, áreas de preservação permanente, reserva legal e construções. O trabalho resultou na elaboração de mapas detalhados e documentação necessária para a certificação pelo INCRA, garantindo segurança jurídica à propriedade.`,
    description2: ``,
    gallery: [
      "https://img.freepik.com/fotos-premium/engenheiro-topografo-trabalhando-com-teodolito-no-canteiro-de-obras_190298-240.jpg",
      "https://blog.climatefieldview.com.br/hs-fs/hubfs/georreferenciamento%20(3).jpg?width=1200&height=799&name=georreferenciamento%20(3).jpg",
      "https://img.freepik.com/fotos-premium/a-vista-aerea-das-terras-cultivaveis-e-do-campo-agricola-em-periodo-de-colheita-de-soja_127089-1379.jpg",
      "https://img.freepik.com/fotos-premium/mapa-gps-e-pin-navegador-em-smartphone-no-fundo-do-campo-foto-de-conceito-de-navegacao-e-tecnologia_218381-4816.jpg",
      "https://img.freepik.com/fotos-premium/engenheiro-agrimensor-trabalhando-com-equipamento-de-topografia-gps-ao-ar-livre_221542-1599.jpg",
    ],
    tags: [TAGS.RURAIS, SERVICOS.GEORREFERENCIAMENTO, SERVICOS.TOPOGRAFIA, SERVICOS.REGULARIZACAO_FUNDIARIA]
  },
  {
    id: "2",
    nome: "CASA VILA",
    local: "BRASIL",
    mainImage: "https://mk27.com/wp-content/uploads/2023/07/casa_vila_1a.jpg",
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
      "https://mk27.com/wp-content/uploads/2023/07/casa_vila_1a.jpg",
      "https://mk27.com/wp-content/uploads/2023/07/casa_vila_1a.jpg",
      "https://mk27.com/wp-content/uploads/2023/07/casa_vila_1a.jpg",
      "https://mk27.com/wp-content/uploads/2023/07/casa_vila_1a.jpg",
      "https://mk27.com/wp-content/uploads/2023/07/casa_vila_1a.jpg",
    ],
    tags: [TAGS.PROPRIETARIOS, SERVICOS.PROJETOS_RESIDENCIAIS, SERVICOS.REGULARIZACOES]
  },
  {
    id: "3",
    nome: "FLAG HOUSE",
    local: "PORTUGAL",
    mainImage: "https://mk27.com/wp-content/uploads/2022/08/flag_house_1.jpg",
    location: "Lisboa, Portugal",
    projectDate: "setembro 2019",
    completionDate: "dezembro 2022",
    siteArea: "1.620 m²",
    builtArea: "980 m²",
    description1: `Localizada na região montanhosa próxima a Lisboa, a Flag House explora o dramático contraste entre a arquitetura contemporânea e a paisagem natural de Portugal. O projeto organiza-se em um volume horizontal alongado, posicionado estrategicamente para maximizar as vistas panorâmicas do vale e da serra ao longe.
    
A implantação tira partido do terreno em declive, criando diferentes níveis que se adaptam à topografia e estabelecem uma sequência de espaços que se revelam gradualmente aos usuários.`,
    description2: `A estrutura em balanço constitui o elemento formal mais marcante do projeto, criando uma projeção sobre a encosta que parece flutuar sobre a paisagem. Este gesto arquitetônico não apenas cria espaços sombreados abaixo, mas também estabelece um diálogo formal com a horizontalidade da linha do horizonte.
    
Os materiais foram selecionados para resistir às condições climáticas locais, com predominância de concreto, pedra e madeira tratada. Grandes painéis de vidro emolduram as vistas, enquanto elementos de quebra-sol em madeira protegem os ambientes da insolação direta nos meses mais quentes do ano.`,
    gallery: [
      "https://mk27.com/wp-content/uploads/2022/08/flag_house_1.jpg",
      "https://mk27.com/wp-content/uploads/2022/08/flag_house_1.jpg",
      "https://mk27.com/wp-content/uploads/2022/08/flag_house_1.jpg",
      "https://mk27.com/wp-content/uploads/2022/08/flag_house_1.jpg",
      "https://mk27.com/wp-content/uploads/2022/08/flag_house_1.jpg",
    ],
    tags: [TAGS.EMPRESAS, SERVICOS.PROJETOS_COMERCIAIS, SERVICOS.COMPATIBILIZACAO_BIM]
  },
  {
    id: "4",
    nome: "LAUDO TÉCNICO ESTRUTURAL",
    local: "SÃO PAULO",
    mainImage: "https://samoengenharia.com.br/wp-content/uploads/2021/08/Laudo-de-Entrega-e-Recebimento-de-Obras-no-bairro-Funcionarios-1024x632.jpg",
    location: "São Paulo, Brasil",
    projectDate: "janeiro 2023",
    completionDate: "fevereiro 2023",
    siteArea: "N/A",
    builtArea: "450 m²",
    description1: `Laudo técnico elaborado para identificação de patologias estruturais em edifício comercial no centro de São Paulo. A análise foi conduzida com foco na avaliação do estado de conservação das estruturas de concreto armado, verificação de fissuras, identificação de infiltrações e análise dos sistemas de impermeabilização.`,
    description2: `Utilizamos equipamentos de última geração para ensaios não destrutivos que permitiram avaliar a integridade do concreto sem comprometer a estrutura existente. O relatório inclui mapeamento detalhado das patologias, documentação fotográfica, análises laboratoriais e recomendações técnicas para recuperação estrutural.`,
    gallery: [
      "https://samoengenharia.com.br/wp-content/uploads/2021/08/Laudo-de-Entrega-e-Recebimento-de-Obras-no-bairro-Funcionarios-1024x632.jpg",
      "https://samoengenharia.com.br/wp-content/uploads/2021/08/Laudo-de-Entrega-e-Recebimento-de-Obras-no-bairro-Funcionarios-1024x632.jpg",
      "https://samoengenharia.com.br/wp-content/uploads/2021/08/Laudo-de-Entrega-e-Recebimento-de-Obras-no-bairro-Funcionarios-1024x632.jpg",
      "https://samoengenharia.com.br/wp-content/uploads/2021/08/Laudo-de-Entrega-e-Recebimento-de-Obras-no-bairro-Funcionarios-1024x632.jpg",
      "https://samoengenharia.com.br/wp-content/uploads/2021/08/Laudo-de-Entrega-e-Recebimento-de-Obras-no-bairro-Funcionarios-1024x632.jpg",
    ],
    tags: [TAGS.ADVOGADOS, SERVICOS.LAUDOS_TECNICOS, SERVICOS.PARECERES]
  },
  {
    id: "5",
    nome: "CONJUNTO EMPRESARIAL TECH PARK",
    local: "CAMPINAS",
    mainImage: "https://img.freepik.com/fotos-premium/vista-aerea-de-empreendimento-imobiliario-com-predios-commerciais-empresariais_23-2150914415.jpg",
    location: "Campinas, Brasil",
    projectDate: "abril 2021",
    completionDate: "dezembro 2022",
    siteArea: "12.500 m²",
    builtArea: "8.200 m²",
    description1: `Projeto desenvolvido para um complexo empresarial de tecnologia em Campinas, incluindo três edifícios corporativos integrados a áreas verdes e espaços de convivência. O conceito arquitetônico privilegia a eficiência energética, com fachadas projetadas para maximizar a iluminação natural enquanto reduzem a carga térmica.`,
    description2: `A modelagem BIM foi utilizada integralmente no desenvolvimento do projeto, permitindo a compatibilização precisa entre os sistemas estruturais, arquitetônicos e de instalações. A gestão da obra foi realizada com metodologias ágeis e monitoramento constante, garantindo o cumprimento de prazos e a qualidade da execução.`,
    gallery: [
      "https://img.freepik.com/fotos-premium/vista-aerea-de-empreendimento-imobiliario-com-predios-commerciais-empresariais_23-2150914415.jpg",
      "https://img.freepik.com/fotos-premium/vista-aerea-de-empreendimento-imobiliario-com-predios-commerciais-empresariais_23-2150914415.jpg",
      "https://img.freepik.com/fotos-premium/vista-aerea-de-empreendimento-imobiliario-com-predios-commerciais-empresariais_23-2150914415.jpg",
      "https://img.freepik.com/fotos-premium/vista-aerea-de-empreendimento-imobiliario-com-predios-commerciais-empresariais_23-2150914415.jpg",
      "https://img.freepik.com/fotos-premium/vista-aerea-de-empreendimento-imobiliario-com-predios-commerciais-empresariais_23-2150914415.jpg",
    ],
    tags: [TAGS.EMPRESAS, SERVICOS.PROJETOS_COMERCIAIS, SERVICOS.GESTAO_OBRAS, SERVICOS.COMPATIBILIZACAO_BIM, SERVICOS.PROJETOS_MEP]
  },
  {
    id: "6",
    nome: "FAZENDA SANTA MARIA",
    local: "MINAS GERAIS",
    mainImage: "https://img.freepik.com/fotos-premium/fazenda-verde-com-vista-aerea-ou-olho-de-passaros-de-fazenda-agricola-ou-ranch-de-gado-em-zona-rural-de-minas-gerais-brasil_132310-339.jpg",
    location: "Sul de Minas, Brasil",
    projectDate: "junho 2022",
    completionDate: "agosto 2022",
    siteArea: "350 hectares",
    builtArea: "2.800 m²",
    description1: `Laudo de avaliação elaborado para propriedade rural no sul de Minas Gerais, incluindo análise detalhada do valor da terra, benfeitorias, recursos hídricos e potencial produtivo. O trabalho envolveu levantamento topográfico completo, análise de documentação e estudo comparativo com imóveis semelhantes na região.`,
    description2: `O georreferenciamento foi realizado seguindo as normas técnicas do INCRA, com medições de alta precisão para demarcação dos limites da propriedade. O laudo técnico final apresentou valoração fundamentada em critérios científicos, considerando características agronômicas, econômicas e ambientais da propriedade.`,
    gallery: [
      "https://img.freepik.com/fotos-premium/fazenda-verde-com-vista-aerea-ou-olho-de-passaros-de-fazenda-agricola-ou-ranch-de-gado-em-zona-rural-de-minas-gerais-brasil_132310-339.jpg",
      "https://img.freepik.com/fotos-premium/fazenda-verde-com-vista-aerea-ou-olho-de-passaros-de-fazenda-agricola-ou-ranch-de-gado-em-zona-rural-de-minas-gerais-brasil_132310-339.jpg",
      "https://img.freepik.com/fotos-premium/fazenda-verde-com-vista-aerea-ou-olho-de-passaros-de-fazenda-agricola-ou-ranch-de-gado-em-zona-rural-de-minas-gerais-brasil_132310-339.jpg",
      "https://img.freepik.com/fotos-premium/fazenda-verde-com-vista-aerea-ou-olho-de-passaros-de-fazenda-agricola-ou-ranch-de-gado-em-zona-rural-de-minas-gerais-brasil_132310-339.jpg",
      "https://img.freepik.com/fotos-premium/fazenda-verde-com-vista-aerea-ou-olho-de-passaros-de-fazenda-agricola-ou-ranch-de-gado-em-zona-rural-de-minas-gerais-brasil_132310-339.jpg",
    ],
    tags: [TAGS.RURAIS, TAGS.ADVOGADOS, SERVICOS.LAUDO_RURAL, SERVICOS.GEORREFERENCIAMENTO, SERVICOS.TOPOGRAFIA]
  },
  {
    id: "7",
    nome: "PARQUE LINEAR URBANO",
    local: "RIO DE JANEIRO",
    mainImage: "https://img.freepik.com/fotos-premium/vista-aerea-do-parque-em-uma-cidade-com-cruzamentos-de-estradas-e-transito_163305-12394.jpg",
    location: "Rio de Janeiro, Brasil",
    projectDate: "novembro 2020",
    completionDate: "julho 2022",
    siteArea: "23.000 m²",
    builtArea: "5.400 m²",
    description1: `Projeto de infraestrutura urbana desenvolvido para prefeitura municipal, envolvendo a criação de um parque linear que integra áreas de lazer, mobilidade sustentável e soluções de drenagem urbana. O projeto envolveu a recuperação de áreas degradadas ao longo de um córrego urbano e implementação de sistemas de biorretenção para manejo de águas pluviais.`,
    description2: `O trabalho incluiu desde a elaboração dos projetos básico e executivo até o acompanhamento do processo licitatório e fiscalização da obra. As soluções técnicas adotadas priorizaram aspectos de sustentabilidade ambiental, acessibilidade universal e durabilidade, garantindo um legado positivo para a população local.`,
    gallery: [
      "https://img.freepik.com/fotos-premium/vista-aerea-do-parque-em-uma-cidade-com-cruzamentos-de-estradas-e-transito_163305-12394.jpg",
      "https://img.freepik.com/fotos-premium/vista-aerea-do-parque-em-uma-cidade-com-cruzamentos-de-estradas-e-transito_163305-12394.jpg",
      "https://img.freepik.com/fotos-premium/vista-aerea-do-parque-em-uma-cidade-com-cruzamentos-de-estradas-e-transito_163305-12394.jpg",
      "https://img.freepik.com/fotos-premium/vista-aerea-do-parque-em-uma-cidade-com-cruzamentos-de-estradas-e-transito_163305-12394.jpg",
      "https://img.freepik.com/fotos-premium/vista-aerea-do-parque-em-uma-cidade-com-cruzamentos-de-estradas-e-transito_163305-12394.jpg",
    ],
    tags: [TAGS.ORGAOS_PUBLICOS, SERVICOS.PROJETOS_INFRAESTRUTURA, SERVICOS.LICITACOES, SERVICOS.REGULARIZACAO_FUNDIARIA]
  },
  {
    id: "8",
    nome: "ASSISTÊNCIA TÉCNICA JUDICIAL",
    local: "BRASÍLIA",
    mainImage: "https://img.freepik.com/fotos-premium/conceito-de-construcao-deficiente-engenheiro-e-advogado-discutindo-sobre-projeto-defeituoso_23-2149151748.jpg",
    location: "Brasília, Brasil",
    projectDate: "março 2023",
    completionDate: "maio 2023",
    siteArea: "N/A",
    builtArea: "1.200 m²",
    description1: `Serviço de assistência técnica judicial realizado para escritório de advocacia, envolvendo a elaboração de parecer técnico de engenharia civil para ação judicial relacionada a vícios construtivos em edifício residencial. O trabalho incluiu vistorias detalhadas, documentação fotográfica, análise de projetos e especificações, e elaboração de quesitos técnicos.`,
    description2: `A atuação como assistente técnico de parte incluiu o acompanhamento de perícias judiciais, análise crítica do laudo pericial e elaboração de parecer técnico fundamentado em normas técnicas e legislação. O material produzido forneceu embasamento técnico robusto para a argumentação jurídica, contribuindo para o esclarecimento dos fatos em discussão no processo.`,
    gallery: [
      "https://img.freepik.com/fotos-premium/conceito-de-construcao-deficiente-engenheiro-e-advogado-discutindo-sobre-projeto-defeituoso_23-2149151748.jpg",
      "https://img.freepik.com/fotos-premium/engenheiro-consultoria-verificando-desenho-tecnico-no-escritorio-direito-de-construcao-e-conceito-legal_640221-338.jpg",
      "https://img.freepik.com/fotos-premium/engenheiro-civil-e-advogado-trabalhando-juntos-na-mesa-do-escritorio-com-plantas-e-documentos_645882-854.jpg",
      "https://img.freepik.com/fotos-premium/engenheiro-de-construcao-com-planta-de-casa-e-documentos-legais-no-escritorio-conceito-de-avaliacao-tecnica_124507-43344.jpg",
      "https://img.freepik.com/fotos-premium/homem-de-negocios-engenheiro-e-advogado-discutindo-documentos-na-mesa-do-escritorio-consultoria-de-construcao-e-conceito-juridico_293990-8331.jpg",
    ],
    tags: [TAGS.ADVOGADOS, SERVICOS.ASSISTENCIA_JUDICIAL, SERVICOS.PARECERES, SERVICOS.LAUDOS_TECNICOS]
  }
]; 