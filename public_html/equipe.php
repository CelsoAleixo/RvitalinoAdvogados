<?php
$currentPage = 'equipe';
$pageTitle = 'Equipe';
$pageDescription = 'Conheça os advogados e especialistas do escritório Rodrigo Vitalino Advogados.';
include 'includes/header.php';
?>

<!-- Team Section -->
<section class="section-padding" style="background:var(--secondary);">
  <div style="max-width:100rem;margin:0 auto;padding:0 0.75rem;">
    <div class="text-center mb-8 animate-on-scroll">
      <div class="badge badge-accent mb-6">
        <i data-lucide="users" style="width:16px;height:16px;color:var(--accent);"></i>
        Nossa Equipe
      </div>
      <h1 style="font-size:2.25rem;">Conheça Nossos Profissionais</h1>
    </div>

    <div class="team-grid animate-on-scroll">
      <?php
      $advogados = [
        ['nome' => 'Rodrigo Vitalino', 'cargo' => 'Sócio Fundador', 'especialidade' => '(Reestruturação de Empresas)', 'email' => 'rodrigo@rvitalinoadvogados.com.br', 'foto' => './lovable-uploads/d699caab-0157-4f29-ab67-c28d2b8cdcd7.png'],
        ['nome' => 'Deidre Scaranello', 'cargo' => 'Diretora Jurídica', 'especialidade' => '(Operações Estratégicas em Insolvência)', 'email' => 'deidre@rvitalinoadvogados.com.br', 'foto' => './lovable-uploads/deidre-scaranello-v4.png', 'objPos' => 'center 20%'],
        ['nome' => 'Ana Caroline Ianuck', 'cargo' => 'Advogada Empresarial', 'especialidade' => '(Especialista em recuperação judicial)', 'email' => 'ana.caroline@rvitalinoadvogados.com.br', 'foto' => './lovable-uploads/ana-caroline-v3.png'],
        ['nome' => 'Arthur Vitalino', 'cargo' => 'Business Manager', 'especialidade' => '(Formado em Toronto, Canadá)', 'email' => 'arthur@rvitalinoadvogados.com.br', 'foto' => './lovable-uploads/arthur-vitalino-v4.png'],
        ['nome' => 'Elisandra Sousa Barbosa', 'cargo' => 'Advogada Empresarial', 'especialidade' => '(Especialista em recuperação judicial)', 'email' => 'elisandra.sousa@rvitalinoadvogados.com.br', 'foto' => './lovable-uploads/elisandra-sousa-v4.png', 'objPos' => 'center 15%'],
      ];
      foreach ($advogados as $adv): ?>
      <div class="team-card">
        <div class="team-photo">
          <img src="<?php echo $adv['foto']; ?>" alt="<?php echo $adv['nome']; ?> - <?php echo $adv['cargo']; ?>" loading="lazy"<?php echo isset($adv['objPos']) ? ' style="object-position:'.$adv['objPos'].';"' : ''; ?>>
        </div>
        <h3><?php echo $adv['nome']; ?></h3>
        <div class="team-role"><?php echo $adv['cargo']; ?></div>
        <div class="team-specialty"><?php echo $adv['especialidade']; ?></div>
        <a href="mailto:<?php echo $adv['email']; ?>" class="team-email"><?php echo $adv['email']; ?></a>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Expertise Section -->
<section class="section-padding" style="background:hsl(135,33%,13%);">
  <div class="container">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-12 animate-on-scroll">
        <div class="badge badge-accent mb-6">
          <i data-lucide="shield" style="width:16px;height:16px;color:var(--accent);"></i>
          Especialização
        </div>
        <h2 style="font-size:2rem;color:#fff;">Por Que Nossa Equipe Faz a Diferença?</h2>
      </div>

      <div class="grid-2 animate-on-scroll">
        <?php
        $blocks = [
          ['icon' => 'scale', 'title' => 'Prevenir ou remediar?', 'desc' => 'Atuamos antes que o problema surja. Assessoria contínua, compliance e governança corporativa garantem que cada decisão esteja juridicamente respaldada.'],
          ['icon' => 'file-text', 'title' => 'Seus contratos protegem ou expõem?', 'desc' => 'Contratos genéricos são uma das maiores fontes de conflito corporativo. Elaboramos cláusulas personalizadas que blindam sua operação.'],
          ['icon' => 'building-2', 'title' => 'Crise financeira ou reestruturação?', 'desc' => 'Recuperação judicial e extrajudicial exigem estratégia, não desespero. Desenvolvemos planos viáveis de reestruturação.'],
          ['icon' => 'landmark', 'title' => 'Seu legado está protegido?', 'desc' => 'Para empresas familiares, oferecemos planejamento sucessório, holdings e prevenção de conflitos entre herdeiros.'],
        ];
        foreach ($blocks as $block): ?>
        <div style="background:hsla(0,0%,100%,0.05);backdrop-filter:blur(4px);border-radius:1rem;padding:1.75rem;border:1px solid hsla(0,0%,100%,0.1);transition:border-color 0.3s;">
          <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;">
            <div class="icon-box"><i data-lucide="<?php echo $block['icon']; ?>"></i></div>
            <h3 style="font-size:1.125rem;font-weight:700;color:var(--accent);"><?php echo $block['title']; ?></h3>
          </div>
          <p style="color:hsla(0,0%,100%,0.75);line-height:1.6;font-size:0.875rem;"><?php echo $block['desc']; ?></p>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>

<?php include 'includes/cta.php'; ?>
<?php include 'includes/footer.php'; ?>
