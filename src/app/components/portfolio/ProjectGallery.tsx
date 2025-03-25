'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const goToPrevious = () => {
    setSelectedImage(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedImage(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-8 px-6 md:px-12">
      <h2 className="text-center text-blue-500 text-lg font-medium mb-8">GALERIA DO PROJETO</h2>
      
      {/* Imagem principal */}
      <div className="relative aspect-video bg-gray-100 mb-4">
        {/* Botão esquerdo (área aumentada) */}
        <button 
          onClick={goToPrevious}
          className="absolute left-0 top-0 bottom-0 w-1/5 flex items-center px-4 cursor-pointer group z-10"
          aria-label="Imagem anterior"
        >
          <div className="bg-black bg-opacity-50 text-white p-2 rounded-full group-hover:bg-opacity-70 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </div>
        </button>
        
        {/* Imagem principal com carregamento otimizado */}
        <div className="relative w-full h-full">
          <Image 
            src={images[selectedImage]}
            alt={`Imagem ${selectedImage + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover"
            priority={selectedImage === 0}
            quality={90}
          />
        </div>
        
        {/* Botão direito (área aumentada) */}
        <button 
          onClick={goToNext}
          className="absolute right-0 top-0 bottom-0 w-1/5 flex items-center justify-end px-4 cursor-pointer group z-10"
          aria-label="Próxima imagem"
        >
          <div className="bg-black bg-opacity-50 text-white p-2 rounded-full group-hover:bg-opacity-70 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        </button>
      </div>
      
      {/* Miniaturas */}
      <div className="grid grid-cols-10 gap-1 mt-2">
        {images.map((img, index) => (
          <button 
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square border-2 ${selectedImage === index ? 'border-blue-500' : 'border-transparent'} cursor-pointer hover:opacity-80 relative overflow-hidden`}
            aria-label={`Selecionar imagem ${index + 1}`}
          >
            <div className="relative w-full h-full">
              <Image 
                src={img} 
                alt={`Miniatura ${index + 1}`} 
                fill
                sizes="10vw"
                className="object-cover"
                loading="lazy"
                quality={60}
              />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
} 