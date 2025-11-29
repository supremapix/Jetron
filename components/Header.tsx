import React, { useState } from 'react';
import { Menu, MessageCircle, X, Wrench, Smartphone, MapPin, Cpu } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onNavigateHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote, selectedCategory, onSelectCategory, onNavigateHome }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'all', label: 'Todos os Serviços' },
    { id: 'macbook', label: 'MacBook & iMac' },
    { id: 'iphone', label: 'iPhone & iPad' },
    { id: 'notebook', label: 'Notebooks' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-zinc-800 shadow-md font-sans">
      {/* Top Bar */}
      <div className="bg-zinc-900 text-gray-400 text-[11px] md:text-xs py-2.5 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <p className="font-medium flex items-center gap-2">
            <Wrench className="w-3 h-3 text-red-600" />
            Laboratório Especializado em Microeletrônica (Reballing)
            </p>
            <div className="hidden sm:flex gap-6">
                <span className="flex items-center gap-1.5 hover:text-white transition-colors"><MapPin className="w-3 h-3 text-red-600" /> Curitiba, PR</span>
                <span className="flex items-center gap-1.5 hover:text-white transition-colors"><Smartphone className="w-3 h-3 text-red-600" /> (41) 99938-3882</span>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-black z-20">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo as Button for Client Side Navigation */}
          <button 
            onClick={onNavigateHome} 
            className="flex-shrink-0 flex items-center cursor-pointer group decoration-0 focus:outline-none"
          >
            <div className="flex items-center tracking-tighter">
                <span className="text-3xl font-black text-red-600">JETR</span>
                <div className="relative flex items-center justify-center mx-0.5">
                    <Cpu className="w-8 h-8 text-red-600" strokeWidth={2.5} />
                    <div className="absolute inset-0 bg-red-600/20 blur-sm rounded-full"></div>
                </div>
                <span className="text-3xl font-black text-red-600">N</span>
            </div>
            <span className="text-[10px] bg-zinc-800 text-gray-300 px-2 py-0.5 rounded ml-3 uppercase tracking-wide border border-zinc-700 font-bold hidden sm:block">
                Lab
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectCategory(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === item.id 
                    ? 'bg-red-600 text-white shadow-lg shadow-red-900/50' 
                    : 'text-gray-300 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Icons & CTA */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={onOpenQuote}
              className="hidden sm:flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2.5 px-6 rounded-lg transition-all shadow-lg shadow-red-600/20 hover:shadow-red-600/40"
            >
              <MessageCircle className="w-4 h-4" />
              Orçamento Rápido
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-300 hover:bg-zinc-900 rounded-lg transition-colors z-30"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div 
        className={`md:hidden bg-zinc-900 border-t border-zinc-800 absolute w-full shadow-xl z-10 origin-top transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSelectCategory(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                selectedCategory === item.id 
                  ? 'bg-red-600 text-white' 
                  : 'text-gray-300 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 mt-4 border-t border-zinc-800">
              <button 
              onClick={() => {
                  onOpenQuote();
                  setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-red-600/20"
              >
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Orçamento
              </button>
          </div>
        </div>
      </div>
    </header>
  );
};