<?php
$base = '..';
$current = 'atuacao';
$page_title = 'Assessoria Jurídica Empresarial | Rodrigo Vitalino Advogados';
$page_desc = 'Assessoria jurídica empresarial com foco em contratos, crédito, proteção patrimonial, contencioso e negociação estratégica.';
$canonical = '/atuacao/direito-civil';
include '../includes/head.php';
include '../includes/header.php';
?>

<section class="hero" style="min-height:70vh">
  <div class="hero__bg"><img src="<?php echo $base; ?>/assets/areas/direito-civil-hero.jpg" alt="Assessoria Jurídica Empresarial"></div>
  <div class="hero__overlay" style="background:linear-gradient(to right,rgba(13,26,13,.88),rgba(13,26,13,.65),rgba(13,26,13,.35))"></div>
  <div class="hero__content"><div class="container" style="padding-top:5rem;padding-bottom:5rem">
    <div class="breadcrumb" style="color:rgba(255,255,255,.74);margin-bottom:1rem"><a href="<?php echo $base; ?>/index.php">Início</a><span class="sep">/</span><a href="<?php echo $base; ?>/atuacao.php">Áreas de Atuação</a><span class="sep">/</span><span class="current">Assessoria Jurídica Empresarial</span></div>
    <div style="max-width:46rem"><h1>Assessoria Jurídica Empresarial</h1><p style="margin-top:1rem;font-size:clamp(1rem,2.4vw,1.25rem);color:rgba(255,255,255,.9)">Proteção jurídica estratégica para empresas que pensam grande, crescem com consistência e precisam reduzir riscos reais.</p></div>
  </div></div>
</section>

<section class="section">
  <div class="container container--narrow">
    <div class="card" style="margin-bottom:1.5rem">
      <p class="text-muted">No mundo dos negócios, cada contrato assinado, parceria firmada e decisão patrimonial carrega riscos e oportunidades. Nossa atuação é orientada à prevenção de conflitos, fortalecimento das relações comerciais e crescimento sobre bases jurídicas sólidas.</p>
    </div>
    <div class="grid grid--2">
      <?php foreach ([
        ['Contratos Empresariais','Elaboração, revisão e negociação de contratos comerciais, imobiliários, franquias, distribuição e rescisões.'],
        ['Cobrança e Recuperação de Créditos','Execuções, ações monitórias, busca e apreensão e renegociação estratégica de passivos empresariais.'],
        ['Gestão Patrimonial e Garantias','Blindagem patrimonial, planejamento sucessório empresarial e estruturação de garantias.'],
        ['Procedimentos, Defesas e Notificações','Contestações, recursos, notificações extrajudiciais, interpelações, mediação e arbitragem.'],
      ] as $item): ?>
      <div class="card">
        <h3 style="margin-bottom:.75rem;color:var(--fg)"><?php echo $item[0]; ?></h3>
        <p class="text-muted text-sm"><?php echo $item[1]; ?></p>
      </div>
      <?php endforeach; ?>
    </div>
    <div class="card" style="margin-top:1.5rem">
      <h2 style="margin-bottom:1rem">Como protegemos e fortalecemos seu negócio</h2>
      <p class="text-muted">Nosso trabalho começa com escuta atenta e análise profunda do cenário jurídico da empresa. Atuamos de forma preventiva e consultiva; e, quando o conflito é inevitável, entramos com estratégia, agilidade e determinação para defender os interesses do negócio.</p>
    </div>
  </div>
</section>

<?php
$cta_title = 'Sua empresa precisa de uma assessoria jurídica mais estratégica?';
$cta_desc = 'Converse com nossa equipe e conheça uma atuação focada em prevenção, segurança e resultado.';
include '../includes/cta.php';
include '../includes/footer.php';
?>
<script src="<?php echo $base; ?>/js/main.js"></script>
</body></html>
