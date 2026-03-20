<?php
$base = '.';
$current = 'home';
$page_title = 'Rodrigo Vitalino Advogados | Assessoria Jurídica e Consultoria Empresarial';
$page_desc = 'Assessoria jurídica e consultoria empresarial com atuação prática, eficiente e transparente. Atuação no Brasil e Portugal.';
$canonical = '/';
include 'includes/head.php';
include 'includes/header.php';
?>

<!-- Hero -->
<section class="hero hero--tall">
  <div class="hero__bg">
    <video autoplay loop muted playsinline preload="auto" style="width:100%;height:100%;object-fit:cover" aria-hidden="true">
      <source src="./assets/institutional-video.mp4" type="video/mp4">
    </video>
  </div>
  <div class="hero__overlay hero__overlay--video"></div>
  <div class="hero__content">
    <div class="container" style="padding-top:3rem;padding-bottom:6rem">
      <div style="max-width:42rem">
        <h1 class="animate-fade-in" style="color:var(--accent);text-shadow:2px 2px 8px rgba(0,0,0,.5)">Soluções legais confiáveis e eficazes</h1>
        <p class="animate-slide-up" style="margin-top:1.5rem;font-size:clamp(1rem,2.5vw,1.5rem);color:var(--fg);text-shadow:0 1px 3px rgba(0,0,0,.5)">Assessoria jurídica empresarial com excelência e segurança.</p>
        <div class="animate-slide-up" style="margin-top:2rem;display:flex;flex-wrap:wrap;gap:1rem">
          <a href="./contato.php" class="btn btn--primary btn--lg">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Contato →
          </a>
          <a href="./atuacao.php" class="btn btn--outline btn--lg">Áreas de Atuação</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Trust Bar -->
<div class="trust-bar">
  <div class="container">
    <div class="trust-bar__inner">
      <div class="trust-bar__item"><span class="icon">🛡</span> OAB Ativo</div>
      <div class="trust-bar__item"><span class="icon">🏆</span> 17+ Anos</div>
      <div class="trust-bar__item"><span class="icon">👥</span> 500+ Clientes</div>
      <div class="trust-bar__item"><span class="icon">⏱</span> Resposta Rápida</div>
    </div>
  </div>
</div>

<!-- Areas Section -->
<section class="section">
  <div class="container">
    <h2 style="margin-bottom:2rem">Áreas de Atuação</h2>
    <div class="grid grid--4">
      <?php
      $areas = [
        ['Direito Empresarial', 'Assessoria completa para empresas em questões societárias, contratuais e estratégicas.', 'atuacao/direito-empresarial.php', 'areas/direito-empresarial-hero.jpg', false],
        ['Negociação Jurídica', 'Soluções eficazes em mediação e negociação de conflitos empresariais.', 'atuacao/negociacao-juridica.php', 'areas/negociacao-juridica-hero.jpg', false],
        ['Recuperação Judicial', 'Atuação ampla com destaque para transporte público e agronegócio.', 'atuacao/recuperacao-judicial.php', 'areas/recuperacao-judicial-hero.jpg', true],
        ['Direito Tributário', 'Planejamento e defesa em questões fiscais e tributárias.', 'atuacao/direito-tributario.php', 'areas/direito-tributario-hero.jpg', false],
      ];
      foreach ($areas as $a): ?>
      <a href="./<?=$a[2]?>" class="card--area" style="text-decoration:none">
        <img src="./assets/<?=$a[3]?>" alt="<?=$a[0]?>" loading="lazy">
        <div class="overlay"></div>
        <?php if($a[4]): ?><div class="highlight-badge">Destaque</div><?php endif; ?>
        <div class="content">
          <h3 style="color:#fff;margin-bottom:.5rem"><?=$a[0]?></h3>
          <p style="color:rgba(255,255,255,.9);font-size:.875rem;margin-bottom:.75rem"><?=$a[1]?></p>
          <span style="color:var(--accent);font-size:.875rem;font-weight:500">Saiba mais →</span>
        </div>
      </a>
      <?php endforeach; ?>
    </div>
    <div class="text-center mt-8">
      <a href="./atuacao.php" class="btn btn--outline">Ver Todas as Áreas de Atuação →</a>
    </div>
  </div>
</section>

<!-- CTA -->
<?php include 'includes/cta.php'; ?>

<?php include 'includes/footer.php'; ?>
<script src="./js/main.js"></script>
</body>
</html>
