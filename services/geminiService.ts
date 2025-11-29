import { ChatMessage } from "../types";

const RESPONSES: Record<string, string> = {
  'ola': 'Olá! Bem-vindo à Jetron Assistência Técnica. Sou o Consultor Técnico da Jetron. Como posso ajudá-lo hoje? Você tem algum problema com seu equipamento Apple ou PC?',
  'macbook': 'Entendo que é um MacBook. Qual é o sintoma exato? Não liga, tela preta, trava frequentemente, esquentando muito? Com essa informação posso fazer uma triagem melhor.',
  'iphone': 'Você está com problema no iPhone. Descreva o sintoma: não liga, tela quebrada, bateria ruim, molhado? Precisamos de detalhes para avaliar melhor.',
  'notebook': 'Seu notebook está com algum problema. Qual é o sintoma? Pode ser esquentamento, não liga, tela danificada? Descreva-o para que eu possa ajudar.',
  'endereco': 'Estamos localizados no Anexo a PUC - Portão 2 (Rua Imaculada Conceição, 764, Prado Velho, Curitiba, PR). Fica fácil de localizar e temos estacionamento disponível.',
  'whatsapp': 'Você pode nos contactar diretamente pelo WhatsApp: (41) 99938-3882. Responderemos sua solicitação rapidamente lá.',
  'default': 'Entendi sua dúvida. Para um diagnóstico mais preciso e orçamento, recomendo descrever o problema com detalhes ou clicar em "Pedir Orçamento" para que nossa equipe técnica avalie seu equipamento. Estamos prontos para ajudar!'
};

export const sendMessageToGemini = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  const lowerMessage = newMessage.toLowerCase();

  for (const [keyword, response] of Object.entries(RESPONSES)) {
    if (lowerMessage.includes(keyword)) {
      return response;
    }
  }

  return RESPONSES.default;
};