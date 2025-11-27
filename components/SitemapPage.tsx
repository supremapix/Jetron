
import React, { useEffect } from 'react';
import { CURITIBA_NEIGHBORHOODS, METRO_CITIES, SERVICES } from '../constants';
import { ArrowLeft, MapPin, Wrench } from 'lucide-react';

interface SitemapPageProps {
  onNavigate: (type: 'location' | 'service' | 'home', value: string | null) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    document.title = "Mapa do Site - Jetron Assistência Técnica";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black py-12 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => onNavigate('home', null)}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar para Home
          </button>
          <h1 className="text-3xl font-bold text-white mb-2">Mapa do Site</h1>
          <p className="text-gray-400">Índice completo de serviços e áreas de atendimento.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* Services Section */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 pb-2 border-b border-gray-100">
            <Wrench className="w-5 h-5 text-red-600" /> Nossos Serviços
          </h2>
          <ul className="space-y-3">
            {SERVICES.map(service => (
              <li key={service.id}>
                <button 
                  onClick={() => onNavigate('service', service.id)}
                  className="text-gray-600 hover:text-red-600 hover:underline text-sm text-left w-full"
                >
                  {service.name}
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Neighborhoods Section */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 pb-2 border-b border-gray-100">
            <MapPin className="w-5 h-5 text-red-600" /> Bairros de Curitiba
          </h2>
          <div className="grid grid-cols-1 gap-x-4 gap-y-2">
            {CURITIBA_NEIGHBORHOODS.sort().map(loc => (
              <button 
                key={loc}
                onClick={() => onNavigate('location', loc)}
                className="text-gray-600 hover:text-red-600 hover:underline text-sm text-left w-full truncate"
              >
                Assistência em {loc}
              </button>
            ))}
          </div>
        </section>

        {/* Cities Section */}
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 pb-2 border-b border-gray-100">
            <MapPin className="w-5 h-5 text-red-600" /> Região Metropolitana
          </h2>
          <ul className="space-y-3">
            {METRO_CITIES.sort().map(city => (
              <li key={city}>
                <button 
                  onClick={() => onNavigate('location', city)}
                  className="text-gray-600 hover:text-red-600 hover:underline text-sm text-left w-full"
                >
                  Assistência em {city}
                </button>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
};
