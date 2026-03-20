<?php
$currentPage = 'home';
$pageTitle = 'Assessoria Jurídica e Consultoria Empresarial';
$pageDescription = 'Assessoria jurídica e consultoria empresarial com atuação prática, eficiente e transparente. Direito empresarial, recuperação judicial, tributário e mais. Atuação no Brasil e Portugal.';
include 'includes/header.php';
?>

<!-- Hero Section -->
<section class="hero">
  <video class="hero-video" autoplay loop muted playsinline preload="auto" aria-hidden="true">
    <source src="./assets/institutional-video.mp4" type="video/mp4">
  </video>
  <div class="hero-overlay"></div>
  
  <div class="container hero-content">
    <h1 class="hero-title">Assessoria Jurídica e Consultoria Empresarial</h1>
    <p class="hero-subtitle">Seu parceiro jurídico estratégico. Transformamos desafios legais em soluções práticas para o crescimento sustentável do seu negócio.</p>
    
    <div class="hero-buttons">
      <a href="./contato.php" class="btn btn-primary btn-lg">
        <i data-lucide="phone" style="width:20px;height:20px;"></i>
        Fale com um Advogado
        <i data-lucide="arrow-right" style="width:16px;height:16px;"></i>
      </a>
      <a href="./atuacao.php#areas-grid" class="btn btn-white-outline btn-lg">
        Conheça Nossas Áreas
      </a>
    </div>

    <div style="margin-top:1rem;">
      <a href="#manifesto" class="btn btn-white-outline btn-sm">&ldquo;Não existe por acaso, nem coincidência&rdquo;</a>
    </div>
  </div>
  
  <div class="hero-gradient"></div>
</section>

<!-- Trust Indicators -->
<section class="trust-bar animate-on-scroll">
  <div class="container">
    <div class="trust-grid">
      <div class="trust-item">
        <i data-lucide="shield"></i>
        <span>OAB Ativo</span>
      </div>
      <div class="trust-item">
        <i data-lucide="award"></i>
        <span>17+ Anos</span>
      </div>
      <div class="trust-item">
        <i data-lucide="users"></i>
        <span>500+ Clientes</span>
      </div>
      <div class="trust-item">
        <i data-lucide="clock"></i>
        <span>Resposta Rápida</span>
      </div>
    </div>
  </div>
</section>

<!-- Manifesto -->
<section id="manifesto" class="section-padding animate-on-scroll" style="background:hsla(165,30%,18%,0.28);scroll-margin-top:6rem;">
  <div class="container">
    <div style="max-width:52rem;margin:0 auto;">
      <p class="quote-block animate-on-scroll" style="font-family:var(--font-serif);font-size:1.5rem;color:var(--accent);font-style:italic;border-left:4px solid var(--accent);padding-left:1.25rem;line-height:1.4;">
        “Não existe por acaso, nem coincidência.”
      </p>
      <p class="animate-on-scroll" style="color:var(--muted-fg);line-height:1.8;margin-top:1.25rem;font-size:1.0625rem;">
        Há propósito em cada decisão. É com essa convicção que o escritório Rodrigo Vitalino Advogados construiu sua trajetória: com vocação, responsabilidade e compromisso inabalável com quem confia em nosso trabalho.
      </p>
    </div>
  </div>
</section>

<!-- Storytelling Section -->
<section id="storytelling-section" class="section-padding" style="position:relative;overflow:hidden;">
  <div class="container" style="max-width:64rem;">
    <div class="text-center mb-6 animate-on-scroll">
      <span class="badge badge-accent">
        <span style="width:6px;height:6px;border-radius:50%;background:var(--accent);"></span>
        Nossa História
      </span>
    </div>
    
    <h2 class="text-center mb-12 animate-on-scroll" style="font-size:2rem;color:var(--accent);">
      Onde o Direito encontra a vida real das empresas
    </h2>

    <div class="storytelling-grid mb-6 animate-on-scroll">
      <div class="storytelling-img">
        <img src="./assets/storytelling-hope.jpg" alt="Parceria empresarial e esperança" loading="lazy">
        <div class="storytelling-img-overlay"></div>
        <div class="storytelling-img-text">Histórias reais, impacto real</div>
      </div>
      <div class="storytelling-text-block">
        <p>Ao longo da nossa trajetória, fortalecemos sociedades, estruturamos startups que hoje atraem investimentos, blindamos marcas que se tornaram líderes em seus mercados e implementamos governança que transformou operações inteiras.</p>
        <p>E quando o desafio foi maior, fomos ainda melhores. Conduzimos Recuperações Judiciais que salvaram empresas e devolveram futuro a negócios que muitos já davam por perdidos.</p>
      </div>
    </div>

    <div class="storytelling-grid mb-6 animate-on-scroll">
      <div class="storytelling-text-block">
        <p style="color:var(--fg);font-weight:500;">Nada disso é teoria. São histórias reais que acompanhamos de perto — e que moldaram a forma como enxergamos o Direito Empresarial.</p>
        <p>Foi vivendo esses cenários, lado a lado com empresários, que entendemos que nosso papel vai muito além de interpretar leis. Ele está em antecipar riscos antes que se tornem crises, estruturar sociedades para evitar conflitos, construir contratos que protegem o presente e o futuro.</p>
      </div>
      <div class="storytelling-img">
        <img src="./assets/storytelling-renewal.jpg" alt="Renovação e crescimento empresarial" loading="lazy">
        <div class="storytelling-img-overlay" style="background:linear-gradient(to top,hsla(165,35%,12%,0.6),transparent);"></div>
      </div>
    </div>

    <div class="storytelling-highlight mb-6 animate-on-scroll">
      <div class="storytelling-highlight-icon">
        <i data-lucide="shield"></i>
      </div>
      <p>Não somos apenas advogados. Somos guardiões do que você construiu — e arquitetos do que você ainda vai construir.</p>
    </div>

    <div class="text-center animate-on-scroll">
      <a href="./contato.php" class="btn btn-primary btn-lg">
        <i data-lucide="phone" style="width:20px;height:20px;"></i>
        Agendar consulta jurídica
        <i data-lucide="chevron-right" style="width:16px;height:16px;"></i>
      </a>
    </div>
  </div>
