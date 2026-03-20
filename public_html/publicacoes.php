<?php
$currentPage = 'publicacoes';
$pageTitle = 'Publicações';
$pageDescription = 'Artigos, análises jurídicas e informações sobre direito empresarial, recuperação judicial, tributário e mais.';
include 'includes/header.php';
?>

<section class="page-hero with-bg">
  <div class="page-hero-bg" style="background-image:url('./assets/publications-hero.jpg');"></div>
  <div class="container page-hero-content">
    <nav class="breadcrumb"><a href="./">Início</a><span>/</span><span class="current">Publicações</span></nav>
    <h1>Publicações e Artigos Jurídicos</h1>
    <p class="page-hero-desc">Conteúdo produzido pelos especialistas do escritório sobre temas relevantes do direito.</p>
  </div>
</section>

<section class="section-padding">
  <div class="container">
    <p style="color:var(--muted-fg);text-align:center;font-size:1.125rem;">
      As publicações serão carregadas em breve. Para a versão completa com todas as publicações, acesse 
      <a href="https://rvtalinoadvogados.lovable.app/publicacoes" target="_blank" rel="noopener noreferrer" style="color:var(--accent);text-decoration:underline;">nosso site principal</a>.
    </p>
  </div>
</section>

<?php include 'includes/cta.php'; ?>
<?php include 'includes/footer.php'; ?>
