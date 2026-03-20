<?php
$currentPage = 'atuacao';
$pageTitle = 'Assessoria Jurídica Empresarial';
$pageDescription = 'Assessoria jurídica empresarial completa: contratos, responsabilidade civil, consultoria preventiva e contencioso cível.';
include '../includes/header.php';
?>

<section class="area-hero" style="background-image:url('../assets/areas/direito-civil-hero.jpg');">
  <div class="area-hero-overlay"></div>
  <div class="container" style="position:relative;z-index:10;padding:5rem 1.5rem;">
    <nav class="breadcrumb animate-on-scroll">
      <a href="../">Início</a> <span>/</span>
      <a href="../atuacao.php">Áreas de Atuação</a> <span>/</span>
      <span class="current">Direito Civil Empresarial</span>
    </nav>
    <div style="max-width:48rem;" class="animate-on-scroll">
      <h1 style="font-size:3rem;color:var(--accent);margin-bottom:1rem;">Assessoria Jurídica Empresarial</h1>
      <p style="font-size:1.25rem;color:var(--muted-fg);">Proteção jurídica estratégica para empresas que pensam grande</p>
    </div>
  </div>
</section>

<section class="section-padding">
  <div class="container">
    <div style="max-width:52rem;margin:0 auto;">
      <p class="quote-block animate-on-scroll">
        No mundo dos negócios, cada contrato assinado, cada parceria firmada e cada decisão patrimonial carrega consigo riscos e oportunidades. O Direito Empresarial é a ferramenta que transforma incertezas em segurança.
      </p>

      <div class="animate-on-scroll" style="margin-top:2rem;background:var(--card);border:1px solid var(--border);border-radius:1rem;padding:2rem;">
        <h2 style="font-size:1.5rem;margin-bottom:1.5rem;">Por que isso importa para sua empresa?</h2>
        <ul style="list-style:none;padding:0;">
          <?php
          $reasons = [
            ['title' => 'Contratos mal elaborados custam caro.', 'desc' => 'Um contrato frágil pode gerar prejuízos milionários.'],
            ['title' => 'Inadimplência mina o fluxo de caixa.', 'desc' => 'Estratégias jurídicas eficientes mantêm a saúde financeira.'],
            ['title' => 'Conflitos sem gestão viram litígios.', 'desc' => 'A prevenção e negociação inteligente economizam tempo e dinheiro.'],
            ['title' => 'Patrimônio desprotegido é patrimônio em risco.', 'desc' => 'Blindagem patrimonial protege o que levou anos para construir.'],
          ];
          foreach ($reasons as $r): ?>
          <li style="display:flex;align-items:flex-start;gap:1rem;margin-bottom:1.25rem;">
            <i data-lucide="check-circle-2" style="width:20px;height:20px;color:var(--accent);flex-shrink:0;margin-top:0.25rem;"></i>
            <div>
              <strong style="color:var(--fg);"><?php echo $r['title']; ?></strong>
              <span style="color:var(--muted-fg);"> <?php echo $r['desc']; ?></span>
            </div>
          </li>
          <?php endforeach; ?>
        </ul>
      </div>

      <h2 class="animate-on-scroll" style="font-size:1.5rem;margin-top:2.5rem;margin-bottom:1.5rem;text-align:center;">Nossa Atuação Estratégica</h2>

      <div class="grid-2 animate-on-scroll">
        <?php
        $cards = [
          ['icon' => 'file-text', 'title' => 'Contratos Empresariais', 'items' => ['Elaboração, revisão e negociação de contratos comerciais', 'Contratos de prestação de serviços, franquias e distribuição', 'Contratos imobiliários corporativos', 'Distratos e rescisões estratégicas']],
          ['icon' => 'trending-up', 'title' => 'Cobrança e Recuperação de Créditos', 'items' => ['Execuções e cumprimento forçado de obrigações', 'Ações de cobrança e ações monitórias', 'Busca e apreensão de bens', 'Negociação estratégica de dívidas']],
          ['icon' => 'building-2', 'title' => 'Gestão Patrimonial e Garantias', 'items' => ['Blindagem e proteção patrimonial empresarial', 'Estruturação de garantias reais e fidejussórias', 'Planejamento sucessório empresarial', 'Gestão de riscos patrimoniais']],
          ['icon' => 'handshake', 'title' => 'Procedimentos e Defesas', 'items' => ['Contestações e recursos em todas as instâncias', 'Notificações extrajudiciais estratégicas', 'Interpelações judiciais e procurações', 'Mediação e arbitragem empresarial']],
        ];
        foreach ($cards as $c): ?>
        <div class="card" style="padding:1.5rem;">
          <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;">
            <div class="icon-box"><i data-lucide="<?php echo $c['icon']; ?>"></i></div>
            <h3 style="font-size:1.125rem;"><?php echo $c['title']; ?></h3>
          </div>
          <ul style="list-style:none;padding:0;">
            <?php foreach ($c['items'] as $item): ?>
            <li style="display:flex;align-items:flex-start;gap:0.5rem;color:var(--muted-fg);font-size:0.875rem;margin-bottom:0.5rem;">
              <i data-lucide="arrow-right" style="width:14px;height:14px;color:var(--accent);flex-shrink:0;margin-top:0.2rem;"></i>
              <span><?php echo $item; ?></span>
            </li>
            <?php endforeach; ?>
          </ul>
        </div>
        <?php endforeach; ?>
      </div>

      <div class="animate-on-scroll" style="margin-top:2.5rem;background:hsl(135,33%,13%);border-radius:1rem;padding:2rem;color:hsla(0,0%,100%,0.8);">
        <h2 style="color:var(--accent);font-size:1.5rem;margin-bottom:1.5rem;">Como protegemos e fortalecemos seu negócio</h2>
        <p style="margin-bottom:1rem;">
          Não acreditamos em soluções genéricas. Cada empresa tem sua realidade. Atuamos de forma <strong style="color:#fff;">preventiva e consultiva</strong>, antecipando riscos antes que se tornem problemas.
        </p>
        <p>
          Nosso compromisso é ser o <strong style="color:#fff;">parceiro jurídico estratégico</strong> que sua empresa precisa para crescer com segurança.
        </p>
      </div>
    </div>
  </div>
</section>

<?php include '../includes/cta.php'; ?>
<?php include '../includes/footer.php'; ?>
