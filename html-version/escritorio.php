<?php
$base = '.';
$current = 'escritorio';
$page_title = 'O Escritório | Rodrigo Vitalino Advogados';
$page_desc = 'Conheça o escritório Rodrigo Vitalino Advogados: história, valores, missão e atuação internacional.';
$canonical = '/escritorio';
include 'includes/head.php';
include 'includes/header.php';
?>

<section class="hero" style="min-height:60vh">
  <div class="hero__bg"><img src="./assets/escritorio-hero.png" alt="Escritório Rodrigo Vitalino" style="filter:contrast(1.15) saturate(1.25) brightness(1.05)"></div>
  <div class="hero__overlay" style="background:linear-gradient(to right,rgba(13,26,13,.6),transparent,transparent)"></div>
  <div class="hero__content"><div class="container">
    <div style="max-width:36rem">
      <div class="breadcrumb"><a href="./index.php" style="color:rgba(255,255,255,.8)">Início</a><span class="sep">/</span><span class="current">Nosso Escritório</span></div>
      <div style="display:inline-flex;align-items:center;gap:.5rem;padding:.5rem 1rem;border-radius:999px;background:hsla(45,95%,52%,.2);border:1px solid hsla(45,95%,52%,.4);margin-bottom:1.5rem;backdrop-filter:blur(4px)"><span style="color:var(--accent);font-size:.875rem;font-weight:600">Desde 2008</span></div>
      <h1 style="text-shadow:2px 2px 8px rgba(0,0,0,.5)">Nosso Escritório</h1>
      <div class="stats" style="margin-top:2rem">
        <div class="stats__item"><div class="stats__number">17+</div><div class="stats__label">Anos de Experiência</div></div>
        <div class="stats__item"><div class="stats__number">500+</div><div class="stats__label">Clientes Atendidos</div></div>
        <div class="stats__item"><div class="stats__number">17</div><div class="stats__label">Países de Atuação</div></div>
      </div>
    </div>
  </div></div>
</section>

<section class="section">
  <div class="container container--narrow">
    <div class="accordion-item">
      <button class="accordion-trigger" aria-expanded="false">
        <div class="icon-wrap"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
        <span class="title">Sobre Nós</span>
        <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="accordion-content">
        <p class="text-muted leading-relaxed mb-4">Rodrigo Vitalino Advogados vem construindo uma atuação sólida no cenário jurídico e empresarial. Idealizado por seu fundador, Rodrigo Vitalino, o escritório nasceu com a missão de oferecer soluções jurídicas estratégicas e consultoria empresarial voltada para resultados práticos e sustentáveis.</p>
        <p class="text-muted leading-relaxed mb-4">Ao longo dos anos, reunimos uma equipe multidisciplinar de profissionais que trabalham lado a lado com empresas de diferentes setores, tanto na prevenção de riscos quanto na defesa em litígios, sempre com foco em transparência, eficiência e segurança jurídica.</p>
        <p class="text-muted leading-relaxed">Expandimos nossa presença além das fronteiras brasileiras: o advogado Rodrigo Vitalino também possui inscrição na Ordem dos Advogados de Portugal, o que nos permite atender clientes em âmbito internacional.</p>
      </div>
    </div>
    <div class="accordion-item">
      <button class="accordion-trigger" aria-expanded="false">
        <div class="icon-wrap"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg></div>
        <span class="title">Nossos Diferenciais</span>
        <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="accordion-content">
        <div class="grid grid--2" style="margin-bottom:1.5rem">
          <div class="card"><h4 style="margin-bottom:.5rem">Especialização</h4><p class="text-muted text-sm">Nosso escritório atua fortemente em Direito Empresarial e Corporativo, unindo segurança técnica e visão estratégica.</p></div>
          <div class="card"><h4 style="margin-bottom:.5rem">Excelência</h4><p class="text-muted text-sm">Somos referência em soluções jurídicas, conduzindo processos com excelência e elaborando estratégias consistentes.</p></div>
        </div>
        <div class="dark-panel">
          <h4 style="margin-bottom:1rem">Nossos Princípios</h4>
          <div class="grid grid--2">
            <?php foreach(['Ética e seriedade na aplicação do Direito','Soluções jurídicas personalizadas e eficientes','Confiabilidade e bom relacionamento com clientes','Conhecimento, competência e aperfeiçoamento técnico','Foco nas necessidades do cliente','Comprometimento com os princípios legais','Transparência sobre riscos','Empreendedorismo'] as $v): ?>
            <div style="display:flex;align-items:flex-start;gap:.75rem;background:hsla(0,0%,100%,.05);border-radius:.5rem;padding:1rem;border:1px solid hsla(0,0%,100%,.1)"><span style="color:var(--accent)">✓</span><span class="text-sm" style="color:hsla(0,0%,100%,.9)"><?php echo $v; ?></span></div>
            <?php endforeach; ?>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<?php include 'includes/cta.php'; include 'includes/footer.php'; ?>
<script src="./js/main.js"></script>
</body></html>
