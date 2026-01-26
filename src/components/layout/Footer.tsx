import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logoRV from "@/assets/logo-rv-transparent.png";

const quickLinks = [{
  name: "Início",
  href: "/"
}, {
  name: "O Escritório",
  href: "/escritorio"
}, {
  name: "Áreas de Atuação",
  href: "/atuacao"
}, {
  name: "Publicações",
  href: "/publicacoes"
}, {
  name: "Portugal",
  href: "/portugal"
}, {
  name: "Contato",
  href: "/contato"
}];
export function Footer() {
  return <footer className="bg-secondary border-t border-border">
      <div className="container-site section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3" aria-label="Rodrigo Vitalino Advogados">
              <img 
                alt="Rodrigo Vitalino Advogados" 
                className="h-12 w-auto" 
                width="48" 
                height="48" 
                loading="lazy"
                decoding="async"
                src={logoRV}
              />
              <span className="font-serif text-xl font-semibold tracking-tight text-primary">
                Rodrigo Vitalino
                <span className="block text-sm font-sans font-normal text-muted-foreground tracking-widest uppercase">
                  Advogados
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Assessoria jurídica e consultoria empresarial com atuação prática, eficiente e transparente desde 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4 text-primary">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact Brazil */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4 text-primary">Brasil</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>
                  Rua Manoel de Oliveira, 269, Sala 412, Torre 1,
                  <br />
                  Patteo Mogilar-Sky Mall,
                  <br />
                  Mogi das Cruzes-SP, CEP: 08773-130
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <a href="tel:+551156100812" className="hover:text-primary transition-colors">
                  +55 (11) 5610-0812
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <a href="mailto:contato@rvitalinoadvogados.com.br" className="hover:text-primary transition-colors">
                  contato@rvitalinoadvogados.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Portugal */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4 text-primary">Portugal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>
                  Av da Liberdade, 706 - 1º Esq,
                  <br />
                  Código postal 4710-249 Braga/Portugal
                  <br />
                  (Inscrito na Ordem dos Advogados de Portugal)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <a href="https://wa.me/351910385021?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20Representante%20Uni%C3%A3o%20Europeia." target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  +351 910 385 021
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <a href="mailto:arthur@rvitalinoadvogados.com.br" className="hover:text-primary transition-colors">
                  arthur@rvitalinoadvogados.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Rodrigo Vitalino Advogados. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link to="/contato" className="hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}