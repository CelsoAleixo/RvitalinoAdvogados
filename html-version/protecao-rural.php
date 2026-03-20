<?php
$currentPage = 'atuacao';
$pageTitle = 'Proteção Rural | Recuperação Judicial no Agronegócio';
$pageDescription = 'Proteção rural e recuperação judicial especializada para produtores rurais e empresas do agronegócio.';
include 'includes/header.php';
$whatsapp = 'https://wa.me/5511972196010?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20recupera%C3%A7%C3%A3o%20judicial%20no%20agroneg%C3%B3cio.';
?>

<!-- Hero -->
<section class="area-hero" style="background-image:url('./assets/areas/agronegocio-landing-hero.jpg');min-height:75vh;">
  <div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(13,31,13,0.85),rgba(26,46,26,0.75),rgba(26,46,26,0.5));"></div>
  <div class="container" style="position:relative;z-index:10;padding:5rem 1.5rem;">
    <nav class="breadcrumb animate-on-scroll" style="margin-bottom:1.5rem;">
      <a href="./" style="color:hsla(0,0%,100%,0.7);">Início</a> <span style="color:hsla(0,0%,100%,0.5);">/</span>
      <a href="./atuacao.php" style="color:hsla(0,0%,100%,0.7);">Áreas de Atuação</a> <span style="color:hsla(0,0%,100%,0.5);">/</span>
      <a href="./atuacao/recuperacao-judicial.php" style="color:hsla(0,0%,100%,0.7);">Recuperação Judicial</a> <span style="color:hsla(0,0%,100%,0.5);">/</span>
      <span style="color:var(--accent);font-weight:500;">Agronegócio</span>
    </nav>
    <div style="max-width:42rem;" class="animate-on-scroll">
      <div class="badge badge-accent mb-6">
        <i data-lucide="leaf" style="width:16px;height:16px;color:var(--accent);"></i>
        Agronegócio
      </div>
      <h1 style="font-size:2.5rem;color:var(--accent);margin-bottom:1.5rem;text-shadow:2px 3px 12px rgba(0,0,0,0.5);">
        Recuperação Judicial no Agronegócio
      </h1>
      <p style="font-size:1.125rem;color:hsla(0,0%,100%,0.9);margin-bottom:2rem;text-shadow:1px 1px 4px rgba(0,0,0,0.4);">
        Confiança, sigilo e estratégia para proteger sua empresa.
      </p>
      <div style="display:flex;flex-wrap:wrap;gap:1rem;">
        <a href="<?php echo $whatsapp; ?>" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
          <i data-lucide="phone" style="width:20px;height:20px;"></i>
          Agendar Consulta Gratuita
          <i data-lucide="arrow-right" style="width:16px;height:16px;"></i>
        </a>
        <a href="#oque-e" class="btn btn-white-outline btn-lg">Saiba Mais</a>
      </div>
    </div>
  </div>
</section>

<!-- Trust Bar -->
<section style="background:hsla(165,30%,18%,0.4);border-top:1px solid hsla(165,20%,28%,0.4);border-bottom:1px solid hsla(165,20%,28%,0.4);">
  <div class="container" style="padding:1.5rem;">
    <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:1.5rem 2.5rem;font-size:0.875rem;color:var(--muted-fg);">
      <div style="display:flex;align-items:center;gap:0.5rem;"><i data-lucide="shield" style="width:20px;height:20px;color:var(--accent);"></i> Sigilo Total</div>
      <div style="display:flex;align-items:center;gap:0.5rem;"><i data-lucide="check-circle" style="width:20px;height:20px;color:var(--accent);"></i> Consulta Inicial Gratuita</div>
      <div style="display:flex;align-items:center;gap:0.5rem;"><i data-lucide="users" style="width:20px;height:20px;color:var(--accent);"></i> Referência Nacional</div>
      <div style="display:flex;align-items:center;gap:0.5rem;"><i data-lucide="scale" style="width:20px;height:20px;color:var(--accent);"></i> Atuação Estratégica</div>
    </div>
  </div>
</section>

<!-- O que é -->
<section id="oque-e" class="section-padding" style="scroll-margin-top:6rem;">
  <div class="container">
    <div style="max-width:52rem;margin:0 auto;" class="animate-on-scroll">
      <div style="display:flex;align-items:flex-start;gap:2rem;flex-wrap:wrap;">
        <div style="padding:1rem;border-radius:1rem;background:hsla(45,95%,52%,0.1);border:1px solid hsla(45,95%,52%,0.2);flex-shrink:0;">
          <i data-lucide="leaf" style="width:40px;height:40px;color:var(--accent);"></i>
        </div>
        <div>
          <h2 style="font-size:1.75rem;margin-bottom:1rem;">O que é Recuperação Judicial?</h2>
          <p style="color:var(--muted-fg);font-size:1.125rem;line-height:1.7;">
            A Recuperação Judicial não é falência. É uma ferramenta legal que dá fôlego às empresas, suspende cobranças e renegocia dívidas. No agronegócio, pode ser a diferença entre perder tudo ou recomeçar com segurança.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Diferencial -->
