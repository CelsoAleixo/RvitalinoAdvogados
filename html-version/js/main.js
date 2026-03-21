/* ═══════════════════════════════════════════
   Rodrigo Vitalino Advogados — Main JS
   ═══════════════════════════════════════════ */

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('nav-toggle');
  const mobile = document.getElementById('nav-mobile');
  if (toggle && mobile) {
    toggle.addEventListener('click', function () {
      mobile.classList.toggle('open');
      const isOpen = mobile.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.innerHTML = isOpen
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });
  }

  // Mobile areas submenu
  const areasToggle = document.getElementById('mobile-areas-toggle');
  const areasSub = document.getElementById('mobile-areas-sub');
  if (areasToggle && areasSub) {
    areasToggle.addEventListener('click', function () {
      areasSub.classList.toggle('open');
      areasSub.style.display = areasSub.classList.contains('open') ? 'block' : 'none';
    });
  }

  // Accordion
  document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const isOpen = content.classList.contains('open');
      // Close all
      document.querySelectorAll('.accordion-content').forEach(function (c) { c.classList.remove('open'); });
      document.querySelectorAll('.accordion-trigger').forEach(function (t) { t.setAttribute('aria-expanded', 'false'); });
      if (!isOpen) {
        content.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Contact form
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var origText = btn.textContent;
      btn.textContent = 'Enviando...';
      btn.disabled = true;

      var name = form.querySelector('#name').value;
      var email = form.querySelector('#email').value;
      var phone = form.querySelector('#phone').value;
      var message = form.querySelector('#message').value;

      // Save to backend
      fetch('https://dzeqwfzqrtfjgvnxddwg.supabase.co/functions/v1/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6ZXF3ZnpxcnRmamd2bnhkZHdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5NTMxOTksImV4cCI6MjA4OTUyOTE5OX0.dVWw29CDKoK_wX3AqrCjGKkiBn9zJB9hMy40M4uryGo' },
        body: JSON.stringify({ name: name, email: email, phone: phone, message: message })
      }).then(function() {
        // Open WhatsApp with message to +55 11 5610-0812
        var whatsappMsg = encodeURIComponent('Nova mensagem do site:\n\nNome: ' + name + '\nE-mail: ' + email + '\nTelefone: ' + (phone || 'Não informado') + '\n\nMensagem: ' + message);
        window.open('https://wa.me/551156100812?text=' + whatsappMsg, '_blank');

        form.innerHTML = '<div style="text-align:center;padding:3rem 0"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="' + getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin:0 auto 1.5rem"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg><h2 style="font-family:var(--font-serif);font-size:1.5rem;margin-bottom:1rem">Mensagem Enviada!</h2><p style="color:var(--muted-fg)">Obrigado pelo seu contato. Nossa equipe responderá em breve.</p></div>';
      }).catch(function() {
        btn.textContent = origText;
        btn.disabled = false;
        alert('Erro ao enviar mensagem. Tente novamente.');
      });
    });
  }

  // Close mobile nav on link click
  document.querySelectorAll('#nav-mobile a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (mobile) {
        mobile.classList.remove('open');
        if (toggle) {
          toggle.setAttribute('aria-expanded', 'false');
          toggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
        }
      }
    });
  });
});
