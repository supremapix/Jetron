import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

export const sendMessageToGemini = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  // Safe access to process.env to prevent "Uncaught ReferenceError: process is not defined"
  const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : '';
  
  if (!apiKey) {
    return "O assistente técnico está offline. Por favor, entre em contato diretamente pelo WhatsApp.";
  }

  try {
    // Initialize inside the function scope
    const ai = new GoogleGenAI({ apiKey });
    const model = "gemini-2.5-flash";
    const systemInstruction = `
      Você é o "Consultor Técnico Sênior" da Jetron Assistência Técnica.
      Somos um laboratório especializado em Apple (MacBook, iPhone, iMac) e Notebooks premium, com foco em Reballing e Microeletrônica.
      
      INFORMAÇÕES CRUCIAIS DA LOJA:
      - Endereço: Anexo a PUC - Portão 2 (Rua Imaculada Conceição, 764, Prado Velho, Curitiba, PR).
      - Telefone Fixo: (41) 3018-0964
      - WhatsApp/Celular: (41) 99938-3882
      - E-mail: jetron.reballing@gmail.com
      
      Seu objetivo: Realizar uma triagem técnica inicial e convencer o cliente a trazer o aparelho ao nosso endereço no Prado Velho/PUC.
      
      Nossos diferenciais que você deve mencionar quando pertinente:
      - Especialistas em Reballing (recuperação de solda BGA).
      - Reparo de Placa Lógica (Microeletrônica) ao invés de trocar a peça inteira.
      - Estamos anexos à PUC no portão 2, fácil localização.
      
      Diretrizes de resposta:
      1. Seja cordial, técnico mas acessível.
      2. Tente identificar o modelo exato e o sintoma.
      3. Se o cliente perguntar onde fica, dê o endereço completo: "Anexo a PUC - Portão 2, Rua Imaculada Conceição, 764".
      4. SEMPRE finalize com uma chamada para ação: "Venha nos visitar no Prado Velho ou clique em 'Pedir Orçamento' para adiantar seu atendimento."
      
      Evite dar preços exatos. Diga "A partir de..." ou "Precisamos avaliar em bancada aqui na loja".
    `;

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.4, // Baixa temperatura para respostas mais consistentes e profissionais
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    // Ensure we always return a string, never an object
    const responseText = result.text;
    if (typeof responseText === 'string') {
      return responseText;
    }
    return "Desculpe, poderia repetir o sintoma do aparelho?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Estou reconectando com o servidor. Por favor, tente novamente em alguns instantes.";
  }
};