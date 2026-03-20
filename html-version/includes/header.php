<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo isset($pageTitle) ? $pageTitle . ' | Rodrigo Vitalino Advogados' : 'Rodrigo Vitalino Advogados | Assessoria Jurídica e Consultoria Empresarial'; ?></title>
  <meta name="description" content="<?php echo isset($pageDescription) ? $pageDescription : 'Assessoria jurídica e consultoria empresarial com atuação prática, eficiente e transparente. Direito empresarial, recuperação judicial, tributário e mais.'; ?>">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
  
  <!-- CSS -->
  <link rel="stylesheet" href="./css/style.css">
  
  <?php if (isset($extraHead)) echo $extraHead; ?>
</head>
<body>
  <header class="site-header">
    <nav class="container">
      <div class="header-inner">
        <!-- Logo -->
        <a href="./" class="logo-link" aria-label="Rodrigo Vitalino Advogados - Página Inicial">
          <div class="logo-icon">
            <img src="./lovable-uploads/dc472574-eab5-4830-b6d7-55c5b5234743.png" alt="Rodrigo Vitalino Advogados" width="72" height="72">
          </div>
          <div class="logo-text">
            <span class="logo-name">Rodrigo Vitalino</span>
            <div class="logo-subtitle">
              <span class="logo-line"></span>
              <span class="logo-advogados">Advogados</span>
              <span class="logo-line"></span>
            </div>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <div class="desktop-nav">
          <a href="./" class="nav-link <?php echo ($currentPage ?? '') === 'home' ? 'active' : ''; ?>">Início</a>
          <a href="./escritorio.php" class="nav-link <?php echo ($currentPage ?? '') === 'escritorio' ? 'active' : ''; ?>">O Escritório</a>
          
          <!-- Áreas Dropdown -->
          <div class="dropdown">
            <a href="./atuacao.php" class="nav-link <?php echo ($currentPage ?? '') === 'atuacao' ? 'active' : ''; ?>">
              Áreas de Atuação
              <i data-lucide="chevron-down" class="dropdown-icon"></i>
            </a>
            <div class="dropdown-menu">
              <a href="./atuacao/direito-empresarial.php">Direito Empresarial</a>
              <a href="./atuacao/negociacao-juridica.php">Negociação Jurídica</a>
              <a href="./atuacao/recuperacao-judicial.php">Recuperação Judicial</a>
              <a href="./atuacao/direito-tributario.php">Direito Tributário</a>
              <a href="./atuacao/direito-trabalhista.php">Direito Trabalhista</a>
              <a href="./atuacao/familia-e-sucessoes.php">Família e Sucessões</a>
              <a href="./atuacao/direito-civil.php">Direito Civil</a>
              <a href="./atuacao/credito-de-carbono.php">Crédito de Carbono</a>
              <a href="./protecao-rural.php">Recuperação Judicial Agro</a>
            </div>
          </div>

          <a href="./equipe.php" class="nav-link <?php echo ($currentPage ?? '') === 'equipe' ? 'active' : ''; ?>">Equipe</a>
          <a href="./agronegocio.php" class="nav-link <?php echo ($currentPage ?? '') === 'agro' ? 'active' : ''; ?>">Agronegócio</a>
          <a href="./publicacoes.php" class="nav-link <?php echo ($currentPage ?? '') === 'publicacoes' ? 'active' : ''; ?>">Publicações</a>
          <a href="./portugal.php" class="nav-link <?php echo ($currentPage ?? '') === 'portugal' ? 'active' : ''; ?>">Portugal</a>
          <a href="./contato.php" class="nav-link <?php echo ($currentPage ?? '') === 'contato' ? 'active' : ''; ?>">Contato</a>

          <a href="https://wa.me/5511940449696?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista." target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            <i data-lucide="message-circle" style="width:16px;height:16px;"></i>
            Fale Conosco
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Abrir menu">
          <i data-lucide="menu" id="menuIcon"></i>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div class="mobile-nav" id="mobileNav">
        <a href="./" class="nav-link">Início</a>
        <a href="./escritorio.php" class="nav-link">O Escritório</a>
        
        <div class="mobile-dropdown">
          <button class="nav-link mobile-dropdown-btn">
            Áreas de Atuação
            <i data-lucide="chevron-down" class="dropdown-icon"></i>
          </button>
          <div class="mobile-dropdown-menu">
            <a href="./atuacao/direito-empresarial.php">Direito Empresarial</a>
            <a href="./atuacao/negociacao-juridica.php">Negociação Jurídica</a>
            <a href="./atuacao/recuperacao-judicial.php">Recuperação Judicial</a>
            <a href="./atuacao/direito-tributario.php">Direito Tributário</a>
            <a href="./atuacao/direito-trabalhista.php">Direito Trabalhista</a>
            <a href="./atuacao/familia-e-sucessoes.php">Família e Sucessões</a>
            <a href="./atuacao/direito-civil.php">Direito Civil</a>
            <a href="./atuacao/credito-de-carbono.php">Crédito de Carbono</a>
            <a href="./protecao-rural.php">Recuperação Judicial Agro</a>
          </div>
        </div>

        <a href="./equipe.php" class="nav-link">Equipe</a>
        <a href="./agronegocio.php" class="nav-link">Agronegócio</a>
        <a href="./publicacoes.php" class="nav-link">Publicações</a>
        <a href="./portugal.php" class="nav-link">Portugal</a>
        <a href="./contato.php" class="nav-link">Contato</a>

        <a href="https://wa.me/5511940449696?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista." target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width:100%;text-align:center;margin-top:1rem;">
          <i data-lucide="message-circle" style="width:20px;height:20px;"></i>
          Fale Conosco
        </a>
      </div>
    </nav>
  </header>
  <main>
