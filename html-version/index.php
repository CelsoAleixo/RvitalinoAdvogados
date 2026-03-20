<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rodrigo Vitalino Advogados | Assessoria Jurídica e Consultoria Empresarial</title>
  <meta name="description" content="Assessoria jurídica e consultoria empresarial com atuação prática, eficiente e transparente. Direito empresarial, recuperação judicial, tributário e mais.">
  <link rel="stylesheet" href="css/style.css">
  <link rel="icon" href="https://dzeqwfzqrtfjgvnxddwg.supabase.co/storage/v1/object/public/lovable-uploads/dc472574-eab5-4830-b6d7-55c5b5234743.png">
</head>
<body>
<?php include 'includes/helpers.php'; include 'includes/header.php'; ?>

<!-- Hero -->
<section class="hero">
  <div class="hero-bg">
    <div style="width:100%;height:100%;background:linear-gradient(135deg,hsl(165,35%,8%),hsl(150,30%,15%),hsl(165,35%,10%))"></div>
    <div class="hero-overlay" style="background:rgba(26,46,26,0.6)"></div>
  </div>
  <div class="container hero-content">
    <h1>Soluções legais confiáveis e eficazes</h1>
    <p>Assessoria jurídica empresarial com excelência e segurança.</p>
    <div class="hero-buttons">
      <a href="contato.php" class="btn btn-accent btn-lg"><?= icon('phone',20) ?> Contato →</a>
      <a href="atuacao.php" class="btn btn-outline btn-lg">Áreas de Atuação</a>
    </div>
  </div>
  <div class="hero-gradient"></div>
</section>

<!-- Trust Bar -->
<div class="trust-bar">
  <div class="container">
    <div class="trust-items">
      <div class="trust-item"><?= icon('shield',16) ?> OAB Ativo</div>
      <div class="trust-item"><?= icon('award',16) ?> 17+ Anos</div>
      <div class="trust-item"><?= icon('users',16) ?> 500+ Clientes</div>
      <div class="trust-item"><?= icon('clock',16) ?> Resposta Rápida</div>
    </div>
  </div>
</div>

<!-- Areas of Practice -->
<section class="section-padding">
  <div class="container">
    <div class="section-heading">
      <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:2rem">
        <div style="padding:0.5rem;border-radius:0.5rem;background:rgba(230,180,30,0.1)"><?= icon('briefcase') ?></div>
        <h2>Atuação</h2>
      </div>
    </div>

    <div class="grid grid-4">
      <?php
      $areas = [
        ['title' => 'Direito Empresarial', 'desc' => 'Assessoria completa para empresas em questões societárias, contratuais e estratégicas.', 'icon' => 'building'],
        ['title' => 'Negociação Jurídica', 'desc' => 'Soluções eficazes em mediação e negociação de conflitos empresariais.', 'icon' => 'scale'],
        ['title' => 'Recuperação Judicial', 'desc' => 'Atuação ampla com destaque para transporte público e agronegócio.', 'icon' => 'briefcase', 'highlight' => true],
        ['title' => 'Direito Tributário', 'desc' => 'Planejamento e defesa em questões fiscais e tributárias.', 'icon' => 'scale'],
      ];
      foreach ($areas as $area): ?>
      <a href="atuacao.php" class="area-card fade-in">
        <div style="position:absolute;inset:0;background:linear-gradient(135deg,hsl(165,30%,18%),hsl(165,35%,12%))"></div>
        <div class="overlay"></div>
        <?php if (!empty($area['highlight'])): ?>
        <div class="badge-highlight">Destaque</div>
        <?php endif; ?>
        <div class="icon-box"><?= icon($area['icon']) ?></div>
        <div class="content">
          <h3><?= $area['title'] ?></h3>
          <p class="desc"><?= $area['desc'] ?></p>
          <span class="learn-more">Saiba mais <?= icon('arrow-right', 16) ?></span>
        </div>
      </a>
      <?php endforeach; ?>
    </div>

    <div class="text-center mt-8">
      <a href="atuacao.php" class="btn btn-outline"><?= icon('briefcase',16) ?> Ver Todas as Áreas de Atuação →</a>
    </div>
  </div>
</section>

<!-- Publications -->
<section class="section-padding" style="background:rgba(21,46,30,0.3)">
  <div class="container">
    <div class="section-heading">
      <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:2rem">
        <div style="padding:0.5rem;border-radius:0.5rem;background:rgba(230,180,30,0.1)"><?= icon('book') ?></div>
        <h2>Publicações</h2>
      </div>
    </div>

    <div class="grid grid-3">
      <?php
      $pubs = [
        ['title' => 'Crise Climática em Mato Grosso', 'cat' => 'Direito Rural', 'date' => '18 Fev 2026', 'excerpt' => 'Mato Grosso enfrenta uma tempestade perfeita: endividamento crescente, chuvas recordes e uma colheita que não consegue avançar.'],
        ['title' => 'Recuperação Judicial do Produtor Rural', 'cat' => 'Direito Rural', 'date' => '20 Jan 2026', 'excerpt' => 'A Lei 14.112/20 ampliou o acesso à recuperação judicial para produtores rurais.'],
        ['title' => 'Proteção Patrimonial no Agronegócio', 'cat' => 'Direito Empresarial', 'date' => '15 Dez 2025', 'excerpt' => 'Estratégias jurídicas para proteger o patrimônio rural contra riscos financeiros.'],
      ];
      foreach ($pubs as $pub): ?>
      <a href="publicacoes.php" class="pub-card fade-in">
        <div class="pub-body">
          <span class="pub-category"><?= $pub['cat'] ?></span>
          <h3><?= $pub['title'] ?></h3>
          <p><?= $pub['excerpt'] ?></p>
          <span class="pub-date"><?= $pub['date'] ?></span>
        </div>
      </a>
      <?php endforeach; ?>
    </div>

    <div class="text-center mt-8">
      <a href="publicacoes.php" class="btn btn-outline"><?= icon('book',16) ?> Ver Todas as Publicações →</a>
    </div>
  </div>
</section>

<!-- CTA -->
<?php renderCTA(); ?>

<?php include 'includes/footer.php'; ?>
</body>
</html>
