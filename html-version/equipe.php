<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Equipe de Advogados – Rodrigo Vitalino Advogados</title>
  <meta name="description" content="Conheça os advogados do escritório Rodrigo Vitalino Advogados. Especialistas em direito empresarial e recuperação judicial.">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
<?php include 'includes/helpers.php'; include 'includes/header.php'; ?>

<section class="section-padding bg-secondary">
  <div class="container">
    <div class="text-center mb-8 fade-in">
      <div class="badge mx-auto" style="margin-bottom:1.5rem"><?= icon('users',16) ?> NOSSA EQUIPE</div>
      <h1>Advogados Especializados</h1>
    </div>

    <div class="grid grid-5">
      <?php
      $team = [
        ['nome'=>'Rodrigo Vitalino','cargo'=>'Sócio Fundador','esp'=>'(Reestruturação de Empresas)','email'=>'rodrigo@rvitalinoadvogados.com.br','foto'=>'https://dzeqwfzqrtfjgvnxddwg.supabase.co/storage/v1/object/public/lovable-uploads/d699caab-0157-4f29-ab67-c28d2b8cdcd7.png','linkedin'=>''],
        ['nome'=>'Deidre Scaranello','cargo'=>'Diretora Jurídica','esp'=>'(Operações Estratégicas em Insolvência)','email'=>'deidre@rvitalinoadvogados.com.br','foto'=>'https://dzeqwfzqrtfjgvnxddwg.supabase.co/storage/v1/object/public/lovable-uploads/deidre-scaranello-v4.png','linkedin'=>'https://www.linkedin.com/in/deidre-scaranello-730053291/'],
        ['nome'=>'Ana Caroline Ianuck','cargo'=>'Advogada Empresarial','esp'=>'(Especialista em recuperação judicial)','email'=>'ana.caroline@rvitalinoadvogados.com.br','foto'=>'https://dzeqwfzqrtfjgvnxddwg.supabase.co/storage/v1/object/public/lovable-uploads/ana-caroline-v3.png','linkedin'=>'https://www.linkedin.com/in/ana-carolineianuck/'],
        ['nome'=>'Arthur Vitalino','cargo'=>'Business Manager','esp'=>'(Formado em Toronto, Canadá)','email'=>'arthur@rvitalinoadvogados.com.br','foto'=>'https://dzeqwfzqrtfjgvnxddwg.supabase.co/storage/v1/object/public/lovable-uploads/arthur-vitalino-v4.png','linkedin'=>''],
        ['nome'=>'Elisandra Sousa Barbosa','cargo'=>'Advogada Empresarial','esp'=>'(Especialista em recuperação judicial)','email'=>'elisandra.sousa@rvitalinoadvogados.com.br','foto'=>'https://dzeqwfzqrtfjgvnxddwg.supabase.co/storage/v1/object/public/lovable-uploads/elisandra-sousa-v4.png','linkedin'=>'https://www.linkedin.com/in/elisandra-barbosa-15193819b/'],
      ];
      foreach ($team as $m): ?>
      <div class="team-card fade-in">
        <div class="team-photo"><img src="<?= $m['foto'] ?>" alt="<?= $m['nome'] ?>" loading="lazy"></div>
        <h3><?= $m['nome'] ?></h3>
        <p class="role"><?= $m['cargo'] ?></p>
        <p class="specialty"><?= $m['esp'] ?></p>
        <?php if ($m['linkedin']): ?>
        <a href="<?= $m['linkedin'] ?>" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;border:1px solid var(--border);margin-top:0.5rem;color:var(--muted-foreground)" aria-label="LinkedIn"><?= icon('linkedin',16) ?></a>
        <?php endif; ?>
        <a href="mailto:<?= $m['email'] ?>" class="email"><?= $m['email'] ?></a>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Expertise -->
<section class="section-padding dark-section">
  <div class="container max-w-5xl">
    <div class="text-center mb-12 fade-in">
      <div class="badge mx-auto" style="margin-bottom:1.5rem"><?= icon('shield',16) ?> ESPECIALIZAÇÃO</div>
      <h2 style="color:white">Por Que Nossa Equipe Faz a Diferença?</h2>
    </div>
    <div class="grid grid-2">
      <?php
      $blocks = [
        ['icon'=>'scale','title'=>'Prevenir ou remediar?','desc'=>'Atuamos antes que o problema surja. Assessoria contínua, compliance e governança corporativa garantem que cada decisão esteja juridicamente respaldada.'],
        ['icon'=>'file-text','title'=>'Seus contratos protegem ou expõem?','desc'=>'Contratos genéricos são uma das maiores fontes de conflito corporativo. Elaboramos cláusulas personalizadas que blindam sua operação.'],
        ['icon'=>'building','title'=>'Crise financeira ou reestruturação?','desc'=>'Recuperação judicial e extrajudicial exigem estratégia, não desespero. Desenvolvemos planos viáveis de reestruturação.'],
        ['icon'=>'scale','title'=>'Seu legado está protegido?','desc'=>'Para empresas familiares, oferecemos planejamento sucessório, holdings e prevenção de conflitos entre herdeiros.'],
      ];
      foreach ($blocks as $b): ?>
      <div class="expertise-card fade-in">
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem">
          <div style="padding:0.625rem;border-radius:0.5rem;background:rgba(230,180,30,0.1)"><?= icon($b['icon'],20) ?></div>
          <h3><?= $b['title'] ?></h3>
        </div>
        <p><?= $b['desc'] ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<?php renderCTA(); ?>
<?php include 'includes/footer.php'; ?>
</body>
</html>
