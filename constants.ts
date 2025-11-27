
import { ServiceOption } from './types';

export const BLOG_POSTS = [
  {
    id: 1,
    title: "MacBook esquentando muito? Saiba o que fazer",
    excerpt: "O superaquecimento em MacBooks Pro e Air é um sinal de alerta. Pode ser desde sujeira no cooler até pasta térmica seca. Saiba como nossa limpeza preventiva em Curitiba evita a queima da placa lógica.",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    title: "Bateria do iPhone durando pouco: Trocar ou Configurar?",
    excerpt: "Se a saúde da bateria está abaixo de 80%, a performance do iPhone cai. Na Jetron Prado Velho, trocamos a bateria e reprogramamos o chip BMS para mostrar 100% novamente no sistema.",
    image: "https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    title: "Tela Azul ou Notebook que não liga?",
    excerpt: "Muitas assistências condenam a placa-mãe. Aqui na Jetron Tech, usamos análise térmica para encontrar o curto-circuito e reparar apenas o componente defeituoso, economizando seu dinheiro.",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=400"
  }
];

export const SERVICES: ServiceOption[] = [
  // MacBooks
  {
    id: 'mb-logic-board',
    name: 'Reparo de Placa Lógica (Logic Board)',
    category: 'macbook',
    description: 'Especialidade Jetron: Recuperação via Reballing BGA e Micro-soldagem. Ao invés de trocar a placa inteira, restauramos a original.',
    longDescription: `
      O **conserto de Placa Lógica de MacBook em Curitiba** é a especialidade central da Jetron. A placa lógica (Logic Board) é o "cérebro" do seu MacBook, contendo o processador, memória, chip de segurança T2/M1/M2 e circuitos de alimentação.
      
      Muitas assistências técnicas em Curitiba condenam a placa inteira quando ocorre um curto-circuito ou falha na solda, cobrando valores exorbitantes pela troca da peça completa (que muitas vezes é usada).
      
      Nós fazemos diferente: analisamos o esquema elétrico do equipamento, identificamos o componente exato que falhou (um capacitor, resistor, chip de gerenciamento de energia ou solda fria no processador) e realizamos a substituição ou reflow cirúrgico.
      
      **Principais Sintomas atendidos:** MacBook que não liga, MacBook com tela preta, MacBook travando ou reiniciando, cheiro de queimado.
      
      ### O Desafio do Chip de Segurança T2 e Apple Silicon
      Modelos de MacBook Pro e Air (2018 em diante) possuem o chip de segurança T2 (ou processadores Apple Silicon M1/M2/M3). Este componente crítico controla o boot, a criptografia do SSD, o Touch ID e a câmera.
      
      **Falhas Comuns do Chip T2:**
      *   **MacBook "Bricked" (Tijolo):** O aparelho não liga e não dá sinal de vida, frequentemente causado por corrupção de firmware no BridgeOS.
      *   **Falha de Comunicação:** O T2 para de se comunicar com o processador Intel devido a falhas nas linhas de dados (eSPI).
      *   **Curto na Alimentação:** Falha nos conversores Buck que alimentam o T2 com 1.8V ou 0.9V.

      **Diagnóstico e Solução Jetron:**
      Utilizamos analisadores de protocolo e softwares específicos (Apple Configurator 2) para colocar o T2 em modo DFU e tentar a restauração do firmware sem perda de dados (Revive). Se o problema for físico, realizamos a micro-soldagem dos componentes ao redor do chip ou, em casos extremos, o Reballing do próprio Chip T2.

      **⚠️ Riscos de Reparos Não Especializados:**
      O Chip T2 é pareado com o botão Power (Touch ID) e a placa lógica. Intervenções amadoras ou calor excessivo podem **matar permanentemente** o chip, tornando os dados criptografados no SSD irrecuperáveis para sempre. Na Jetron, seguimos protocolos rigorosos de temperatura e isolamento térmico para garantir a integridade do chip de segurança.
      
      Utilizamos equipamentos de ponta, microscópios de alta precisão e soldas de liga premium para garantir que o reparo seja duradouro e confiável. Somos referência em **reparo de placa Apple no Paraná**.
    `,
    iconKey: 'cpu',
    features: ['Reballing BGA Certificado', 'Recuperação de Chip T2', 'Microscopia Avançada', 'Garantia de 6 meses'],
    startingPrice: 480.00,
    badge: 'Especializado',
    faq: [
      {
        question: "O que é Reballing BGA?",
        answer: "Reballing é o processo técnico de reconstrução das esferas de solda que conectam chips importantes (como Processador e Placa de Vídeo) à placa-mãe. Com o tempo e o aquecimento, a solda original de fábrica pode trincar (solda fria), causando falhas onde o Mac liga mas não dá vídeo, ou desliga sozinho. Nós removemos o chip, limpamos a solda velha e aplicamos novas esferas de liga superior, resolvendo o problema definitivamente."
      },
      {
        question: "Meu Mac tem chip T2. Vocês consertam?",
        answer: "Sim. Somos especialistas na arquitetura T2 e Apple Silicon (M1/M2/M3). Temos as ferramentas necessárias para recuperar o firmware (BridgeOS) e reparar os circuitos de alimentação deste chip de segurança, algo que poucas assistências fazem."
      },
      {
        question: "Quanto tempo dura um reparo de placa/reballing?",
        answer: "Quando executado corretamente com equipamentos industriais (como fazemos na Jetron) e usando solda com chumbo (que é mais flexível e resistente a variações térmicas que a original 'lead-free'), o reparo é definitivo. Oferecemos garantia de 6 meses, superior à média do mercado, pois confiamos na durabilidade do nosso processo."
      },
      {
        question: "É melhor reparar a placa ou trocar ela inteira?",
        answer: "Em 95% dos casos, reparar a placa original é a melhor opção. Primeiro pela economia: o reparo custa entre 30% a 50% do valor de uma placa nova. Segundo, você mantém a serialização original dos componentes (importante para FaceID/TouchID e dados criptografados). A troca da placa só é recomendada quando há danos irreversíveis no PCB (furos, trilhas rompidas internamente)."
      },
      {
        question: "Meu MacBook foi condenado por outra loja. Ainda tem conserto?",
        answer: "Sim! Recebemos diariamente equipamentos condenados por autorizadas ou assistências genéricas que não possuem laboratório de microeletrônica. Como eles não sabem reparar o circuito, eles apenas oferecem a troca da placa (que é caríssima). Traga para uma avaliação sem compromisso em nosso laboratório anexo à PUC."
      }
    ]
  },
  {
    id: 'mb-liquid',
    name: 'Desoxidação (Banho Químico)',
    category: 'macbook',
    description: 'Caiu água, café ou líquido no MacBook? Desligue imediatamente e traga para nós. Realizamos limpeza ultrassônica para evitar corrosão da placa.',
    iconKey: 'droplets',
    features: ['Limpeza Ultrassônica', 'Prevenção de curto', 'Recuperação de dados'],
  },
  {
    id: 'mb-screen',
    name: 'Troca de Tela / Flexgate',
    category: 'macbook',
    description: 'Reparo de falhas na iluminação (Flexgate) ou troca completa do display retina quebrado.',
    iconKey: 'monitor',
    features: ['Peças Originais', 'Ajuste de dobradiça', 'Preservação do True Tone'],
  },
  {
    id: 'mb-keyboard',
    name: 'Teclado e Topcase',
    category: 'macbook',
    description: 'Teclas colando ou repetindo? Trocamos apenas o teclado ou o topcase completo (alumínio + bateria) para deixar seu Mac novo.',
    iconKey: 'keyboard',
    features: ['Padrão ABNT2 ou US', 'Limpeza interna inclusa', 'Ajuste de trackpad'],
  },
  
  // iPhones
  {
    id: 'ip-glass',
    name: 'Troca de Vidro (Refurb)',
    category: 'iphone',
    description: 'O display funciona e o touch está ok? Trocamos apenas o vidro quebrado. Mantém sua tela Original Apple e economiza até 50%.',
    iconKey: 'smartphone',
    features: ['Mantém Display Original', 'Sem erro de peça', 'Vidro temperado de brinde'],
    startingPrice: 250.00
  },
  {
    id: 'ip-faceid',
    name: 'Reparo de Face ID',
    category: 'iphone',
    description: 'Seu iPhone avisa "Face ID indisponível" ou não foca no modo retrato? Reparamos o módulo TrueDepth sem perder a segurança.',
    iconKey: 'scan-face',
    features: ['Micro soldagem', 'Calibração de sensores', 'Garantia estendida'],
    badge: 'Premium'
  },
  {
    id: 'ip-battery',
    name: 'Troca de Bateria Premium',
    category: 'iphone',
    description: 'Bateria inchada ou durando pouco? Instalamos baterias de alta performance com reprogramação da saúde (porcentagem) no sistema.',
    iconKey: 'battery',
    features: ['Saúde em 100%', 'Vedação IP68 refeita', 'Transplante de BMS'],
  },
  {
    id: 'ip-rear',
    name: 'Troca de Tampa Traseira',
    category: 'iphone',
    description: 'Vidro traseiro quebrado? Utilizamos máquina à laser para remover o vidro antigo sem precisar abrir todo o aparelho.',
    iconKey: 'hammer',
    features: ['Tecnologia Laser', 'Acabamento perfeito', 'Mantém carregamento sem fio'],
  },

  // Notebooks
  {
    id: 'nb-structure',
    name: 'Reconstrução de Carcaça',
    category: 'notebook',
    description: 'Dobradiça quebrou ou a carcaça abriu? Fazemos a reconstrução estrutural com resina industrial e pintura original.',
    iconKey: 'wrench',
    features: ['Mais resistente que novo', 'Ajuste de pressão', 'Estética original'],
    startingPrice: 180.00
  },
  {
    id: 'nb-board',
    name: 'Reparo de Placa (Curto)',
    category: 'notebook',
    description: 'Notebook Dell, HP, Lenovo ou Acer que não liga? Identificamos e trocamos componentes em curto na placa mãe.',
    longDescription: `
      O **reparo de placa de notebook em Curitiba** é a solução ideal para equipamentos que não ligam, não dão vídeo ou apresentam "tela azul".
      
      Atendemos todas as principais marcas: Dell, Acer, Lenovo, HP, Samsung e Asus. Ao invés de condenar seu notebook, nossa equipe técnica utiliza análise de esquemas elétricos para encontrar o defeito no nível do componente (SMD).
      
      **Problemas comuns resolvidos:**
      - Curto no circuito de entrada (19V)
      - Falha no circuito de carga da bateria
      - Superaquecimento (chipset BGA)
      - Notebook liga mas não dá imagem (BGA/Memória)
      
      Traga seu notebook para a Jetron no Prado Velho para um diagnóstico preciso.
    `,
    iconKey: 'circuit-board',
    features: ['Análise térmica', 'Componentes novos', 'Teste de estresse 24h'],
    badge: 'Especializado'
  },
  {
    id: 'nb-upgrade',
    name: 'Upgrade SSD NVMe + RAM',
    category: 'notebook',
    description: 'Seu notebook está lento? A instalação de um SSD NVMe pode deixá-lo até 10x mais rápido que o HD tradicional.',
    iconKey: 'hard-drive',
    features: ['Clonagem de sistema', 'Windows Original', 'Limpeza interna inclusa'],
    startingPrice: 250.00
  }
];

