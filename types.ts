export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceOption {
  id: string;
  name: string;
  description: string;
  longDescription?: string; // Descrição detalhada para a página de serviço
  category: 'macbook' | 'notebook' | 'iphone';
  image: string;
  features: string[];
  startingPrice?: number; // Preço estimado ou "A partir de"
  badge?: string; // Tag para "Premium" ou "Especializado"
  faq?: FAQItem[]; // Perguntas frequentes específicas do serviço
}

export interface QuoteRequest {
  serviceId: string;
  serviceName: string;
  customerName: string;
  customerPhone: string;
  problemDescription: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}