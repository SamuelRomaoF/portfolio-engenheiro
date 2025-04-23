"use client"

import React, { memo, useCallback, useState } from 'react';

// Definir tipo para os itens do FAQ
interface FAQItemData {
  question: string;
  answer: React.ReactNode;
}

// Componente de FAQ item otimizado com memo
const FAQItem = memo(({ 
  item, 
  index, 
  isOpen, 
  toggleQuestion 
}: { 
  item: { question: string; answer: React.ReactNode }; 
  index: number; 
  isOpen: boolean; 
  toggleQuestion: (index: number) => void;
}) => {
  const handleToggle = useCallback(() => {
    toggleQuestion(index);
  }, [index, toggleQuestion]);

  return (
    <div className="border-b border-gray-200 pb-4">
      <button 
        onClick={handleToggle} 
        className="w-full flex justify-between items-center focus:outline-none"
      >
        <span className="text-gray-700 font-medium text-left">{item.question}</span>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </span>
      </button>
      <div 
        className={`mt-3 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-gray-600 pt-2">
          {item.answer}
        </div>
      </div>
    </div>
  );
});

FAQItem.displayName = 'FAQItem';

// Componente de formulário usando envio HTML + Feedback na página (sem limpar campos)
const ContactForm = memo(() => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (showSuccessMessage) setShowSuccessMessage(false);
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = useCallback(() => {
    setShowSuccessMessage(true);
  }, []);

  return (
    <form 
      action="https://formsubmit.co/contato@rekaiengenharia.com.br"
      method="POST" 
      className="space-y-4"
      target="_blank"
      onSubmit={handleFormSubmit} 
    >
      {/* Re-adicionados os campos ocultos para FormSubmit */}
      <input type="hidden" name="_next" value="/contato" /> 
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="Novo contato pelo site" /> 

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
          <input 
            type="text" 
            id="nome" 
            name="nome" // name é importante
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
          <input 
            type="email" 
            id="email" 
            name="email" // name é importante
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
          />
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
          <input 
            type="tel" 
            id="telefone" 
            name="telefone" // name é importante
            value={formData.telefone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">Sua Mensagem</label>
        <textarea 
          id="mensagem" 
          name="mensagem" // name é importante
          rows={5}
          value={formData.mensagem}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-none"
        ></textarea>
      </div>
      
      <div>
        <button 
          type="submit"
          className="bg-primary hover:bg-accent-hover text-white py-2 px-6 rounded-md font-medium uppercase tracking-wide"
        >
          Enviar
        </button>
        
        {/* Mensagem de sucesso condicional */}
        {showSuccessMessage && (
          <p className="mt-2 text-green-600">Mensagem enviada com sucesso!</p>
        )}
      </div>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';

// Componente principal otimizado
export default function ContactFAQForm() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = useCallback((index: number) => {
    setOpenQuestion(prev => prev === index ? null : index);
  }, []);

  const faqItems: FAQItemData[] = [
    // Item removido - array agora vazio, mas tipado
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coluna da esquerda - FAQ e Horário */}
          <div className="pr-0 md:pr-8">
            <h4 className="text-sm font-medium text-green-600 uppercase mb-2">INFORMAÇÕES DE CONTATO</h4>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Estamos prontos para tirar todas as suas dúvidas
            </h3>
            
            {/* Informações de Horário - Simplificado */}
            <div className="mb-8 bg-white p-4 rounded-md border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-3">Horário de Atendimento</h4>
              <div className="text-gray-600">
                <p className="mb-2">Segunda a Sexta: 8h às 18h</p>
                <p className="mt-3">
                  (Você pode entrar em contato quando quiser, 
                  responderemos o mais rápido possível dentro do nosso horário de
                  atendimento.)
                </p>
              </div>
            </div>
            
            {/* FAQ expandível - Renderização condicional se houver itens */}
            {faqItems.length > 0 && (
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <FAQItem 
                    key={index}
                    item={item}
                    index={index}
                    isOpen={openQuestion === index}
                    toggleQuestion={toggleQuestion}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Coluna da direita - Formulário */}
          <div className="pl-0 md:pl-8">
            <h4 className="text-sm font-medium text-green-600 uppercase mb-2">FALE COM UM ESPECIALISTA</h4>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Preencha o Formulário e fale com um especialista da Rekai Arquitetura e Engenharia
            </h3>
            
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
} 