<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Áreas de Atuação – Rodrigo Vitalino Advogados</title>
  <meta name="description" content="Conheça as áreas de atuação: direito empresarial, recuperação judicial, tributário, trabalhista, família e sucessões.">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
<?php include 'includes/helpers.php'; include 'includes/header.php'; ?>

<!-- Banner -->
<div class="info-banner">
  <div class="container">
    <div class="inner">
      <div class="label">
        <span class="pulse-dot"></span>
        Precisa de orientação em alguma dessas áreas?
      </div>
      <a href="https://wa.me/5511974083838" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-sm"><?= icon('phone',16) ?> Falar com Especialista →</a>
    </div>
  </div>
</div>

<!-- Areas Grid -->
<section class="section-padding">
  <div class="container">
    <div class="text-center mb-12 fade-in">
      <span class="text-accent text-sm font-semibold" style="letter-spacing:0.2em;text-transform:uppercase;display:block;margin-bottom:1rem">Nossas Especialidades</span>
      <h2 style="font-size:2.5rem;margin-bottom:1rem">Conheça Nossas Áreas de Atuação</h2>
      <p class="text-muted mx-auto" style="max-width:640px">Cada área do Direito demanda conhecimento específico e experiência prática. Explore nossas especialidades.</p>
    </div>

    <div class="grid grid-4">
      <?php
      $areas = [
        ['icon'=>'building','title'=>'Direito Empresarial','desc'=>'Assessoria completa para empresas em questões societárias, contratuais e estratégicas.'],
        ['icon'=>'handshake','title'=>'Negociação Jurídica','desc'=>'Soluções eficazes em mediação e negociação de conflitos empresariais.'],
        ['icon'=>'trending-up','title'=>'Recuperação Judicial','desc'=>'Atuação ampla com destaque para transporte público e agronegócio.','highlight'=>true],
        ['icon'=>'calculator','title'=>'Direito Tributário','desc'=>'Planejamento e defesa em questões fiscais e tributárias.'],
        ['icon'=>'briefcase','title'=>'Direito Trabalhista','desc'=>'Suporte completo em relações de trabalho e defesa empresarial.'],
        ['icon'=>'heart','title'=>'Família e Sucessões','desc'=>'Orientação em divórcios, inventários e planejamento sucessório.'],
        ['icon'=>'scale','title'=>'Assessoria Jurídica Empresarial','desc'=>'Consultoria e defesa em contratos e responsabilidade civil.'],
        ['icon'=>'leaf','title'=>'Crédito de Carbono','desc'=>'Assessoria em projetos sustentáveis e mercado de créditos de carbono.','highlight'=>true],
      ];
      foreach ($areas as $a): ?>
      <a href="#" class="area-card fade-in" style="min-height:320px">
        <div style="position:absolute;inset:0;background:linear-gradient(135deg,hsl(165,30%,18%),hsl(165,35%,12%))"></div>
        <div class="overlay"></div>
        <?php if (!empty($a['highlight'])): ?><div class="badge-highlight">Destaque</div><?php endif; ?>
        <div class="icon-box"><?= icon($a['icon']) ?></div>
        <div class="content">
          <h3><?= $a['title'] ?></h3>
          <p class="desc"><?= $a['desc'] ?></p>
          <span class="learn-more">Saiba mais <?= icon('arrow-right',16) ?></span>
        </div>
      </a>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Quote -->
<section style="padding:6rem 0;background:hsl(150,30%,12%);text-align:center">
  <div class="container">
    <div style="font-size:4.5rem;color:var(--accent);font-family:var(--font-serif);opacity:0.6;margin-bottom:2rem">"</div>
    <blockquote class="font-serif" style="font-size:1.5rem;color:white;max-width:800px;margin:0 auto;line-height:1.5;font-weight:300">
      Nosso compromisso é oferecer soluções jurídicas que vão além da técnica, construindo relações de confiança duradouras e resultados que fazem a diferença.
    </blockquote>
    <div style="margin-top:2.5rem;display:flex;align-items:center;justify-content:center;gap:1.5rem">
      <div style="width:64px;height:1px;background:linear-gradient(to right,transparent,rgba(230,180,30,0.5))"></div>
      <div class="text-center">
        <span class="text-accent font-semibold" style="display:block;font-size:1.125rem">Rodrigo Vitalino</span>
        <span style="color:rgba(255,255,255,0.5);font-size:0.875rem">Advogado Fundador</span>
      </div>
      <div style="width:64px;height:1px;background:linear-gradient(to left,transparent,rgba(230,180,30,0.5))"></div>
    </div>
  </div>
</section>

<!-- Why Choose Us -->
<section class="section-padding">
  <div class="container">
    <div class="two-col" style="align-items:center">
      <div class="fade-in">
        <span class="text-accent text-sm font-semibold" style="letter-spacing:0.2em;text-transform:uppercase;display:block;margin-bottom:1.5rem">Por que nos escolher</span>
        <h2 style="font-size:2rem;margin-bottom:2rem">Excelência e Comprometimento em Cada Caso</h2>
        <p class="text-muted leading-relaxed mb-8" style="font-size:1.125rem">Acreditamos que cada cliente é único e merece uma abordagem personalizada.</p>
        <ul style="display:flex;flex-direction:column;gap:1.25rem">
          <?php foreach (['Atendimento personalizado e dedicado','Equipe multidisciplinar e experiente','Estratégias jurídicas inovadoras','Transparência em todas as etapas','Resultados comprovados ao longo de 17 anos'] as $b): ?>
          <li style="display:flex;align-items:center;gap:1rem">
            <div style="width:32px;height:32px;border-radius:50%;background:rgba(230,180,30,0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0">
              <div style="width:8px;height:8px;border-radius:50%;background:var(--accent)"></div>
            </div>
            <span style="font-size:1.125rem"><?= $b ?></span>
          </li>
          <?php endforeach; ?>
        </ul>
      </div>
      <div class="fade-in text-center">
        <div style="aspect-ratio:1;background:linear-gradient(135deg,hsl(150,30%,12%),hsl(150,25%,16%),hsl(150,30%,12%));border-radius:1.5rem;padding:2.5rem;display:flex;align-items:center;justify-content:center;box-shadow:0 15px 40px rgba(0,0,0,0.3)">
          <div>
            <?= icon('scale',112) ?>
            <div class="font-serif font-bold" style="font-size:4rem;background:linear-gradient(to right,var(--accent),hsl(45,80%,55%),var(--accent));-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-top:1rem">2008</div>
            <div style="color:rgba(255,255,255,0.6);font-size:1.125rem;margin-top:0.5rem">Fundação do Escritório</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<?php renderCTA('Precisa de assessoria jurídica especializada?', 'Entre em contato e conheça soluções jurídicas personalizadas para suas necessidades.'); ?>
<?php include 'includes/footer.php'; ?>
</body>
</html>
