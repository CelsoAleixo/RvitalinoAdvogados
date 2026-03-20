// ===== Mobile Menu Toggle =====
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('mobile-toggle');
  const nav = document.getElementById('mobile-nav');
  
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('open');
      const icon = toggle.querySelector('svg');
      if (nav.classList.contains('open')) {
        icon.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
      } else {
        icon.innerHTML = '<line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line>';
      }
    });
  }
  
  // Mobile dropdown
  const mobileDropdown = document.getElementById('mobile-areas-toggle');
  const mobileDropdownSub = document.getElementById('mobile-areas-sub');
  if (mobileDropdown && mobileDropdownSub) {
    mobileDropdown.addEventListener('click', function() {
      mobileDropdownSub.classList.toggle('open');
      const chevron = mobileDropdown.querySelector('.chevron');
      if (chevron) {
        chevron.style.transform = mobileDropdownSub.classList.contains('open') ? 'rotate(180deg)' : '';
      }
    });
  }
  
  // Accordion
  document.querySelectorAll('.accordion-trigger').forEach(function(trigger) {
    trigger.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const isOpen = content.classList.contains('open');
      
      // Close all
      document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
      document.querySelectorAll('.accordion-trigger').forEach(t => t.classList.remove('active'));
      
      if (!isOpen) {
        content.classList.add('open');
        this.classList.add('active');
      }
    });
  });
  
  // Scroll animations
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.fade-in').forEach(function(el) {
    observer.observe(el);
  });
  
  // Contact form
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const payload = {
        name: data.get('name'),
        email: data.get('email'),
        phone: data.get('phone'),
        message: data.get('message')
      };
      
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Enviando...';
      btn.disabled = true;
      
      fetch('https://dzeqwfzqrtfjgvnxddwg.supabase.co/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6ZXF3ZnpxcnRmamd2bnhkZHdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5NTMxOTksImV4cCI6MjA4OTUyOTE5OX0.dVWw29CDKoK_wX3AqrCjGKkiBn9zJB9hMy40M4uryGo'
        },
        body: JSON.stringify(payload)
      })
      .then(function(res) {
        if (!res.ok) throw new Error('Erro');
        document.getElementById('form-container').innerHTML = '<div style="text-align:center;padding:3rem"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg><h2 style="font-family:var(--font-serif);font-size:1.5rem;margin:1.5rem 0 0.75rem;color:var(--primary)">Mensagem Enviada!</h2><p style="color:var(--muted-foreground)">Obrigado pelo seu contato. Nossa equipe responderá em breve.</p></div>';
      })
      .catch(function() {
        alert('Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.');
        btn.textContent = 'Enviar Mensagem';
        btn.disabled = false;
      });
    });
  }
});
