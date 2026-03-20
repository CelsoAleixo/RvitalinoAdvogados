<?php
$currentPage = 'atuacao';
$pageTitle = 'Família e Sucessões';
$pageDescription = 'Direito de família e sucessões: inventário, partilha de bens, planejamento sucessório e proteção patrimonial. Rodrigo Vitalino Advogados.';
include '../includes/header.php';
?>

<section class="area-hero" style="background-image:url('../assets/areas/familia-sucessoes-hero.jpg');">
  <div class="area-hero-overlay"></div>
  <div class="container" style="position:relative;z-index:10;padding:5rem 1.5rem;">
    <nav class="breadcrumb animate-on-scroll">
      <a href="../">Início</a> <span>/</span>
      <a href="../atuacao.php">Áreas de Atuação</a> <span>/</span>
      <span class="current">Família e Sucessões</span>
    </nav>
    <div style="max-width:48rem;" class="animate-on-scroll">
      <h1 style="font-size:3rem;color:var(--accent);margin-bottom:1rem;">Planejamento Patrimonial e Sucessório</h1>
      <p style="font-size:1.25rem;color:var(--muted-fg);">Estratégia jurídica para proteção e perpetuação do patrimônio empresarial</p>
    </div>
  </div>
</section>

<section class="section-padding">
  <div class="container">
    <div style="max-width:52rem;margin:0 auto;">
      <p class="quote-block animate-on-scroll">
        A continuidade de uma empresa familiar exige mais do que gestão competente: demanda planejamento jurídico estratégico. Nossa atuação é direcionada a empresários e grupos familiares que buscam preservar seu legado.
      </p>

      <?php
      $topics = [
        ['title' => 'Planejamento Sucessório Empresarial', 'intro' => 'A ausência de um planejamento sucessório adequado representa um dos maiores riscos para a continuidade de empresas familiares.', 'items' => [
          '<strong>Protocolo Familiar:</strong> Elaboração de regras claras para governança, remuneração e participação de herdeiros.',
          '<strong>Acordos de Sócios:</strong> Instrumentos que disciplinam a entrada, permanência e saída de membros familiares.',
          '<strong>Testamentos Empresariais:</strong> Disposições testamentárias com foco na continuidade operacional.',
          '<strong>Doação com Reserva de Usufruto:</strong> Antecipação patrimonial com manutenção do controle.',
        ]],
        ['title' => 'Proteção Patrimonial', 'intro' => 'Disputas familiares podem comprometer décadas de trabalho e colocar em risco a existência da empresa.', 'items' => [
          '<strong>Segregação Patrimonial:</strong> Separação entre patrimônio pessoal e empresarial.',
          '<strong>Regimes Matrimoniais Estratégicos:</strong> Análise do regime de bens adequado à proteção dos ativos.',
          '<strong>Pactos Antenupciais:</strong> Instrumentos preventivos para proteção do patrimônio.',
          '<strong>Cláusulas de Incomunicabilidade:</strong> Restrições que impedem a transferência de quotas a terceiros.',
        ]],
        ['title' => 'Estrutura Societária Familiar', 'intro' => 'A constituição de veículos societários adequados é fundamental para a organização patrimonial e eficiência tributária.', 'items' => [
          '<strong>Holdings Familiares:</strong> Constituição e estruturação de sociedades para gestão do patrimônio.',
          '<strong>Governança Corporativa:</strong> Implementação de conselhos, comitês e regras de decisão.',
          '<strong>Acordo de Quotistas:</strong> Instrumentos que regulam direitos e a dinâmica entre sócios.',
          '<strong>Fundos de Investimento Familiar:</strong> Estruturas para gestão profissionalizada de ativos.',
        ]],
        ['title' => 'Planejamento Tributário Sucessório', 'intro' => 'A transmissão patrimonial possui impacto tributário significativo. A ausência de planejamento pode comprometer a liquidez.', 'items' => [
          '<strong>Otimização do ITCMD:</strong> Estratégias para redução lícita da carga tributária.',
          '<strong>Reorganização Societária:</strong> Reestruturações com foco em eficiência fiscal.',
          '<strong>Revisão Periódica:</strong> Monitoramento contínuo frente às alterações legislativas.',
          '<strong>Inventário Estratégico:</strong> Condução de inventários com foco na preservação do patrimônio.',
        ]],
      ];
      foreach ($topics as $t): ?>
      <div class="animate-on-scroll" style="margin-top:2rem;">
        <h2 style="font-size:1.5rem;margin-bottom:1rem;"><?php echo $t['title']; ?></h2>
        <p style="color:var(--muted-fg);line-height:1.7;margin-bottom:1rem;"><?php echo $t['intro']; ?></p>
        <ul class="bullet-list">
          <?php foreach ($t['items'] as $item): ?>
          <li><?php echo $item; ?></li>
          <?php endforeach; ?>
        </ul>
      </div>
      <?php endforeach; ?>

      <p class="quote-block animate-on-scroll" style="margin-top:2rem;">
        A preservação do patrimônio empresarial exige <strong>visão estratégica</strong>, <strong>conhecimento técnico multidisciplinar</strong> e <strong>acompanhamento constante</strong>.
      </p>
    </div>
  </div>
</section>

<?php include '../includes/cta.php'; ?>
<?php include '../includes/footer.php'; ?>
