<?php
$currentPage = 'agro';
$pageTitle = 'Assessoria Jurídica para o Agronegócio';
$pageDescription = 'Proteção patrimonial, recuperação judicial, planejamento sucessório e assessoria completa para produtores rurais e empresas do agronegócio.';
include 'includes/header.php';
?>

<!-- Hero -->
<section class="hero" style="min-height:90vh;">
  <video class="hero-video" autoplay loop muted playsinline preload="auto" aria-hidden="true">
    <source src="/assets/agro-hero-video-v8.mp4" type="video/mp4">
  </video>
  <div style="position:absolute;inset:0;background:linear-gradient(to top-right,rgba(0,0,0,0.7),rgba(0,0,0,0.3),transparent);"></div>
  <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.6),transparent);"></div>

  <div class="container" style="position:relative;z-index:10;padding-top:8rem;padding-bottom:4rem;">
    <div style="max-width:42rem;">
      <div style="display:inline-flex;align-items:center;gap:0.5rem;margin-bottom:1.25rem;opacity:0;animation:fadeIn 0.8s ease-out 0.3s forwards;">
        <i data-lucide="leaf" style="width:16px;height:16px;color:var(--accent);"></i>
        <span style="color:hsla(45,95%,52%,0.9);font-size:0.6875rem;text-transform:uppercase;letter-spacing:0.2em;font-weight:500;">Direito do Agronegócio</span>
      </div>

      <h1 style="font-family:var(--font-serif);font-size:2rem;color:#fff;line-height:1.1;margin-bottom:1.25rem;text-shadow:1px 2px 12px rgba(0,0,0,0.5);opacity:0;animation:fadeIn 1.2s ease-out 0.6s forwards;">
        Soluções jurídicas para quem <span style="color:var(--accent);">produz</span>, <span style="color:var(--accent);">transforma</span> e <span style="color:var(--accent);">alimenta</span> o Brasil.
      </h1>

      <p style="font-size:0.875rem;color:hsla(0,0%,100%,0.75);margin-bottom:1.75rem;max-width:32rem;text-shadow:1px 1px 4px rgba(0,0,0,0.4);opacity:0;animation:fadeIn 1s ease-out 1.1s forwards;">
        Protegemos o patrimônio e impulsionamos os negócios do produtor rural e sua família.
      </p>

      <div style="opacity:0;animation:fadeIn 0.8s ease-out 1.5s forwards;">
        <a href="https://wa.me/5511940449696?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20direito%20do%20agroneg%C3%B3cio." target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
          <i data-lucide="message-circle" style="width:16px;height:16px;"></i>
          Converse com Nossa Equipe
          <i data-lucide="arrow-right" style="width:14px;height:14px;"></i>
        </a>
      </div>
    </div>
  </div>
  <div style="position:absolute;bottom:0;left:0;right:0;height:6rem;background:linear-gradient(to top,var(--bg),transparent);z-index:1;"></div>
</section>

<!-- Pain Points -->
<section class="section-padding">
  <div class="container">
    <div class="grid-2" style="gap:3rem;align-items:center;margin-bottom:3rem;">
      <div class="animate-on-scroll">
        <h2 style="font-size:2rem;margin-bottom:1.5rem;">Como podemos lhe ajudar hoje?</h2>
        <p style="color:var(--muted-fg);font-size:1.125rem;line-height:1.7;">
          <strong style="color:var(--fg);">Conhecemos de perto</strong> as dificuldades que o <strong style="color:var(--fg);">produtor rural</strong> enfrenta no <strong style="color:var(--fg);">dia a dia</strong>. Desde a pressão para honrar <strong style="color:var(--fg);">compromissos financeiros</strong> com bancos e cooperativas, até a preocupação com a proteção do <strong style="color:var(--fg);">patrimônio familiar</strong>.
        </p>
        <p style="color:var(--muted-fg);font-size:1.125rem;margin-top:1rem;">
          No agronegócio, os desafios são constantes — mas você <strong style="color:var(--accent);">não precisa enfrentá-los sozinho</strong>.
        </p>
      </div>
      <div class="animate-on-scroll">
        <div style="border-radius:1rem;overflow:hidden;box-shadow:0 20px 40px -10px rgba(0,0,0,0.3);">
          <img src="/assets/agro-service-rural.jpg" alt="Vista aérea de lavoura" style="width:100%;height:320px;object-fit:cover;" loading="lazy">
        </div>
      </div>
    </div>

    <div class="grid-3 animate-on-scroll" style="max-width:64rem;margin:0 auto;">
      <?php
      $pains = [
        ['icon' => 'landmark', 'text' => 'Precisa renegociar dívidas agrícolas e lidar com a pressão de instituições financeiras, revendas e tradings.'],
        ['icon' => 'trending-up', 'text' => 'Enfrenta incertezas com preços de commodities, custos de insumos e perdas por eventos climáticos.'],
        ['icon' => 'target', 'text' => 'Tem dificuldades para planejar financeiramente a continuidade da propriedade.'],
        ['icon' => 'receipt', 'text' => 'Está preocupado com a Reforma Tributária e o impacto da taxação sobre heranças.'],
        ['icon' => 'users', 'text' => 'Deseja evitar conflitos familiares relacionados a inventários e gestão da propriedade.'],
        ['icon' => 'home', 'text' => 'Precisa regularizar imóveis rurais para transferências, garantias ou crédito.'],
        ['icon' => 'gavel', 'text' => 'Teve bens penhorados ou está sofrendo execução por custeio de safra ou financiamento.'],
      ];
      foreach ($pains as $pain): ?>
      <div style="display:flex;align-items:flex-start;gap:1rem;padding:1.5rem;border-radius:1rem;background:var(--card);border:1px solid hsla(165,20%,28%,0.6);transition:all 0.3s;">
        <div class="icon-box" style="flex-shrink:0;">
          <i data-lucide="<?php echo $pain['icon']; ?>"></i>
        </div>
        <p style="color:var(--muted-fg);font-size:0.875rem;line-height:1.6;"><?php echo $pain['text']; ?></p>
      </div>
      <?php endforeach; ?>
    </div>

    <div class="text-center mt-10 animate-on-scroll">
      <a href="https://wa.me/5511940449696?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20direito%20do%20agroneg%C3%B3cio." target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
        <i data-lucide="phone" style="width:20px;height:20px;"></i>
        Falar com Advogado Especialista
        <i data-lucide="arrow-right" style="width:16px;height:16px;"></i>
      </a>
    </div>
  </div>
