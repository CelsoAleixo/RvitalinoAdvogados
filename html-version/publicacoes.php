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
      <div class="pub-card" style="grid-column:1/-1">
        <div class="pub-card__image"><img src="./assets/publications/recuperacao-judicial-lei-11101-hero.jpg" alt="Recuperação Judicial do Produtor Rural — Lei 11.101/2005" loading="lazy"></div>
        <div class="pub-card__body">
          <div class="pub-card__category">Direito Empresarial</div>
          <h3 class="pub-card__title">Recuperação Judicial do Produtor Rural — Lei nº 11.101/2005 | Provimento CNJ nº 216, de 9 de março de 2026</h3>
          <p class="pub-card__excerpt">Estudo elaborado pela Dra. Deidre Scaranello sobre a aplicação da Lei nº 11.101/2005 ao produtor rural, incluindo os impactos do Provimento CNJ nº 216/2026.</p>
          <div class="pub-card__date">21 de Março de 2026</div>
          <a href="./publications/recuperacao-judicial-produtor-rural-lei-11101-provimento-cnj-216.pdf" target="_blank" class="btn btn--primary" style="margin-top:1rem;display:inline-flex;align-items:center;gap:.5rem">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Baixar PDF
          </a>
        </div>
      </div>
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
