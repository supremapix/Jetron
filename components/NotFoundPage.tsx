import React from 'react';
import { Home, AlertTriangle, Search } from 'lucide-react';

interface NotFoundPageProps {
  onBack: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 font-sans">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-red-100 rounded-full animate-ping opacity-20"></div>
            <div className="bg-red-50 p-6 rounded-full relative">
              <AlertTriangle className="w-16 h-16 text-red-600" />
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">Página não encontrada</h1>
        <h2 className="text-9xl font-black text-gray-200 mb-4 select-none">404</h2>
        
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Opa! Parece que a página que você está procurando (bairro ou serviço) não existe ou foi movida.
        </p>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center justify-center gap-2">
                <Search className="w-4 h-4 text-red-600" /> O que você pode fazer:
            </h3>
            <ul className="text-sm text-gray-500 space-y-2">
                <li>• Verifique se o endereço da URL está correto.</li>
                <li>• Utilize o menu principal para navegar pelos serviços.</li>
                <li>• Consulte nosso Mapa do Site no rodapé.</li>
            </ul>
        </div>

        <button 
          onClick={onBack}
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-red-600/20 hover:scale-105"
        >
          <Home className="w-5 h-5" />
          Voltar para o Início
        </button>
      </div>
    </div>
  );
};