export const CURITIBA_NEIGHBORHOODS = [
  "Vila Parolin", "Vila Torres", "Jardim Schaffer", "Vila Sabará", "Boqueirão de Baixo", "Boqueirão de Cima", "Tanguá", 
  "Vila Zumbi", "Abranches de Baixo", "Abranches de Cima", "Vila Nossa Senhora da Luz", "Vila Tecnológica", "Vila Oficinas", 
  "Vila Fanny", "Vila Hauer", "Batel Soho", "Alto da Rua XV", "CIC Norte", "CIC Central", "CIC Sul", "Vila Guaíra", 
  "Centro Histórico", "Ecoville", "Carmo Abranches", "Água Verde", "Ahú (Alto da Glória)", "Alto Boqueirão", "Alto da Glória", 
  "Alto da XV", "Atuba", "Augusta", "Bacacheri", "Bairro Alto", "Barreirinha", "Batel", "Bigorrilho (Champagnat)", "Boa Vista", 
  "Bom Retiro", "Boqueirão", "Butiatuvinha", "Cabral", "Cachoeira", "Cajuru", "Campina do Siqueira", "Campo Comprido", 
  "Campo de Santana", "Capão da Imbuia", "Capão Raso", "Cascatinha", "Caximba", "Centro", "Centro Cívico", 
  "Cidade Industrial de Curitiba (CIC)", "Cristo Rei", "Fanny", "Fazendinha", "Ganchinho", "Guabirotuba", "Guaíra", "Hauer", 
  "Hugo Lange", "Jardim Botânico", "Jardim das Américas", "Jardim Social", "Juvevê", "Lamenha Pequena", "Lindóia", "Mercês", 
  "Mossunguê", "Novo Mundo", "Orleans", "Parolin", "Pilarzinho", "Pinheirinho", "Portão", "Prado Velho", "Rebouças", "Riviera", 
  "Santa Cândida", "Santa Felicidade", "Santa Quitéria", "Santo Inácio", "São Braz", "São Francisco", "São João", "São Lourenço", 
  "São Miguel", "Vila Pantanal", "Seminário", "Sítio Cercado", "Taboão", "Tarumã", "Tatuquara", "Tingui", "Uberaba", "Umbará", 
  "Vila Izabel", "Vista Alegre", "Xaxim", "Santa Quitéria Velha", "Portão Velho", "Guaíra Velho", "Uberaba de Cima", 
  "Uberaba de Baixo", "São Braz Velho", "Cidade Industrial (CIC)", "Vila Verde", "Vila Barigui", "Caiuá", "Xaxim Velho", 
  "Fazendinha-Portão", "Campo Comprido Velho", "Bacacheri Velho", "Capão da Imbuia Velho", "Pinheirinho Velho", 
  "Vila São Pedro (Uberaba)", "Vila Osternack (Sítio Cercado)", "Conjunto Caiuá (CIC)", "Conjunto Parigot de Souza (CIC)", 
  "Vila Nossa Senhora da Luz (CIC)", "Vila Reno (CIC)", "Vila Audi (CIC)"
];

export const METRO_CITIES = [
  "Curitiba", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", "Balsa Nova", "Bocaiúva do Sul", 
  "Campina Grande do Sul", "Campo do Tenente", "Campo Largo", "Campo Magro", "Cerro Azul", "Colombo", "Contenda", 
  "Doutor Ulysses", "Fazenda Rio Grande", "Itaperuçu", "Lapa", "Mandirituba", "Piên", "Pinhais", "Piraquara", "Quatro Barras", 
  "Quitandinha", "Rio Branco do Sul", "Rio Negro", "São José dos Pinhais", "Tijucas do Sul", "Tunas do Paraná"
];

// Combine unique locations and sort
export const ALL_LOCATIONS = Array.from(new Set([...CURITIBA_NEIGHBORHOODS, ...METRO_CITIES])).sort();
