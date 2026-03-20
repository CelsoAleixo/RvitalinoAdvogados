<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>O Escritório – Rodrigo Vitalino Advogados</title>
  <meta name="description" content="Conheça o escritório Rodrigo Vitalino Advogados: mais de 17 anos de experiência em direito empresarial e assessoria jurídica internacional.">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
<?php include 'includes/helpers.php'; include 'includes/header.php'; ?>

<!-- Hero -->
<section class="page-hero" style="min-height:60vh;background:linear-gradient(135deg,hsl(165,35%,8%),hsl(150,30%,12%))">
  <div class="container" style="position:relative;z-index:10;padding-top:3rem;padding-bottom:3rem">
    <nav class="breadcrumb">
      <a href="index.php">Início</a>
      <span class="separator">/</span>
      <span class="current">Nosso Escritório</span>
    </nav>
    <div class="badge mb-6"><?= icon('scale',16) ?> Desde 2008</div>
    <h1 style="font-size:3rem">Nosso Escritório</h1>
    <div style="display:flex;flex-wrap:wrap;gap:3rem;margin-top:2rem">
      <div class="text-center"><div class="stat-value">17+</div><div class="stat-label">Anos de Experiência</div></div>
      <div class="text-center"><div class="stat-value">500+</div><div class="stat-label">Clientes Atendidos</div></div>
      <div class="text-center"><div class="stat-value">17</div><div class="stat-label">Países de Atuação</div></div>
    </div>
  </div>
</section>

