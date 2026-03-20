<?php
$base = '..';
$current = 'atuacao';
$page_title = 'Direito Trabalhista | Rodrigo Vitalino Advogados';
$page_desc = 'Assessoria trabalhista estratégica para empresas, com prevenção de passivos, revisão de contratos e defesa em reclamações.';
$canonical = '/atuacao/direito-trabalhista';
include '../includes/head.php';
include '../includes/header.php';
?>

<section class="hero" style="min-height:70vh">
  <div class="hero__bg"><img src="<?=$base?>/assets/areas/direito-trabalhista-hero.jpg" alt="Direito Trabalhista"></div>
  <div class="hero__overlay" style="background:linear-gradient(to right,rgba(13,26,13,.88),rgba(13,26,13,.65),rgba(13,26,13,.35))"></div>
  <div class="hero__content"><div class="container" style="padding-top:5rem;padding-bottom:5rem">
    <div class="breadcrumb" style="color:rgba(255,255,255,.74);margin-bottom:1rem"><a href="<?=$base?>/index.php">Início</a><span class="sep">/</span><a href="<?=$base?>/atuacao.php">Áreas de Atuação</a><span class="sep">/</span><span class="current">Direito Trabalhista</span></div>
    <div style="max-width:42rem"><h1>Direito Trabalhista</h1><p style="margin-top:1rem;font-size:clamp(1rem,2.4vw,1.25rem);color:rgba(255,255,255,.9)">Assessoria jurídica especializada e exclusiva para empresas, com foco em prevenção, defesa e conformidade trabalhista.</p></div>
  </div></div>
</section>

<section class="section">
  <div class="container container--narrow">
    <div class="card" style="margin-bottom:1.5rem">
      <p class="text-muted">Nossa atuação em Direito Trabalhista é voltada exclusivamente para empregadores. Estruturamos políticas internas, revisamos documentos, orientamos decisões estratégicas e defendemos empresas em reclamações e recursos.</p>
    </div>
    <div class="grid grid--2">
      <?php foreach ([
        ['Consultoria Preventiva','Revisão de contratos de trabalho, regulamentos internos, políticas corporativas e rotinas de RH.'],
        ['Defesa Empresarial','Atuação em reclamações trabalhistas, recursos e contencioso em todas as instâncias.'],
        ['Compliance Trabalhista','Adequação à CLT, normas coletivas e exigências regulatórias do setor.'],
        ['Gestão de Passivos','Diagnóstico e estratégias para redução de contingências e exposição financeira.'],
        ['Negociações Coletivas','Apoio técnico em tratativas com sindicatos e construção de acordos coletivos.'],
        ['Reestruturações','Suporte jurídico em terceirização, reorganizações e mudanças operacionais.'],
      ] as $item): ?>
      <div class="card">
        <h3 style="margin-bottom:.75rem;color:var(--fg)"><?=$item[0]?></h3>
        <p class="text-muted text-sm"><?=$item[1]?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php
$cta_title = 'Sua empresa precisa de assessoria trabalhista?';
$cta_desc = 'Converse com nossa equipe para reduzir riscos e ganhar segurança nas relações de trabalho.';
include '../includes/cta.php';
include '../includes/footer.php';
?>
<script src="<?=$base?>/js/main.js"></script>
</body></html>