<section class="section-padding" style="background:hsla(165,30%,18%,0.3);">
  <div class="container">
    <div style="max-width:52rem;margin:0 auto;" class="animate-on-scroll">
      <div style="display:flex;align-items:flex-start;gap:2rem;flex-wrap:wrap;">
        <div style="padding:1rem;border-radius:1rem;background:hsla(45,95%,52%,0.1);border:1px solid hsla(45,95%,52%,0.2);flex-shrink:0;">
          <i data-lucide="shield" style="width:40px;height:40px;color:var(--accent);"></i>
        </div>
        <div>
          <h2 style="font-size:1.75rem;margin-bottom:1rem;">Nosso Diferencial</h2>
          <p style="color:var(--muted-fg);font-size:1.125rem;line-height:1.7;margin-bottom:2rem;">
            Na Rodrigo Vitalino Advogados fazemos diferente: oferecemos consulta inicial gratuita e um raio-x completo da sua empresa para mostrar todas as soluções possíveis.
          </p>
          <div class="grid-3">
            <div class="card" style="display:flex;align-items:center;gap:0.75rem;padding:1rem;">
              <i data-lucide="check-circle" style="width:24px;height:24px;color:var(--accent);flex-shrink:0;"></i>
              <span style="font-size:0.875rem;font-weight:500;">Consulta Gratuita</span>
            </div>
            <div class="card" style="display:flex;align-items:center;gap:0.75rem;padding:1rem;">
              <i data-lucide="lock" style="width:24px;height:24px;color:var(--accent);flex-shrink:0;"></i>
              <span style="font-size:0.875rem;font-weight:500;">Sigilo Absoluto</span>
            </div>
            <div class="card" style="display:flex;align-items:center;gap:0.75rem;padding:1rem;">
              <i data-lucide="scale" style="width:24px;height:24px;color:var(--accent);flex-shrink:0;"></i>
              <span style="font-size:0.875rem;font-weight:500;">Raio-X Jurídico</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Por que escolher -->
<section class="section-padding">
  <div class="container">
    <div style="max-width:52rem;margin:0 auto;" class="animate-on-scroll">
      <div style="display:flex;align-items:flex-start;gap:2rem;flex-wrap:wrap;">
        <div style="padding:1rem;border-radius:1rem;background:hsla(45,95%,52%,0.1);border:1px solid hsla(45,95%,52%,0.2);flex-shrink:0;">
          <i data-lucide="trending-up" style="width:40px;height:40px;color:var(--accent);"></i>
        </div>
        <div>
          <h2 style="font-size:1.75rem;margin-bottom:1rem;">Por que escolher nossa equipe?</h2>
          <p style="color:var(--muted-fg);font-size:1.125rem;line-height:1.7;margin-bottom:2rem;">
            Somos referência nacional em recuperação judicial para o agronegócio.
          </p>
          <?php
          $checks = ['Preservação do patrimônio rural', 'Continuidade das atividades produtivas', 'Segurança jurídica em todas as etapas', 'Planejamento estratégico personalizado'];
          foreach ($checks as $c): ?>
          <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem;">
            <i data-lucide="check-circle" style="width:20px;height:20px;color:var(--accent);flex-shrink:0;"></i>
            <span style="color:var(--muted-fg);"><?php echo $c; ?></span>
          </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Desmistificando -->
<section class="section-padding" style="background:hsla(165,30%,18%,0.3);">
  <div class="container">
    <div style="max-width:52rem;margin:0 auto;" class="animate-on-scroll">
      <div style="display:flex;align-items:flex-start;gap:2rem;flex-wrap:wrap;">
        <div style="padding:1rem;border-radius:1rem;background:hsla(45,95%,52%,0.1);border:1px solid hsla(45,95%,52%,0.2);flex-shrink:0;">
          <i data-lucide="lightbulb" style="width:40px;height:40px;color:var(--accent);"></i>
        </div>
        <div>
          <h2 style="font-size:1.75rem;margin-bottom:1rem;">Desmistificando</h2>
          <p style="color:var(--muted-fg);font-size:1.125rem;line-height:1.7;margin-bottom:2rem;">
            A Recuperação Judicial não é um problema, é uma solução. É a chance de reorganizar dívidas, proteger sua empresa e construir um novo futuro.
          </p>
          <div style="padding:1.5rem;border-radius:1rem;background:hsla(45,95%,52%,0.1);border:1px solid hsla(45,95%,52%,0.2);">
            <div style="display:flex;align-items:flex-start;gap:0.75rem;">
              <i data-lucide="heart" style="width:24px;height:24px;color:var(--accent);flex-shrink:0;margin-top:0.25rem;"></i>
              <p style="color:hsla(0,0%,100%,0.9);font-style:italic;font-family:var(--font-serif);font-size:1.125rem;">
                "Com a orientação certa, a Recuperação Judicial se torna o caminho para salvar negócios e fortalecer o agronegócio."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA Final -->
<section style="padding:4rem 0;background:hsla(214,100%,90%,0.36);">
  <div class="container text-center">
    <h2 style="font-size:2rem;margin-bottom:0.75rem;">Está enfrentando dificuldades financeiras?</h2>
    <p style="color:hsla(0,0%,100%,0.7);font-size:1.125rem;max-width:42rem;margin:0 auto 2rem;">
      Clique abaixo e agende sua consulta jurídica agora mesmo.
    </p>
    <a href="<?php echo $whatsapp; ?>" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
      <i data-lucide="phone" style="width:20px;height:20px;"></i>
      Agendar Consulta Gratuita
      <i data-lucide="arrow-right" style="width:16px;height:16px;"></i>
    </a>
    <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:1rem 2rem;margin-top:1.5rem;font-size:0.875rem;color:hsla(0,0%,100%,0.5);">
      <div style="display:flex;align-items:center;gap:0.5rem;"><i data-lucide="shield" style="width:16px;height:16px;"></i> 100% Sigiloso</div>
      <div style="display:flex;align-items:center;gap:0.5rem;"><i data-lucide="check-circle" style="width:16px;height:16px;color:var(--accent);"></i> Consulta Gratuita</div>
    </div>
  </div>
</section>

<?php include 'includes/footer.php'; ?>
