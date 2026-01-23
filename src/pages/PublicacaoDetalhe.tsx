import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { InternationalHero } from "@/components/shared/InternationalHero";
import { CTASection } from "@/components/shared/CTASection";
import { Calendar, Tag, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import recuperacaoRuralHero from "@/assets/publications/recuperacao-rural-hero.jpg";
import rodrigoVitalinoAutor from "@/assets/rodrigo-vitalino-autor.png";

// Same posts data - should be moved to a shared file in a real app
const posts = [
  {
    id: 8,
    title: "Recuperação Judicial do Produtor Rural – Lei 14.112/20",
    subtitle: "Proteção patrimonial e reestruturação de dívidas no agronegócio",
    excerpt: "A Lei 14.112/20 ampliou o acesso à recuperação judicial para produtores rurais, permitindo a preservação de negócios viáveis e a reorganização de obrigações financeiras.",
    date: "2026-01-20",
    category: "Direito Rural",
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
    title: "Semana Internacional de Direito em Portugal 2026: Oportunidade para Internacionalizar Sua Carreira",
    subtitle: "Evento presencial no Porto com imersão acadêmica e networking global",
    excerpt: "Evento presencial no Porto reúne advogados, estudantes e gestores para imersão acadêmica, networking global e certificação internacional em abril de 2026.",
    date: "2026-01-19",
    category: "Direito Internacional",
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

### Programação Detalhada

**Domingo (12/04):** Rodada de negócios na Quinta da Pacheca, Vale do Douro, com networking entre advogados de diferentes países.

**Segunda-feira (13/04):** Visita institucional ao Palácio da Relação do Porto e palestra sobre a história da justiça portuguesa.

**Terça a Quinta (14 a 16/04):** Aulas presenciais na Universidade Portucalense, com seminários especializados e painéis de debate.

**Sexta-feira (17/04):** Visita guiada à Universidade de Coimbra, com aula magna sobre as origens do Direito europeu.

### Público-Alvo

O programa destina-se a três perfis principais:
- Advogados e juristas que buscam internacionalizar sua atuação
- Estudantes de Direito interessados em vivência prática no ambiente jurídico europeu
- Gestores e profissionais em busca de networking e atualização global

### Impactos Práticos e Recomendações

**Para advogados:**
- Ampliação do portfólio de serviços com demandas internacionais
- Estabelecimento de parcerias com escritórios estrangeiros
- Qualificação diferenciada para consultoria em operações transfronteiriças

**Para estudantes:**
- Experiência acadêmica internacional certificada
- Contato antecipado com o mercado jurídico europeu
- Construção de rede de relacionamentos profissionais

**Para gestores:**
- Compreensão das dinâmicas regulatórias internacionais
- Preparação para expansão de negócios para Portugal e Europa
- Atualização sobre compliance em operações cross-border

### Considerações Finais

A participação em eventos de imersão internacional representa investimento estratégico na carreira jurídica. A combinação de formação acadêmica, certificação reconhecida e networking qualificado oferece retorno tangível para profissionais que desejam se diferenciar em um mercado cada vez mais competitivo e globalizado.

---

*Publicado por Rodrigo Vitalino Advogados*`,
  },
  {
    id: 6,
    title: "Obrigações Empresariais em 2026: Guia Completo para Gestores",
    subtitle: "Adequação fiscal, tecnológica e contábil no novo cenário regulatório",
    excerpt: "O novo cenário regulatório exige adequação fiscal, tecnológica e contábil das empresas. Conheça as principais exigências da Reforma Tributária e como se preparar.",
    date: "2026-01-19",
    category: "Direito Empresarial",
    content: `## Novo Marco Regulatório Empresarial: Prepare Sua Empresa para 2026

O ano de 2026 inaugura uma nova fase na gestão empresarial brasileira. Com o início da transição da Reforma Tributária e mudanças expressivas nos campos fiscal, contábil e tecnológico, as organizações enfrentam um cenário que demanda não apenas conformidade documental, mas verdadeira reorganização de processos internos.

A seguir, apresentamos as principais obrigações que passam a compor o calendário das empresas neste novo período.

### 1. Reformulação dos Documentos Fiscais Eletrônicos

Uma das exigências mais imediatas refere-se à atualização dos documentos fiscais. A partir de janeiro de 2026, notas fiscais devem contemplar campos específicos para a CBS (Contribuição sobre Bens e Serviços) e o IBS (Imposto sobre Bens e Serviços), tributos criados para substituir progressivamente o modelo tributário vigente.

**Ações necessárias:**
- Atualização dos sistemas emissores de notas fiscais
- Revisão das parametrizações tributárias
- Capacitação das equipes responsáveis pela emissão

O descumprimento pode inviabilizar a emissão de documentos e acarretar sanções administrativas.

### 2. Operação Simultânea de Dois Regimes Tributários

Durante o período de transição (2026-2032), as empresas operam com dois sistemas tributários paralelos: o atual e o novo modelo da Reforma. Essa duplicidade eleva a complexidade da apuração, exigindo:

- Controles paralelos de apuração
- Maior rigor na escrituração fiscal
- Atenção constante às normas de transição

Inconsistências entre regimes podem resultar em autuações, glosas de créditos e questionamentos fiscais relevantes.

### 3. Modernização Tecnológica Obrigatória

A adequação dos sistemas de gestão (ERPs) e ferramentas de automação fiscal deixa de ser opcional. A nova sistemática tributária demanda integração entre os setores financeiro, contábil e fiscal, além de precisão nas informações transmitidas ao Fisco.

**Riscos de sistemas defasados:**
- Inconsistências nos registros
- Falhas na integração de dados
- Aumento da exposição a penalidades

### 4. Tributação sobre Lucros e Dividendos

A partir de 2026, determinadas distribuições de lucros passam a sofrer retenção na fonte, incluindo dividendos pagos a pessoas físicas e beneficiários no exterior.

**Impactos práticos:**
- Revisão dos procedimentos de distribuição
- Adequação das rotinas fiscais internas
- Maior atenção ao planejamento tributário

### 5. Intensificação da Fiscalização Digital

O ambiente fiscal torna-se cada vez mais integrado e automatizado. O cruzamento de dados entre Receita Federal, fiscos estaduais e municipais reduz drasticamente a margem para erros ou omissões.

As empresas devem manter absoluta coerência entre:
- Obrigações acessórias
- Dados fiscais, contábeis e financeiros
- Informações prestadas a diferentes órgãos

### Recomendações para Empresários e Gestores

**Ações imediatas:**
1. Realizar diagnóstico completo da situação fiscal atual
2. Investir na atualização dos sistemas de gestão
3. Capacitar equipes sobre as novas regras
4. Estabelecer rotinas de conferência e compliance
5. Buscar assessoria jurídica especializada para planejamento tributário

**Planejamento de médio prazo:**
- Reestruturar processos internos para a nova realidade
- Implementar controles de qualidade sobre dados fiscais
- Monitorar constantemente as regulamentações complementares

---

*Publicado por Rodrigo Vitalino Advogados*`,
  },
  {
    id: 5,
    title: "Mudanças Trabalhistas a partir de 2026: O Que Sua Empresa Precisa Saber",
    subtitle: "Portaria MTE nº 1/2025 moderniza fiscalização e consolida eSocial",
    excerpt: "A Portaria Consolidada MTE nº 1/2025 moderniza as relações de trabalho com fiscalização 100% digital, novos prazos de admissão e consolidação do eSocial.",
    date: "2026-01-18",
    category: "Direito Trabalhista",
    content: `## Nova Era das Relações Trabalhistas: Portaria Consolidada MTE nº 1/2025

O cenário das obrigações trabalhistas no Brasil passou por uma transformação significativa. Com a entrada em vigor da Portaria Consolidada MTE nº 1/2025, em 02 de janeiro de 2026, o Ministério do Trabalho e Emprego consolidou regras que impactam diretamente o Departamento Pessoal e o RH das empresas.

A normativa não apenas unifica entendimentos dispersos, mas acelera o processo de digitalização das relações laborais, demandando das organizações maior rigor no planejamento e conformidade contínua.

### Principais Disposições da Portaria

**Fiscalização Integralmente Digitalizada**

O Domicílio Eletrônico Trabalhista (DET) assume protagonismo como canal exclusivo de comunicação oficial entre o MTE e os empregadores. Toda a fiscalização trabalhista passará a ocorrer por meio eletrônico.

**Presunção de Ciência Automática**

As comunicações realizadas pelo DET terão validade jurídica plena. Importante: notificações não acessadas no prazo de 15 dias serão consideradas automaticamente conhecidas, por força de presunção legal.

### Novas Regras de Admissão e Registro

- **Prazo antecipado de registro:** O empregador deve registrar a admissão até o dia anterior ao início efetivo das atividades do trabalhador
- **CPF como identificador único:** O número do CPF passa a ser o dado suficiente para registro na CTPS Digital, com validade equivalente à carteira física
- **eSocial como base exclusiva:** Todas as anotações contratuais e registros de empregados devem ser realizados exclusivamente via eSocial

### Impactos Práticos para Empresas

A nova regulamentação intensifica a padronização de procedimentos e a rastreabilidade das informações trabalhistas. O cruzamento automatizado de dados pelos órgãos fiscalizadores amplia consideravelmente a responsabilidade empresarial.

**Pontos de atenção imediata:**
- Revisão dos processos de admissão para garantir registro prévio
- Atualização cadastral no DET e verificação periódica de notificações
- Adequação dos sistemas de RH para integração plena com o eSocial
- Treinamento das equipes sobre os novos prazos e procedimentos

### Consequências para Trabalhadores

Do lado do empregado, as mudanças trazem maior transparência e agilidade no acesso às informações contratuais via CTPS Digital, além de garantir que todos os direitos estejam devidamente registrados em sistema oficial.

---

*Publicado por Rodrigo Vitalino Advogados*`,
  },
  {
    id: 1,
    title: "Reforma Tributária Avança: LC 227/2026 Define Novas Regras para IBS, ITCMD e ITBI",
    subtitle: "Segunda fase da Reforma estabelece Comitê Gestor e altera transmissão de bens",
    excerpt: "A regulamentação da segunda fase da Reforma Tributária estabelece o Comitê Gestor do IBS e traz mudanças significativas para impostos sobre transmissão de bens.",
    date: "2026-01-15",
    category: "Direito Tributário",
    content: `## A Nova Etapa da Reforma Tributária Entra em Vigor

O Governo Federal oficializou mais um capítulo importante da Reforma Tributária brasileira. Com a sanção presidencial do Projeto de Lei Complementar nº 108/2024, nasceu a Lei Complementar nº 227/2026, que estrutura a governança do novo sistema tributário nacional.

### O Que Muda na Prática

A principal inovação é a criação do Comitê Gestor do Imposto sobre Bens e Serviços (CG-IBS), responsável por coordenar a arrecadação, fiscalização e distribuição do tributo que substituirá ICMS e ISS. O órgão será composto por representantes da União, estados e municípios.

**Benefícios fiscais preservados:** Incentivos de ICMS vigentes até 31 de maio de 2023 permanecerão válidos durante a transição, que se estenderá até 2032.

### Transformações no ITCMD

A legislação trouxe uniformização de conceitos importantes:
- **Alíquotas progressivas obrigatórias** pelos estados, com limite máximo de 8%
- **Ampliação do conceito de doação**, incluindo perdão de dívidas entre partes relacionadas
- **Tributação de heranças e doações do exterior**, abrangendo estruturas de Trust
- **Nova base de cálculo** para quotas e ações de sociedades fechadas

### Impactos no ITBI

Para o imposto municipal sobre transmissão de imóveis, foram definidos critérios para apuração do valor de mercado, considerando preços praticados, informações de cartórios e agentes financeiros.

---

*Publicado por Rodrigo Vitalino Advogados*`,
  },
  {
    id: 2,
    title: "Notas Fiscais em 2026: Receita Federal e CG-IBS Definem Regras de Transição",
    subtitle: "Documentos fiscais na transição IBS/CBS com período sem multas",
    excerpt: "Ato Conjunto esclarece como funcionarão os documentos fiscais durante o primeiro ano de implementação do IBS e CBS, com período de adaptação sem multas.",
    date: "2026-01-12",
    category: "Direito Tributário",
    content: `## Período de Adaptação: O Que Empresários Precisam Saber

A Receita Federal e o Comitê Gestor do IBS publicaram orientações fundamentais para o ano de transição tributária. O Ato Conjunto 1/2025 estabelece diretrizes claras sobre obrigações acessórias, oferecendo um período de adaptação aos contribuintes.

### Documentos Fiscais: Continuidade e Inovação

A boa notícia é que os documentos já utilizados serão aproveitados na transição:
- Nota Fiscal Eletrônica (NF-e)
- Nota Fiscal de Consumidor (NFC-e)
- Nota Fiscal de Serviços (NFS-e)
- Conhecimento de Transporte Eletrônico (CT-e)
- E diversos outros documentos eletrônicos

**Novidades criadas:** NFAg (Água e Saneamento), NF-e ABI (Alienação de Imóveis), NFGas e DeRE (Declaração de Regimes Específicos).

### Período de Graça: Sem Multas por 4 Meses

O normativo garante que não haverá penalidades pelo não preenchimento dos campos de IBS e CBS durante os três meses seguintes à publicação do regulamento comum. Este período permite que as empresas adaptem seus sistemas sem risco de autuações.

### Caráter Informativo e Educativo

Durante 2026, o cumprimento das obrigações terá função de teste para o novo sistema. A CBS entrará em vigor efetivo em 2027, enquanto o IBS será implementado gradualmente entre 2029 e 2032.

---

*Publicado por Rodrigo Vitalino Advogados*`,
  },
  {
    id: 3,
    title: "CIB: Entenda o 'CPF dos Imóveis' e Seus Reflexos na Tributação",
    subtitle: "Cadastro unificado de propriedades pode impactar IPTU, ITBI e ITCMD",
    excerpt: "Novo cadastro unificado de propriedades promete maior transparência, mas especialistas alertam para possível aumento na carga tributária de IPTU, ITBI e ITCMD.",
    date: "2026-01-08",
    category: "Direito Tributário",
    content: `## O Cadastro Imobiliário Brasileiro: Revolução ou Preocupação?

Uma nova ferramenta fiscal chegou para transformar a gestão patrimonial no Brasil. O Cadastro Imobiliário Brasileiro (CIB), popularmente chamado de "CPF dos imóveis", unifica informações de todas as propriedades em um banco de dados nacional.

### Não É Imposto, Mas Pode Impactar o Seu Bolso

Importante esclarecer: o CIB não cria nenhum tributo novo. Entretanto, ao centralizar dados fragmentados entre prefeituras, cartórios e órgãos federais, o sistema pode revelar inconsistências que resultarão em cobranças adicionais de impostos já existentes.

### Como o CIB Funciona na Prática

- **Identificação única:** Cada propriedade recebe um código exclusivo
- **Valor de referência nacional:** Similar à Tabela FIPE para veículos
- **Histórico centralizado:** Órgãos de controle acessam dados em tempo real
- **Fiscalização digital:** Cruzamento automático de informações patrimoniais

### Prazo para Regularização

Os proprietários têm 24 meses para regularizar seus imóveis no novo sistema. Essa adequação é fundamental para evitar questionamentos da Receita Federal.

### Alerta dos Especialistas

A padronização nacional deve pressionar municípios a atualizarem valores venais, base de cálculo do IPTU, ITBI e ITCMD. Contribuintes que discordarem das novas avaliações poderão recorrer judicialmente.

---

*Publicado por Rodrigo Vitalino Advogados*`,
  },
  {
    id: 4,
    title: "IBS e CBS em 2026: Prazo Estendido para Cumprimento de Obrigações",
    subtitle: "Receita Federal concede 4 meses sem exigência dos novos tributos",
    excerpt: "Receita Federal e Comitê Gestor concedem até 4 meses sem exigência de destaque ou recolhimento dos novos tributos nos documentos fiscais.",
    date: "2025-12-23",
    category: "Direito Tributário",
    content: `## Alívio para Contribuintes: Período de Transição Sem Penalidades

O Ato Conjunto 01/2025, publicado pela Receita Federal e pelo Comitê Gestor do IBS, trouxe notícias positivas para empresários preocupados com a adequação aos novos tributos da reforma tributária.

### O Que Foi Decidido

A medida prevê um período de até quatro meses durante o qual:
- Não será exigido o destaque do IBS e CBS nos documentos fiscais
- Não haverá cobrança do recolhimento desses tributos
- Empresas poderão se adaptar sem risco de autuações

### Por Que Isso É Importante

Apesar de uma Nota Técnica anterior ter permitido a validação de documentos sem o destaque dos tributos, muitos contribuintes ainda tinham receio. A Lei Complementar 214 condiciona a dispensa de pagamento ao cumprimento das obrigações acessórias, criando incerteza jurídica.

### Segurança Para o Empresariado

Com o novo Ato Conjunto, fica claro que não haverá penalidades durante o período de adaptação. A medida oferece tranquilidade para as empresas realizarem as adequações necessárias em seus sistemas sem pressão de prazos apertados.

---

*Publicado por Rodrigo Vitalino Advogados*`,
  },
];
export default function PublicacaoDetalhe() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  // Scroll to top when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <Layout>
        <div className="section-padding min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl mb-4">Publicação não encontrada</h1>
            <Link to="/publicacoes" className="text-accent hover:underline">
              Voltar para publicações
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      // Author section marker
      if (line.trim() === '::author::') {
        if ((post as any).authorSection) {
          const author = (post as any).authorSection;
          return (
            <div key={index} className="mt-12 p-6 bg-muted/30 rounded-lg border border-border">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <img 
                  src={author.photo} 
                  alt={author.name}
                  className="w-24 h-24 rounded-full object-cover object-top border-2 border-accent shadow-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <h4 className="font-serif text-xl text-foreground mb-3">{author.name}</h4>
                  <div className="text-muted-foreground text-sm leading-relaxed space-y-2">
                    {author.description.split('\n\n').map((paragraph: string, i: number) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        }
        return null;
      }
      // Headers
      if (line.startsWith('### ')) {
        return <h3 key={index} className="font-serif text-xl mt-8 mb-4 text-foreground">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="font-serif text-2xl mt-10 mb-5 text-foreground">{line.replace('## ', '')}</h2>;
      }
      // Horizontal rule
      if (line.startsWith('---')) {
        return <hr key={index} className="my-8 border-border" />;
      }
      // List items
      if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.+?)\*\*(.*)/) ;
        if (match) {
          return (
            <li key={index} className="ml-4 mb-2 text-muted-foreground">
              <strong className="text-foreground">{match[1]}</strong>{match[2]}
            </li>
          );
        }
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-4 mb-2 text-muted-foreground">{line.replace('- ', '')}</li>;
      }
      // Bold text in paragraphs
      if (line.includes('**')) {
        const parts = line.split(/\*\*(.+?)\*\*/g);
        return (
          <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
            {parts.map((part, i) => 
              i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
            )}
          </p>
        );
      }
      // Italic (signature)
      if (line.startsWith('*') && line.endsWith('*')) {
        return <p key={index} className="text-accent italic mt-8">{line.replace(/\*/g, '')}</p>;
      }
      // Regular paragraphs
      if (line.trim()) {
        return <p key={index} className="text-muted-foreground mb-4 leading-relaxed">{line}</p>;
      }
      return null;
    });
  };

  const isInternational = post.category === "Direito Internacional";
  const hasHeroImage = !!post.heroImage;

  return (
    <Layout>
      {isInternational ? (
        <InternationalHero
          title={post.title}
          subtitle={post.subtitle}
        />
      ) : hasHeroImage ? (
        <PageHero
          title={post.title}
          description={post.subtitle}
          breadcrumb={[
            { label: "Publicações", href: "/publicacoes" },
            { label: post.category },
          ]}
          backgroundImage={post.heroImage}
          showIcons
        />
      ) : (
        <PageHero
          title={post.title}
          description={post.subtitle}
          breadcrumb={[
            { label: "Publicações", href: "/publicacoes" },
            { label: post.category },
          ]}
        />
      )}

      <section className="section-padding">
        <div className="container-site">
          <article className="max-w-3xl mx-auto">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                {post.category}
              </span>
            </div>

            {/* Article title */}
            <h1 className="font-serif text-3xl md:text-4xl mb-6 text-foreground leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-muted-foreground mb-8 font-medium border-l-4 border-accent pl-4">
              {post.excerpt}
            </p>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {renderContent(post.content)}
            </div>

            {/* Share and back */}
            <div className="flex flex-wrap justify-between items-center gap-4 mt-12 pt-8 border-t border-border">
              <Link to="/publicacoes">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Voltar para Publicações
                </Button>
              </Link>
              <Button
                variant="ghost"
                className="gap-2"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.excerpt,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                  }
                }}
              >
                <Share2 className="h-4 w-4" />
                Compartilhar
              </Button>
            </div>
          </article>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
