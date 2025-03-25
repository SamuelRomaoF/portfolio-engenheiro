interface ProjectInfoProps {
  location: string;
  projectDate: string;
  completionDate: string;
  siteArea: string;
  builtArea: string;
  description1: string;
  description2: string;
}

export default function ProjectInfo({
  location,
  projectDate,
  completionDate,
  siteArea,
  builtArea,
  description1,
  description2
}: ProjectInfoProps) {
  return (
    <section className="py-8 px-6 md:px-12 border-b border-gray-200">
      <h2 className="text-center text-blue-500 text-lg font-medium mb-4">INFORMAÇÕES</h2>
      <div className="text-center">
        <h3 className="font-bold text-sm mb-3">(INFORMAÇÕES IMPORTANTES REFERENTE AO PROJETO)</h3>
        <div className="space-y-1 text-sm">
          <p><span className="font-medium">location • </span>{location}</p>
          <p><span className="font-medium">project • </span>{projectDate}</p>
          <p><span className="font-medium">completion • </span>{completionDate}</p>
          <p><span className="font-medium">site area • </span>{siteArea}</p>
          <p><span className="font-medium">built area • </span>{builtArea}</p>
        </div>
      </div>
      
      <div className="mt-12 max-w-3xl mx-auto">
        <p className="text-sm leading-relaxed whitespace-pre-line mb-6">
          {description1}
        </p>
        {description2 && (
          <p className="text-sm leading-relaxed whitespace-pre-line">
            {description2}
          </p>
        )}
      </div>
    </section>
  );
} 