</section>

<!-- Areas of Practice -->
<section class="section-padding">
  <div class="container">
    <div class="animate-on-scroll" style="display:flex;align-items:center;gap:0.75rem;margin-bottom:2rem;">
      <div class="icon-box"><i data-lucide="briefcase"></i></div>
      <h2 class="section-heading" style="margin-bottom:0;">Atuação</h2>
    </div>

    <div class="areas-grid mb-8 animate-on-scroll">
      <a href="./atuacao/direito-empresarial.php" class="area-card">
        <img src="./assets/areas/direito-empresarial-hero.jpg" alt="Direito Empresarial" loading="lazy">
        <div class="area-card-overlay"></div>
        <div class="area-card-icon"><i data-lucide="building-2"></i></div>
        <div class="area-card-content">
          <h3>Direito Empresarial</h3>
          <p>Assessoria completa para empresas, desde a constituição até a reestruturação societária.</p>
          <div class="area-card-link">
            <span>Saiba mais</span>
            <i data-lucide="arrow-right"></i>
          </div>
        </div>
      </a>

      <a href="./atuacao/negociacao-juridica.php" class="area-card">
        <img src="./assets/areas/negociacao-juridica-hero.jpg" alt="Negociação Jurídica" loading="lazy">
        <div class="area-card-overlay"></div>
        <div class="area-card-icon"><i data-lucide="scale"></i></div>
        <div class="area-card-content">
          <h3>Negociação Jurídica</h3>
          <p>Mediação, conciliação e negociação estratégica de acordos para resolução de conflitos.</p>
          <div class="area-card-link">
            <span>Saiba mais</span>
            <i data-lucide="arrow-right"></i>
          </div>
        </div>
      </a>

      <a href="./atuacao/recuperacao-judicial.php" class="area-card">
        <img src="./assets/areas/recuperacao-judicial-hero.jpg" alt="Recuperação Judicial" loading="lazy">
        <div class="area-card-overlay"></div>
        <div class="area-card-icon"><i data-lucide="briefcase"></i></div>
        <div class="area-card-badge">Destaque</div>
        <div class="area-card-content">
          <h3>Recuperação Judicial</h3>
          <p>Reestruturação empresarial e proteção patrimonial para empresas em crise.</p>
          <div class="area-card-link">
            <span>Saiba mais</span>
            <i data-lucide="arrow-right"></i>
          </div>
        </div>
      </a>

      <a href="./atuacao/direito-tributario.php" class="area-card">
        <img src="./assets/areas/direito-tributario-hero.jpg" alt="Direito Tributário" loading="lazy">
        <div class="area-card-overlay"></div>
        <div class="area-card-icon"><i data-lucide="scale"></i></div>
        <div class="area-card-content">
          <h3>Direito Tributário</h3>
          <p>Planejamento tributário, defesa fiscal e recuperação de créditos.</p>
          <div class="area-card-link">
            <span>Saiba mais</span>
            <i data-lucide="arrow-right"></i>
          </div>
        </div>
      </a>
    </div>

    <div class="text-center animate-on-scroll">
      <a href="./atuacao.php" class="btn btn-outline">
        <i data-lucide="briefcase" style="width:16px;height:16px;"></i>
        Ver Toda a Atuação
        <i data-lucide="arrow-right" style="width:16px;height:16px;"></i>
      </a>
    </div>
  </div>
</section>

<!-- CTA Section -->
<?php include 'includes/cta.php'; ?>

<?php include 'includes/footer.php'; ?>
