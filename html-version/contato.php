<?php
$base = '.';
$current = 'contato';
$page_title = 'Contato | Rodrigo Vitalino Advogados';
$page_desc = 'Entre em contato com o escritório Rodrigo Vitalino Advogados. Atendimento em São Paulo e Portugal.';
$canonical = '/contato';
include 'includes/head.php';
include 'includes/header.php';
?>

<section class="hero" style="min-height:40vh;background:linear-gradient(135deg,hsl(165,35%,8%),hsl(165,30%,15%))">
  <div class="hero__content"><div class="container">
    <div class="breadcrumb"><a href="./index.php">Início</a><span class="sep">/</span><span class="current">Contato</span></div>
    <h1>Contato</h1>
    <p class="text-muted" style="font-size:1.125rem;margin-top:.5rem">Entre em contato conosco para uma consulta jurídica.</p>
  </div></div>
</section>

<div class="quick-banner"><div class="container"><div class="quick-banner__inner">
  <div style="display:flex;align-items:center;gap:1rem"><div class="pulse-dot"></div><span class="text-sm font-medium">Atendimento disponível agora</span></div>
  <a href="https://wa.me/5511940449696?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado." target="_blank" rel="noopener noreferrer" class="btn btn--primary">Resposta Imediata →</a>
</div></div></div>

<section class="section">
  <div class="container">
    <div style="display:grid;grid-template-columns:1fr;gap:3rem">
      <div style="max-width:640px">
        <h2 style="margin-bottom:1.5rem">Envie sua mensagem</h2>
        <form id="contact-form">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">
            <div class="form-group"><label for="name">Nome *</label><input id="name" name="name" required placeholder="Seu nome completo"></div>
            <div class="form-group"><label for="phone">Telefone</label><input id="phone" name="phone" type="tel" placeholder="(11) 99999-9999"></div>
          </div>
          <div class="form-group"><label for="email">E-mail *</label><input id="email" name="email" type="email" required placeholder="seu@email.com"></div>
          <div class="form-group"><label for="message">Mensagem *</label><textarea id="message" name="message" required placeholder="Descreva brevemente sua necessidade jurídica..." rows="6"></textarea></div>
          <button type="submit" class="btn btn--primary btn--lg w-full" style="justify-content:center">Enviar Mensagem</button>
          <div style="display:flex;flex-wrap:wrap;gap:1rem;margin-top:1rem;padding-top:1rem;border-top:1px solid var(--border);font-size:.875rem;color:var(--muted-fg)">
            <span>🛡 Sigilo garantido</span>
            <span>⏱ Resposta em 24h</span>
            <span>✓ OAB Regular</span>
          </div>
        </form>
      </div>

      <div>
        <h2 style="margin-bottom:1.5rem">Informações de Contato</h2>
        <div class="contact-item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg><div><h4>E-mail</h4><a href="mailto:contato@rvitalinoadvogados.com.br">contato@rvitalinoadvogados.com.br</a></div></div>
        <div class="contact-item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg><div><h4>Telefone</h4><a href="tel:+551156100812">+55 (11) 5610-0812</a></div></div>
        <div class="contact-item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg><div><h4>Endereço Brasil</h4><p>Rua Manoel de Oliveira, 269, Sala 412, Torre 1,<br>Patteo Mogilar-Sky Mall,<br>Mogi das Cruzes-SP, CEP: 08773-130</p></div></div>
        <div class="contact-item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg><div><h4>Endereço Portugal</h4><p>Avenida da Liberdade, nº 706 – 1º andar, lado esquerdo<br>Código Postal 4710-249, Braga – Portugal</p></div></div>
        <div class="contact-item"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg><div><h4>Telefone Portugal</h4><a href="https://wa.me/351910385021" target="_blank" rel="noopener noreferrer">+351 910 385 021</a></div></div>
        <div style="margin-top:2rem;padding-top:2rem;border-top:1px solid var(--border)">
          <h4 style="font-family:var(--font-sans);font-weight:500;margin-bottom:.75rem">Horário de Atendimento</h4>
          <p class="text-muted">Segunda a Sexta: 9h às 18h<br>Sábado: Mediante agendamento</p>
        </div>
      </div>
    </div>
  </div>
</section>

<?php include 'includes/footer.php'; ?>
<script src="./js/main.js"></script>
</body></html>
