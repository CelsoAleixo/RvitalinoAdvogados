<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Publicações e Artigos Jurídicos – Rodrigo Vitalino Advogados</title>
  <meta name="description" content="Artigos e análises jurídicas sobre direito empresarial, recuperação judicial, tributário e agronegócio.">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
<?php include 'includes/helpers.php'; include 'includes/header.php'; ?>

<section class="page-hero" style="background:linear-gradient(135deg,hsl(165,35%,8%),hsl(150,30%,15%))">
  <div class="container" style="position:relative;z-index:10;padding:3rem 0">
    <nav class="breadcrumb">
      <a href="index.php">Início</a>
      <span class="separator">/</span>
      <span class="current">Publicações</span>
    </nav>
    <h1>Atualizações Jurídicas</h1>
    <p>Artigos, notícias e análises sobre legislação, tributação e impactos no mundo dos negócios.</p>
  </div>
</section>

<section class="section-padding">
  <div class="container">
    <?php
    $pubs = [
      ['title'=>'Crise Climática em Mato Grosso: O Peso da Safra 2025/26','cat'=>'Direito Rural','date'=>'18 Fev 2026','excerpt'=>'Mato Grosso enfrenta uma tempestade perfeita: endividamento crescente, chuvas recordes e uma colheita que não consegue avançar. O campo está no limite.'],
      ['title'=>'Recuperação Judicial do Produtor Rural – Lei 14.112/20','cat'=>'Direito Rural','date'=>'20 Jan 2026','excerpt'=>'A Lei 14.112/20 ampliou o acesso à recuperação judicial para produtores rurais, permitindo a preservação de negócios viáveis.'],
      ['title'=>'Reforma Tributária e seus impactos no agronegócio','cat'=>'Direito Tributário','date'=>'15 Dez 2025','excerpt'=>'A reforma tributária trará mudanças significativas para o setor do agronegócio. Entenda os principais impactos.'],
      ['title'=>'Holding Familiar como Instrumento de Proteção Patrimonial','cat'=>'Direito Empresarial','date'=>'10 Nov 2025','excerpt'=>'A constituição de uma holding familiar é uma das estratégias mais eficazes para proteção e organização do patrimônio.'],
      ['title'=>'Direitos Trabalhistas no Campo','cat'=>'Direito Trabalhista','date'=>'05 Out 2025','excerpt'=>'O trabalhador rural possui direitos específicos que precisam ser respeitados. Conheça as particularidades da legislação trabalhista rural.'],
      ['title'=>'Atuação Internacional: Oportunidades em Portugal','cat'=>'Direito Internacional','date'=>'20 Set 2025','excerpt'=>'Portugal oferece diversas oportunidades para empresários brasileiros. Saiba como abrir empresa e investir no país europeu.'],
    ];
    ?>

    <!-- Featured -->
    <div class="fade-in" style="margin-bottom:3rem">
      <div class="pub-card" style="display:grid;grid-template-columns:1fr;gap:0">
        <div class="pub-body" style="padding:2rem">
          <span class="pub-category"><?= $pubs[0]['cat'] ?></span>
          <h2 style="font-size:1.5rem;color:var(--foreground);margin-bottom:0.75rem"><?= $pubs[0]['title'] ?></h2>
          <p style="font-size:1rem;line-height:1.6;margin-bottom:1rem"><?= $pubs[0]['excerpt'] ?></p>
          <span class="pub-date"><?= $pubs[0]['date'] ?></span>
        </div>
      </div>
    </div>

    <!-- Rest -->
    <div class="grid grid-2">
      <?php for ($i = 1; $i < count($pubs); $i++): $pub = $pubs[$i]; ?>
      <div class="pub-card fade-in">
        <div class="pub-body">
          <span class="pub-category"><?= $pub['cat'] ?></span>
          <h3><?= $pub['title'] ?></h3>
          <p><?= $pub['excerpt'] ?></p>
          <span class="pub-date"><?= $pub['date'] ?></span>
        </div>
      </div>
      <?php endfor; ?>
    </div>
  </div>
</section>

<?php renderCTA(); ?>
<?php include 'includes/footer.php'; ?>
</body>
</html>
