
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ChatAssistant } from './components/ChatAssistant';
import { Footer } from './components/Footer';
import { FloatingControls } from './components/FloatingControls';
import { SERVICES, ALL_LOCATIONS, BLOG_POSTS } from './constants';
import { ServiceOption } from './types';
import { Filter, Check, ArrowRight, PlayCircle, MapPin, X, Lightbulb, Cpu, Droplets, Monitor, Keyboard, Smartphone, ScanFace, Battery, Hammer, CircuitBoard, HardDrive } from 'lucide-react';
import { LocationPage } from './components/LocationPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { SitemapPage } from './components/SitemapPage';

const ICON_COMPONENTS: Record<string, React.ElementType> = {
  'cpu': Cpu,
  'droplets': Droplets,
  'monitor': Monitor,
  'keyboard': Keyboard,
  'smartphone': Smartphone,
  'scan-face': ScanFace,
  'battery': Battery,
  'hammer': Hammer,
  'circuit-board': CircuitBoard,
  'hard-drive': HardDrive,
  'wrench': Hammer
};

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredServices, setFilteredServices] = useState(SERVICES);
  
  // Routing State
  const [currentLocation, setCurrentLocation] = useState<string | null>(null);
  const [currentServiceId, setCurrentServiceId] = useState<string | null>(null);
  const [isSitemap, setIsSitemap] = useState(false);
  
  // Quote Modal State
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceOption | null>(null);
  const [quoteForm, setQuoteForm] = useState({ name: '', phone: '', description: '' });
  const [quoteSent, setQuoteSent] = useState(false);

  // Handle URL Params on Initial Load
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      
      // Check for Sitemap
      if (params.get('page') === 'sitemap') {
        setIsSitemap(true);
        return;
      }

      // Check for Location Param
      const local = params.get('local');
      if (local) {
        const formattedLocal = decodeURIComponent(local).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        setCurrentLocation(formattedLocal);
      }

      // Check for Service Param
      const serviceId = params.get('service');
      if (serviceId) {
          setCurrentServiceId(serviceId);
      }
    } catch (error) {
      console.error("URL Parsing Error:", error);
      // Fallback to home if URL is malformed
      window.history.replaceState({}, '', '/');
    }
  }, []);

  // Set Home Page Title when not in sub-routes
  useEffect(() => {
    if (!currentLocation && !currentServiceId && !isSitemap) {
      document.title = "Jetron - Conserto de MacBook, iPhone e Notebook em Curitiba";
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Jetron Assistência Técnica em Curitiba. Especialistas em conserto de MacBook, iPhone e Notebooks. Laboratório próprio de microeletrônica na PUC PR. Orçamento grátis.');
      }
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (linkCanonical) {
        linkCanonical.setAttribute('href', 'https://jetron.com.br');
      }
    }
  }, [currentLocation, currentServiceId, isSitemap]);

  // Client Side Navigation Handler
  const handleNavigate = (type: 'home' | 'location' | 'service' | 'sitemap', value: string | null) => {
    // 1. FIRST: Update UI State (Critical Path)
    // We update the state first so navigation works even if URL update fails
    if (type === 'location' && value) {
        setCurrentLocation(value);
        setCurrentServiceId(null);
        setIsSitemap(false);
    } else if (type === 'service' && value) {
        setCurrentServiceId(value);
        setCurrentLocation(null);
        setIsSitemap(false);
    } else if (type === 'sitemap') {
        setIsSitemap(true);
        setCurrentLocation(null);
        setCurrentServiceId(null);
    } else {
        // Reset to Home
        setCurrentLocation(null);
        setCurrentServiceId(null);
        setIsSitemap(false);
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // 2. SECOND: Attempt to Update URL (Progressive Enhancement)
    // This is wrapped in try/catch because pushState is often blocked in iframe/blob previews
    try {
      if (type === 'location' && value) {
          const slug = encodeURIComponent(value.toLowerCase().replace(/ /g, '-'));
          window.history.pushState({}, '', `?local=${slug}`);
      } else if (type === 'service' && value) {
          window.history.pushState({}, '', `?service=${value}`);
      } else if (type === 'sitemap') {
          window.history.pushState({}, '', '?page=sitemap');
      } else {
          // Use pathname to be safer in nested paths, or fallback to root
          const path = window.location.pathname || '/';
          window.history.pushState({}, '', path);
      }
    } catch (e) {
      // Silently ignore navigation errors in restricted environments
      console.debug("URL update skipped due to environment restrictions");
    }
  };

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredServices(SERVICES);
    } else {
      setFilteredServices(SERVICES.filter(p => p.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleOpenQuote = (service?: ServiceOption) => {
    setSelectedService(service || null);
    setIsQuoteOpen(true);
    setQuoteSent(false);
  };

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
        setQuoteSent(true);
        setTimeout(() => {
            setIsQuoteOpen(false);
            setQuoteForm({ name: '', phone: '', description: '' });
            setSelectedService(null);
        }, 3000);
    }, 1000);
  };

  const activeService = currentServiceId ? SERVICES.find(s => s.id === currentServiceId) : null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header 
        onOpenQuote={() => handleOpenQuote()} 
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
            handleNavigate('home', null); 
            setSelectedCategory(cat);
        }}
        onNavigateHome={() => handleNavigate('home', null)}
      />
      
      <main className="flex-grow">
        
        {/* Router Switch */}
        {isSitemap ? (
           <SitemapPage onNavigate={handleNavigate} />
        ) : currentLocation ? (
            <LocationPage 
                locationName={currentLocation} 
                onOpenQuote={() => handleOpenQuote()} 
                onBack={() => handleNavigate('home', null)}
            />
        ) : activeService ? (
            <ServiceDetailPage
                service={activeService}
                onOpenQuote={() => handleOpenQuote(activeService)}
                onBack={() => handleNavigate('home', null)}
            />
        ) : (
            <>
                <Hero onOpenQuote={() => handleOpenQuote()} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                  {/* Service Section */}
                  <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                        {selectedCategory === 'all' ? 'Nossos Serviços' : 
                        selectedCategory === 'macbook' ? 'Especialidade MacBook' :
                        selectedCategory === 'iphone' ? 'Clínica iPhone' : 'Reparos Notebook'}
                        </h2>
                        <p className="text-gray-500 mt-2 text-sm">Diagnóstico especializado e rápido para seu equipamento Apple ou PC.</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500 border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-100 cursor-pointer transition-colors bg-white shadow-sm">
                        <Filter className="w-4 h-4 text-red-600" />
                        Filtrar Serviços
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredServices.map(service => (
                      <ProductCard 
                        key={service.id} 
                        service={service} 
                        onSelect={handleOpenQuote}
                        onNavigate={(id) => handleNavigate('service', id)}
                      />
                    ))}
                  </div>

                   {/* Video / Info Section */}
                   <div className="mt-24 bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm flex flex-col lg:flex-row items-center gap-12">
                     <div className="flex-1">
                         <h3 className="text-2xl font-bold text-slate-900 mb-4">Excelência Tecnológica em Curitiba</h3>
                         <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            A Jetron é líder em reparos de alta complexidade. Com equipamentos modernos de análise térmica e solda, resolvemos problemas que outras assistências não conseguem.
                         </p>
                         <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="p-2 bg-red-50 rounded-lg text-red-600 mt-1"><Check className="w-4 h-4" /></div>
                                <div>
                                    <p className="font-semibold text-slate-900">Especialistas em Reballing BGA</p>
                                    <p className="text-sm text-gray-500">Recuperação de chipsets de vídeo e processadores.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="p-2 bg-red-50 rounded-lg text-red-600 mt-1"><Check className="w-4 h-4" /></div>
                                <div>
                                    <p className="font-semibold text-slate-900">Anexo a PUC - Portão 2</p>
                                    <p className="text-sm text-gray-500">Localização segura e estacionamento fácil no Prado Velho.</p>
                                </div>
                            </li>
                         </ul>
                     </div>
                     
                     <div className="flex-1 w-full relative">
                        <div className="relative pt-[56.25%] w-full rounded-2xl overflow-hidden shadow-2xl bg-black group ring-1 ring-gray-100">
                            <iframe 
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/KH_kf_8-LgI?si=5x0tObTpJ8Mccu6I" 
                                title="Jetron Assistência Técnica Curitiba" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                            ></iframe>
                        </div>
                     </div>
                   </div>
                   
                   {/* Blog / Tips Section */}
                   <div className="mt-24">
                      <div className="flex items-center gap-2 mb-8">
                          <Lightbulb className="w-6 h-6 text-red-600" />
                          <h3 className="text-2xl font-bold text-slate-900">Dicas de Manutenção e Cuidados</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {BLOG_POSTS.map(post => (
                          <div key={post.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-48 overflow-hidden">
                              <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                              <h4 className="font-bold text-lg mb-2 text-slate-900">{post.title}</h4>
                              <p className="text-sm text-gray-500 mb-4 line-clamp-3">{post.excerpt}</p>
                              <button 
                                onClick={() => handleOpenQuote()}
                                className="text-red-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                              >
                                Agendar Manutenção <ArrowRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                   </div>

                   {/* SEO Location Links Section */}
                   <div className="mt-24 pt-16 border-t border-gray-200">
                      <div className="flex items-center gap-2 mb-8 justify-center">
                          <MapPin className="w-6 h-6 text-red-600" />
                          <h3 className="text-2xl font-bold text-slate-900">Atendemos Curitiba e Região</h3>
                      </div>
                      <p className="text-center text-gray-500 mb-6 max-w-3xl mx-auto">
                          Encontre a Jetron mais próxima de você. Clique na sua região para ver detalhes do atendimento especializado:
                      </p>
                      <div className="flex flex-wrap gap-3 justify-center max-h-40 overflow-y-auto px-4 scrollbar-hide mask-fade">
                          {ALL_LOCATIONS.slice(0, 20).map((loc, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleNavigate('location', loc)}
                                className="px-3 py-1.5 bg-white border border-gray-200 rounded text-xs text-gray-600 hover:bg-red-600 hover:text-white transition-colors"
                              >
                                {loc}
                              </button>
                          ))}
                      </div>
                      <div className="text-center mt-4">
                        <button onClick={() => handleNavigate('sitemap', null)} className="text-red-600 font-bold text-sm hover:underline">
                            Ver todas as cidades e bairros →
                        </button>
                      </div>
                   </div>

                </div>
            </>
        )}
      </main>

      <Footer onOpenQuote={() => handleOpenQuote()} />
      <ChatAssistant />
      <FloatingControls />

      {/* Quote Modal Slide-over */}
      {isQuoteOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsQuoteOpen(false)}></div>
          <div className="absolute inset-y-0 right-0 pl-4 max-w-full flex sm:pl-16">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-slate-900">Solicitar Orçamento</h2>
                <button onClick={() => setIsQuoteOpen(false)} className="text-gray-400 hover:text-red-600 transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                {!quoteSent ? (
                    <form onSubmit={handleSubmitQuote} className="space-y-6">
                        {selectedService && (
                            <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex items-center gap-4">
                                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm border border-red-100">
                                   {(() => {
                                      const Icon = ICON_COMPONENTS[selectedService.iconKey] || Cpu;
                                      return <Icon className="w-8 h-8 text-red-600" />;
                                   })()}
                                </div>
                                <div>
                                    <p className="text-xs text-red-600 font-bold uppercase mb-1">Serviço Selecionado</p>
                                    <h4 className="font-bold text-slate-900 text-sm">{selectedService.name}</h4>
                                </div>
                            </div>
                        )}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Seu Nome</label>
                            <input 
                                required type="text" 
                                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 p-3 bg-gray-50"
                                placeholder="Digite seu nome completo"
                                value={quoteForm.name}
                                onChange={e => setQuoteForm({...quoteForm, name: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
                            <input 
                                required type="tel" 
                                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 p-3 bg-gray-50"
                                placeholder="(41) 99938-3882"
                                value={quoteForm.phone}
                                onChange={e => setQuoteForm({...quoteForm, phone: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Descrição do Problema</label>
                            <textarea 
                                required rows={4}
                                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 p-3 bg-gray-50"
                                placeholder="Ex: Meu MacBook não liga..."
                                value={quoteForm.description}
                                onChange={e => setQuoteForm({...quoteForm, description: e.target.value})}
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-red-600 transition-colors flex justify-center items-center gap-2">
                            Enviar Solicitação <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <Check className="w-10 h-10 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Solicitação Enviada!</h3>
                        <p className="text-gray-500 mb-8">Conte conosco na Jetron! Entraremos em contato em breve.</p>
                        <button onClick={() => setIsQuoteOpen(false)} className="text-red-600 font-bold hover:underline">Voltar para o site</button>
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
