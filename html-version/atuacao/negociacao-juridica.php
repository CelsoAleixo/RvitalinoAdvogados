<?php
$base = '..';
$current = 'atuacao';
$page_title = 'Negociação Jurídica | Rodrigo Vitalino Advogados';
$page_desc = 'Negociação jurídica estratégica para mediação, acordos, prevenção de litígios e resolução eficiente de conflitos empresariais.';
$canonical = '/atuacao/negociacao-juridica';
include '../includes/head.php';
include '../includes/header.php';
?>

<section class="hero" style="min-height:70vh">
  <div class="hero__bg"><img src="<?=$base?>/assets/areas/negociacao-juridica-hero.jpg" alt="Negociação Jurídica"></div>
  <div class="hero__overlay" style="background:linear-gradient(to right,rgba(13,26,13,.88),rgba(13,26,13,.65),rgba(13,26,13,.35))"></div>
  <div class="hero__content"><div class="container" style="padding-top:5rem;padding-bottom:5rem">
    <div class="breadcrumb" style="color:rgba(255,255,255,.74);margin-bottom:1rem"><a href="<?=$base?>/index.php">Início</a><span class="sep">/</span><a href="<?=$base?>/atuacao.php">Áreas de Atuação</a><span class="sep">/</span><span class="current">Negociação Jurídica</span></div>
    <div style="max-width:42rem"><h1>Negociação Jurídica</h1><p style="margin-top:1rem;font-size:clamp(1rem,2.4vw,1.25rem);color:rgba(255,255,255,.9)">Resolução estratégica de conflitos, renegociação de passivos e estruturação de acordos com segurança jurídica.</p></div>
  </div></div>
</section>

<section class="section">
  <div class="container container--narrow">
    <div class="card" style="margin-bottom:1.5rem">
      <p class="text-muted" style="font-size:1.05rem;line-height:1.85">A negociação jurídica é uma área estratégica voltada à resolução eficiente de conflitos e à construção de acordos extrajudiciais ou judiciais. Ela reduz desgaste, economiza tempo e recursos e transforma impasses em soluções juridicamente sólidas.</p>
    </div>
    <div class="grid grid--2">
      <?php foreach ([
        ['Foco na Solução','Atuação para evitar litígios prolongados, priorizando mediação, conciliação e acordos bem estruturados.'],
        ['Gestão de Conflitos e Dívidas','Renegociação, revisão contratual e construção de soluções viáveis para relações empresariais complexas.'],
        ['Advocacia Estratégica','Uso de técnicas de negociação antes e durante o processo judicial, sempre com visão de resultado.'],
        ['Pilar Técnico','Preparação, escuta ativa, inteligência emocional e gestão estratégica de concessões.'],
        ['Segurança Jurídica','Acordos sólidos, exequíveis e pensados para evitar novos conflitos.'],
        ['Agilidade e Redução de Custos','Soluções mais rápidas e econômicas do que disputas judiciais longas.'],
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
$cta_title = 'Precisa de apoio em negociações delicadas?';
$cta_desc = 'Fale com nossa equipe para estruturar acordos e proteger seus interesses com estratégia.';
include '../includes/cta.php';
include '../includes/footer.php';
?>
<script src="<?=$base?>/js/main.js"></script>
</body></html>