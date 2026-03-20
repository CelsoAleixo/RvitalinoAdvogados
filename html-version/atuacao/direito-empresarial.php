<?php
$base = '..';
$current = 'atuacao';
$page_title = 'Direito Empresarial | Rodrigo Vitalino Advogados';
$page_desc = 'Assessoria jurídica empresarial completa com foco em contratos, societário, compliance, governança e prevenção de riscos.';
$canonical = '/atuacao/direito-empresarial';
include '../includes/head.php';
include '../includes/header.php';
?>

<section class="hero" style="min-height:70vh">
  <div class="hero__bg"><img src="<?=$base?>/assets/areas/direito-empresarial-hero.jpg" alt="Direito Empresarial"></div>
  <div class="hero__overlay" style="background:linear-gradient(to right,rgba(13,26,13,.9),rgba(13,26,13,.7),rgba(13,26,13,.35))"></div>
  <div class="hero__content"><div class="container" style="padding-top:5rem;padding-bottom:5rem">
    <div class="breadcrumb" style="margin-bottom:1rem;color:rgba(255,255,255,.74)"><a href="<?=$base?>/index.php">Início</a><span class="sep">/</span><a href="<?=$base?>/atuacao.php">Áreas de Atuação</a><span class="sep">/</span><span class="current">Direito Empresarial</span></div>
    <div style="max-width:48rem">
      <h1>Direito Empresarial</h1>
      <p style="margin-top:1rem;font-size:clamp(1rem,2.4vw,1.3rem);color:rgba(255,255,255,.9)">Proteção jurídica estratégica para empresas que querem crescer com segurança, prevenir riscos e transformar desafios em vantagem competitiva.</p>
    </div>
  </div></div>
</section>

<section class="section section--secondary">
  <div class="container container--narrow">
    <div class="card">
      <h2 style="margin-bottom:1rem">O que é Direito Empresarial?</h2>
      <p class="text-muted" style="margin-bottom:1rem">É a área do Direito que estrutura, protege e impulsiona empresas em todas as fases — da fundação à expansão, dos contratos à resolução de crises. É a inteligência jurídica por trás de decisões que definem o futuro do negócio.</p>
      <p class="text-muted">Sem assessoria especializada, empresas se expõem a riscos evitáveis: contratos frágeis, estruturas societárias desorganizadas, falhas de compliance e conflitos de alto impacto financeiro.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container container--narrow">
    <div class="grid grid--2">
      <?php foreach ([
        ['Prevenção de Riscos','Identificação de vulnerabilidades, atuação preventiva, governança e programas de compliance para evitar crises antes que elas surjam.'],
        ['Contratos Empresariais','Elaboração, revisão e negociação de contratos personalizados, pensados para proteger operações, responsabilidades e ativos.'],
        ['Startups e Estruturação Societária','Acordo de sócios, captação, due diligence e estrutura societária para crescimento sobre bases sólidas.'],
        ['Propriedade Intelectual','Proteção de marca, registro, monitoramento e defesa de ativos intangíveis estratégicos.'],
        ['Compliance e Governança','Regras internas, treinamentos e mecanismos de controle para reduzir riscos e fortalecer a reputação.'],
        ['Planejamento Sucessório','Estruturação de holdings, governança familiar e continuidade da empresa entre gerações.'],
      ] as $item): ?>
      <div class="card">
        <h3 style="margin-bottom:.75rem;color:var(--fg)"><?=$item[0]?></h3>
        <p class="text-muted text-sm"><?=$item[1]?></p>
      </div>
      <?php endforeach; ?>
    </div>
    <div class="card" style="margin-top:1.5rem">
      <h3 style="margin-bottom:.75rem;color:var(--fg)">Recuperação Judicial e Extrajudicial</h3>
      <p class="text-muted">Quando a crise financeira se instala, a recuperação judicial ou extrajudicial pode reorganizar dívidas, preservar empregos e permitir a continuidade da atividade. A diferença entre falência e recuperação está no tempo, na estratégia e na condução técnica do processo.</p>
    </div>
  </div>
</section>

<?php
$cta_title = 'Sua empresa precisa de estrutura jurídica para crescer com segurança?';
$cta_desc = 'Fale com nossa equipe e conheça uma atuação estratégica em Direito Empresarial.';
include '../includes/cta.php';
include '../includes/footer.php';
?>
<script src="<?=$base?>/js/main.js"></script>
</body></html>