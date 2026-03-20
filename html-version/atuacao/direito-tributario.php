<?php
$base = '..';
$current = 'atuacao';
$page_title = 'Direito Tributário | Rodrigo Vitalino Advogados';
$page_desc = 'Planejamento tributário, consultoria fiscal, defesa administrativa e judicial em Direito Tributário para empresas.';
$canonical = '/atuacao/direito-tributario';
include '../includes/head.php';
include '../includes/header.php';
?>

<section class="hero" style="min-height:70vh">
  <div class="hero__bg"><img src="<?php echo $base; ?>/assets/areas/direito-tributario-hero.jpg" alt="Direito Tributário"></div>
  <div class="hero__overlay" style="background:linear-gradient(to right,rgba(13,26,13,.88),rgba(13,26,13,.65),rgba(13,26,13,.35))"></div>
  <div class="hero__content"><div class="container" style="padding-top:5rem;padding-bottom:5rem">
    <div class="breadcrumb" style="color:rgba(255,255,255,.74);margin-bottom:1rem"><a href="<?php echo $base; ?>/index.php">Início</a><span class="sep">/</span><a href="<?php echo $base; ?>/atuacao.php">Áreas de Atuação</a><span class="sep">/</span><span class="current">Direito Tributário</span></div>
    <div style="max-width:42rem"><h1>Direito Tributário</h1><p style="margin-top:1rem;font-size:clamp(1rem,2.4vw,1.25rem);color:rgba(255,255,255,.9)">Gestão fiscal estratégica, defesa em litígios tributários e planejamento para reduzir riscos e otimizar resultados.</p></div>
  </div></div>
</section>

<section class="section">
  <div class="container container--narrow">
    <div class="card" style="margin-bottom:1.5rem">
      <p class="text-muted">Atuamos em demandas consultivas e contenciosas tributárias com abordagem estratégica voltada à identificação de riscos e oportunidades que apoiam decisões empresariais mais seguras.</p>
    </div>
    <div class="grid grid--3">
      <?php foreach ([
        ['Consultoria Tributária','Pareceres jurídicos, revisão de procedimentos fiscais e estruturação de cenários de conformidade.'],
        ['Planejamento Fiscal','Otimização lícita da carga tributária, reorganizações e análise de impacto em operações.'],
        ['Recuperação de Créditos','Identificação e recuperação de créditos tributários e revisão de recolhimentos indevidos.'],
        ['Defesa Administrativa','Atuação em autos de infração, notificações e procedimentos perante órgãos fazendários.'],
        ['Contencioso Judicial','Defesa em execuções fiscais e ações tributárias em todas as instâncias.'],
        ['Assessoria Estratégica','Apoio em reuniões, comitês e temas de responsabilização tributária em mudanças societárias.'],
      ] as $item): ?>
      <div class="card">
        <h3 style="margin-bottom:.75rem;color:var(--fg)"><?php echo $item[0]; ?></h3>
        <p class="text-muted text-sm"><?php echo $item[1]; ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php
$cta_title = 'Precisa de consultoria tributária?';
$cta_desc = 'Entre em contato para uma análise fiscal estratégica e personalizada.';
include '../includes/cta.php';
include '../includes/footer.php';
?>
<script src="<?php echo $base; ?>/js/main.js"></script>
</body></html>
