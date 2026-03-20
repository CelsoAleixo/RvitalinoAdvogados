<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contato – Rodrigo Vitalino Advogados</title>
  <meta name="description" content="Entre em contato com o escritório Rodrigo Vitalino Advogados. Atendimento em São Paulo e Portugal.">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
<?php include 'includes/helpers.php'; include 'includes/header.php'; ?>

<section class="page-hero" style="background:linear-gradient(135deg,hsl(165,35%,8%),hsl(150,30%,15%))">
  <div class="container" style="position:relative;z-index:10;padding:3rem 0">
    <nav class="breadcrumb">
      <a href="index.php">Início</a>
      <span class="separator">/</span>
      <span class="current">Contato</span>
    </nav>
    <h1>Contato</h1>
    <p>Entre em contato conosco para uma consulta jurídica.</p>
  </div>
</section>

<!-- Quick Contact Banner -->
<div class="info-banner">
  <div class="container">
    <div class="inner">
      <div class="label">
        <span class="pulse-dot"></span>
        Atendimento disponível agora
        <span class="md-show text-xs text-muted" style="display:flex;align-items:center;gap:0.5rem"><?= icon('clock',12) ?> Resposta em minutos via WhatsApp</span>
      </div>
      <a href="https://wa.me/5511940449696" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-sm"><?= icon('message',16) ?> Resposta Imediata →</a>
    </div>
  </div>
</div>

<section class="section-padding">
  <div class="container">
    <div class="two-col" style="gap:4rem">
      <!-- Form -->
      <div class="fade-in" id="form-container">
        <h2 style="font-size:1.5rem;margin-bottom:1.5rem">Envie sua mensagem</h2>
        <form id="contact-form">
          <div class="grid grid-2">
            <div class="form-group">
              <label class="form-label" for="name">Nome *</label>
              <input class="form-input" type="text" id="name" name="name" required placeholder="Seu nome completo">
            </div>
            <div class="form-group">
              <label class="form-label" for="phone">Telefone</label>
              <input class="form-input" type="tel" id="phone" name="phone" placeholder="(11) 99999-9999">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" for="email">E-mail *</label>
            <input class="form-input" type="email" id="email" name="email" required placeholder="seu@email.com">
          </div>
          <div class="form-group">
            <label class="form-label" for="message">Mensagem *</label>
            <textarea class="form-textarea" id="message" name="message" required placeholder="Descreva brevemente sua necessidade jurídica..."></textarea>
          </div>
          <button type="submit" class="btn btn-accent btn-lg w-full">Enviar Mensagem</button>
          
          <div style="display:flex;flex-wrap:wrap;align-items:center;gap:1rem;padding-top:1rem;margin-top:1rem;border-top:1px solid var(--border)">
            <span class="text-sm text-muted" style="display:flex;align-items:center;gap:0.5rem"><?= icon('shield',16) ?> Sigilo garantido</span>
            <span class="text-sm text-muted" style="display:flex;align-items:center;gap:0.5rem"><?= icon('clock',16) ?> Resposta em 24h</span>
            <span class="text-sm text-muted" style="display:flex;align-items:center;gap:0.5rem"><?= icon('check',16) ?> OAB Regular</span>
          </div>
        </form>
      </div>

      <!-- Contact Info -->
      <div class="fade-in" style="padding-left:0">
        <h2 style="font-size:1.5rem;margin-bottom:1.5rem">Informações de Contato</h2>
        
        <div class="contact-item">
          <?= icon('mail') ?>
          <div>
            <h4>E-mail</h4>
            <a href="mailto:contato@rvitalinoadvogados.com.br">contato@rvitalinoadvogados.com.br</a>
          </div>
        </div>

        <div class="contact-item">
          <?= icon('phone') ?>
          <div>
            <h4>Telefone</h4>
            <a href="tel:+551156100812">+55 (11) 5610-0812</a>
          </div>
        </div>

        <div class="contact-item">
          <?= icon('map-pin') ?>
          <div>
            <h4>Endereço Brasil</h4>
            <p>Rua Manoel de Oliveira, 269, Sala 412, Torre 1,<br>Patteo Mogilar-Sky Mall,<br>Mogi das Cruzes-SP, CEP: 08773-130</p>
          </div>
        </div>

        <div class="contact-item">
          <?= icon('map-pin') ?>
          <div>
            <h4>Endereço Comercial Portugal</h4>
            <p>Avenida da Liberdade, nº 706 – 1º andar, lado esquerdo<br>Código Postal 4710-249, Braga – Portugal</p>
          </div>
        </div>

        <div class="contact-item">
          <?= icon('phone') ?>
          <div>
            <h4>Telefone Portugal</h4>
            <a href="https://wa.me/351910385021" target="_blank" rel="noopener noreferrer">+351 910 385 021</a>
          </div>
        </div>

        <div class="contact-item">
          <?= icon('mail') ?>
          <div>
            <h4>E-mail Portugal</h4>
            <a href="mailto:arthur@rvitalinoadvogados.com.br">arthur@rvitalinoadvogados.com.br</a>
          </div>
        </div>

        <div style="margin-top:2.5rem;padding-top:2rem;border-top:1px solid var(--border)">
          <h4 class="font-semibold mb-2">Horário de Atendimento</h4>
          <p class="text-muted">Segunda a Sexta: 9h às 18h<br>Sábado: Mediante agendamento</p>
        </div>
      </div>
    </div>
  </div>
</section>

<?php include 'includes/footer.php'; ?>
</body>
</html>
