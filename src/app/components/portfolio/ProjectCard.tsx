'use client';

import { useRouter } from 'next/navigation';

interface ProjectCardProps {
  id: string;
  imageUrl: string;
  nome: string;
  local: string;
}

export default function ProjectCard({ id, imageUrl, nome, local }: ProjectCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/portfolio/${id}`);
  };

  return (
    <div 
      className="aspect-[4/3] relative overflow-hidden group cursor-pointer"
      onClick={handleClick}
    >
      <img 
        src={imageUrl}
        alt={`${nome} - ${local}`}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
      />
      <div className="absolute inset-0 flex items-end justify-center pb-6">
        <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white text-lg font-semibold tracking-wider">{nome}</h3>
          <p className="text-white text-xs tracking-wider mt-1">{local}</p>
        </div>
      </div>
    </div>
  );
} 