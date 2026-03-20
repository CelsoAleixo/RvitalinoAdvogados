<?php
$base = '.';
$current = 'atuacao';
$page_title = 'Áreas de Atuação | Rodrigo Vitalino Advogados';
$page_desc = 'Áreas de atuação: direito empresarial, recuperação judicial, tributário, trabalhista, família e sucessões, crédito de carbono.';
$canonical = '/atuacao';
include 'includes/head.php';
include 'includes/header.php';
?>

<div class="quick-banner"><div class="container"><div class="quick-banner__inner">
  <div style="display:flex;align-items:center;gap:1rem"><div class="pulse-dot"></div><span class="text-sm font-medium">Precisa de orientação em alguma dessas áreas?</span></div>
  <a href="https://wa.me/5511974083838?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado." target="_blank" rel="noopener noreferrer" class="btn btn--primary">Falar com Especialista →</a>
</div></div></div>

<section class="section" id="areas-grid">
  <div class="container">
    <div class="text-center mb-12">
      <span class="text-accent text-xs font-medium uppercase tracking-wide" style="display:block;margin-bottom:1rem;letter-spacing:.2em">Nossas Especialidades</span>
      <h2>Conheça Nossas Áreas de Atuação</h2>
      <p class="text-muted" style="max-width:42rem;margin:.75rem auto 0">Cada área do Direito demanda conhecimento específico e experiência prática.</p>
    </div>
    <div class="grid grid--4">
      <?php
      $areas = [
        ['Direito Empresarial','Assessoria completa para empresas.','atuacao/direito-empresarial.php','areas/direito-empresarial-hero.jpg',false],
        ['Negociação Jurídica','Soluções em mediação e negociação.','atuacao/negociacao-juridica.php','areas/negociacao-juridica-hero.jpg',false],
        ['Recuperação Judicial','Destaque em transporte público e agro.','atuacao/recuperacao-judicial.php','areas/recuperacao-judicial-hero.jpg',true],
        ['Direito Tributário','Planejamento e defesa fiscal.','atuacao/direito-tributario.php','areas/direito-tributario-hero.jpg',false],
        ['Direito Trabalhista','Suporte em relações de trabalho.','atuacao/direito-trabalhista.php','areas/direito-trabalhista-hero.jpg',false],
        ['Família e Sucessões','Inventários e planejamento sucessório.','atuacao/familia-e-sucessoes.php','areas/familia-sucessoes-hero.jpg',false],
        ['Assessoria Jurídica Empresarial','Contratos e responsabilidade civil.','atuacao/direito-civil.php','areas/direito-civil-hero.jpg',false],
        ['Crédito de Carbono','Projetos sustentáveis e compliance ESG.','atuacao/credito-de-carbono.php','areas/credito-carbono-hero.jpg',true],
      ];
      foreach ($areas as $a): ?>
      <a href="./<?php echo $a[2]; ?>" class="card--area" style="text-decoration:none">
        <img src="./assets/<?php echo $a[3]; ?>" alt="<?php echo $a[0]; ?>" loading="lazy">
        <div class="overlay"></div>
        <?php if($a[4]): ?><div class="highlight-badge">Destaque</div><?php endif; ?>
        <div class="content">
          <h3 style="color:#fff;margin-bottom:.25rem"><?php echo $a[0]; ?></h3>
          <p style="color:rgba(255,255,255,.9);font-size:.875rem;margin-bottom:.5rem"><?php echo $a[1]; ?></p>
          <span style="color:var(--accent);font-size:.875rem;font-weight:500">Saiba mais →</span>
        </div>
      </a>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section" style="background:hsl(165,35%,8%)">
  <div class="container text-center" style="max-width:56rem">
    <div style="color:var(--accent);font-size:4rem;font-family:var(--font-serif);opacity:.6;margin-bottom:1rem">"</div>
    <blockquote style="font-family:var(--font-serif);font-size:clamp(1.25rem,3vw,2rem);color:#fff;font-weight:300;line-height:1.5;margin-bottom:1.5rem">Nosso compromisso é oferecer soluções jurídicas que vão além da técnica, construindo relações de confiança duradouras e resultados que fazem a diferença.</blockquote>
    <div style="display:flex;align-items:center;justify-content:center;gap:1.5rem">
      <div style="width:4rem;height:1px;background:linear-gradient(to right,transparent,hsla(45,95%,52%,.5))"></div>
      <div><span style="color:var(--accent);font-weight:600;display:block">Rodrigo Vitalino</span><span style="color:hsla(0,0%,100%,.5);font-size:.875rem">Advogado Fundador</span></div>
      <div style="width:4rem;height:1px;background:linear-gradient(to left,transparent,hsla(45,95%,52%,.5))"></div>
    </div>
  </div>
</section>

<?php
$cta_title = 'Precisa de assessoria jurídica especializada?';
$cta_desc = 'Entre em contato e conheça soluções jurídicas personalizadas para suas necessidades.';
include 'includes/cta.php';
include 'includes/footer.php';
?>
<script src="./js/main.js"></script>
</body></html>
