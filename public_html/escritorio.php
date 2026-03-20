<?php
$currentPage = 'escritorio';
$pageTitle = 'Escritório';
$pageDescription = 'Conheça o escritório Rodrigo Vitalino Advogados: história, valores, missão e atuação internacional em direito empresarial e recuperação judicial.';
include 'includes/header.php';
?>

<!-- Hero -->
<section style="position:relative;min-height:60vh;display:flex;align-items:center;overflow:hidden;">
  <div style="position:absolute;inset:0;background:#0d1a0d;">
    <img src="./assets/escritorio-hero.png" alt="Escritório Rodrigo Vitalino Advogados" style="width:100%;height:100%;object-fit:cover;">
    <div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(13,26,13,0.6),transparent);"></div>
    <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(13,26,13,0.3),transparent);"></div>
  </div>
  <div style="position:absolute;top:0;left:0;width:8rem;height:8rem;border-left:2px solid hsla(45,95%,52%,0.3);border-top:2px solid hsla(45,95%,52%,0.3);"></div>
  <div style="position:absolute;bottom:0;right:0;width:8rem;height:8rem;border-right:2px solid hsla(45,95%,52%,0.3);border-bottom:2px solid hsla(45,95%,52%,0.3);"></div>

  <div class="container" style="position:relative;z-index:10;">
    <div style="max-width:36rem;">
      <nav class="breadcrumb" style="animation:fadeIn 0.8s ease-out;">
        <a href="./" style="color:hsla(0,0%,100%,0.8);">Início</a>
        <span style="color:hsla(0,0%,100%,0.6);">/</span>
        <span class="current">Escritório</span>
      </nav>

      <div class="badge badge-accent mb-6" style="animation:fadeIn 0.8s ease-out;">
        <i data-lucide="scale" style="width:16px;height:16px;color:var(--accent);"></i>
        Desde 2008
      </div>

      <h1 style="font-size:3rem;font-weight:700;margin-bottom:1.5rem;text-shadow:2px 2px 8px rgba(0,0,0,0.5);animation:fadeIn 0.8s ease-out;">Escritório</h1>

      <div style="display:flex;flex-wrap:wrap;gap:2rem 3rem;animation:slideUp 0.8s ease-out 0.2s both;">
        <div class="text-center">
          <div style="font-size:2.5rem;font-family:var(--font-serif);font-weight:700;color:var(--accent);">17+</div>
          <div style="color:hsla(0,0%,100%,0.8);font-size:0.875rem;">Anos de Experiência</div>
        </div>
        <div class="text-center">
          <div style="font-size:2.5rem;font-family:var(--font-serif);font-weight:700;color:var(--accent);">500+</div>
          <div style="color:hsla(0,0%,100%,0.8);font-size:0.875rem;">Clientes Atendidos</div>
        </div>
        <div class="text-center">
          <div style="font-size:2.5rem;font-family:var(--font-serif);font-weight:700;color:var(--accent);">17</div>
          <div style="color:hsla(0,0%,100%,0.8);font-size:0.875rem;">Países de Atuação</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Accordion Sections -->
