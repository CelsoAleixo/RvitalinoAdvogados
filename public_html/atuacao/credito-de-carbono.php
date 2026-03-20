<?php
$currentPage = 'atuacao';
$pageTitle = 'Crédito de Carbono';
$pageDescription = 'Assessoria jurídica em crédito de carbono e mercado de carbono. Regulamentação, projetos ambientais e compliance ESG.';
include '../includes/header.php';
?>

<section class="area-hero" style="background-image:url('../assets/areas/credito-carbono-hero.jpg');">
  <div class="area-hero-overlay"></div>
  <div class="container" style="position:relative;z-index:10;padding:5rem 1.5rem;">
    <nav class="breadcrumb animate-on-scroll">
      <a href="../">Início</a> <span>/</span>
      <a href="../atuacao.php">Áreas de Atuação</a> <span>/</span>
      <span class="current">Crédito de Carbono</span>
    </nav>
    <div style="max-width:48rem;" class="animate-on-scroll">
      <h1 style="font-size:3rem;color:var(--accent);margin-bottom:1rem;">Crédito de Carbono</h1>
      <p style="font-size:1.25rem;color:var(--muted-fg);">Conexão entre sustentabilidade e conformidade legal</p>
    </div>
  </div>
</section>

<section class="section-padding">
  <div class="container">
    <div style="max-width:52rem;margin:0 auto;">
      <p class="quote-block animate-on-scroll">
        Crédito de carbono é um certificado que representa uma tonelada de CO₂ que deixou de ser emitida ou foi removida da atmosfera, gerado por projetos sustentáveis como reflorestamento ou energias renováveis.
      </p>

      <?php
      $topics = [
        ['title' => 'Como funciona', 'items' => [
          '<strong>Geração de créditos:</strong> Projetos que reduzem ou capturam GEE geram créditos.',
          '<strong>Certificação:</strong> Projetos passam por auditorias independentes para garantir validade.',
          '<strong>Comercialização:</strong> Empresas compram créditos para compensar suas próprias emissões.',
          '<strong>Mercados:</strong> Existem mercados regulados (obrigatórios) e voluntários (opcionais).',
        ]],
        ['title' => 'Importância', 'items' => [
          '<strong>Incentivo:</strong> Monetiza a conservação ambiental, dando valor financeiro à proteção da natureza.',
          '<strong>Metas climáticas:</strong> Ajuda países e empresas a cumprirem compromissos de redução.',
          '<strong>Inovação:</strong> Estimula o desenvolvimento de tecnologias e práticas sustentáveis.',
        ]],
        ['title' => 'No Brasil', 'items' => [
          'O país está implementando seu mercado regulado (SBCE).',
          'Setores com grandes emissões (acima de 25 mil tCO₂/ano) terão metas de redução.',
          'O setor de mudanças no uso da terra e agricultura tem grande potencial de geração de créditos.',
        ]],
        ['title' => 'Exemplos de projetos geradores', 'items' => [
          'Preservação e restauração de florestas (como REDD+)',
          'Uso de fontes de energia limpa (solar, eólica)',
          'Melhora na eficiência energética',
        ]],
      ];
      foreach ($topics as $t): ?>
      <div class="animate-on-scroll" style="margin-top:2rem;">
        <h2 style="font-size:1.5rem;margin-bottom:1rem;"><?php echo $t['title']; ?></h2>
        <ul class="bullet-list">
          <?php foreach ($t['items'] as $item): ?>
          <li><?php echo $item; ?></li>
          <?php endforeach; ?>
        </ul>
      </div>
      <?php endforeach; ?>

      <p class="quote-block animate-on-scroll" style="margin-top:2rem;">
        Nosso escritório mantém contato com <strong>governos</strong> e <strong>empresas</strong> altamente reconhecidas no mercado, em especial na <strong>Europa</strong>.
      </p>
    </div>
  </div>
</section>

<?php include '../includes/cta.php'; ?>
<?php include '../includes/footer.php'; ?>
