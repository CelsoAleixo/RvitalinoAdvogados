<?php
$base = '.';
$current = 'equipe';
$page_title = 'Equipe | Rodrigo Vitalino Advogados';
$page_desc = 'Conheça os advogados e especialistas do escritório Rodrigo Vitalino Advogados.';
$canonical = '/equipe';
include 'includes/head.php';
include 'includes/header.php';
$team = [
  ['Rodrigo Vitalino','Sócio Fundador','(Reestruturação de Empresas)','rodrigo@rvitalinoadvogados.com.br','lovable-uploads/d699caab-0157-4f29-ab67-c28d2b8cdcd7.png'],
  ['Deidre Scaranello','Diretora Jurídica','(Operações Estratégicas em Insolvência)','deidre@rvitalinoadvogados.com.br','lovable-uploads/deidre-scaranello-v4.png'],
  ['Ana Caroline Ianuck','Advogada Empresarial','(Especialista em recuperação judicial)','ana.caroline@rvitalinoadvogados.com.br','lovable-uploads/ana-caroline-v3.png'],
  ['Arthur Vitalino','Business Manager','(Formado em Toronto, Canadá)','arthur@rvitalinoadvogados.com.br','lovable-uploads/arthur-vitalino-v4.png'],
  ['Elisandra Sousa Barbosa','Advogada Empresarial','(Especialista em recuperação judicial)','elisandra.sousa@rvitalinoadvogados.com.br','lovable-uploads/elisandra-sousa-v4.png'],
];
?>
<section class="section section--secondary">
  <div class="container">
    <div class="text-center mb-8">
      <span style="display:inline-flex;align-items:center;gap:.5rem;padding:.5rem 1rem;border-radius:999px;background:hsla(45,95%,52%,.1);border:1px solid hsla(45,95%,52%,.3);margin-bottom:1.5rem"><span style="color:var(--accent);font-size:.875rem;font-weight:500;text-transform:uppercase;letter-spacing:.15em">Nossa Equipe</span></span>
      <h1>Advogados Especializados</h1>
    </div>
    <div class="grid grid--5">
      <?php foreach($team as $m): ?>
      <div class="team-card">
        <div class="team-card__photo"><img src="./<?php echo $m[4]; ?>" alt="<?php echo $m[0]; ?>" loading="lazy"></div>
        <div class="team-card__name"><?php echo $m[0]; ?></div>
        <div class="team-card__role"><?php echo $m[1]; ?></div>
        <div class="team-card__spec"><?php echo $m[2]; ?></div>
        <a href="mailto:<?php echo $m[3]; ?>" class="team-card__email"><?php echo $m[3]; ?></a>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>
<?php include 'includes/cta.php'; include 'includes/footer.php'; ?>
<script src="./js/main.js"></script>
</body></html>
