<?php
$base = '..';
$current = 'atuacao';
$page_title = 'Família e Sucessões | Rodrigo Vitalino Advogados';
$page_desc = 'Planejamento patrimonial e sucessório para empresários e famílias, com proteção de ativos, holdings e continuidade empresarial.';
$canonical = '/atuacao/familia-e-sucessoes';
include '../includes/head.php';
include '../includes/header.php';
?>

<section class="hero" style="min-height:70vh">
  <div class="hero__bg"><img src="<?php echo $base; ?>/assets/areas/familia-sucessoes-hero.jpg" alt="Família e Sucessões"></div>
  <div class="hero__overlay" style="background:linear-gradient(to right,rgba(13,26,13,.88),rgba(13,26,13,.65),rgba(13,26,13,.35))"></div>
  <div class="hero__content"><div class="container" style="padding-top:5rem;padding-bottom:5rem">
    <div class="breadcrumb" style="color:rgba(255,255,255,.74);margin-bottom:1rem"><a href="<?php echo $base; ?>/index.php">Início</a><span class="sep">/</span><a href="<?php echo $base; ?>/atuacao.php">Áreas de Atuação</a><span class="sep">/</span><span class="current">Família e Sucessões</span></div>
    <div style="max-width:46rem"><h1>Planejamento Patrimonial e Sucessório</h1><p style="margin-top:1rem;font-size:clamp(1rem,2.4vw,1.25rem);color:rgba(255,255,255,.9)">Estratégia jurídica para proteção e perpetuação do patrimônio empresarial, familiar e sucessório.</p></div>
  </div></div>
</section>

<section class="section">
  <div class="container container--narrow">
    <div class="card" style="margin-bottom:1.5rem">
      <p class="text-muted">A continuidade de uma empresa familiar exige mais do que gestão competente: demanda planejamento jurídico estratégico. Atuamos para preservar legado, proteger ativos e garantir transições organizadas com eficiência societária e tributária.</p>
    </div>
    <div class="grid grid--2">
      <?php foreach ([
        ['Planejamento Sucessório Empresarial','Protocolos familiares, acordos de sócios, testamentos empresariais e doação com reserva de usufruto.'],
        ['Proteção Patrimonial','Segregação patrimonial, regimes de bens, pactos antenupciais e cláusulas protetivas.'],
        ['Estrutura Societária Familiar','Holdings familiares, governança corporativa e acordos de quotistas para longevidade do patrimônio.'],
        ['Planejamento Tributário Sucessório','Estratégias para ITCMD, reorganizações e inventários com foco em eficiência fiscal e continuidade.'],
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
$cta_title = 'Proteja o futuro do seu patrimônio empresarial';
$cta_desc = 'Fale com nossa equipe para estruturar uma sucessão segura e uma proteção patrimonial duradoura.';
include '../includes/cta.php';
include '../includes/footer.php';
?>
<script src="<?php echo $base; ?>/js/main.js"></script>
</body></html>
