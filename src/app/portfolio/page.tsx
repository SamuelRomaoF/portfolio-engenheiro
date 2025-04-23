'use client';

import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/portfolio/ProjectCard';
import { projectsData, TAGS } from '../components/portfolio/projectsData';

export default function Portfolio() {
  // Estado para armazenar as categorias de filtro ativas
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  
  // Estado para armazenar os projetos filtrados
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  
  // Manipulador para alternar uma categoria
  const toggleCategory = (categoryId: string) => {
    setActiveCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId) 
        : [...prev, categoryId]
    );
  };
  
  // Efeito para atualizar os projetos filtrados quando as categorias mudarem
  useEffect(() => {
    if (activeCategories.length === 0) {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter(project => 
        activeCategories.some(category => 
          project.tags?.includes(category)
        )
      );
      setFilteredProjects(filtered);
    }
  }, [activeCategories]);
  
  // Função para limpar todos os filtros
  const clearFilters = () => {
    setActiveCategories([]);
  };

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
                    className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                  />
                  <label htmlFor="filter-advogados" className="ml-2 text-gray-700 font-medium">
                    Advogados e Escritórios
                  </label>
                </div>
                                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="filter-proprietarios" 
                    checked={activeCategories.includes(TAGS.PROPRIETARIOS)}
                    onChange={() => toggleCategory(TAGS.PROPRIETARIOS)}
                    className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                  />
                  <label htmlFor="filter-proprietarios" className="ml-2 text-gray-700 font-medium">
                    Proprietários de Imóveis
                  </label>
                </div>
                                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="filter-empresas" 
                    checked={activeCategories.includes(TAGS.EMPRESAS)}
                    onChange={() => toggleCategory(TAGS.EMPRESAS)}
                    className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                  />
                  <label htmlFor="filter-empresas" className="ml-2 text-gray-700 font-medium">
                    Empresas e Incorporadoras
                  </label>
                </div>
                                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="filter-rurais" 
                    checked={activeCategories.includes(TAGS.RURAIS)}
                    onChange={() => toggleCategory(TAGS.RURAIS)}
                    className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                  />
                  <label htmlFor="filter-rurais" className="ml-2 text-gray-700 font-medium">
                    Propriedades Rurais
                  </label>
                </div>
                                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="filter-orgaos" 
                    checked={activeCategories.includes(TAGS.ORGAOS_PUBLICOS)}
                    onChange={() => toggleCategory(TAGS.ORGAOS_PUBLICOS)}
                    className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
                  />
                  <label htmlFor="filter-orgaos" className="ml-2 text-gray-700 font-medium">
                    Órgãos Públicos
                  </label>
                </div>
                                
                {/* Botão para limpar filtros */}
                {activeCategories.length > 0 && (
                  <button
                    onClick={clearFilters}
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
                    onClick={clearFilters}
                    className="mt-3 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Limpar filtros e ver todos os projetos
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                  {filteredProjects.map((project) => {
                    // Lógica para definir a URL da imagem
                    let imageUrlToShow = project.mainImage; // Padrão: usa a imagem dos dados
                    if (project.id === "1") {
                      imageUrlToShow = "https://images.pexels.com/photos/7937751/pexels-photo-7937751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"; // URL CORRIGIDA para Advogados
                    } else if (project.id === "2") {
                      imageUrlToShow = "https://images.pexels.com/photos/4458205/pexels-photo-4458205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"; // URL CORRIGIDA para Proprietários
                    }
                    // Considerar corrigir a URL do Unsplash se necessário também:
                    // else if (project.id === "6") {
                    //   imageUrlToShow = "https://images.unsplash.com/photo-1628158088936-68ccaaa400dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
                    // }

                    return (
                      <ProjectCard 
                        key={project.id}
                        id={project.id}
                        imageUrl={imageUrlToShow} // Usando a URL definida pela lógica acima
                        nome={project.nome}
                        local={project.local}
                      />
                    );
                  })}
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