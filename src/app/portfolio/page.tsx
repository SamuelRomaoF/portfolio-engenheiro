'use client';

import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/portfolio/ProjectCard';
import { projectsData, SERVICOS, TAGS } from '../components/portfolio/projectsData';

// Interface para os serviços filtrados
interface FilteredService {
  id: string;
  title: string;
  active: boolean;
}

export default function Portfolio() {
  // Estado para armazenar as categorias de filtro ativas
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  
  // Estado para armazenar os serviços filtrados (detalhados) para cada categoria
  const [filteredServices, setFilteredServices] = useState<Record<string, FilteredService[]>>({
    [TAGS.ADVOGADOS]: [
      { id: SERVICOS.LAUDOS_TECNICOS, title: 'Laudos técnicos', active: false },
      { id: SERVICOS.PARECERES, title: 'Pareceres e quesitos técnicos para processos', active: false },
      { id: SERVICOS.ASSISTENCIA_JUDICIAL, title: 'Assistência técnica judicial', active: false },
      { id: SERVICOS.LAUDO_RURAL, title: 'Laudo de avaliação de propriedade rural', active: false },
      { id: SERVICOS.AVALIACAO_IMOBILIARIA, title: 'Avaliação imobiliária', active: false },
    ],
    [TAGS.PROPRIETARIOS]: [
      { id: SERVICOS.PROJETOS_RESIDENCIAIS, title: 'Projetos residenciais', active: false },
      { id: SERVICOS.REGULARIZACOES, title: 'Regularizações', active: false },
      { id: SERVICOS.LAUDOS_AVALIACAO, title: 'Laudos de avaliação e patologias', active: false },
      { id: SERVICOS.DESDOBROS, title: 'Desdobros de lotes', active: false },
      { id: SERVICOS.FINANCIAMENTOS, title: 'Financiamentos de obra (Caixa Econômica Federal)', active: false },
    ],
    [TAGS.EMPRESAS]: [
      { id: SERVICOS.PROJETOS_COMERCIAIS, title: 'Projetos comerciais e industriais', active: false },
      { id: SERVICOS.GESTAO_OBRAS, title: 'Gestão de obras', active: false },
      { id: SERVICOS.COMPATIBILIZACAO_BIM, title: 'Compatibilização BIM', active: false },
      { id: SERVICOS.PROJETOS_MEP, title: 'Projetos MEP (Hidráulica, Elétrica e Fundações)', active: false },
    ],
    [TAGS.RURAIS]: [
      { id: SERVICOS.LAUDO_RURAL, title: 'Laudo de avaliação de propriedade rural', active: false },
      { id: SERVICOS.GEORREFERENCIAMENTO, title: 'Georreferenciamento rural (INCRA)', active: false },
      { id: SERVICOS.TOPOGRAFIA, title: 'Topografia', active: false },
    ],
    [TAGS.ORGAOS_PUBLICOS]: [
      { id: SERVICOS.PROJETOS_INFRAESTRUTURA, title: 'Projetos de infraestrutura', active: false },
      { id: SERVICOS.LICITACOES, title: 'Licitações e consultorias técnicas', active: false },
      { id: SERVICOS.REGULARIZACAO_FUNDIARIA, title: 'Regularização Fundiária', active: false },
      { id: SERVICOS.AVALIACAO_IMOBILIARIA, title: 'Avaliação imobiliária', active: false },
    ],
  });
  
  // Estado para armazenar os projetos filtrados
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  
  // Manipulador para alternar uma categoria
  const toggleCategory = (categoryId: string) => {
    setActiveCategories(prev => {
      // Se a categoria já está ativa, removê-la
      if (prev.includes(categoryId)) {
        // Desativar todos os serviços desta categoria
        setFilteredServices(prevServices => {
          const newServices = { ...prevServices };
          newServices[categoryId] = newServices[categoryId].map(service => ({
            ...service,
            active: false
          }));
          return newServices;
        });
        
        return prev.filter(id => id !== categoryId);
      } 
      // Se a categoria não está ativa, adicioná-la
      else {
        return [...prev, categoryId];
      }
    });
  };
  
  // Manipulador para alternar um serviço específico
  const toggleService = (categoryId: string, serviceId: string) => {
    setFilteredServices(prev => {
      const newServices = { ...prev };
      
      // Encontrar o serviço e atualizar seu estado
      newServices[categoryId] = newServices[categoryId].map(service => {
        if (service.id === serviceId) {
          return { ...service, active: !service.active };
        }
        return service;
      });
      
      return newServices;
    });
  };
  
  // Efeito para atualizar os projetos filtrados quando os filtros mudarem
  useEffect(() => {
    // Se não houver categorias ativas, mostrar todos os projetos
    if (activeCategories.length === 0) {
      setFilteredProjects(projectsData);
      return;
    }
    
    // Verificar se há serviços ativos em alguma das categorias
    const hasActiveServices = Object.values(filteredServices).some(
      services => services.some(service => service.active)
    );
    
    // Filtrar os projetos com base nas categorias e serviços ativos
    const filtered = projectsData.filter(project => {
      // Verificar se o projeto pertence a pelo menos uma das categorias ativas
      const matchesCategory = activeCategories.some(category => 
        project.tags.includes(category)
      );
      
      // Se não há serviços específicos selecionados, filtrar apenas por categoria
      if (!hasActiveServices) {
        return matchesCategory;
      }
      
      // Verificar se o projeto tem pelo menos um dos serviços ativos
      const activeServiceIds = Object.entries(filteredServices)
        .flatMap(([, services]) => 
          services.filter(service => service.active).map(service => service.id)
        );
      
      // Se não há serviços ativos, mostrar todos os projetos da categoria
      if (activeServiceIds.length === 0) {
        return matchesCategory;
      }
      
      // Verificar se o projeto tem pelo menos um dos serviços ativos
      const matchesService = activeServiceIds.some(serviceId => 
        project.tags.includes(serviceId)
      );
      
      return matchesCategory && matchesService;
    });
    
    setFilteredProjects(filtered);
  }, [activeCategories, filteredServices]);
  
  return (
    <main>
      <Navbar />
      
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="container mx-auto px-3">          
          <div className="flex flex-col md:flex-row gap-3">
            {/* Filtros na lateral esquerda */}
            <div className="w-full md:w-1/6 lg:w-1/6 bg-white p-5 shadow-md h-fit">
              <h3 className="text-lg font-bold mb-3 text-gray-800">Filtrar projetos:</h3>
              
              <div className="space-y-4">
                {/* Categorias principais */}
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="filter-advogados" 
                    checked={activeCategories.includes(TAGS.ADVOGADOS)}
                    onChange={() => toggleCategory(TAGS.ADVOGADOS)}
                    className="form-checkbox h-4 w-4 text-green-600 rounded border-gray-300"
                  />
                  <label htmlFor="filter-advogados" className="ml-2 text-gray-700 font-medium">
                    Advogados e Escritórios
                  </label>
                </div>
                
                {/* Lista de serviços específicos para Advogados, mostrada apenas quando a categoria está ativa */}
                {activeCategories.includes(TAGS.ADVOGADOS) && (
                  <div className="ml-6 space-y-2">
                    {filteredServices[TAGS.ADVOGADOS].map(service => (
                      <div key={service.id} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`service-${service.id}`}
                          checked={service.active}
                          onChange={() => toggleService(TAGS.ADVOGADOS, service.id)}
                          className="form-checkbox h-3 w-3 text-green-600 rounded border-gray-300"
                        />
                        <label htmlFor={`service-${service.id}`} className="ml-2 text-sm text-gray-600">
                          {service.title}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="filter-proprietarios" 
                    checked={activeCategories.includes(TAGS.PROPRIETARIOS)}
                    onChange={() => toggleCategory(TAGS.PROPRIETARIOS)}
                    className="form-checkbox h-4 w-4 text-green-600 rounded border-gray-300"
                  />
                  <label htmlFor="filter-proprietarios" className="ml-2 text-gray-700 font-medium">
                    Proprietários de Imóveis
                  </label>
                </div>
                
                {/* Lista de serviços específicos para Proprietários */}
                {activeCategories.includes(TAGS.PROPRIETARIOS) && (
                  <div className="ml-6 space-y-2">
                    {filteredServices[TAGS.PROPRIETARIOS].map(service => (
                      <div key={service.id} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`service-${service.id}`}
                          checked={service.active}
                          onChange={() => toggleService(TAGS.PROPRIETARIOS, service.id)}
                          className="form-checkbox h-3 w-3 text-green-600 rounded border-gray-300"
                        />
                        <label htmlFor={`service-${service.id}`} className="ml-2 text-sm text-gray-600">
                          {service.title}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="filter-empresas" 
                    checked={activeCategories.includes(TAGS.EMPRESAS)}
                    onChange={() => toggleCategory(TAGS.EMPRESAS)}
                    className="form-checkbox h-4 w-4 text-green-600 rounded border-gray-300"
                  />
                  <label htmlFor="filter-empresas" className="ml-2 text-gray-700 font-medium">
                    Empresas e Incorporadoras
                  </label>
                </div>
                
                {/* Lista de serviços específicos para Empresas */}
                {activeCategories.includes(TAGS.EMPRESAS) && (
                  <div className="ml-6 space-y-2">
                    {filteredServices[TAGS.EMPRESAS].map(service => (
                      <div key={service.id} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`service-${service.id}`}
                          checked={service.active}
                          onChange={() => toggleService(TAGS.EMPRESAS, service.id)}
                          className="form-checkbox h-3 w-3 text-green-600 rounded border-gray-300"
                        />
                        <label htmlFor={`service-${service.id}`} className="ml-2 text-sm text-gray-600">
                          {service.title}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="filter-rurais" 
                    checked={activeCategories.includes(TAGS.RURAIS)}
                    onChange={() => toggleCategory(TAGS.RURAIS)}
                    className="form-checkbox h-4 w-4 text-green-600 rounded border-gray-300"
                  />
                  <label htmlFor="filter-rurais" className="ml-2 text-gray-700 font-medium">
                    Propriedades Rurais
                  </label>
                </div>
                
                {/* Lista de serviços específicos para Propriedades Rurais */}
                {activeCategories.includes(TAGS.RURAIS) && (
                  <div className="ml-6 space-y-2">
                    {filteredServices[TAGS.RURAIS].map(service => (
                      <div key={service.id} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`service-${service.id}`}
                          checked={service.active}
                          onChange={() => toggleService(TAGS.RURAIS, service.id)}
                          className="form-checkbox h-3 w-3 text-green-600 rounded border-gray-300"
                        />
                        <label htmlFor={`service-${service.id}`} className="ml-2 text-sm text-gray-600">
                          {service.title}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="filter-orgaos" 
                    checked={activeCategories.includes(TAGS.ORGAOS_PUBLICOS)}
                    onChange={() => toggleCategory(TAGS.ORGAOS_PUBLICOS)}
                    className="form-checkbox h-4 w-4 text-green-600 rounded border-gray-300"
                  />
                  <label htmlFor="filter-orgaos" className="ml-2 text-gray-700 font-medium">
                    Órgãos Públicos
                  </label>
                </div>
                
                {/* Lista de serviços específicos para Órgãos Públicos */}
                {activeCategories.includes(TAGS.ORGAOS_PUBLICOS) && (
                  <div className="ml-6 space-y-2">
                    {filteredServices[TAGS.ORGAOS_PUBLICOS].map(service => (
                      <div key={service.id} className="flex items-center">
                        <input 
                          type="checkbox" 
                          id={`service-${service.id}`}
                          checked={service.active}
                          onChange={() => toggleService(TAGS.ORGAOS_PUBLICOS, service.id)}
                          className="form-checkbox h-3 w-3 text-green-600 rounded border-gray-300"
                        />
                        <label htmlFor={`service-${service.id}`} className="ml-2 text-sm text-gray-600">
                          {service.title}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Botão para limpar filtros */}
                {activeCategories.length > 0 && (
                  <button
                    onClick={() => {
                      setActiveCategories([]);
                      setFilteredServices(prev => {
                        const newServices = { ...prev };
                        Object.keys(newServices).forEach(category => {
                          newServices[category] = newServices[category].map(service => ({
                            ...service,
                            active: false
                          }));
                        });
                        return newServices;
                      });
                    }}
                    className="mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Limpar filtros
                  </button>
                )}
              </div>
            </div>
            
            {/* Grid de imagens */}
            <div className="w-full md:w-5/6 lg:w-5/6">
              {filteredProjects.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-600 text-lg">Nenhum projeto encontrado com os filtros selecionados.</p>
                  <button
                    onClick={() => {
                      setActiveCategories([]);
                      setFilteredServices(prev => {
                        const newServices = { ...prev };
                        Object.keys(newServices).forEach(category => {
                          newServices[category] = newServices[category].map(service => ({
                            ...service,
                            active: false
                          }));
                        });
                        return newServices;
                      });
                    }}
                    className="mt-3 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Limpar filtros e ver todos os projetos
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                  {filteredProjects.map((project) => (
                    <ProjectCard 
                      key={project.id}
                      id={project.id}
                      imageUrl={project.mainImage}
                      nome={project.nome}
                      local={project.local}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 