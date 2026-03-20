<?php
$base = '.';
$current = 'publicacoes';
$page_title = 'Publicações | Rodrigo Vitalino Advogados';
$page_desc = 'Artigos e análises jurídicas sobre direito empresarial, recuperação judicial, tributário e mais.';
$canonical = '/publicacoes';
include 'includes/head.php';
include 'includes/header.php';
?>
<section class="hero" style="min-height:40vh;background:linear-gradient(135deg,hsl(165,35%,8%),hsl(165,30%,15%))">
  <div class="hero__content"><div class="container">
    <div class="breadcrumb"><a href="./index.php">Início</a><span class="sep">/</span><span class="current">Publicações</span></div>
    <h1>Atualizações Jurídicas</h1>
    <p class="text-muted" style="font-size:1.125rem;margin-top:.5rem">Artigos, notícias e análises sobre legislação, tributação e impactos no mundo dos negócios.</p>
  </div></div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid--2">
      <div class="pub-card">
        <div class="pub-card__image"><img src="./assets/publications/crise-climatica-mt-hero.jpg" alt="Crise Climática em Mato Grosso" loading="lazy"></div>
        <div class="pub-card__body">
          <div class="pub-card__category">Direito Rural</div>
          <h3 class="pub-card__title">Crise Climática em Mato Grosso: O Peso da Safra 2025/26</h3>
          <p class="pub-card__excerpt">Mato Grosso enfrenta uma tempestade perfeita: endividamento crescente, chuvas recordes e uma colheita que não consegue avançar.</p>
          <div class="pub-card__date">18 de Fevereiro de 2026</div>
        </div>
      </div>
      <div class="pub-card">
        <div class="pub-card__image"><img src="./assets/publications/recuperacao-rural-hero.jpg" alt="Recuperação Judicial do Produtor Rural" loading="lazy"></div>
        <div class="pub-card__body">
          <div class="pub-card__category">Direito Rural</div>
          <h3 class="pub-card__title">Recuperação Judicial do Produtor Rural – Lei 14.112/20</h3>
          <p class="pub-card__excerpt">A Lei 14.112/20 ampliou o acesso à recuperação judicial para produtores rurais, permitindo a preservação de negócios viáveis.</p>
          <div class="pub-card__date">20 de Janeiro de 2026</div>
        </div>
      </div>
    </div>
  </div>
</section>

<?php include 'includes/cta.php'; include 'includes/footer.php'; ?>
<script src="./js/main.js"></script>
</body></html>