</section>

<!-- Services -->
<section class="section-padding" style="background:hsla(165,30%,18%,0.3);">
  <div class="container">
    <h2 class="text-center mb-12 animate-on-scroll" style="font-size:2rem;">Nossos Serviços</h2>
    
    <div class="grid-2 mb-8 animate-on-scroll">
      <?php
      $services = [
        ['img' => '/assets/agro-service-legal.jpg', 'icon' => 'gavel', 'title' => 'Defesa em Execuções', 'desc' => 'Proteção contra execuções rurais movidas por bancos, cooperativas, revendas e tradings.'],
        ['img' => '/assets/agro-service-family.jpg', 'icon' => 'users', 'title' => 'Planejamento Sucessório', 'desc' => 'Estruturação de holdings e assessoria em sucessões para transição entre gerações.'],
        ['img' => '/assets/agro-service-contracts.jpg', 'icon' => 'file-text', 'title' => 'Contratos Rurais', 'desc' => 'Análise e elaboração de contratos de compra e venda, arrendamento rural e parceria agrícola.'],
        ['img' => '/assets/agro-service-rural.jpg', 'icon' => 'home', 'title' => 'Posse e Propriedade', 'desc' => 'Ações de reintegração, manutenção de posse, usucapião e regularização de imóveis rurais.'],
      ];
      foreach ($services as $svc): ?>
      <div style="border-radius:1rem;overflow:hidden;background:var(--card);border:1px solid hsla(165,20%,28%,0.6);transition:all 0.3s;">
        <div style="height:12rem;overflow:hidden;">
          <img src="<?php echo $svc['img']; ?>" alt="<?php echo $svc['title']; ?>" style="width:100%;height:100%;object-fit:cover;" loading="lazy">
        </div>
        <div style="padding:1.5rem;">
          <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem;">
            <div class="icon-box"><i data-lucide="<?php echo $svc['icon']; ?>"></i></div>
            <h3 style="font-size:1.125rem;"><?php echo $svc['title']; ?></h3>
          </div>
          <p style="color:var(--muted-fg);font-size:0.875rem;line-height:1.6;margin-bottom:1rem;"><?php echo $svc['desc']; ?></p>
        </div>
      </div>
      <?php endforeach; ?>
    </div>

    <div class="grid-4 animate-on-scroll">
      <?php
      $extraServices = [
        ['icon' => 'receipt', 'title' => 'Direito Tributário', 'desc' => 'Defesa em execuções fiscais, recuperação de créditos e planejamento tributário para o agro.'],
        ['icon' => 'scale', 'title' => 'Recuperação Judicial', 'desc' => 'Reestruturação de dívidas e proteção patrimonial para produtores e empresas rurais em crise.'],
        ['icon' => 'heart', 'title' => 'Família e Sucessões', 'desc' => 'Divórcio, inventário e proteção do patrimônio familiar ligado à atividade rural.'],
        ['icon' => 'handshake', 'title' => 'Negociação de Dívidas', 'desc' => 'Renegociação estratégica de passivos com instituições financeiras e fornecedores.'],
      ];
      foreach ($extraServices as $svc): ?>
      <div style="padding:1.5rem;border-radius:1rem;background:var(--card);border:1px solid hsla(165,20%,28%,0.6);">
        <div class="icon-box mb-4" style="padding:0.75rem;width:fit-content;">
          <i data-lucide="<?php echo $svc['icon']; ?>"></i>
        </div>
        <h3 style="font-size:1.125rem;margin-bottom:0.5rem;"><?php echo $svc['title']; ?></h3>
        <p style="color:var(--muted-fg);font-size:0.875rem;line-height:1.6;"><?php echo $svc['desc']; ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php include 'includes/cta.php'; ?>
<?php include 'includes/footer.php'; ?>
