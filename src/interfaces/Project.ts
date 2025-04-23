export interface ServiceDetail {
  title: string;
  description?: string;
}

export interface Project {
  id: string;
  nome: string;
  mainImage: string;
  tags?: string[];
  description1?: string;
  description2?: string;
  location?: string; 
  projectDate?: string; 
  completionDate?: string;
  siteArea?: string;
  builtArea?: string;
  gallery?: string[];
  serviceDetails?: ServiceDetail[];
} 