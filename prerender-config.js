// Configuration for Prerendering Systems (e.g., prerender-spa-plugin, react-snap)
// This file defines the routes that should be statically generated into HTML.

// Manually duplicating lists to avoid importing TS files in Node environment
const CURITIBA_NEIGHBORHOODS = [
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

const METRO_CITIES = [
  "Curitiba", "Adrianópolis", "Agudos do Sul", "Almirante Tamandaré", "Araucária", "Balsa Nova", "Bocaiúva do Sul", 
  "Campina Grande do Sul", "Campo do Tenente", "Campo Largo", "Campo Magro", "Cerro Azul", "Colombo", "Contenda", 
  "Doutor Ulysses", "Fazenda Rio Grande", "Itaperuçu", "Lapa", "Mandirituba", "Piên", "Pinhais", "Piraquara", "Quatro Barras", 
  "Quitandinha", "Rio Branco do Sul", "Rio Negro", "São José dos Pinhais", "Tijucas do Sul", "Tunas do Paraná"
];

const SERVICE_IDS = [
  'mb-logic-board', 'mb-liquid', 'mb-screen', 'mb-keyboard',
  'ip-glass', 'ip-faceid', 'ip-battery', 'ip-rear',
  'nb-structure', 'nb-board', 'nb-upgrade'
];

const routes = [
  '/',
  '/sitemap'
];

// Generate routes for all services
SERVICE_IDS.forEach(id => {
  routes.push(`/?service=${id}`);
});

// Generate routes for all neighborhoods
CURITIBA_NEIGHBORHOODS.forEach(hood => {
  const slug = encodeURIComponent(hood.toLowerCase().replace(/ /g, '-'));
  routes.push(`/?local=${slug}`);
});

// Generate routes for all cities
METRO_CITIES.forEach(city => {
  const slug = encodeURIComponent(city.toLowerCase().replace(/ /g, '-'));
  routes.push(`/?local=${slug}`);
});

module.exports = {
  routes: routes,
  // Instructions for renderer
  rendererConfig: {
    renderAfterDocumentEvent: 'custom-render-trigger',
    headless: true,
    maxConcurrentRoutes: 10
  }
};