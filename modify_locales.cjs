const fs = require('fs');

const pt = JSON.parse(fs.readFileSync('locales/pt.json', 'utf8'));

// Hero
pt.hero.badge = 'H2D 3D Printing';
pt.hero.title_main = 'Peças';
pt.hero.title_gradient = 'sob demanda.';
pt.hero.description = 'Fabricação para manutenção, reposição e desenvolvimento de peças técnicas. Produzimos sob medida, mesmo para itens difíceis de encontrar no mercado.';

// Diferenciais
pt.why.advantages = [
  { title: 'Produção rápida', desc: 'Dias, não semanas.' },
  { title: 'Sem necessidade de molde', desc: 'Sem custos de ferramentais.' },
  { title: 'Alta Disponibilidade', desc: 'Ideal para peças descontinuadas ou urgentes.' },
  { title: 'Customização', desc: 'Atendimento técnico personalizado.' }
];

// Intermediaria
pt.why.services = [
  { title: 'Ensaios Mecânicos', desc: 'Possibilidade de ensaios mecânicos sob demanda.' },
  { title: 'Atendimento Técnico Personalizado', desc: 'Desenvolvido por profissional com experiência real de operação e manutenção em campo.' },
  { title: 'Redução de Custos', desc: 'Até 60% mais barato que importação.' },
  { title: 'Matéria adequada', desc: 'Compatibilidade térmica, de pressão e química.' }
];

// Processo
pt.process.steps = [
  { title: 'Avaliação de Viabilidade', desc: 'Avaliação de viabilidade técnica — Até 48h.', tooltip: 'Análise ágil' },
  { title: 'Envio', desc: 'Envio do modelo escaneado ou peça física.', tooltip: 'Digitalização' },
  { title: 'Produção', desc: 'Até 3 dias após conclusão do passo 2.', tooltip: 'Manufatura de precisão' },
  { title: 'Logística', desc: 'Envio — Nacional.', tooltip: 'Logística Nacional' }
];

pt.process.case.badge = 'Exemplo de serviço concluído com sucesso';

// Materiais (Catalogo)
if (pt.materials.general) {
  pt.materials.general.desc = 'Ideal para usos não críticos sem exigências mecânicas.';
  if (pt.materials.general.items && pt.materials.general.items[0]) {
    pt.materials.general.items[0].properties = pt.materials.general.items[0].properties.filter(p => !p.includes('ransparência'));
  }
}

// Aplicações (Tech)
if (!pt.tech) pt.tech = {};
pt.tech.badge = 'Múltiplas Aplicações';
pt.tech.title = 'Aplicações';
pt.tech.title_highlight = '';
pt.tech.desc = 'Ideal para uso industrial em extrema exigência mecânica e térmica.';
pt.tech.items = [
  { title: 'Reposição Funcional', desc: 'Reposição de peças quebradas.' },
  { title: 'Disponibilidade', desc: 'Peças descontinuadas.' },
  { title: 'Prototipagem Ágil', desc: 'Protótipos funcionais.' },
  { title: 'Evolução Contínua', desc: 'Adaptações e melhorias.' },
  { title: 'Customização', desc: 'Ferramentas e suportes personalizados.' }
];

// CTA
pt.cta.desc = 'Nossa equipe analisa a viabilidade e retorna com o orçamento e sugestão de material ideal.';
pt.cta.guarantee = 'Resposta garantida em até 24h.';

fs.writeFileSync('locales/pt.json', JSON.stringify(pt, null, 4));

// Apply similar logic to en.json
const en = JSON.parse(fs.readFileSync('locales/en.json', 'utf8'));

en.hero.badge = 'H2D 3D Printing';
en.hero.title_main = 'Parts';
en.hero.title_gradient = 'on demand.';
en.hero.description = 'Manufacturing for maintenance, replacement and development of technical parts. Custom production, even for hard-to-find items.';

en.why.advantages = pt.why.advantages;
en.why.services = pt.why.services;
en.process.steps = pt.process.steps;
en.process.case.badge = pt.process.case.badge;

if (en.materials.general) {
  en.materials.general.desc = 'Ideal for non-critical uses without mechanical requirements.';
  if (en.materials.general.items && en.materials.general.items[0]) {
    en.materials.general.items[0].properties = [];
  }
}

en.tech.badge = pt.tech.badge;
en.tech.title = pt.tech.title;
en.tech.title_highlight = pt.tech.title_highlight;
en.tech.desc = pt.tech.desc;
en.tech.items = pt.tech.items;
en.cta.desc = pt.cta.desc;
en.cta.guarantee = pt.cta.guarantee;

fs.writeFileSync('locales/en.json', JSON.stringify(en, null, 4));
console.log('Locales successfully updated!');
