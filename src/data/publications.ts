import recuperacaoRuralHero from "@/assets/publications/recuperacao-rural-hero.jpg";
import rodrigoVitalinoAutor from "@/assets/rodrigo-vitalino-autor.png";

export interface Publication {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  category: string;
  categorySlug: string;
  heroImage?: string;
  content?: string;
  authorSection?: {
    name: string;
    description: string;
    photo: string;
  };
}

/**
 * Generate URL-friendly slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .replace(/^-|-$/g, "") // Remove leading/trailing hyphens
    .substring(0, 80); // Limit length
}

/**
 * Category slug mapping
 */
export const categorySlugMap: Record<string, string> = {
  "Direito Empresarial": "direito-empresarial",
  "Direito Trabalhista": "direito-trabalhista",
  "Direito Tributário": "direito-tributario",
  "Direito Internacional": "direito-internacional",
  "Direito Rural": "direito-rural",
  "Direito Civil": "direito-civil",
};

export const categoryFromSlug: Record<string, string> = Object.fromEntries(
  Object.entries(categorySlugMap).map(([k, v]) => [v, k])
);

export const categories = [
  "Todas",
  "Direito Empresarial",
  "Direito Trabalhista",
  "Direito Tributário",
  "Direito Internacional",
  "Direito Rural",
];

/**
 * Publications data with SEO-friendly slugs
 */
