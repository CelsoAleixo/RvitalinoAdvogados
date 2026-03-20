<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <?php
  $resolved_page_title = isset($page_title) ? $page_title : 'Rodrigo Vitalino Advogados';
  $resolved_page_desc = isset($page_desc) ? $page_desc : 'Assessoria jurídica e consultoria empresarial com atuação prática, eficiente e transparente.';
  $resolved_canonical = isset($canonical) ? $canonical : '/';
  $resolved_base = isset($base) ? $base : '.';
  ?>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $resolved_page_title; ?></title>
  <meta name="description" content="<?php echo $resolved_page_desc; ?>">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://rvitalinoadvogados.com.br<?php echo $resolved_canonical; ?>">
  <meta property="og:title" content="<?php echo $resolved_page_title; ?>">
  <meta property="og:description" content="<?php echo $resolved_page_desc; ?>">
  <meta property="og:url" content="https://rvitalinoadvogados.com.br<?php echo $resolved_canonical; ?>">
  <meta property="og:image" content="https://rvitalinoadvogados.com.br/og-image.png">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="pt_BR">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/x-icon" href="<?php echo $resolved_base; ?>/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap">
  <link rel="stylesheet" href="<?php echo $resolved_base; ?>/css/style.css">
</head>
<body>
