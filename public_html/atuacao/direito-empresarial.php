<?php
$currentPage = 'atuacao';
$pageTitle = 'Direito Empresarial';
$pageDescription = 'Assessoria jurídica empresarial completa: contratos, societário, compliance, M&A e governança corporativa. Escritório Rodrigo Vitalino Advogados.';
include '../includes/header.php';
?>

<!-- Hero -->
<section class="area-hero" style="background-image:url('../assets/areas/direito-empresarial-hero.jpg');">
  <div class="area-hero-overlay"></div>
  <div class="container" style="position:relative;z-index:10;padding:5rem 1.5rem;">
    <nav class="breadcrumb animate-on-scroll">
      <a href="../">Início</a> <span>/</span>
      <a href="../atuacao.php">Áreas de Atuação</a> <span>/</span>
      <span class="current">Direito Empresarial</span>
    </nav>
    <div style="max-width:48rem;" class="animate-on-scroll">
      <h1 style="font-size:3rem;color:var(--accent);margin-bottom:1.5rem;">Direito Empresarial</h1>
      <p style="font-size:1.25rem;color:var(--muted-fg);line-height:1.6;">
        Proteção jurídica estratégica para empresas que querem crescer com segurança, prevenir riscos e transformar desafios em vantagem competitiva.
      </p>
    </div>
  </div>
</section>

<!-- Intro -->
<section class="section-padding" style="background:hsla(165,30%,18%,0.3);">
  <div class="container">
    <div style="max-width:48rem;margin:0 auto;" class="animate-on-scroll">
      <div style="display:flex;align-items:flex-start;gap:1rem;margin-bottom:1.5rem;">
        <i data-lucide="building-2" style="width:32px;height:32px;color:var(--accent);flex-shrink:0;margin-top:0.25rem;"></i>
        <div>
          <h2 style="color:var(--accent);margin-bottom:1rem;">O que é Direito Empresarial?</h2>
          <p style="font-size:1.125rem;color:var(--muted-fg);line-height:1.7;margin-bottom:1rem;">
            O Direito Empresarial é a área do Direito que estrutura, protege e impulsiona empresas em todas as fases — da fundação à expansão, dos contratos à resolução de crises. É a inteligência jurídica por trás de cada decisão que define o futuro de um negócio.
          </p>
          <p style="color:var(--muted-fg);line-height:1.7;">
            Sem assessoria jurídica especializada, empresas se expõem a riscos evitáveis: contratos mal redigidos, estruturas societárias desorganizadas, falhas de compliance e disputas milionárias.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Content Sections -->
