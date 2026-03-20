<?php
$currentPage = 'atuacao';
$pageTitle = 'Áreas de Atuação';
$pageDescription = 'Áreas de atuação do escritório Rodrigo Vitalino Advogados: direito empresarial, recuperação judicial, tributário, trabalhista, família e sucessões, crédito de carbono e mais.';
include 'includes/header.php';
?>

<!-- Quick Contact Banner -->
<section class="contact-banner">
  <div class="container">
    <div class="contact-banner-inner">
      <div class="contact-banner-left">
        <div class="pulse-dot"></div>
        <span style="font-size:0.875rem;font-weight:500;">Precisa de orientação jurídica?</span>
      </div>
      <a href="https://wa.me/5511974083838" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        <i data-lucide="phone" style="width:16px;height:16px;"></i>
        Falar com Especialista
        <i data-lucide="arrow-right" style="width:12px;height:12px;"></i>
      </a>
    </div>
  </div>
</section>

<!-- Areas Grid -->
<section id="areas-grid" class="section-padding" style="scroll-margin-top:-20px;">
  <div class="container">
    <div class="text-center mb-12 animate-on-scroll">
      <span style="color:var(--accent);font-size:0.8125rem;font-weight:500;text-transform:uppercase;letter-spacing:0.2em;display:block;margin-bottom:1rem;">Nossas Especialidades</span>
      <h2 style="font-size:2.25rem;margin-bottom:1.5rem;">Descubra Nossas Áreas</h2>
      <p style="color:var(--muted-fg);max-width:42rem;margin:0 auto;font-size:1.125rem;">Atuação especializada e personalizada para atender às necessidades jurídicas da sua empresa.</p>
    </div>

    <div class="areas-grid animate-on-scroll">
      <?php
      $areas = [
        ['icon' => 'building-2', 'title' => 'Direito Empresarial', 'desc' => 'Assessoria completa para empresas, desde a constituição até a reestruturação societária.', 'href' => './atuacao/direito-empresarial.php', 'img' => './assets/areas/direito-empresarial-hero.jpg'],
        ['icon' => 'handshake', 'title' => 'Negociação Jurídica', 'desc' => 'Mediação, conciliação e negociação estratégica de acordos para resolução de conflitos.', 'href' => './atuacao/negociacao-juridica.php', 'img' => './assets/areas/negociacao-juridica-hero.jpg'],
        ['icon' => 'trending-up', 'title' => 'Recuperação Judicial', 'desc' => 'Reestruturação empresarial e proteção patrimonial para empresas em crise.', 'href' => './atuacao/recuperacao-judicial.php', 'img' => './assets/areas/recuperacao-judicial-hero.jpg', 'highlight' => true],
        ['icon' => 'calculator', 'title' => 'Direito Tributário', 'desc' => 'Planejamento tributário, defesa fiscal e recuperação de créditos.', 'href' => './atuacao/direito-tributario.php', 'img' => './assets/areas/direito-tributario-hero.jpg'],
        ['icon' => 'briefcase', 'title' => 'Direito Trabalhista', 'desc' => 'Assessoria em relações trabalhistas, compliance e contencioso.', 'href' => './atuacao/direito-trabalhista.php', 'img' => './assets/areas/direito-trabalhista-hero.jpg'],
        ['icon' => 'heart', 'title' => 'Família e Sucessões', 'desc' => 'Planejamento patrimonial, inventários e proteção do legado familiar.', 'href' => './atuacao/familia-e-sucessoes.php', 'img' => './assets/areas/familia-sucessoes-hero.jpg'],
        ['icon' => 'scale', 'title' => 'Direito Civil', 'desc' => 'Contratos, responsabilidade civil, direito imobiliário e mais.', 'href' => './atuacao/direito-civil.php', 'img' => './assets/areas/direito-civil-hero.jpg'],
        ['icon' => 'leaf', 'title' => 'Crédito de Carbono', 'desc' => 'Assessoria em mercado de carbono, ESG e sustentabilidade corporativa.', 'href' => './atuacao/credito-de-carbono.php', 'img' => './assets/areas/credito-carbono-hero.jpg', 'highlight' => true],
      ];
      foreach ($areas as $area): ?>
      <a href="<?php echo $area['href']; ?>" class="area-card">
        <img src="<?php echo $area['img']; ?>" alt="<?php echo $area['title']; ?>" loading="lazy">
        <div class="area-card-overlay"></div>
        <div class="area-card-icon"><i data-lucide="<?php echo $area['icon']; ?>"></i></div>
        <?php if (!empty($area['highlight'])): ?>
        <div class="area-card-badge">Destaque</div>
        <?php endif; ?>
        <div class="area-card-content" style="min-height:320px;">
          <h3><?php echo $area['title']; ?></h3>
          <p><?php echo $area['desc']; ?></p>
          <div class="area-card-link">
            <span>Saiba mais</span>
            <i data-lucide="arrow-right"></i>
          </div>
        </div>
      </a>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Quote Section -->