<section class="section-padding">
  <div class="container max-w-4xl">
    <div class="accordion-item open animate-on-scroll">
      <button class="accordion-trigger" onclick="toggleAccordion(this)">
        <div class="trigger-left">
          <div class="trigger-icon"><i data-lucide="history"></i></div>
          <span>Sobre Nós</span>
        </div>
        <i data-lucide="chevron-down" class="chevron"></i>
      </button>
      <div class="accordion-content">
        <div style="color:var(--muted-fg);line-height:1.7;">
          <p class="mb-4">Fundado em 2008 pelo Dr. Rodrigo Vitalino, nosso escritório nasceu com uma missão clara: oferecer assessoria jurídica de excelência com atuação prática, eficiente e transparente.</p>
          <p class="mb-4">Com sede em São Paulo e atuação em todo o Brasil e Portugal, construímos ao longo desses anos uma trajetória sólida baseada em resultados concretos para nossos clientes.</p>
          <p class="mb-6">Nossa expertise abrange desde o direito empresarial e recuperação judicial até planejamento tributário e sucessório, sempre com foco em soluções personalizadas.</p>
        </div>
        <div style="border-radius:0.75rem;overflow:hidden;margin-bottom:1.5rem;">
          <img src="./lovable-uploads/d8c139b1-7ccc-4be4-8400-a2fc92806d89.png" alt="Sala de reuniões" style="width:100%;height:16rem;object-fit:cover;" loading="lazy">
        </div>
        <div style="display:flex;align-items:center;gap:1rem;padding:1rem;background:hsla(45,95%,52%,0.1);border-radius:0.75rem;border:1px solid hsla(45,95%,52%,0.2);">
          <div style="background:var(--accent);color:var(--accent-fg);padding:0.5rem 1rem;border-radius:0.5rem;text-align:center;">
            <div style="font-size:1.5rem;font-family:var(--font-serif);font-weight:700;">2008</div>
            <div style="font-size:0.6875rem;text-transform:uppercase;letter-spacing:0.1em;">Fundação</div>
          </div>
          <p style="color:var(--muted-fg);font-size:0.875rem;">Mais de 17 anos de atuação jurídica consolidada em Direito Empresarial e áreas correlatas.</p>
        </div>
      </div>
    </div>

    <div class="accordion-item animate-on-scroll">
      <button class="accordion-trigger" onclick="toggleAccordion(this)">
        <div class="trigger-left">
          <div class="trigger-icon"><i data-lucide="award"></i></div>
          <span>Nossos Diferenciais</span>
        </div>
        <i data-lucide="chevron-down" class="chevron"></i>
      </button>
      <div class="accordion-content">
        <div class="grid-2 mb-6">
          <div class="card">
            <i data-lucide="scale" style="width:32px;height:32px;color:var(--accent);margin-bottom:1rem;"></i>
            <h4 style="font-size:1.125rem;margin-bottom:0.75rem;">Especialização</h4>
            <p style="color:var(--muted-fg);font-size:0.875rem;">Focados em Direito Empresarial e Recuperação Judicial com mais de 17 anos de experiência consolidada.</p>
          </div>
          <div class="card">
            <i data-lucide="users" style="width:32px;height:32px;color:var(--accent);margin-bottom:1rem;"></i>
            <h4 style="font-size:1.125rem;margin-bottom:0.75rem;">Excelência</h4>
            <p style="color:var(--muted-fg);font-size:0.875rem;">Equipe multidisciplinar comprometida com resultados concretos e atendimento personalizado.</p>
          </div>
        </div>
        <div style="background:hsl(135,33%,13%);border-radius:0.75rem;padding:1.5rem;">
          <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1.5rem;">
            <div class="icon-box"><i data-lucide="heart"></i></div>
            <h4 style="font-size:1.25rem;">Nossos Princípios</h4>
          </div>
          <div class="grid-2">
            <?php
            $valores = ['Ética e transparência', 'Compromisso com resultados', 'Atendimento personalizado', 'Inovação jurídica', 'Sigilo profissional', 'Responsabilidade social', 'Excelência técnica', 'Relacionamento de confiança'];
            foreach ($valores as $valor): ?>
            <div style="display:flex;align-items:flex-start;gap:0.75rem;background:hsla(0,0%,100%,0.05);border-radius:0.5rem;padding:1rem;border:1px solid hsla(0,0%,100%,0.1);">
              <i data-lucide="check-circle" style="width:20px;height:20px;color:var(--accent);flex-shrink:0;margin-top:0.125rem;"></i>
              <span style="color:hsla(0,0%,100%,0.9);font-size:0.875rem;"><?php echo $valor; ?></span>
            </div>
            <?php endforeach; ?>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion-item animate-on-scroll">
      <button class="accordion-trigger" onclick="toggleAccordion(this)">
        <div class="trigger-left">
          <div class="trigger-icon"><i data-lucide="users"></i></div>
          <span>Clientes Atendidos</span>
        </div>
        <i data-lucide="chevron-down" class="chevron"></i>
      </button>
      <div class="accordion-content">
        <div class="grid-2">
          <div class="card">
            <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;">
              <div style="width:3rem;height:3rem;border-radius:50%;background:hsla(45,95%,52%,0.2);display:flex;align-items:center;justify-content:center;">
                <i data-lucide="building-2" style="width:24px;height:24px;color:var(--accent);"></i>
              </div>
              <h4 style="font-size:1.125rem;">Empresas Nacionais</h4>
            </div>
            <ul style="font-size:0.875rem;color:var(--muted-fg);">
              <li class="border-l-accent" style="margin-bottom:0.75rem;">Empresa de grande porte do setor industrial</li>
              <li class="border-l-accent" style="margin-bottom:0.75rem;">Grupo empresarial do setor de varejo</li>
              <li class="border-l-accent" style="margin-bottom:0.75rem;">Rede de franquias do setor alimentício</li>
              <li class="border-l-accent" style="margin-bottom:0.75rem;">Empresa de tecnologia e inovação</li>
              <li class="border-l-accent">Grupo do setor de construção civil</li>
            </ul>
          </div>
          <div class="card">
            <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;">
              <div style="width:3rem;height:3rem;border-radius:50%;background:hsla(45,95%,52%,0.2);display:flex;align-items:center;justify-content:center;">
                <i data-lucide="globe" style="width:24px;height:24px;color:var(--accent);"></i>
              </div>
              <h4 style="font-size:1.125rem;">Empresas Internacionais</h4>
            </div>
            <ul style="font-size:0.875rem;color:var(--muted-fg);">
              <li class="border-l-accent" style="margin-bottom:0.75rem;">Proview Electronics Co Ltd – Taipei / Taiwan</li>
              <li class="border-l-accent" style="margin-bottom:0.75rem;">RED International Group – Taipei / Taiwan</li>
              <li class="border-l-accent" style="margin-bottom:0.75rem;">Proview LED Lighting Co. Ltd – Taipei / Taiwan</li>
              <li class="border-l-accent" style="margin-bottom:0.75rem;">New Era Investment Inc. – Panama / Panama</li>
              <li class="border-l-accent" style="margin-bottom:0.75rem;">Reit Investment Corp. – Panama / Panama</li>
              <li class="border-l-accent" style="margin-bottom:0.75rem;">North Capital Holding – Copenhagen / Denmark</li>
              <li class="border-l-accent">Dti Korea Co. Ltd – Coreia do Sul</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<?php include 'includes/cta.php'; ?>

<?php
$extraScripts = '<script>
function toggleAccordion(btn) {
  var item = btn.closest(".accordion-item");
  item.classList.toggle("open");
  lucide.createIcons();
}
</script>';
?>
<script>
function toggleAccordion(btn) {
  var item = btn.closest(".accordion-item");
  item.classList.toggle("open");
  lucide.createIcons();
}
</script>

<?php include 'includes/footer.php'; ?>
