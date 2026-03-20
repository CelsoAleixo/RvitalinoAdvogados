<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Assessoria Jurídica para o Agronegócio – Rodrigo Vitalino Advogados</title>
  <meta name="description" content="Proteção patrimonial, recuperação judicial, planejamento sucessório e assessoria completa para produtores rurais e empresas do agronegócio.">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
<?php include 'includes/helpers.php'; include 'includes/header.php'; $WA = "https://wa.me/5511940449696?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20direito%20do%20agroneg%C3%B3cio."; ?>

<!-- Hero -->
<section class="hero" style="min-height:90vh;background:linear-gradient(135deg,hsl(150,35%,8%),hsl(165,30%,12%))">
  <div class="hero-overlay" style="background:linear-gradient(to top-right,rgba(0,0,0,0.7),rgba(0,0,0,0.3),transparent)"></div>
  <div class="container hero-content">
    <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1.25rem">
      <?= icon('leaf',16) ?>
      <span class="text-accent text-xs" style="text-transform:uppercase;letter-spacing:0.2em;font-weight:500">Direito do Agronegócio</span>
    </div>
    <h1 style="font-size:2.5rem;color:white;line-height:1.1;margin-bottom:1.25rem">
      Soluções jurídicas para quem <span class="text-accent">produz</span>, <span class="text-accent">transforma</span> e <span class="text-accent">alimenta</span> o Brasil.
    </h1>
    <p style="color:rgba(255,255,255,0.75);max-width:500px">Protegemos o patrimônio e impulsionamos os negócios do produtor rural e sua família.</p>
    <div class="mt-6">
      <a href="<?= $WA ?>" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-lg"><?= icon('message',16) ?> Converse com Nossa Equipe →</a>
    </div>
  </div>
  <div class="hero-gradient"></div>
</section>

<!-- Pain Points -->
<section class="section-padding">
  <div class="container">
    <div class="two-col mb-12" style="align-items:center">
      <div class="fade-in">
        <h2 style="font-size:2rem;margin-bottom:1.5rem">Como podemos lhe ajudar hoje?</h2>
        <p class="text-muted text-lg leading-relaxed"><strong style="color:var(--foreground)">Conhecemos de perto</strong> as dificuldades que o <strong style="color:var(--foreground)">produtor rural</strong> enfrenta no <strong style="color:var(--foreground)">dia a dia</strong>. Desde a pressão para honrar <strong style="color:var(--foreground)">compromissos financeiros</strong> com bancos e cooperativas, até a preocupação com a proteção do <strong style="color:var(--foreground)">patrimônio familiar</strong>.</p>
        <p class="text-muted text-lg leading-relaxed mt-4">No agronegócio, os desafios são constantes — mas você <strong class="text-accent">não precisa enfrentá-los sozinho</strong>.</p>
      </div>
      <div class="fade-in">
        <div class="rounded-2xl" style="overflow:hidden;box-shadow:0 15px 40px rgba(0,0,0,0.3)">
          <div style="height:320px;background:linear-gradient(135deg,hsl(150,30%,15%),hsl(150,25%,20%))"></div>
        </div>
      </div>
    </div>

    <div class="grid grid-3 max-w-5xl mx-auto">
      <?php
      $pains = [
        'Precisa renegociar dívidas agrícolas e lidar com a pressão de instituições financeiras, revendas e tradings.',
        'Enfrenta incertezas com preços de commodities, custos de insumos e perdas por eventos climáticos.',
        'Tem dificuldades para planejar financeiramente a continuidade da propriedade.',
        'Está preocupado com a Reforma Tributária e o impacto da taxação sobre heranças.',
        'Deseja evitar conflitos familiares relacionados a inventários e gestão da propriedade.',
        'Precisa regularizar imóveis rurais para transferências ou obtenção de crédito.',
        'Teve bens penhorados ou está sofrendo execução por dívidas agrícolas.',
      ];
      foreach ($pains as $p): ?>
      <div class="fade-in" style="display:flex;align-items:flex-start;gap:1rem;padding:1.5rem;border-radius:1rem;background:var(--card);border:1px solid var(--border)">
        <div style="padding:0.625rem;border-radius:0.75rem;background:rgba(230,180,30,0.1);flex-shrink:0"><?= icon('scale',24) ?></div>
        <p class="text-muted text-sm leading-relaxed"><?= $p ?></p>
      </div>
      <?php endforeach; ?>
    </div>

    <div class="text-center mt-8 fade-in">
      <a href="<?= $WA ?>" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-lg"><?= icon('phone',20) ?> Falar com Advogado Especialista →</a>
    </div>
  </div>
</section>

<!-- Services -->
<section class="section-padding" style="background:rgba(21,46,30,0.3)">
  <div class="container">
    <h2 class="text-center mb-12 fade-in" style="font-size:2rem">Nossos Serviços</h2>
    <div class="grid grid-2 mb-8">
      <?php
      $services = [
        ['icon'=>'scale','title'=>'Defesa em Execuções','desc'=>'Proteção contra execuções rurais movidas por bancos, cooperativas, revendas e tradings.'],
        ['icon'=>'users','title'=>'Planejamento Sucessório','desc'=>'Estruturação de holdings, assessoria em sucessões e otimização tributária para transição entre gerações.'],
        ['icon'=>'file-text','title'=>'Contratos Rurais','desc'=>'Análise e elaboração de contratos de compra e venda, arrendamento rural e parceria agrícola.'],
        ['icon'=>'building','title'=>'Posse e Propriedade','desc'=>'Ações de reintegração, manutenção de posse, usucapião e regularização de imóveis rurais.'],
      ];
      foreach ($services as $s): ?>
      <div class="card fade-in">
        <div class="card-body">
          <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem">
            <div style="padding:0.5rem;border-radius:0.75rem;background:rgba(230,180,30,0.1)"><?= icon($s['icon'],20) ?></div>
            <h3 style="font-size:1.125rem;color:var(--foreground)"><?= $s['title'] ?></h3>
          </div>
          <p class="text-muted text-sm leading-relaxed"><?= $s['desc'] ?></p>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
    <div class="grid grid-4">
      <?php
      $more = [
        ['icon'=>'calculator','title'=>'Direito Tributário','desc'=>'Defesa em execuções fiscais, recuperação de créditos e planejamento tributário para o agro.'],
        ['icon'=>'scale','title'=>'Recuperação Judicial','desc'=>'Reestruturação de dívidas e proteção patrimonial para produtores e empresas rurais.'],
        ['icon'=>'heart','title'=>'Família e Sucessões','desc'=>'Divórcio, inventário e proteção do patrimônio familiar ligado à atividade rural.'],
        ['icon'=>'handshake','title'=>'Negociação de Dívidas','desc'=>'Renegociação estratégica de passivos com instituições financeiras e fornecedores.'],
      ];
      foreach ($more as $m): ?>
      <div class="card fade-in">
        <div class="card-body">
          <div style="padding:0.75rem;border-radius:0.75rem;background:rgba(230,180,30,0.1);width:fit-content;margin-bottom:1rem"><?= icon($m['icon']) ?></div>
          <h3 style="font-size:1.125rem;color:var(--foreground);margin-bottom:0.5rem"><?= $m['title'] ?></h3>
          <p class="text-muted text-sm leading-relaxed"><?= $m['desc'] ?></p>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php renderCTA('Precisa de assessoria jurídica para o agronegócio?', 'Fale com nossos especialistas e proteja seu patrimônio rural.'); ?>
<?php include 'includes/footer.php'; ?>
</body>
</html>