export const publications: Publication[] = [
  {
    id: 8,
    slug: "recuperacao-judicial-produtor-rural-lei-14112",
    title: "Recuperação Judicial do Produtor Rural – Lei 14.112/20",
    subtitle: "Proteção patrimonial e reestruturação de dívidas no agronegócio",
    excerpt: "A Lei 14.112/20 ampliou o acesso à recuperação judicial para produtores rurais, permitindo a preservação de negócios viáveis e a reorganização de obrigações financeiras.",
    date: "2026-01-20",
    category: "Direito Rural",
    categorySlug: "direito-rural",
    heroImage: recuperacaoRuralHero,
    content: `---


### A Lei 14.112/2020 e o Produtor Rural

A Lei 14.112/2020 trouxe avanços significativos para o agronegócio brasileiro, ampliando o acesso dos produtores rurais ao instituto da recuperação judicial. Antes dessa alteração, muitos agricultores e pecuaristas encontravam barreiras legais para buscar a reestruturação de suas dívidas de forma organizada.

**Principais inovações da lei:**
- Possibilidade de recuperação judicial para produtores rurais pessoa física
- Flexibilização de requisitos de tempo de atividade
- Proteção do patrimônio essencial à continuidade da produção
- Suspensão de ações e execuções contra o devedor

### Quando Considerar a Recuperação Judicial

A recuperação judicial deve ser avaliada quando o produtor rural enfrenta:
- Acúmulo de dívidas bancárias e com fornecedores
- Risco iminente de perda de terras ou maquinário por execução
- Dificuldade de renegociação direta com credores
- Leilões extrajudiciais agendados sobre propriedades

### Benefícios da Recuperação Judicial

**Para o produtor:**
- Suspensão de cobranças e execuções por 180 dias (stay period)
- Oportunidade de apresentar plano de pagamento aos credores
- Preservação dos bens essenciais à atividade rural
- Manutenção da produção e geração de renda durante o processo

**Para a economia:**
- Manutenção de empregos no campo
- Preservação da cadeia produtiva do agronegócio
- Recuperação de créditos de forma ordenada pelos credores

### Atuação Especializada

Nossa atuação abrange todas as etapas do processo de recuperação:

1. **Análise de viabilidade:** Diagnóstico financeiro e jurídico da situação do produtor
2. **Elaboração do pedido:** Preparação da documentação e petição inicial
3. **Negociação com credores:** Mediação para construção do plano de recuperação
4. **Contestação de leilões:** Ação imediata para suspender alienações forçadas
5. **Acompanhamento judicial:** Defesa dos interesses do produtor em todas as instâncias

### Considerações Finais

A recuperação judicial representa uma ferramenta poderosa para produtores rurais que enfrentam crises financeiras, mas desejam manter suas atividades e honrar seus compromissos de forma sustentável.

A orientação jurídica especializada é fundamental para avaliar a viabilidade do pedido e conduzir o processo de forma estratégica, maximizando as chances de êxito na reestruturação das dívidas.

---

::author::`,
    authorSection: {
      name: "Dr. Rodrigo Vitalino",
      description: `Sou advogado com atuação voltada à Recuperação Judicial de empresas, renegociação e reestruturação de dívidas rurais, além de contestação e suspensão de leilões extrajudiciais.

Minha prática profissional é orientada pelo compromisso de preservar negócios viáveis e assegurar o patrimônio de empresários e produtores que enfrentam dificuldades financeiras.

Com uma abordagem técnica e estratégica, busco soluções jurídicas eficazes que permitam reorganizar obrigações, evitar perdas patrimoniais e restabelecer o equilíbrio econômico, sempre pautado pela ética, transparência e profissionalismo.`,
      photo: rodrigoVitalinoAutor
    }
  },
  {
    id: 7,
    slug: "semana-internacional-direito-portugal-2026",
    title: "Semana Internacional de Direito em Portugal 2026: Oportunidade para Internacionalizar Sua Carreira",
    subtitle: "Evento presencial no Porto com imersão acadêmica e networking global",
    excerpt: "Evento presencial no Porto reúne advogados, estudantes e gestores para imersão acadêmica, networking global e certificação internacional em abril de 2026.",
    date: "2026-01-19",
    category: "Direito Internacional",
    categorySlug: "direito-internacional",
    authorSection: {
      name: "CJ Arthur Vitalino",
      description: "Especialista em Direito Internacional",
      photo: "/lovable-uploads/arthur-vitalino.png"
    },
    content: `## Internacionalização Jurídica: Por Que Atuar Além das Fronteiras?

A advocacia contemporânea exige competências que ultrapassam os limites territoriais. O mercado jurídico globalizado demanda profissionais capacitados a compreender tratados, convenções internacionais e as dinâmicas de cooperação entre jurisdições. Nesse contexto, eventos de imersão acadêmica e networking internacional ganham relevância estratégica.

A I Semana Internacional de Direito – Portugal, programada para abril de 2026, representa uma dessas oportunidades singulares de desenvolvimento profissional.

### Estrutura do Evento

O programa ocorrerá entre os dias **12 e 17 de abril de 2026**, na cidade do Porto, com atividades presenciais organizadas pela Universidade Portucalense (UPT), em parceria com a Internazionale Juris Academy e a FOL Academy.

**Formato da experiência:**
- 28 horas de aulas e palestras presenciais
- Certificação tripla: UPT, Internazionale Juris Academy e FOL Academy
- Visitas institucionais ao Palácio da Relação do Porto e à Universidade de Coimbra
- Rodadas de negócios entre profissionais do Brasil, Portugal, Europa e EUA

### Principais Temas Abordados

O conteúdo programático abrange áreas essenciais para quem pretende expandir a atuação profissional internacionalmente:

**Direito Internacional e Cooperação:**
- Acordos e Tratados Internacionais Brasil-Portugal
- Crimes Transnacionais e Cooperação Penal Brasil-Europa
- Subtração Internacional de Menores e Convenção de Haia
- Contratos Transnacionais e Mobilidade Profissional

**Planejamento e Gestão:**
- Planejamento Sucessório em Contexto Internacional
- Aposentadoria Especial com Aproveitamento de Tempo Internacional
- Estratégias de Networking e Expansão de Escritórios

**Desenvolvimento Profissional:**
- Ferramentas Tecnológicas para Gestão Jurídica
- Posicionamento e Marca Profissional Global
- Inteligência e Postura em Comunicação

### Considerações Finais

A participação em eventos de imersão internacional representa investimento estratégico na carreira jurídica. A combinação de formação acadêmica, certificação reconhecida e networking qualificado oferece retorno tangível para profissionais que desejam se diferenciar em um mercado cada vez mais competitivo e globalizado.

---

*Publicado por Rodrigo Vitalino Advogados*`,
  },
  {
    id: 6,
    slug: "obrigacoes-empresariais-2026-guia-gestores",
    title: "Obrigações Empresariais em 2026: Guia Completo para Gestores",
    subtitle: "Adequação fiscal, tecnológica e contábil no novo cenário regulatório",
    excerpt: "O novo cenário regulatório exige adequação fiscal, tecnológica e contábil das empresas. Conheça as principais exigências da Reforma Tributária e como se preparar.",
    date: "2026-01-19",
    category: "Direito Empresarial",
    categorySlug: "direito-empresarial",
    content: `## Novo Marco Regulatório Empresarial: Prepare Sua Empresa para 2026

O ano de 2026 inaugura uma nova fase na gestão empresarial brasileira. Com o início da transição da Reforma Tributária e mudanças expressivas nos campos fiscal, contábil e tecnológico, as organizações enfrentam um cenário que demanda não apenas conformidade documental, mas verdadeira reorganização de processos internos.

### 1. Reformulação dos Documentos Fiscais Eletrônicos

Uma das exigências mais imediatas refere-se à atualização dos documentos fiscais. A partir de janeiro de 2026, notas fiscais devem contemplar campos específicos para a CBS (Contribuição sobre Bens e Serviços) e o IBS (Imposto sobre Bens e Serviços).

**Ações necessárias:**
- Atualização dos sistemas emissores de notas fiscais
- Revisão das parametrizações tributárias
- Capacitação das equipes responsáveis pela emissão

### 2. Operação Simultânea de Dois Regimes Tributários

Durante o período de transição (2026-2032), as empresas operam com dois sistemas tributários paralelos: o atual e o novo modelo da Reforma.

### Recomendações para Empresários e Gestores

**Ações imediatas:**
1. Realizar diagnóstico completo da situação fiscal atual
2. Investir na atualização dos sistemas de gestão
3. Capacitar equipes sobre as novas regras
4. Estabelecer rotinas de conferência e compliance
5. Buscar assessoria jurídica especializada para planejamento tributário

---

*Publicado por Rodrigo Vitalino Advogados*`,
    authorSection: {
      name: "Dr. Deidre Scaranello",
      description: "Advogada especialista em Direito Empresarial",
      photo: "/lovable-uploads/deidre-scaranello-fixed.png"
    }
  },
  {
    id: 5,
    slug: "mudancas-trabalhistas-2026-portaria-mte",
    title: "Mudanças Trabalhistas a partir de 2026: O Que Sua Empresa Precisa Saber",
    subtitle: "Portaria MTE nº 1/2025 moderniza fiscalização e consolida eSocial",
    excerpt: "A Portaria Consolidada MTE nº 1/2025 moderniza as relações de trabalho com fiscalização 100% digital, novos prazos de admissão e consolidação do eSocial.",
    date: "2026-01-18",
    category: "Direito Trabalhista",
    categorySlug: "direito-trabalhista",
    content: `## Nova Era das Relações Trabalhistas: Portaria Consolidada MTE nº 1/2025

O cenário das obrigações trabalhistas no Brasil passou por uma transformação significativa. Com a entrada em vigor da Portaria Consolidada MTE nº 1/2025, em 02 de janeiro de 2026, o Ministério do Trabalho e Emprego consolidou regras que impactam diretamente o Departamento Pessoal e o RH das empresas.

### Principais Disposições da Portaria

**Fiscalização Integralmente Digitalizada**

O Domicílio Eletrônico Trabalhista (DET) assume protagonismo como canal exclusivo de comunicação oficial entre o MTE e os empregadores.

**Novas Regras de Admissão e Registro:**
- **Prazo antecipado de registro:** O empregador deve registrar a admissão até o dia anterior ao início efetivo das atividades
- **CPF como identificador único:** O número do CPF passa a ser o dado suficiente para registro na CTPS Digital
- **eSocial como base exclusiva:** Todas as anotações contratuais devem ser realizadas via eSocial

---

*Publicado por Rodrigo Vitalino Advogados*`,
  },
  {
    id: 1,
    slug: "reforma-tributaria-lc-227-2026-ibs-itcmd-itbi",
    title: "Reforma Tributária Avança: LC 227/2026 Define Novas Regras para IBS, ITCMD e ITBI",
    subtitle: "Segunda fase da Reforma estabelece Comitê Gestor e altera transmissão de bens",
    excerpt: "A regulamentação da segunda fase da Reforma Tributária estabelece o Comitê Gestor do IBS e traz mudanças significativas para impostos sobre transmissão de bens.",
    date: "2026-01-15",
    category: "Direito Tributário",
    categorySlug: "direito-tributario",
    authorSection: {
      name: "Dra. Elisandra Sousa Barbosa",
      description: "Advogada especialista em Direito Tributário",
      photo: "/lovable-uploads/elisandra-sousa.png"
    },
    content: `## A Nova Etapa da Reforma Tributária Entra em Vigor

O Governo Federal oficializou mais um capítulo importante da Reforma Tributária brasileira. Com a sanção presidencial do Projeto de Lei Complementar nº 108/2024, nasceu a Lei Complementar nº 227/2026.

### O Que Muda na Prática

A principal inovação é a criação do Comitê Gestor do Imposto sobre Bens e Serviços (CG-IBS), responsável por coordenar a arrecadação, fiscalização e distribuição do tributo.

### Transformações no ITCMD

- **Alíquotas progressivas obrigatórias** pelos estados, com limite máximo de 8%
- **Ampliação do conceito de doação**, incluindo perdão de dívidas
- **Tributação de heranças e doações do exterior**, abrangendo estruturas de Trust

---

*Publicado por Rodrigo Vitalino Advogados*`,
  },
  {
    id: 2,
    slug: "notas-fiscais-2026-receita-federal-cg-ibs-transicao",
    title: "Notas Fiscais em 2026: Receita Federal e CG-IBS Definem Regras de Transição",
    subtitle: "Documentos fiscais na transição IBS/CBS com período sem multas",
    excerpt: "Ato Conjunto esclarece como funcionarão os documentos fiscais durante o primeiro ano de implementação do IBS e CBS, com período de adaptação sem multas.",
    date: "2026-01-12",
    category: "Direito Tributário",
    categorySlug: "direito-tributario",
    content: `## Transição Tributária: Novas Regras para Documentos Fiscais

A Receita Federal e o Comitê Gestor do IBS publicaram orientações sobre a emissão de documentos fiscais durante o período de transição para o novo sistema tributário.

### Período de Adaptação

Durante os primeiros meses de 2026, as empresas terão um período sem multas para adequação dos sistemas de emissão de notas fiscais aos novos campos exigidos.

---

*Publicado por Rodrigo Vitalino Advogados*`,
  },
  {
    id: 3,
    slug: "cib-cpf-imoveis-tributacao-iptu-itbi-itcmd",
    title: "CIB: Entenda o 'CPF dos Imóveis' e Seus Reflexos na Tributação",
    subtitle: "Cadastro unificado de propriedades pode impactar IPTU, ITBI e ITCMD",
    excerpt: "Novo cadastro unificado de propriedades promete maior transparência, mas especialistas alertam para possível aumento na carga tributária de IPTU, ITBI e ITCMD.",
    date: "2026-01-08",
    category: "Direito Tributário",
    categorySlug: "direito-tributario",
    content: `## O Cadastro Imobiliário Brasileiro (CIB)

O novo Cadastro Imobiliário Brasileiro (CIB) funcionará como um "CPF dos imóveis", unificando informações cadastrais de propriedades em todo o território nacional.

### Impactos na Tributação

- **IPTU:** Base de cálculo mais precisa
- **ITBI:** Valores de mercado mais transparentes
- **ITCMD:** Maior controle sobre transmissões

---

*Publicado por Rodrigo Vitalino Advogados*`,
  },
  {
    id: 4,
    slug: "ibs-cbs-2026-prazo-estendido-obrigacoes",
    title: "IBS e CBS em 2026: Prazo Estendido para Cumprimento de Obrigações",
    subtitle: "Receita Federal concede 4 meses sem exigência dos novos tributos",
    excerpt: "Receita Federal e Comitê Gestor concedem até 4 meses sem exigência de destaque ou recolhimento dos novos tributos nos documentos fiscais.",
    date: "2025-12-23",
    category: "Direito Tributário",
    categorySlug: "direito-tributario",
    authorSection: {
      name: "Dra. Elisandra Sousa Barbosa",
      description: "Advogada especialista em Direito Tributário",
      photo: "/lovable-uploads/elisandra-sousa.png"
    },
    content: `## Prazo Estendido para Adaptação ao Novo Sistema

A Receita Federal e o Comitê Gestor do IBS concederam prazo adicional de 4 meses para que empresas se adaptem às novas obrigações fiscais relacionadas ao IBS e CBS.

### O Que Isso Significa

Durante este período, não haverá exigência de destaque ou recolhimento dos novos tributos nos documentos fiscais, permitindo que os contribuintes ajustem seus sistemas.

---

*Publicado por Rodrigo Vitalino Advogados*`,
  },
];

/**
 * Legacy ID to slug mapping for 301 redirects
 */
export const legacyIdToSlug: Record<number, string> = Object.fromEntries(
  publications.map((p) => [p.id, p.slug])
);

/**
 * Find publication by slug
 */
export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find((p) => p.slug === slug);
}

/**
 * Find publication by legacy ID
 */
export function getPublicationById(id: number): Publication | undefined {
  return publications.find((p) => p.id === id);
}

/**
 * Get publication URL
 */
export function getPublicationUrl(publication: Publication): string {
  return `/publicacoes/${publication.slug}`;
}

/**
 * Get all publications sorted by date (newest first)
 */
export function getPublicationsSortedByDate(): Publication[] {
  return [...publications].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
