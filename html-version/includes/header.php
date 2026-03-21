<?php
$base = isset($base) ? $base : '.';
$current = isset($current) ? $current : '';
?>
<header class="header">
  <nav class="container">
    <div class="header__inner">
      <a href="<?php echo $base; ?>/index.php" class="header__logo" aria-label="Rodrigo Vitalino Advogados">
        <img src="<?php echo $base; ?>/lovable-uploads/dc472574-eab5-4830-b6d7-55c5b5234743.png" alt="Rodrigo Vitalino Advogados" width="72" height="72">
        <div class="header__logo-text">
          <span class="header__logo-name">Rodrigo Vitalino</span>
          <span class="header__logo-sub">Advogados</span>
        </div>
      </a>

      <div class="nav-desktop">
        <a href="<?php echo $base; ?>/index.php" <?php echo $current === 'home' ? 'class="active"' : ''; ?>>Início</a>
        <a href="<?php echo $base; ?>/escritorio.php" <?php echo $current === 'escritorio' ? 'class="active"' : ''; ?>>Escritório</a>
        <div class="dropdown">
          <button class="dropdown__trigger <?php echo $current === 'atuacao' ? 'active' : ''; ?>">
            Atuação
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="dropdown__menu">
            <div class="dropdown__list">
              <a href="<?php echo $base; ?>/atuacao/direito-empresarial.php">Direito Empresarial</a>
              <a href="<?php echo $base; ?>/atuacao/negociacao-juridica.php">Negociação Jurídica</a>
              <a href="<?php echo $base; ?>/atuacao/recuperacao-judicial.php">Recuperação Judicial</a>
              <a href="<?php echo $base; ?>/atuacao/direito-tributario.php">Direito Tributário</a>
              <a href="<?php echo $base; ?>/atuacao/direito-trabalhista.php">Direito Trabalhista</a>
              <a href="<?php echo $base; ?>/atuacao/familia-e-sucessoes.php">Família e Sucessões</a>
              <a href="<?php echo $base; ?>/atuacao/assessoria-juridica-empresarial.php">Assessoria Jurídica Empresarial</a>
              <a href="<?php echo $base; ?>/atuacao/credito-de-carbono.php">Crédito de Carbono</a>
              <a href="<?php echo $base; ?>/protecao-rural.php">Proteção Rural</a>
            </div>
          </div>
        </div>
        <a href="<?php echo $base; ?>/equipe.php" <?php echo $current === 'equipe' ? 'class="active"' : ''; ?>>Equipe</a>
        <a href="<?php echo $base; ?>/agronegocio.php" <?php echo $current === 'agro' ? 'class="active"' : ''; ?>>Agronegócio</a>
        <a href="<?php echo $base; ?>/publicacoes.php" <?php echo $current === 'publicacoes' ? 'class="active"' : ''; ?>>Publicações</a>
        <a href="<?php echo $base; ?>/portugal.php" <?php echo $current === 'portugal' ? 'class="active"' : ''; ?>>Portugal</a>
        <a href="<?php echo $base; ?>/contato.php" <?php echo $current === 'contato' ? 'class="active"' : ''; ?>>Contato</a>
        <a href="https://wa.me/5511940449696?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista." target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="margin-left:.5rem">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          Fale Conosco
        </a>
      </div>

      <button id="nav-toggle" class="nav-toggle" aria-label="Abrir menu" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </div>

    <div id="nav-mobile" class="nav-mobile">
      <a href="<?php echo $base; ?>/index.php">Início</a>
      <a href="<?php echo $base; ?>/escritorio.php">Escritório</a>
      <button id="mobile-areas-toggle">Áreas de Atuação ▾</button>
      <div id="mobile-areas-sub" class="sub-menu" style="display:none">
        <a href="<?php echo $base; ?>/atuacao/direito-empresarial.php">Direito Empresarial</a>
        <a href="<?php echo $base; ?>/atuacao/negociacao-juridica.php">Negociação Jurídica</a>
        <a href="<?php echo $base; ?>/atuacao/recuperacao-judicial.php">Recuperação Judicial</a>
        <a href="<?php echo $base; ?>/atuacao/direito-tributario.php">Direito Tributário</a>
        <a href="<?php echo $base; ?>/atuacao/direito-trabalhista.php">Direito Trabalhista</a>
        <a href="<?php echo $base; ?>/atuacao/familia-e-sucessoes.php">Família e Sucessões</a>
        <a href="<?php echo $base; ?>/atuacao/direito-civil.php">Assessoria Jurídica Empresarial</a>
        <a href="<?php echo $base; ?>/atuacao/credito-de-carbono.php">Crédito de Carbono</a>
        <a href="<?php echo $base; ?>/protecao-rural.php">Proteção Rural</a>
      </div>
      <a href="<?php echo $base; ?>/equipe.php">Equipe</a>
      <a href="<?php echo $base; ?>/agronegocio.php">Agronegócio</a>
      <a href="<?php echo $base; ?>/publicacoes.php">Publicações</a>
      <a href="<?php echo $base; ?>/portugal.php">Portugal</a>
      <a href="<?php echo $base; ?>/contato.php">Contato</a>
      <a href="https://wa.me/5511940449696?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista." target="_blank" rel="noopener noreferrer" class="btn btn--primary w-full mt-4" style="justify-content:center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        Fale Conosco
      </a>
    </div>
  </nav>
</header>
