
import React, { useState } from 'react';
import { ArrowRight, Star, Share2, Check, Info, Cpu, Droplets, Monitor, Keyboard, Smartphone, ScanFace, Battery, Hammer, CircuitBoard, HardDrive } from 'lucide-react';
import { ServiceOption } from '../types';

interface ServiceCardProps {
  service: ServiceOption;
  onSelect: (service: ServiceOption) => void;
  onNavigate?: (serviceId: string) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  'cpu': <Cpu className="w-12 h-12" />,
  'droplets': <Droplets className="w-12 h-12" />,
  'monitor': <Monitor className="w-12 h-12" />,
  'keyboard': <Keyboard className="w-12 h-12" />,
  'smartphone': <Smartphone className="w-12 h-12" />,
  'scan-face': <ScanFace className="w-12 h-12" />,
  'battery': <Battery className="w-12 h-12" />,
  'hammer': <Hammer className="w-12 h-12" />,
  'circuit-board': <CircuitBoard className="w-12 h-12" />,
  'hard-drive': <HardDrive className="w-12 h-12" />,
  'wrench': <Hammer className="w-12 h-12" /> // Fallback or duplicate
};

export const ProductCard: React.FC<ServiceCardProps> = ({ service, onSelect, onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const serviceUrl = `${window.location.origin}/?service=${service.id}`;
    const shareData = {
      title: `Jetron - ${service.name}`,
      text: `Confira este serviço especializado na Jetron: ${service.name}. ${service.description}`,
      url: serviceUrl
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.text} \n${shareData.url}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.log('Erro ao compartilhar');
    }
  };

  const IconComponent = ICON_MAP[service.iconKey] || <Cpu className="w-12 h-12" />;

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-red-600 shadow-sm hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 overflow-hidden flex flex-col h-full relative">
      
      {/* Category Tag */}
      <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full z-10 uppercase tracking-wider shadow-sm border border-zinc-800">
        {service.category}
      </div>

      {/* Premium/Especializado Badge */}
      {service.badge && (
        <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full z-10 uppercase tracking-wider shadow-md flex items-center gap-1">
          <Star className="w-3 h-3 fill-white" />
          {service.badge}
        </div>
      )}

      {/* Icon Header Background */}
      <div className="relative pt-[50%] overflow-hidden bg-gradient-to-br from-zinc-50 to-zinc-100 group-hover:from-red-50 group-hover:to-red-100 transition-colors duration-500 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:text-red-600 transition-all duration-500 transform group-hover:scale-110">
           {IconComponent}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-red-600 transition-colors cursor-pointer" onClick={() => onNavigate && onNavigate(service.id)}>
          {service.name}
        </h3>
        
        <p className="text-sm text-gray-500 mb-4 line-clamp-3">
            {service.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {service.features.slice(0, 3).map((feature, idx) => (
                <span key={idx} className="text-[10px] bg-red-50 text-red-700 px-2 py-1 rounded-md font-medium border border-red-100">
                    {feature}
                </span>
            ))}
        </div>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
            <div className="flex-1">
                <span className="text-xs text-gray-400 block">Investimento estimado</span>
                <span className="text-sm font-bold text-slate-700">
                    {service.startingPrice 
                        ? `A partir de R$ ${service.startingPrice.toFixed(0)}` 
                        : 'Sob Consulta'}
                </span>
            </div>

            <div className="flex items-center gap-2">
                <button 
                    onClick={handleShare}
                    className={`p-2.5 rounded-lg transition-all duration-200 border ${
                        copied 
                        ? 'bg-green-50 text-green-600 border-green-200' 
                        : 'bg-white text-gray-400 border-gray-200 hover:text-red-600 hover:border-red-200'
                    }`}
                    title={copied ? "Link copiado!" : "Compartilhar Serviço"}
                >
                    {copied ? <Check className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
                </button>
                
                {onNavigate && (
                    <button 
                        onClick={() => onNavigate(service.id)}
                        className="p-2.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                        title="Ver Detalhes e FAQ"
                    >
                        <Info className="w-5 h-5" />
                    </button>
                )}

                <button 
                    onClick={() => onSelect(service)}
                    className="bg-black hover:bg-red-600 text-white rounded-lg p-2.5 transition-colors shadow-lg shadow-black/10 border border-transparent"
                    title="Solicitar Orçamento"
                >
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};
