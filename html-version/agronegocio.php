<?php
$base = '.';
$current = 'agro';
$page_title = 'Agronegócio | Rodrigo Vitalino Advogados';
$page_desc = 'Assessoria jurídica estratégica para o agronegócio: contratos rurais, sucessão, execuções, tributário e proteção patrimonial.';
$canonical = '/agronegocio';
include 'includes/head.php';
include 'includes/header.php';
?>

<section class="hero hero--tall">
  <div class="hero__bg">
    <video autoplay loop muted playsinline preload="auto" aria-hidden="true">
      <source src="./assets/agro-hero-video-v8.mp4" type="video/mp4">
    </video>
  </div>
  <div class="hero__overlay" style="background:linear-gradient(135deg,rgba(0,0,0,.72),rgba(0,0,0,.35),rgba(0,0,0,.15))"></div>
  <div class="hero__content">
    <div class="container" style="padding-top:7rem;padding-bottom:6rem">
      <div style="max-width:44rem">
        <div class="breadcrumb" style="margin-bottom:1.25rem;color:rgba(255,255,255,.72)"><a href="./index.php">Início</a><span class="sep">/</span><span class="current">Agronegócio</span></div>
        <span style="display:inline-flex;align-items:center;gap:.5rem;padding:.45rem .95rem;border-radius:999px;background:hsla(45,95%,52%,.16);border:1px solid hsla(45,95%,52%,.35);margin-bottom:1.5rem;color:var(--accent);font-size:.8rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase">Direito do Agronegócio</span>
        <h1 style="text-shadow:2px 2px 10px rgba(0,0,0,.45)">Soluções jurídicas para quem produz, transforma e alimenta o Brasil.</h1>
        <p style="margin-top:1.25rem;font-size:clamp(1rem,2.4vw,1.35rem);color:rgba(255,255,255,.9);max-width:38rem">Protegemos o patrimônio e impulsionamos os negócios do produtor rural, da família empresária e das empresas que movem o campo.</p>
        <div style="display:flex;flex-wrap:wrap;gap:1rem;margin-top:2rem">
          <a href="https://wa.me/5511940449696?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20direito%20do%20agroneg%C3%B3cio." target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--lg">Converse com Nossa Equipe</a>
          <a href="#servicos" class="btn btn--outline btn--lg">Nossos Serviços</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid--2" style="align-items:center;gap:3rem">
      <div>
        <h2 style="margin-bottom:1rem">Como podemos lhe ajudar hoje?</h2>
        <p class="text-muted" style="font-size:1.0625rem;line-height:1.85;margin-bottom:1rem">Conhecemos de perto as dificuldades que o produtor rural enfrenta no dia a dia. Da pressão por honrar compromissos com bancos, cooperativas, revendas e tradings à necessidade de formalizar contratos seguros, proteger o patrimônio familiar e preparar a sucessão com inteligência.</p>
        <p class="text-muted" style="font-size:1.0625rem;line-height:1.85">No agronegócio, os desafios são constantes — mas você não precisa enfrentá-los sozinho. Nossa assessoria jurídica cria um ambiente mais seguro para que sua operação continue produzindo, crescendo e se reorganizando quando necessário.</p>
      </div>
      <div class="card" style="padding:0;overflow:hidden">
        <img src="./assets/agro-service-rural.jpg" alt="Vista aérea de lavoura e maquinário agrícola" loading="lazy" style="width:100%;height:100%;min-height:320px;object-fit:cover">
      </div>
    </div>
  </div>
</section>

<section class="section section--secondary">
  <div class="container">
    <div class="text-center" style="max-width:48rem;margin:0 auto 2rem">
      <h2 style="margin-bottom:1rem">Principais frentes de atuação</h2>
      <p class="text-muted">Atuação estratégica para proteger a produção, reorganizar passivos e preservar o patrimônio rural.</p>
    </div>
    <div class="grid grid--4" id="servicos">
      <?php foreach ([
        ['Defesa em Execuções','Proteção contra execuções rurais movidas por bancos, cooperativas, revendas e tradings.','agro-service-legal.jpg'],
        ['Planejamento Sucessório','Holdings, sucessão patrimonial, inventários e transição segura entre gerações.','agro-service-family.jpg'],
        ['Contratos Rurais','Compra e venda, arrendamento rural, parceria agrícola e formalização de garantias.','agro-service-contracts.jpg'],
        ['Posse e Propriedade','Reintegração, manutenção de posse, usucapião e regularização de imóveis rurais.','agro-service-rural.jpg'],
      ] as $item): ?>
      <div class="card" style="padding:0;overflow:hidden">
        <img src="./assets/<?=$item[2]?>" alt="<?=$item[0]?>" loading="lazy" style="width:100%;height:220px;object-fit:cover">
        <div style="padding:1.5rem">
          <h3 style="margin-bottom:.5rem;color:var(--fg)"><?=$item[0]?></h3>
          <p class="text-muted text-sm"><?=$item[1]?></p>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="grid grid--4">
      <?php foreach ([
        ['Direito Tributário','Defesa em execuções fiscais, recuperação de créditos e planejamento tributário para o agro.'],
        ['Recuperação Judicial','Reestruturação de dívidas e proteção patrimonial para produtores e empresas rurais em crise.'],
        ['Família e Sucessões','Divórcio, inventário e proteção do patrimônio familiar ligado à atividade rural.'],
        ['Negociação de Dívidas','Renegociação estratégica de passivos com instituições financeiras e fornecedores.'],
      ] as $item): ?>
      <div class="card">
        <h3 style="margin-bottom:.5rem;color:var(--fg)"><?=$item[0]?></h3>
        <p class="text-muted text-sm"><?=$item[1]?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<section class="section section--secondary">
  <div class="container">
    <div class="grid grid--3">
      <?php foreach ([
        ['01','Análise do Caso','Captamos suas necessidades de forma rápida para identificar o cenário e os documentos essenciais.'],
        ['02','Estratégia Personalizada','Elaboramos um plano de ação sob medida para sua operação, patrimônio e passivo.'],
        ['03','Execução e Defesa','Atuamos com foco em proteção patrimonial, negociação eficiente e segurança jurídica.'],
      ] as $step): ?>
      <div class="card" style="text-align:center">
        <div style="display:inline-flex;padding:.4rem .9rem;border-radius:999px;background:var(--accent);color:var(--accent-fg);font-size:.75rem;font-weight:700;margin-bottom:1rem">Passo <?=$step[0]?></div>
        <h3 style="margin-bottom:.75rem;color:var(--fg)"><?=$step[1]?></h3>
        <p class="text-muted text-sm"><?=$step[2]?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php
$cta_title = 'Pronto para proteger seu patrimônio rural?';
$cta_desc = 'Converse com nossa equipe e descubra a melhor estratégia jurídica para o seu negócio no agronegócio.';
include 'includes/cta.php';
include 'includes/footer.php';
?>
<script src="./js/main.js"></script>
</body></html>