<section class="quote-band">
  <div class="container" style="position:relative;z-index:10;">
    <div class="max-w-4xl mx-auto">
      <div class="quote-mark">"</div>
      <blockquote class="quote-text">O Direito Empresarial não é sobre apagar incêndios — é sobre garantir que eles nunca comecem.</blockquote>
      <div style="display:flex;align-items:center;justify-content:center;gap:1.5rem;">
        <div style="width:4rem;height:1px;background:linear-gradient(to right,transparent,hsla(45,95%,52%,0.5));"></div>
        <div class="text-center">
          <span class="quote-author" style="display:block;">Rodrigo Vitalino</span>
          <span class="quote-role">Advogado Fundador</span>
        </div>
        <div style="width:4rem;height:1px;background:linear-gradient(to left,transparent,hsla(45,95%,52%,0.5));"></div>
      </div>
    </div>
  </div>
</section>

<!-- Why Choose Us -->
<section class="section-padding">
  <div class="container">
    <div class="grid-2" style="gap:4rem;align-items:center;">
      <div class="animate-on-scroll">
        <span style="color:var(--accent);font-size:0.8125rem;font-weight:500;text-transform:uppercase;letter-spacing:0.2em;display:block;margin-bottom:1.5rem;">Por que nos escolher</span>
        <h2 style="font-size:2.25rem;margin-bottom:2rem;line-height:1.15;">Compromisso com a Excelência</h2>
        <p style="color:var(--muted-fg);line-height:1.7;margin-bottom:2.5rem;font-size:1.125rem;">Cada caso é tratado com a atenção e a dedicação que merece, sempre buscando a melhor solução jurídica.</p>
        
        <?php
        $benefits = ['Atendimento personalizado', 'Equipe multidisciplinar', 'Atuação nacional e internacional', 'Resultados comprovados', 'Transparência total'];
        foreach ($benefits as $i => $benefit): ?>
        <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.25rem;">
          <div style="width:2rem;height:2rem;border-radius:50%;background:linear-gradient(135deg,hsla(45,95%,52%,0.2),hsla(45,95%,52%,0.1));display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <div style="width:0.5rem;height:0.5rem;border-radius:50%;background:var(--accent);"></div>
          </div>
          <span style="font-size:1.125rem;"><?php echo $benefit; ?></span>
        </div>
        <?php endforeach; ?>
      </div>

      <div class="animate-on-scroll text-center">
        <div style="aspect-ratio:1;background:linear-gradient(135deg,hsl(135,33%,13%),hsl(135,33%,18%),hsl(135,33%,13%));border-radius:1.5rem;padding:2.5rem;display:flex;align-items:center;justify-content:center;box-shadow:0 25px 50px -12px rgba(0,0,0,0.4);">
          <div>
            <i data-lucide="scale" style="width:7rem;height:7rem;color:var(--accent);opacity:0.3;margin-bottom:2rem;display:block;margin-left:auto;margin-right:auto;"></i>
            <div style="font-family:var(--font-serif);font-size:4rem;background:linear-gradient(to right,var(--accent),hsl(45,70%,55%),var(--accent));-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:600;margin-bottom:0.75rem;">2008</div>
            <div style="color:hsla(0,0%,100%,0.6);font-size:1.125rem;">Fundação do Escritório</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<?php
$ctaTitle = 'Pronto para a próxima etapa?';
$ctaDesc = 'Agende uma consulta com nossos especialistas e descubra como podemos ajudar.';
include 'includes/cta.php';
?>
<?php include 'includes/footer.php'; ?>