<!-- Accordion Sections -->
<section class="section-padding">
  <div class="container max-w-4xl">
    <div class="accordion-item fade-in">
      <button class="accordion-trigger">
        <div class="title-group">
          <div class="icon-wrap"><?= icon('history',20) ?></div>
          <span class="title">Sobre Nós</span>
        </div>
        <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div class="accordion-content">
        <div style="display:flex;flex-direction:column;gap:1.5rem">
          <p class="text-muted leading-relaxed">Rodrigo Vitalino Advogados vem construindo uma atuação sólida no cenário jurídico e empresarial. Idealizado por seu fundador, Rodrigo Vitalino, o escritório nasceu com a missão de oferecer soluções jurídicas estratégicas e consultoria empresarial voltada para resultados práticos e sustentáveis.</p>
          <p class="text-muted leading-relaxed">Ao longo dos anos, reunimos uma equipe multidisciplinar de profissionais que trabalham lado a lado com empresas de diferentes setores, tanto na prevenção de riscos quanto na defesa em litígios, sempre com foco em transparência, eficiência e segurança jurídica.</p>
          <p class="text-muted leading-relaxed">Expandimos nossa presença além das fronteiras brasileiras: o advogado Rodrigo Vitalino também possui inscrição na Ordem dos Advogados de Portugal, o que nos permite atender clientes em âmbito internacional.</p>
          <div style="display:flex;align-items:center;gap:1rem;padding:1rem;background:rgba(230,180,30,0.1);border-radius:0.75rem;border:1px solid rgba(230,180,30,0.2)">
            <div style="background:var(--accent);color:var(--accent-foreground);padding:0.5rem 1rem;border-radius:0.5rem;text-align:center">
              <div class="font-serif font-bold" style="font-size:1.5rem">2008</div>
              <div style="font-size:0.625rem;text-transform:uppercase;letter-spacing:0.1em">Fundação</div>
            </div>
            <p class="text-muted text-sm">Mais de 17 anos construindo uma trajetória de excelência em assessoria jurídica empresarial.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion-item fade-in">
      <button class="accordion-trigger">
        <div class="title-group">
          <div class="icon-wrap"><?= icon('award',20) ?></div>
          <span class="title">Nossos Diferenciais</span>
        </div>
        <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div class="accordion-content">
        <div class="grid grid-2" style="margin-bottom:1.5rem">
          <div class="p-6 rounded-xl border" style="background:rgba(21,46,30,0.5)">
            <?= icon('scale',32) ?>
            <h4 class="mt-4 mb-2">Especialização</h4>
            <p class="text-muted text-sm leading-relaxed">Nosso escritório atua fortemente em Direito Empresarial e Corporativo, unindo segurança técnica e visão estratégica.</p>
          </div>
          <div class="p-6 rounded-xl border" style="background:rgba(21,46,30,0.5)">
            <?= icon('users',32) ?>
            <h4 class="mt-4 mb-2">Excelência</h4>
            <p class="text-muted text-sm leading-relaxed">Somos referência em soluções jurídicas, conduzindo processos com excelência, elaborando estratégias consistentes.</p>
          </div>
        </div>
        <div class="p-6 rounded-xl" style="background:hsl(150,30%,12%)">
          <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1.5rem">
            <div class="icon-wrap"><?= icon('heart',20) ?></div>
            <h4>Nossos Princípios</h4>
          </div>
          <div class="grid grid-2">
            <?php
            $valores = ['Ética e seriedade na aplicação do Direito','Soluções jurídicas personalizadas e eficientes','Confiabilidade e bom relacionamento com nossos clientes','Conhecimento, competência e aperfeiçoamento técnico','Foco nas necessidades do cliente','Comprometimento com os princípios legais','Transparência sobre os riscos de ações ou projetos','Empreendedorismo'];
            foreach ($valores as $v): ?>
            <div style="display:flex;align-items:flex-start;gap:0.75rem;padding:1rem;background:rgba(255,255,255,0.05);border-radius:0.5rem;border:1px solid rgba(255,255,255,0.1)">
              <?= icon('check',20) ?>
              <span class="text-sm" style="color:rgba(255,255,255,0.9)"><?= $v ?></span>
            </div>
            <?php endforeach; ?>
          </div>
        </div>
      </div>
    </div>

    <div class="accordion-item fade-in">
      <button class="accordion-trigger">
        <div class="title-group">
          <div class="icon-wrap"><?= icon('users',20) ?></div>
          <span class="title">Clientes Atendidos</span>
        </div>
        <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div class="accordion-content">
        <div class="grid grid-2">
          <div class="p-6 rounded-xl border" style="background:rgba(21,46,30,0.5)">
            <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem">
              <div style="width:48px;height:48px;border-radius:50%;background:rgba(230,180,30,0.2);display:flex;align-items:center;justify-content:center"><?= icon('building') ?></div>
              <h4>Companhias Nacionais</h4>
            </div>
            <ul style="display:flex;flex-direction:column;gap:0.75rem">
              <li class="text-muted text-sm" style="border-left:2px solid var(--accent);padding-left:1rem">Transporte Público Urbano e Rodoviário: suporte jurídico a concessionárias em SP, PR, GO, AM, AC, RO, BA, RJ e SC.</li>
              <li class="text-muted text-sm" style="border-left:2px solid var(--accent);padding-left:1rem">Mineração de Ferro e Manganês: assessoria a mineradoras no PA, AP e CE.</li>
              <li class="text-muted text-sm" style="border-left:2px solid var(--accent);padding-left:1rem">Mineração de Granito e Pedras Preciosas: atuação junto a empresas na BA, MG e GO.</li>
              <li class="text-muted text-sm" style="border-left:2px solid var(--accent);padding-left:1rem">Indústria de Alimentos e Restaurantes: apoio jurídico em GO e SP.</li>
              <li class="text-muted text-sm" style="border-left:2px solid var(--accent);padding-left:1rem">Parcerias Público-Privadas (PPP): consultoria em iluminação pública em SP e SC.</li>
            </ul>
          </div>
          <div class="p-6 rounded-xl border" style="background:rgba(21,46,30,0.5)">
            <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem">
              <div style="width:48px;height:48px;border-radius:50%;background:rgba(230,180,30,0.2);display:flex;align-items:center;justify-content:center"><?= icon('globe') ?></div>
              <h4>Companhias Internacionais</h4>
            </div>
            <ul style="display:flex;flex-direction:column;gap:0.75rem">
              <?php foreach (['Proview Electronics Co Ltd – Taipei/Taiwan','RED International Group – Taipei/Taiwan','Proview LED Lighting Co. Ltd – Taipei/Taiwan','New Era Investment Inc. – Panama','Reit Investment Corp. – Panama','North Capital Holding – Copenhagen/Denmark','Dti Korea Co. Ltd – Coreia do Sul'] as $c): ?>
              <li class="text-muted text-sm" style="border-left:2px solid var(--accent);padding-left:1rem"><?= $c ?></li>
              <?php endforeach; ?>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<?php renderCTA(); ?>
<?php include 'includes/footer.php'; ?>
</body>
</html>
