<?php
$currentPage = 'contato';
$pageTitle = 'Contato';
$pageDescription = 'Entre em contato com o escritório Rodrigo Vitalino Advogados. Atendimento em São Paulo e Portugal.';
include 'includes/header.php';
?>

<section class="page-hero with-bg">
  <div class="page-hero-bg" style="background-image:url('/assets/abstract-justice.jpg');"></div>
  <div class="container page-hero-content">
    <nav class="breadcrumb">
      <a href="/">Início</a>
      <span>/</span>
      <span class="current">Contato</span>
    </nav>
    <h1>Contato</h1>
    <p class="page-hero-desc">Entre em contato conosco para uma consulta jurídica.</p>
  </div>
</section>

<!-- Quick Contact Banner -->
<section class="contact-banner">
  <div class="container">
    <div class="contact-banner-inner">
      <div class="contact-banner-left">
        <div class="pulse-dot"></div>
        <span style="font-size:0.875rem;font-weight:500;">Atendimento disponível agora</span>
        <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.75rem;color:var(--muted-fg);">
          <i data-lucide="clock" style="width:12px;height:12px;"></i>
          <span>Resposta em minutos via WhatsApp</span>
        </div>
      </div>
      <a href="https://wa.me/5511940449696?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado." target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        <i data-lucide="message-circle" style="width:16px;height:16px;"></i>
        Resposta Imediata
        <i data-lucide="arrow-right" style="width:12px;height:12px;"></i>
      </a>
    </div>
  </div>
</section>

<section class="section-padding">
  <div class="container">
    <div class="grid-2" style="gap:3rem;">
      <!-- Contact Form -->
      <div class="animate-on-scroll">
        <h2 style="font-size:1.5rem;margin-bottom:1.5rem;">Envie sua mensagem</h2>
        <form id="contactForm" action="/enviar-contato.php" method="POST">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Nome *</label>
              <input type="text" id="name" name="name" required placeholder="Seu nome completo" class="form-input">
            </div>
            <div class="form-group">
              <label for="phone">Telefone</label>
              <input type="tel" id="phone" name="phone" placeholder="(11) 99999-9999" class="form-input">
            </div>
          </div>
          <div class="form-group">
            <label for="email">E-mail *</label>
            <input type="email" id="email" name="email" required placeholder="seu@email.com" class="form-input">
          </div>
          <div class="form-group">
            <label for="message">Mensagem *</label>
            <textarea id="message" name="message" required placeholder="Descreva brevemente sua necessidade jurídica..." class="form-textarea" rows="6"></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-lg" style="width:100%;">Enviar Mensagem</button>

          <div style="display:flex;flex-wrap:wrap;gap:1rem;padding-top:1rem;margin-top:1rem;border-top:1px solid var(--border);">
            <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.875rem;color:var(--muted-fg);">
              <i data-lucide="shield" style="width:16px;height:16px;color:var(--accent);"></i>
              <span>Sigilo garantido</span>
            </div>
            <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.875rem;color:var(--muted-fg);">
              <i data-lucide="clock" style="width:16px;height:16px;color:var(--accent);"></i>
              <span>Resposta em 24h</span>
            </div>
            <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.875rem;color:var(--muted-fg);">
              <i data-lucide="check-circle" style="width:16px;height:16px;color:var(--accent);"></i>
              <span>OAB Regular</span>
            </div>
          </div>
        </form>
      </div>

      <!-- Contact Info -->
      <div class="animate-on-scroll" style="padding-left:2rem;">
        <h2 style="font-size:1.5rem;margin-bottom:1.5rem;">Informações de Contato</h2>
        <div style="display:flex;flex-direction:column;gap:2rem;">
          <div class="info-item">
            <i data-lucide="mail"></i>
            <div>
              <h4>E-mail</h4>
              <a href="mailto:contato@rvitalinoadvogados.com.br">contato@rvitalinoadvogados.com.br</a>
            </div>
          </div>
          <div class="info-item">
            <i data-lucide="phone"></i>
            <div>
              <h4>Telefone</h4>
              <a href="tel:+551156100812">+55 (11) 5610-0812</a>
            </div>
          </div>
          <div class="info-item">
            <i data-lucide="map-pin"></i>
            <div>
              <h4>Endereço Brasil</h4>
              <p>Rua Manoel de Oliveira, 269, Sala 412, Torre 1,<br>Patteo Mogilar-Sky Mall,<br>Mogi das Cruzes-SP, CEP: 08773-130</p>
            </div>
          </div>
          <div class="info-item">
            <i data-lucide="map-pin"></i>
            <div>
              <h4>Endereço Comercial Portugal</h4>
              <p style="font-weight:500;">Avenida da Liberdade, nº 706 – 1º andar, lado esquerdo<br>Código Postal 4710-249, Braga – Distrito de Braga<br>Portugal</p>
            </div>
          </div>
          <div class="info-item">
            <i data-lucide="phone"></i>
            <div>
              <h4>Telefone Portugal</h4>
              <a href="https://wa.me/351910385021" target="_blank" rel="noopener noreferrer">+351 910 385 021</a>
            </div>
          </div>
          <div class="info-item">
            <i data-lucide="mail"></i>
            <div>
              <h4>E-mail Portugal</h4>
              <a href="mailto:arthur@rvitalinoadvogados.com.br">arthur@rvitalinoadvogados.com.br</a>
            </div>
          </div>
        </div>

        <div style="margin-top:2.5rem;padding-top:2rem;border-top:1px solid var(--border);">
          <h4 style="font-weight:500;margin-bottom:0.75rem;">Horário de Atendimento</h4>
          <p style="color:var(--muted-fg);">
            Segunda a Sexta: 9h às 18h<br>
            Sábado: Mediante agendamento
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<?php include 'includes/footer.php'; ?>
