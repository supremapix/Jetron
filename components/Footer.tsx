
import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Smartphone, Navigation, Cpu, MessageCircle, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer className="bg-black border-t border-zinc-900 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center tracking-tighter">
                <span className="text-2xl font-black text-red-600">JETR</span>
                <div className="relative flex items-center justify-center mx-0.5">
                    <Cpu className="w-6 h-6 text-red-600" strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-black text-red-600">N</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              Conte conosco na Jetron! Estamos prontos para superar suas expectativas e atender às suas necessidades tecnológicas com excelência.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Contact 1 */}
          <div>
            <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Canais de Atendimento</h3>
            <ul className="space-y-6 text-sm text-gray-400">
              <li>
                 <a 
                    href="https://wa.me/5541999383882" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex flex-col gap-1 group cursor-pointer"
                 >
                    <span className="flex items-center gap-2 text-white font-bold group-hover:text-green-500 transition-colors">
                        <Smartphone className="w-4 h-4" /> WhatsApp / Celular
                    </span>
                    <span className="hover:text-green-500 transition-colors block ml-6">
                        (41) 99938-3882
                    </span>
                    <span className="ml-6 mt-1 text-xs bg-green-900/30 text-green-500 px-2 py-1 rounded w-fit flex items-center gap-1 border border-green-900/50">
                        <MessageCircle className="w-3 h-3" /> Falar no WhatsApp
                    </span>
                 </a>
              </li>

              <li className="flex flex-col gap-1 group">
                <span className="flex items-center gap-2 text-white font-bold">
                  <Mail className="w-4 h-4" /> E-mail Pedidos
                </span>
                <a href="mailto:jetron.reballing@gmail.com" className="hover:text-red-600 transition-colors block ml-6 break-words">
                  jetron.reballing@gmail.com
                </a>
                
                <button 
                  onClick={onOpenQuote}
                  className="mt-2 ml-6 text-xs bg-red-900/30 text-red-500 px-2 py-1 rounded w-fit flex items-center gap-1 border border-red-900/50 hover:bg-red-600 hover:text-white transition-all"
                >
                    <ArrowRight className="w-3 h-3" /> Pedir Orçamento
                </button>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Localização</h3>
            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-black rounded-lg shadow-sm text-red-600 border border-zinc-800">
                   <MapPin className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="font-bold text-white">Anexo a PUC - Portão 2</h4>
                   <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                     Rua Imaculada Conceição, 764<br/>
                     Prado Velho, Curitiba - PR<br/>
                     <span className="text-gray-500">CEP: 80215-182</span>
                   </p>
                </div>
              </div>
              
              <a 
                href="https://maps.google.com/?q=Rua+Imaculada+Conceição,+764,+Prado+Velho,+Curitiba" 
                target="_blank" 
                rel="noreferrer"
                className="w-full bg-red-600 text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-lg shadow-red-900/20"
              >
                <Navigation className="w-4 h-4" />
                Colocar no GPS
              </a>
            </div>
            
            <div className="mt-6 flex justify-between items-center">
                 <div>
                    <h4 className="font-bold text-white text-sm mb-1">Horário de Atendimento</h4>
                    <p className="text-sm text-gray-500">Segunda a Sexta: 09:00 - 18:00</p>
                 </div>
                 <a href="/?page=sitemap" className="text-xs text-gray-600 hover:text-white underline">Mapa do Site</a>
            </div>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-gray-400 font-medium max-w-2xl text-sm md:text-base">
            Soluções eficientes em consertos e reparos de placas de vídeo, notebooks, PCs, videogames e celulares, dentro da PUC em Curitiba.
          </p>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-2"></div>

          <p className="text-xs text-zinc-600 flex items-center justify-center gap-1.5 uppercase tracking-wide">
            Desenvolvido com <span className="text-red-600 text-lg animate-heartbeat">❤</span> pela <span className="font-bold text-gray-500 hover:text-white transition-colors cursor-default">Suprema Mídia</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
