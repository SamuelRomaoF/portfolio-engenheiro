export interface Project {
  id: string;
  nome: string;
  local: string;
  mainImage: string;
  location: string;
  projectDate: string;
  completionDate: string;
  siteArea: string;
  builtArea: string;
  description1: string;
  description2: string;
  gallery: string[];
  tags: string[];
}

export interface ProjectCardData {
  id: string;
  url: string;
  nome: string;
  local: string;
} 