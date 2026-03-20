<?php
$base = '..';
$current = 'atuacao';
$page_title = 'Crédito de Carbono | Rodrigo Vitalino Advogados';
$page_desc = 'Assessoria jurídica em mercado de carbono, projetos ambientais, regulamentação, certificação e compliance ESG.';
$canonical = '/atuacao/credito-de-carbono';
include '../includes/head.php';
include '../includes/header.php';
?>

<section class="hero" style="min-height:70vh">
  <div class="hero__bg"><img src="<?php echo $base; ?>/assets/areas/credito-carbono-hero.jpg" alt="Crédito de Carbono"></div>
  <div class="hero__overlay" style="background:linear-gradient(to right,rgba(13,26,13,.88),rgba(13,26,13,.65),rgba(13,26,13,.35))"></div>
  <div class="hero__content"><div class="container" style="padding-top:5rem;padding-bottom:5rem">
    <div class="breadcrumb" style="color:rgba(255,255,255,.74);margin-bottom:1rem"><a href="<?php echo $base; ?>/index.php">Início</a><span class="sep">/</span><a href="<?php echo $base; ?>/atuacao.php">Áreas de Atuação</a><span class="sep">/</span><span class="current">Crédito de Carbono</span></div>
    <div style="display:flex;flex-direction:column;gap:1.5rem;max-width:48rem">
      <img src="<?php echo $base; ?>/assets/areas/credito-carbono-icon.png" alt="Ícone de crédito de carbono" loading="lazy" style="width:120px;height:120px;object-fit:contain">
      <div>
        <h1>Crédito de Carbono</h1>
        <p style="margin-top:1rem;font-size:clamp(1rem,2.4vw,1.25rem);color:rgba(255,255,255,.9)">Conexão entre sustentabilidade, oportunidade econômica e conformidade legal.</p>
      </div>
    </div>
  </div></div>
</section>

<section class="section">
  <div class="container container--narrow">
    <div class="card" style="margin-bottom:1.5rem">
      <p class="text-muted">Crédito de carbono representa uma tonelada de CO₂ que deixou de ser emitida ou foi removida da atmosfera por projetos sustentáveis. O mercado exige certificação, estrutura jurídica robusta, segurança contratual e conformidade regulatória para gerar, negociar e validar esses ativos ambientais.</p>
    </div>
    <div class="grid grid--2">
      <?php foreach ([
        ['Como funciona','Geração de créditos por projetos ambientais, certificação por auditorias independentes e comercialização em mercados regulados ou voluntários.'],
        ['Importância','Monetiza conservação, ajuda no cumprimento de metas climáticas e incentiva inovação sustentável.'],
        ['No Brasil','O país avança com o SBCE e com setores de grande potencial de geração, especialmente no uso da terra e agricultura.'],
        ['Projetos Geradores','Preservação e restauração de florestas, energia limpa e melhoria de eficiência energética.'],
      ] as $item): ?>
      <div class="card">
        <h3 style="margin-bottom:.75rem;color:var(--fg)"><?php echo $item[0]; ?></h3>
        <p class="text-muted text-sm"><?php echo $item[1]; ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php
$cta_title = 'Interesse em projetos de crédito de carbono?';
$cta_desc = 'Fale com nossa equipe para estruturar oportunidades com segurança regulatória e visão estratégica.';
include '../includes/cta.php';
include '../includes/footer.php';
?>
<script src="<?php echo $base; ?>/js/main.js"></script>
</body></html>
