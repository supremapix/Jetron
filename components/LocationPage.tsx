import React, { useEffect } from 'react';
import { ShieldCheck, MapPin, Cpu, Smartphone, Laptop, Check, ArrowLeft } from 'lucide-react';

interface LocationPageProps {
  locationName: string;
  onOpenQuote: () => void;
  onBack: () => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ locationName, onOpenQuote, onBack }) => {
  const pageTitle = `Assistência Técnica Apple e Notebook em ${locationName} | Jetron`;
  const pageDescription = `Procurando conserto de MacBook, iPhone ou Notebook em ${locationName}? A Jetron é especialista em reparo de placa lógica e microeletrônica. Atendemos toda região de ${locationName} com laboratório próprio.`;
  const canonicalUrl = `https://jetron.com.br/?local=${encodeURIComponent(locationName.toLowerCase().replace(/ /g, '-'))}`;

  useEffect(() => {
    document.title = pageTitle;
    
    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', pageDescription);

    // Update Canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Schema Markup
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Jetron Assistência Técnica",
      "image": "https://jetron.com.br/logo.png",
      "telephone": "(41) 3018-0964",
      "email": "jetron.reballing@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Imaculada Conceição, 764",
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
        "postalCode": "80215-182",
        "addressCountry": "BR"
      },
      "areaServed": {
        "@type": "Place",
        "name": locationName
      },
      "url": canonicalUrl,
      "priceRange": "$$",
      "description": pageDescription
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      // Cleanup happens but title/meta persistence is fine as next page overwrites or Home renders
      document.title = "Jetron Tech - Especialistas em Apple & Notebooks";
    };
  }, [locationName, pageTitle, pageDescription, canonicalUrl]);

  return (
    <div className="bg-white font-sans animate-in fade-in duration-500">
      {/* Hero Section for Location */}
      <div className="relative bg-black py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-800">
        
        {/* Breadcrumb / Back Link */}
        <div className="absolute top-4 left-4 sm:left-8 z-10">
            <button 
                onClick={onBack}
                className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors bg-black/50 p-2 rounded-lg backdrop-blur-sm hover:bg-black/70 cursor-pointer"
            >
                <ArrowLeft className="w-4 h-4" /> Voltar para Home
            </button>
        </div>

        <div className="absolute inset-0 opacity-30">
             <img src="https://images.unsplash.com/photo-1597872250976-f56565db99c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Placa Mãe" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center pt-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-red-900/40 border border-red-600/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
                <MapPin className="w-3 h-3" /> Atendendo {locationName} e Região
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Assistência Técnica Especializada em <span className="text-red-600">{locationName}</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Se você está em {locationName}, conte com a Jetron para reparos avançados em Apple e Notebooks. Qualidade de laboratório central com atendimento dedicado.
            </p>
            <div className="mt-8">
                <button onClick={onOpenQuote} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-red-900/30 transition-all">
                    Solicitar Orçamento para {locationName}
                </button>
            </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        
        {/* Article 1: General Overview */}
        <article className="prose prose-lg max-w-none">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <ShieldCheck className="text-red-600" /> Soluções Tecnológicas em {locationName}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-justify">
                        Moradores e empresas de <strong>{locationName}</strong> agora contam com a expertise da Jetron Assistência Técnica bem próximo. Sabemos o quanto é frustrante ter um equipamento parado, seja para trabalho, estudo ou lazer. Nossa missão é oferecer um serviço de <strong>conserto de notebooks e celulares</strong> que combine agilidade com profundidade técnica. Diferente de quiosques rápidos, nós possuímos um laboratório completo de microeletrônica.
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4 text-justify">
                        Seja você um residente da região de {locationName} ou tenha um escritório nas proximidades, nosso atendimento busca entender a raiz do problema. Muitas vezes, um equipamento que parece "morto" para leigos, tem salvação através de nossos processos de análise de esquema elétrico e substituição de componentes SMD dedicados. Não condene seu aparelho sem antes consultar a Jetron.
                    </p>
                </div>
                <div className="w-full md:w-1/3">
                    <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&q=80&w=400" alt={`Assistência em ${locationName}`} className="rounded-xl shadow-lg w-full h-64 object-cover" />
                </div>
            </div>
        </article>

        <hr className="border-gray-100" />

        {/* Article 2: MacBook Focus */}
        <article className="prose prose-lg max-w-none">
             <div className="flex flex-col md:flex-row-reverse gap-8 items-center mb-8">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Cpu className="text-red-600" /> Reparo de MacBook e iMac em {locationName}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-justify">
                        Para os usuários Apple em <strong>{locationName}</strong>, a Jetron oferece uma alternativa econômica e segura às autorizadas. Somos especialistas em <strong>Reparo de Placa Lógica de MacBook Pro e Air</strong>. É comum que em {locationName}, usuários enfrentem problemas como "MacBook não liga", "Tela preta" ou danos por líquido (café, água).
                    </p>
                    <p className="text-gray-600 leading-relaxed mt-4 text-justify">
                        Nossa técnica de <strong>Reballing BGA</strong> e micro-soldagem permite que recuperemos a placa original do seu dispositivo, economizando até 70% em relação à troca completa da peça. Se você está em {locationName}, traga seu equipamento para nosso laboratório anexo à PUC (fácil acesso para quem vem de {locationName}). Garantimos a preservação dos dados e a originalidade dos componentes sempre que possível.
                    </p>
                </div>
                <div className="w-full md:w-1/3">
                    <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80&w=400" alt={`Conserto MacBook ${locationName}`} className="rounded-xl shadow-lg w-full h-64 object-cover" />
                </div>
            </div>
        </article>

        <hr className="border-gray-100" />

        {/* Article 3: iPhone Services */}
        <article className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Smartphone className="text-red-600" /> Clínica do iPhone para {locationName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <img src="https://images.unsplash.com/photo-1603539947679-0557e4e46048?auto=format&fit=crop&q=80&w=600" alt={`Reparo iPhone ${locationName}`} className="rounded-xl shadow-lg h-64 w-full object-cover" />
                <div className="text-gray-600 space-y-4 text-justify">
                    <p>
                        Se o seu iPhone quebrou, não arrisque deixá-lo em qualquer lugar em <strong>{locationName}</strong>. A Jetron realiza a <strong>Troca de Vidro</strong> preservando o display original. Isso é fundamental para manter a qualidade de imagem Retina e a sensibilidade do toque original da Apple, algo que telas paralelas vendidas em {locationName} muitas vezes não oferecem.
                    </p>
                    <p>
                        Além disso, somos um dos poucos laboratórios que atendem a região de {locationName} com capacidade para reparar o <strong>Face ID</strong> e erros de placa (como erro de Baseband/Sinal). Se você mora em {locationName}, venha conhecer nosso serviço de troca de bateria com reprogramação de saúde do sistema, garantindo que seu iPhone volte a ter a autonomia de fábrica.
                    </p>
                </div>
            </div>
        </article>

        <hr className="border-gray-100" />

        {/* Article 4: Notebooks */}
        <article className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Laptop className="text-red-600" /> Assistência Técnica de Notebooks em {locationName}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                Atendemos todas as marcas de notebooks (Dell, HP, Acer, Lenovo, Samsung) para clientes de <strong>{locationName}</strong>. Um problema recorrente na região é a quebra de carcaça e dobradiças. A Jetron desenvolveu uma técnica de reconstrução estrutural com resinas industriais, muito mais resistente que a simples colagem.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                Também realizamos upgrades de performance para notebooks antigos em {locationName}. A instalação de SSD NVMe e aumento de memória RAM pode revitalizar sua máquina, tornando-a até 10x mais rápida. Não compre um computador novo antes de fazer um orçamento conosco. Para empresas e home-offices de {locationName}, oferecemos atendimento prioritário para manter sua produtividade em alta.
            </p>
            
            <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-200">
                <h3 className="font-bold text-slate-900 mb-3">Por que clientes de {locationName} escolhem a Jetron?</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-600" /> Laboratório Próprio (Sem terceirização)</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-600" /> Orçamento Gratuito</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-600" /> Especialistas em Placa Mãe</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-red-600" /> Garantia Estendida</li>
                </ul>
            </div>
        </article>

      </div>
    </div>
  );
};