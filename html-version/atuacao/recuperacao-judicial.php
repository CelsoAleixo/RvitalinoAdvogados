<?php
$base = '..';
$current = 'atuacao';
$page_title = 'Recuperação Judicial | Rodrigo Vitalino Advogados';
$page_desc = 'Atuação em recuperação judicial e extrajudicial com foco em reestruturação de dívidas, negociação com credores e continuidade empresarial.';
$canonical = '/atuacao/recuperacao-judicial';
include '../includes/head.php';
include '../includes/header.php';
?>

<section class="hero" style="min-height:65vh">
  <div class="hero__bg"><img src="<?=$base?>/assets/areas/recuperacao-judicial-hero.jpg" alt="Recuperação Judicial"></div>
  <div class="hero__overlay" style="background:rgba(26,46,26,.7)"></div>
  <div class="hero__content"><div class="container" style="padding-top:5rem;padding-bottom:5rem">
    <div class="breadcrumb" style="color:rgba(255,255,255,.78);margin-bottom:1rem"><a href="<?=$base?>/index.php">Início</a><span class="sep">/</span><a href="<?=$base?>/atuacao.php">Áreas de Atuação</a><span class="sep">/</span><span class="current">Recuperação Judicial</span></div>
    <div style="max-width:48rem">
      <h1 style="color:#fff;text-shadow:2px 2px 8px rgba(0,0,0,.45)">Recuperação Judicial</h1>
      <p style="margin-top:1rem;font-size:clamp(1rem,2.4vw,1.25rem);color:rgba(255,255,255,.92)">Experiência consolidada na condução de processos de recuperação judicial em diversos setores da economia, com foco na preservação da atividade empresarial.</p>
      <div style="display:flex;flex-wrap:wrap;gap:.75rem;margin-top:1.5rem">
        <a href="#transporte-publico" class="btn btn--outline">Transporte Público</a>
        <a href="<?=$base?>/protecao-rural.php" class="btn btn--outline">Agronegócio</a>
      </div>
    </div>
  </div></div>
</section>

<section class="section">
  <div class="container container--narrow">
    <div class="card" style="margin-bottom:1.5rem">
      <h2 style="margin-bottom:1rem">Experiência em Recuperação Judicial</h2>
      <p class="text-muted" style="margin-bottom:1rem">Atuamos em todas as fases do procedimento — da análise de viabilidade e elaboração do plano de recuperação à negociação com credores e ao acompanhamento da execução judicial.</p>
      <p class="text-muted">Nossa atuação é orientada à preservação da atividade empresarial, manutenção dos empregos e cumprimento sustentável das obrigações assumidas.</p>
    </div>

    <div class="card" id="transporte-publico" style="margin-bottom:1.5rem">
      <h2 style="margin-bottom:1rem">Empresas Concessionárias de Transporte Público</h2>
      <p class="text-muted" style="margin-bottom:1rem">A recuperação judicial de concessionárias exige conhecimento técnico especializado, dada a natureza essencial do serviço e as particularidades do regime regulatório.</p>
      <div class="grid grid--2">
        <?php foreach ([
          'Manutenção da continuidade do serviço público essencial',
          'Conciliação entre obrigações contratuais e plano de recuperação',
          'Negociação com entes públicos e agências reguladoras',
          'Proteção dos trabalhadores e garantia de direitos',
        ] as $item): ?>
        <div class="card"><p class="text-muted text-sm"><?=$item?></p></div>
        <?php endforeach; ?>
      </div>
    </div>

    <div class="card">
      <h2 style="margin-bottom:1rem">Recuperação Judicial no Agronegócio</h2>
      <p class="text-muted" style="margin-bottom:1rem">A Lei 14.112/2020 ampliou significativamente o acesso dos produtores rurais ao instituto da recuperação judicial, reconhecendo as especificidades da atividade agrícola.</p>
      <div class="grid grid--2" style="margin-bottom:1rem">
        <?php foreach ([
          ['Suspensão de Execuções','Fôlego imediato para reorganização financeira e estabilização da operação.'],
          ['Preservação de Bens Essenciais','Proteção dos ativos indispensáveis à continuidade da produção.'],
          ['Manutenção da Produção','Continuidade da atividade rural e geração de renda durante a reorganização.'],
          ['Reestruturação de Dívidas','Negociação de prazos, carências e condições de pagamento adequadas aos ciclos do campo.'],
        ] as $item): ?>
        <div class="card">
          <h3 style="margin-bottom:.5rem;color:var(--fg)"><?=$item[0]?></h3>
          <p class="text-muted text-sm"><?=$item[1]?></p>
        </div>
        <?php endforeach; ?>
      </div>
      <a href="<?=$base?>/protecao-rural.php" class="btn btn--primary">Saiba mais sobre Proteção Rural</a>
    </div>
  </div>
</section>

<?php
$cta_title = 'Precisa de assessoria em Recuperação Judicial?';
$cta_desc = 'Converse com nossa equipe para uma análise estratégica e especializada do seu caso.';
include '../includes/cta.php';
include '../includes/footer.php';
?>
<script src="<?=$base?>/js/main.js"></script>
</body></html>