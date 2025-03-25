'use client';

import { useState } from 'react';

interface QuoteRequestFormProps {
  title?: string;
  subtitle?: string;
  onSubmit?: (formData: {
    name: string;
    phone: string;
    email: string;
    description: string;
  }) => void;
}

export default function QuoteRequestForm({
  title = "SOLICITAR ORÇAMENTO",
  subtitle = "Entraremos em contato em até 24H!",
  onSubmit
}: QuoteRequestFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    description: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      if (onSubmit) {
        await onSubmit(formData);
      }
      
      // Se não há função onSubmit ou se ela executar com sucesso
      setSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        description: ''
      });
    } catch (err) {
      setError('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 px-6 md:px-12 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        
        {success ? (
          <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
            <p className="text-green-700 font-medium text-lg mb-2">Solicitação enviada com sucesso!</p>
            <p className="text-green-600">Entraremos em contato em breve.</p>
            <button 
              className="mt-4 text-green-700 underline"
              onClick={() => setSuccess(false)}
            >
              Enviar nova solicitação
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Descreva o seu problema
              </label>
              <textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent resize-none h-[150px]"
              />
            </div>
            
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3 text-red-700">
                {error}
              </div>
            )}
            
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
} 