<section class="section-padding">
  <div class="container">
    <div style="max-width:48rem;margin:0 auto;">

      <?php
      $sections = [
        ['icon' => 'shield-check', 'title' => 'Prevenção de Riscos e Atuação Preventiva', 'subtitle' => 'Por que prevenir custa menos do que remediar?', 'paragraphs' => [
          'A maioria dos litígios empresariais que chegam ao Judiciário poderiam ter sido evitados. Contratos mal redigidos, ausência de governança, processos internos frágeis — problemas que parecem pequenos até gerarem prejuízos milionários.',
          'A assessoria jurídica preventiva identifica vulnerabilidades antes que se tornem crises. Implementa programas de compliance, estrutura processos de governança e garante que cada decisão do negócio esteja juridicamente sustentada.',
        ], 'quote' => 'Ter um advogado empresarial ao lado do negócio não é despesa — é o investimento que separa empresas que crescem com segurança daquelas que vivem apagando incêndios.'],
        ['icon' => 'file-text', 'title' => 'Contratos Empresariais', 'subtitle' => 'Por que um contrato genérico pode destruir seu negócio?', 'paragraphs' => [
          'Modelos prontos da internet ignoram a realidade específica de cada empresa. Cláusulas de rescisão mal redigidas, ausência de penalidades, omissão sobre propriedade intelectual e falta de definição sobre foro competente são erros que custam fortunas quando o conflito aparece.',
          'Um contrato personalizado prevê o que pode dar errado, distribui responsabilidades com clareza e cria mecanismos de resolução antes que qualquer disputa precise de um juiz.',
        ], 'quote' => 'Nossos contratos não são documentos jurídicos genéricos. São ferramentas de proteção desenhadas sob medida para a realidade de cada operação.'],
        ['icon' => 'rocket', 'title' => 'Startups e Estruturação Societária', 'subtitle' => 'Por que startups promissoras fracassam por falta de estrutura jurídica?', 'paragraphs' => [
          'Três fundadores criam um produto inovador, captam investimento e, meses depois, discordam sobre participação, vesting e poder de decisão. Sem acordo de sócios, sem cláusula de não competição, o investidor recua e o negócio trava.',
          'Estruturação societária, acordo de sócios, due diligence e captação de investimentos são os alicerces que permitem ao negócio escalar sem implodir.',
        ], 'quote' => 'Atuamos desde a constituição da sociedade até rodadas de investimento, garantindo que o crescimento aconteça sobre bases jurídicas sólidas.'],
        ['icon' => 'fingerprint', 'title' => 'Propriedade Intelectual e Proteção de Marca', 'subtitle' => 'Por que sua marca é seu patrimônio mais vulnerável?', 'paragraphs' => [
          'Uma empresa consolida sua marca ao longo de anos e descobre que um concorrente registrou nome semelhante no INPI. A disputa judicial custa mais do que o registro preventivo jamais teria custado.',
        ], 'quote' => 'Registrar sua marca não é formalidade — é a certidão de nascimento da identidade do seu negócio. Cuidamos do registro, monitoramento e defesa da sua propriedade intelectual.'],
        ['icon' => 'clipboard-check', 'title' => 'Compliance e Governança Corporativa', 'subtitle' => 'Por que compliance não é opcional?', 'paragraphs' => [
          'Programas de compliance deixaram de ser diferenciais — são exigências do mercado, dos investidores e da legislação. A responsabilidade dos administradores é pessoal e pode ultrapassar os limites da empresa.',
        ], 'quote' => 'Implementamos programas de compliance sob medida, treinamos equipes e criamos mecanismos de controle que protegem a empresa e as pessoas que a conduzem.'],
        ['icon' => 'users', 'title' => 'Planejamento Sucessório e Empresas Familiares', 'subtitle' => 'Por que menos de um terço das empresas familiares sobrevivem à segunda geração?', 'paragraphs' => [
          'Conflitos entre herdeiros, ausência de holdings, governança improvisada e patrimônio misturado com pessoa física destroem em meses o que foi construído em décadas.',
        ], 'quote' => 'Estruturamos holdings, definimos regras de governança familiar e criamos mecanismos que previnem disputas e garantem a perenidade do negócio.'],
        ['icon' => 'trending-up', 'title' => 'Recuperação Judicial e Extrajudicial', 'subtitle' => 'Por que isso importa para sua empresa?', 'paragraphs' => [
          'Quando a crise financeira bate à porta, muitos empresários acreditam que o fim é inevitável. Não é. A recuperação judicial existe para permitir que empresas viáveis ​​reorganizem suas dívidas, preservem empregos e retomem a operação.',
          'A diferença entre recuperação e falência é, acima de tudo, uma questão de tempo e estratégia. A falência encerra. A recuperação reconstrói.',
        ], 'quote' => 'O papel do advogado empresarial aqui é decisivo: elaborar um plano de reestruturação sólido, negociar condições viáveis ​​e transformar credores em aliados da recuperação.'],
      ];
      foreach ($sections as $i => $sec): ?>
      <div class="animate-on-scroll" style="margin-bottom:3.5rem;">
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;">
          <i data-lucide="<?php echo $sec['icon']; ?>" style="width:28px;height:28px;color:var(--accent);flex-shrink:0;"></i>
          <h2 style="color:var(--accent);font-size:1.5rem;"><?php echo $sec['title']; ?></h2>
        </div>
        <p style="font-size:1.125rem;color:var(--muted-fg);font-weight:500;margin-bottom:1rem;"><?php echo $sec['subtitle']; ?></p>
        <?php foreach ($sec['paragraphs'] as $p): ?>
        <p style="color:var(--muted-fg);line-height:1.7;margin-bottom:1rem;"><?php echo $p; ?></p>
        <?php endforeach; ?>
        <p style="color:var(--muted-fg);line-height:1.7;font-style:italic;border-left:4px solid var(--accent);padding-left:1.25rem;">
          <?php echo $sec['quote']; ?>
        </p>
      </div>
      <?php endforeach; ?>

      <!-- Other Areas -->
      <div class="animate-on-scroll" style="border-top:1px solid hsla(45,95%,52%,0.2);padding-top:2.5rem;">
        <h2 style="color:var(--accent);font-size:1.5rem;margin-bottom:1rem;">Por que escolher o Rodrigo Vitalino Advogados?</h2>
        <p style="color:var(--muted-fg);line-height:1.7;margin-bottom:1rem;">
          Não oferecemos respostas genéricas. Cada empresa que nos procura recebe uma análise personalizada, um diagnóstico real dos riscos e um plano de ação sob medida.
        </p>
        <p style="color:var(--muted-fg);line-height:1.7;">
          Nosso papel é ser o parceiro jurídico que entende o negócio, antecipa cenários e age com a mesma urgência que o empresário sente.
        </p>
      </div>

      <!-- Related Areas -->
      <div class="animate-on-scroll" style="margin-top:2.5rem;">
        <h3 style="font-size:1.25rem;margin-bottom:1.5rem;">Conheça também</h3>
        <div class="grid-2">
          <?php
          $related = [
            ['href' => '../atuacao/negociacao-juridica.php', 'icon' => 'handshake', 'title' => 'Negociação Jurídica', 'desc' => 'Negociação estratégica para resolver conflitos antes que cheguem ao Judiciário.'],
            ['href' => '../atuacao/direito-tributario.php', 'icon' => 'calculator', 'title' => 'Direito Tributário', 'desc' => 'Planejamento tributário, defesa em processos fiscais e estratégias para reduzir a carga tributária.'],
            ['href' => '../atuacao/direito-trabalhista.php', 'icon' => 'briefcase', 'title' => 'Direito Trabalhista', 'desc' => 'Prevenção de reclamações trabalhistas e defesa estratégica de empresas.'],
            ['href' => '../atuacao/recuperacao-judicial.php', 'icon' => 'trending-up', 'title' => 'Recuperação Judicial', 'desc' => 'Planos de reestruturação e negociação com credores para manter empresas viáveis.'],
          ];
          foreach ($related as $area): ?>
          <a href="<?php echo $area['href']; ?>" style="display:flex;align-items:flex-start;gap:0.75rem;padding:1rem;border-radius:0.75rem;background:var(--card);border:1px solid var(--border);transition:border-color 0.3s;" onmouseover="this.style.borderColor='hsla(45,95%,52%,0.4)'" onmouseout="this.style.borderColor='var(--border)'">
            <div class="icon-box" style="flex-shrink:0;"><i data-lucide="<?php echo $area['icon']; ?>"></i></div>
            <div>
              <h4 style="font-size:1rem;margin-bottom:0.25rem;"><?php echo $area['title']; ?></h4>
              <p style="color:var(--muted-fg);font-size:0.8125rem;line-height:1.5;"><?php echo $area['desc']; ?></p>
            </div>
          </a>
          <?php endforeach; ?>
        </div>
      </div>

    </div>
  </div>
</section>

<?php include '../includes/cta.php'; ?>
<?php include '../includes/footer.php'; ?>
