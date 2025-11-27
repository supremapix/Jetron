
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, ChevronRight, ChevronLeft, Cpu, Smartphone, Laptop } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

const SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop",
    badge: "Laboratório de Microeletrônica",
    title: "Especialistas em Salvar",
    highlight: "Seu Equipamento",
    description: "Reparo avançado de Placa Lógica. Economize até 70% comparado à troca da peça inteira em autorizadas.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop",
    badge: "Especialistas em Apple",
    title: "Seu MacBook",
    highlight: "Tem Conserto",
    description: "Recuperação de aparelhos molhados, troca de tela, teclado e reparo de placa mãe com garantia.",
    icon: <Laptop className="w-6 h-6" />
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=2070&auto=format&fit=crop",
    badge: "Clínica do iPhone",
    title: "Vidro Quebrado?",
    highlight: "Mantenha o Original",
    description: "Trocamos apenas o vidro do seu iPhone. Mantém o display original, True Tone e sensibilidade do toque.",
    icon: <Smartphone className="w-6 h-6" />
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    let timer: any;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="relative bg-black overflow-hidden border-b border-zinc-800 h-[650px] group">
      
      {/* Background Slider with Ken Burns Effect */}
      {SLIDES.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* Image Layer */}
          <div className="absolute inset-0 overflow-hidden">
             <img 
                src={slide.image} 
                alt={slide.title} 
                className={`w-full h-full object-cover transform transition-transform duration-[8000ms] ease-linear ${index === current ? 'scale-110' : 'scale-100'}`}
              />
          </div>
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      ))}

      {/* Content Layer */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        
        {/* Animated Text Container */}
        <div key={current} className="max-w-3xl animate-in slide-in-from-bottom-10 fade-in duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-900/60 border border-red-500/30 text-red-100 text-xs font-bold uppercase tracking-widest w-fit mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                {SLIDES[current].badge}
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight shadow-black drop-shadow-lg">
              {SLIDES[current].title} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                {SLIDES[current].highlight}.
              </span>
            </h1>
            
            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed border-l-4 border-red-600 pl-4 bg-gradient-to-r from-black/60 to-transparent p-2 rounded-r-lg backdrop-blur-sm">
              {SLIDES[current].description}
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onOpenQuote}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center shadow-lg shadow-red-900/30 ring-4 ring-red-600/10 text-base group/btn"
              >
                Solicitar Orçamento <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://wa.me/5541999383882" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md font-semibold py-4 px-8 rounded-xl transition-all duration-200 border border-white/20 flex items-center justify-center"
              >
                Falar no WhatsApp
              </a>
            </div>
        </div>

        {/* Benefits Strip */}
        <div className="absolute bottom-12 left-0 right-0 px-4 sm:px-6 lg:px-8 hidden md:block">
            <div className="flex gap-8 text-gray-300 text-sm font-medium border-t border-white/10 pt-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600" />
                    <span className="drop-shadow-md">Orçamento Gratuito</span>
                </div>
                <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-red-600" />
                    <span className="drop-shadow-md">Garantia de até 6 Meses</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-red-600" />
                    <span className="drop-shadow-md">Peças Originais e OEM</span>
                </div>
            </div>
        </div>

      </div>

      {/* Navigation Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/40 hover:bg-red-600 text-white rounded-full backdrop-blur-md transition-all border border-white/10 hover:border-red-500 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/40 hover:bg-red-600 text-white rounded-full backdrop-blur-md transition-all border border-white/10 hover:border-red-500 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 right-8 z-30 flex gap-2">
        {SLIDES.map((_, idx) => (
            <button
                key={idx}
                onClick={() => { setCurrent(idx); setIsAutoPlaying(false); }}
                className={`transition-all duration-300 rounded-full shadow-lg ${
                    current === idx 
                    ? 'w-8 h-2 bg-red-600' 
                    : 'w-2 h-2 bg-gray-400 hover:bg-white'
                }`}
            />
        ))}
      </div>

    </div>
  );
};
