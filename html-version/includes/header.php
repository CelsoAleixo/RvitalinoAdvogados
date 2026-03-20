<?php
$WHATSAPP_LINK = "https://wa.me/5511940449696?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista.";
$current_page = basename($_SERVER['PHP_SELF'], '.php');
if ($current_page === 'index') $current_page = 'index';

function isActive($page, $current) {
  if ($page === 'index' && $current === 'index') return ' active';
  if ($page !== 'index' && $current === $page) return ' active';
  return '';
}
?>
<header class="header">
  <nav class="container">
    <div class="header-inner">
      <a href="index.php" class="logo-link" aria-label="Rodrigo Vitalino Advogados - Página Inicial">
        <img src="https://dzeqwfzqrtfjgvnxddwg.supabase.co/storage/v1/object/public/lovable-uploads/dc472574-eab5-4830-b6d7-55c5b5234743.png" alt="Rodrigo Vitalino Advogados" width="72" height="72">
        <div class="logo-text">
          <span class="logo-name">Rodrigo Vitalino</span>
          <span class="logo-subtitle">
            <span class="line"></span>
            Advogados
            <span class="line"></span>
          </span>
        </div>
      </a>

      <div class="nav-desktop">
        <a href="index.php" class="nav-link<?= isActive('index', $current_page) ?>">Início</a>
        <a href="escritorio.php" class="nav-link<?= isActive('escritorio', $current_page) ?>">Escritório</a>
        
        <div class="dropdown">
          <a href="atuacao.php" class="nav-link<?= isActive('atuacao', $current_page) ?>" style="display:flex;align-items:center;gap:4px">
            Atuação
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <div class="dropdown-menu">
            <div class="dropdown-content">
              <a href="atuacao.php" class="dropdown-item">Direito Empresarial</a>
              <a href="atuacao.php" class="dropdown-item">Negociação Jurídica</a>
              <a href="atuacao.php" class="dropdown-item">Recuperação Judicial</a>
              <a href="atuacao.php" class="dropdown-item">Direito Tributário</a>
              <a href="atuacao.php" class="dropdown-item">Direito Trabalhista</a>
              <a href="atuacao.php" class="dropdown-item">Família e Sucessões</a>
              <a href="atuacao.php" class="dropdown-item">Assessoria Jurídica Empresarial</a>
              <a href="atuacao.php" class="dropdown-item">Crédito de Carbono</a>
              <a href="agronegocio.php" class="dropdown-item">Proteção Rural</a>
            </div>
          </div>
        </div>

        <a href="equipe.php" class="nav-link<?= isActive('equipe', $current_page) ?>">Equipe</a>
        <a href="agronegocio.php" class="nav-link<?= isActive('agronegocio', $current_page) ?>">Agronegócio</a>
        <a href="publicacoes.php" class="nav-link<?= isActive('publicacoes', $current_page) ?>">Publicações</a>
        <a href="portugal.php" class="nav-link<?= isActive('portugal', $current_page) ?>">Portugal</a>
        <a href="contato.php" class="nav-link<?= isActive('contato', $current_page) ?>">Contato</a>
        
        <a href="<?= $WHATSAPP_LINK ?>" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          Fale Conosco
        </a>
      </div>

      <button class="mobile-toggle" id="mobile-toggle" aria-label="Abrir menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
      </button>
    </div>

    <div class="nav-mobile" id="mobile-nav">
      <a href="index.php" class="nav-link">Início</a>
      <a href="escritorio.php" class="nav-link">Escritório</a>
      <button class="nav-link" id="mobile-areas-toggle" style="background:none;border:none;font:inherit;cursor:pointer;display:flex;align-items:center;gap:4px;width:100%;text-align:left;padding:0.75rem 0">
        Atuação
        <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition:transform 0.3s"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </button>
      <div class="dropdown-sub" id="mobile-areas-sub">
        <a href="atuacao.php">Direito Empresarial</a>
        <a href="atuacao.php">Recuperação Judicial</a>
        <a href="atuacao.php">Direito Tributário</a>
        <a href="atuacao.php">Direito Trabalhista</a>
        <a href="agronegocio.php">Proteção Rural</a>
      </div>
      <a href="equipe.php" class="nav-link">Equipe</a>
      <a href="agronegocio.php" class="nav-link">Agronegócio</a>
      <a href="publicacoes.php" class="nav-link">Publicações</a>
      <a href="portugal.php" class="nav-link">Portugal</a>
      <a href="contato.php" class="nav-link">Contato</a>
      <a href="<?= $WHATSAPP_LINK ?>" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-full mt-4">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        Fale Conosco
      </a>
    </div>
  </nav>
</header>
