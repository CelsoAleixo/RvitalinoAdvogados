<?php
$currentPage = 'atuacao';
$pageTitle = 'Recuperação Judicial';
$pageDescription = 'Especialistas em recuperação judicial e extrajudicial de empresas. Reestruturação de dívidas, negociação com credores e planos de recuperação.';
include '../includes/header.php';
?>

<section class="area-hero" style="background-image:url('../assets/areas/recuperacao-judicial-hero.jpg');">
  <div style="position:absolute;inset:0;background:rgba(26,46,26,0.65);"></div>
  <div class="container" style="position:relative;z-index:10;padding:5rem 1.5rem;">
    <nav class="breadcrumb animate-on-scroll">
      <a href="../" style="color:hsla(0,0%,100%,0.8);">Início</a> <span style="color:hsla(0,0%,100%,0.6);">/</span>
      <a href="../atuacao.php" style="color:hsla(0,0%,100%,0.8);">Áreas de Atuação</a> <span style="color:hsla(0,0%,100%,0.6);">/</span>
      <span style="color:var(--accent);font-weight:500;">Recuperação Judicial</span>
    </nav>
    <div class="animate-on-scroll">
      <h1 style="font-size:3rem;color:#fff;margin-bottom:1.5rem;text-shadow:2px 2px 8px rgba(0,0,0,0.5);">Recuperação Judicial</h1>
      <p style="font-size:1.125rem;color:hsla(0,0%,100%,0.9);max-width:42rem;text-shadow:1px 1px 4px rgba(0,0,0,0.4);">
        Experiência consolidada na condução de processos de recuperação judicial em diversos setores da economia, com atuação estratégica para preservação de empresas e proteção de credores.
      </p>
      <div style="display:flex;gap:0.75rem;margin-top:2rem;flex-wrap:wrap;">
        <a href="#transporte-publico" class="btn btn-white-outline btn-sm" style="border-radius:9999px;">
          <i data-lucide="truck" style="width:16px;height:16px;color:var(--accent);"></i>
          Transporte Público
        </a>
        <a href="../protecao-rural.php" class="btn btn-white-outline btn-sm" style="border-radius:9999px;">
          <i data-lucide="leaf" style="width:16px;height:16px;color:var(--accent);"></i>
          Agronegócio
        </a>
      </div>
    </div>
  </div>
</section>

