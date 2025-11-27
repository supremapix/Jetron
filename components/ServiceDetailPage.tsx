import React, { useEffect } from 'react';
import { ServiceOption } from '../types';
import { ArrowLeft, CheckCircle2, MessageCircle, ChevronDown, Wrench, ShieldCheck, MapPin } from 'lucide-react';

interface ServiceDetailPageProps {
  service: ServiceOption;
  onOpenQuote: () => void;
  onBack: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, onOpenQuote, onBack }) => {
  const pageTitle = `${service.name} - Assistência Técnica Jetron em Curitiba`;
  const pageDescription = `Serviço especializado de ${service.name}. ${service.description} Laboratório próprio anexo à PUC PR.`;
  const canonicalUrl = `https://jetron.com.br/?service=${service.id}`;

  useEffect(() => {
    // SEO: Title, Meta Description, Canonical
    document.title = pageTitle;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', pageDescription);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // SEO: Schema Markup (Service + FAQPage)
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": service.name,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Jetron Assistência Técnica",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Imaculada Conceição, 764",
              "addressLocality": "Curitiba",
              "addressRegion": "PR"
            }
          },
          "description": service.description,
          "areaServed": "Curitiba",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços de Reparo",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.name
                }
              }
            ]
          }
        },
        service.faq ? {
          "@type": "FAQPage",
          "mainEntity": service.faq.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        } : null
      ].filter(Boolean)
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      // Cleanup happens naturally on route change
      document.title = "Jetron Tech - Especialistas em Apple & Notebooks";
    };
  }, [service, pageTitle, pageDescription, canonicalUrl]);

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-300">
      
      {/* Hero Header */}
      <div className="relative h-[400px] w-full bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-50">
            <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12">
            <button 
                onClick={onBack}
                className="absolute top-8 left-4 sm:left-8 flex items-center gap-2 text-white/80 hover:text-white bg-black/30 backdrop-blur-md px-4 py-2 rounded-lg transition-colors border border-white/10"
            >
                <ArrowLeft className="w-4 h-4" /> Voltar para Serviços
            </button>

            {service.badge && (
                <span className="inline-block w-fit bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                    {service.badge}
                </span>
            )}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 shadow-lg">{service.name}</h1>
            <p className="text-lg text-gray-300 max-w-2xl">{service.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
                
                {/* Description */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Wrench className="text-red-600 w-6 h-6" /> Detalhes do Serviço
                    </h2>
                    <div className="prose prose-lg text-gray-600 text-justify">
                        {service.longDescription ? (
                            service.longDescription.split('\n').map((paragraph, idx) => (
                                <p key={idx} className="mb-4">{paragraph}</p>
                            ))
                        ) : (
                            <p>{service.description} Entre em contato para saber mais detalhes sobre este procedimento técnico.</p>
                        )}
                    </div>
                </section>

                {/* Features */}
                <section>
                    <h3 className="text-xl font-bold text-slate-900 mb-6">O que está incluso</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <CheckCircle2 className="w-5 h-5 text-red-600 mt-0.5" />
                                <span className="font-medium text-gray-700">{feature}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Section (Accordion) */}
                {service.faq && service.faq.length > 0 && (
                    <section id="faq" className="pt-8 border-t border-gray-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                            <MessageCircle className="text-red-600 w-6 h-6" /> Perguntas Frequentes
                        </h2>
                        <div className="space-y-4">
                            {service.faq.map((item, idx) => (
                                <details key={idx} className="group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all hover:border-red-200">
                                    <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none bg-gray-50/50 hover:bg-gray-50">
                                        <span className="font-bold text-slate-900">{item.question}</span>
                                        <ChevronDown className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-transparent group-open:border-gray-100 bg-white">
                                        <p className="mt-4">{item.answer}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white rounded-2xl border border-gray-200 shadow-xl p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Interessado neste serviço?</h3>
                    <p className="text-gray-500 text-sm mb-6">
                        Solicite um orçamento gratuito. Nosso laboratório na PUC está pronto para receber seu equipamento.
                    </p>

                    <div className="flex flex-col gap-3">
                        <button 
                            onClick={onOpenQuote}
                            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-600/20 transition-all flex items-center justify-center gap-2"
                        >
                            Solicitar Orçamento
                        </button>
                        <a 
                            href={`https://wa.me/5541999383882?text=Olá, gostaria de saber mais sobre o serviço: ${service.name}`}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-600/20 transition-all flex items-center justify-center gap-2"
                        >
                           <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
                        </a>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <ShieldCheck className="w-5 h-5 text-red-600" />
                            <span>Garantia de até 6 meses</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <MapPin className="w-5 h-5 text-red-600" />
                            <span>Anexo a PUC - Portão 2</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <Wrench className="w-5 h-5 text-red-600" />
                            <span>Laboratório Próprio</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};