<section class="section-padding">
  <div class="container">
    <div style="max-width:52rem;margin:0 auto;">

      <div class="animate-on-scroll" style="margin-bottom:4rem;">
        <h2 style="font-size:1.75rem;margin-bottom:1.5rem;">Experiência em Recuperação Judicial</h2>
        <p style="color:var(--muted-fg);font-size:1.125rem;line-height:1.7;margin-bottom:1.5rem;">
          O escritório Rodrigo Vitalino Advogados possui ampla experiência na condução de processos de recuperação judicial, atuando em todas as fases do procedimento — desde a análise de viabilidade e elaboração do plano de recuperação até a negociação com credores e acompanhamento da execução judicial.
        </p>
        <p style="color:var(--muted-fg);font-size:1.125rem;line-height:1.7;">
          Nossa atuação abrange empresas de diversos portes e segmentos, sempre com foco na preservação da atividade empresarial, manutenção dos empregos e cumprimento das obrigações junto aos credores de forma sustentável.
        </p>
      </div>

      <!-- Transporte Público -->
      <div id="transporte-publico" class="animate-on-scroll" style="margin-bottom:4rem;scroll-margin-top:6rem;">
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1.5rem;">
          <i data-lucide="truck" style="width:32px;height:32px;color:var(--accent);"></i>
          <h2 style="font-size:1.5rem;">Empresas Concessionárias de Transporte Público</h2>
        </div>
        <div class="quote-block" style="margin-bottom:1.5rem;">
          "A recuperação judicial de empresas de transporte público exige conhecimento técnico especializado, dada a natureza essencial do serviço prestado à população."
        </div>
        <p style="color:var(--muted-fg);font-size:1.125rem;line-height:1.7;margin-bottom:1.5rem;">
          Destacamos nossa atuação especializada junto a <strong style="color:var(--fg);">empresas concessionárias de transporte público urbano e rodoviário</strong>, um setor que demanda atenção particular.
        </p>
        <div style="background:hsla(165,25%,20%,0.5);border-radius:0.75rem;padding:1.5rem;margin-bottom:1.5rem;">
          <h4 style="font-weight:600;margin-bottom:1rem;">Principais desafios no setor:</h4>
          <ul class="bullet-list">
            <li>Manutenção da continuidade do serviço público essencial</li>
            <li>Conciliação entre obrigações contratuais e plano de recuperação</li>
            <li>Negociação com entes públicos e agências reguladoras</li>
            <li>Proteção dos trabalhadores e garantia de direitos</li>
          </ul>
        </div>
      </div>

      <!-- Agronegócio -->
      <div class="animate-on-scroll" style="margin-bottom:4rem;">
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1.5rem;">
          <i data-lucide="leaf" style="width:32px;height:32px;color:var(--accent);"></i>
          <h2 style="font-size:1.5rem;">Recuperação Judicial no Agronegócio</h2>
        </div>
        <p style="color:var(--muted-fg);font-size:1.125rem;line-height:1.7;margin-bottom:1.5rem;">
          A <strong style="color:var(--fg);">Lei 14.112/2020</strong> representou um marco importante ao ampliar significativamente o acesso dos produtores rurais ao instituto da recuperação judicial.
        </p>

        <div class="grid-2" style="margin-bottom:2rem;">
          <?php
          $benefits = [
            ['icon' => 'scale', 'title' => 'Suspensão de Execuções', 'desc' => 'As execuções e ações contra o produtor são suspensas, proporcionando fôlego para reorganização financeira.'],
            ['icon' => 'shield', 'title' => 'Preservação de Bens Essenciais', 'desc' => 'Os bens indispensáveis à atividade rural são protegidos, garantindo a continuidade da produção.'],
            ['icon' => 'leaf', 'title' => 'Manutenção da Produção', 'desc' => 'O produtor continua suas atividades, mantendo a geração de renda e o ciclo produtivo.'],
            ['icon' => 'file-text', 'title' => 'Reestruturação de Dívidas', 'desc' => 'Possibilidade de negociar prazos e condições de pagamento adequadas à realidade rural.'],
          ];
          foreach ($benefits as $b): ?>
          <div class="card">
            <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem;">
              <i data-lucide="<?php echo $b['icon']; ?>" style="width:24px;height:24px;color:var(--accent);"></i>
              <h4 style="font-weight:600;"><?php echo $b['title']; ?></h4>
            </div>
            <p style="color:var(--muted-fg);font-size:0.875rem;"><?php echo $b['desc']; ?></p>
          </div>
          <?php endforeach; ?>
        </div>

        <div style="background:hsla(45,95%,52%,0.1);border-radius:0.75rem;padding:1.5rem;">
          <h4 style="font-weight:600;margin-bottom:0.75rem;">A importância da orientação jurídica especializada</h4>
          <p style="color:var(--muted-fg);line-height:1.7;margin-bottom:1rem;">
            O sucesso de um processo de recuperação judicial no agronegócio depende fundamentalmente de uma assessoria jurídica experiente.
          </p>
          <a href="../protecao-rural.php" style="display:inline-flex;align-items:center;gap:0.5rem;color:var(--accent);font-size:0.875rem;font-weight:500;">
            Saiba mais sobre Recuperação Judicial no Agronegócio →
          </a>
        </div>
      </div>

      <!-- Outros Setores -->
      <div class="animate-on-scroll" style="margin-bottom:3rem;">
        <h2 style="font-size:1.5rem;margin-bottom:1.5rem;">Atuação em Diversos Setores</h2>
        <p style="color:var(--muted-fg);font-size:1.125rem;line-height:1.7;margin-bottom:1.5rem;">
          Além do transporte público e do agronegócio, possuímos experiência em recuperação judicial de empresas dos mais variados segmentos:
        </p>
        <div class="grid-2">
          <?php
          $setores = ['Empresas de mineração', 'Indústria de alimentos', 'Comércio e varejo', 'Prestação de serviços', 'Construção civil', 'Empresas concessionárias'];
          foreach ($setores as $s): ?>
          <div style="display:flex;align-items:center;gap:0.5rem;">
            <i data-lucide="building-2" style="width:20px;height:20px;color:var(--accent);"></i>
            <span style="color:var(--muted-fg);"><?php echo $s; ?></span>
          </div>
          <?php endforeach; ?>
        </div>
      </div>

    </div>
  </div>
</section>

<?php include '../includes/cta.php'; ?>
<?php include '../includes/footer.php'; ?>
