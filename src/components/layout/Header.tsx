import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
const WHATSAPP_LINK = "https://wa.me/5511974083838?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado.";
const areasDeAtuacao = [{
  name: "Direito Empresarial",
  href: "/atuacao/direito-empresarial"
}, {
  name: "Negociação Jurídica",
  href: "/atuacao/negociacao-juridica"
}, {
  name: "Recuperação Judicial",
  href: "/atuacao/recuperacao-judicial"
}, {
  name: "Direito Tributário",
  href: "/atuacao/direito-tributario"
}, {
  name: "Direito Trabalhista",
  href: "/atuacao/direito-trabalhista"
}, {
  name: "Família e Sucessões",
  href: "/atuacao/familia-e-sucessoes"
}, {
  name: "Direito Civil",
  href: "/atuacao/direito-civil"
}, {
  name: "Crédito de Carbono",
  href: "/atuacao/credito-de-carbono"
}];
const navigation = [{
  name: "Início",
  href: "/"
}, {
  name: "O Escritório",
  href: "/escritorio"
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
const handleAreasClick = () => {
  // Navigate to /atuacao and scroll to areas section
  window.location.href = "/atuacao#areas-grid";
};
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [isAreasHovered, setIsAreasHovered] = useState(false);
  const location = useLocation();
  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };
  return <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container-site">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group" aria-label="Rodrigo Vitalino Advogados - Página Inicial">
            <div className="relative">
              <img alt="" className="h-16 w-auto transition-transform duration-300 group-hover:scale-105 border-4" onError={e => {
              e.currentTarget.style.display = 'none';
            }} src="/lovable-uploads/9247fff5-d7ad-42ef-985b-0ba18b2dea88.png" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-semibold tracking-tight text-accent transition-colors duration-300 group-hover:text-accent/80 text-xl">
                Rodrigo Vitalino
              </span>
              <span className="text-[11px] font-medium text-accent/70 tracking-[0.3em] uppercase">
                Advogados
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.slice(0, 2).map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors link-underline ${isActive(item.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {item.name}
              </Link>)}
            
            {/* Áreas de Atuação Dropdown - Hover */}
            <div className="relative" onMouseEnter={() => setIsAreasHovered(true)} onMouseLeave={() => setIsAreasHovered(false)}>
              <Link to="/atuacao" className={`text-sm font-medium transition-colors flex items-center gap-1 ${isActive("/atuacao") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                Áreas de Atuação
                <ChevronDown className={`h-4 w-4 transition-transform ${isAreasHovered ? "rotate-180" : ""}`} />
              </Link>
              
              {/* Dropdown Menu */}
              {isAreasHovered && <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-56 bg-background border border-border rounded-lg shadow-lg py-2 animate-fade-in">
                    {areasDeAtuacao.map(area => <Link key={area.href} to={area.href} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                        {area.name}
                      </Link>)}
                  </div>
                </div>}
            </div>

            {navigation.slice(2).map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors link-underline ${isActive(item.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {item.name}
              </Link>)}
            
            <Button asChild size="sm" className="ml-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button type="button" className="lg:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Fechar menu" : "Abrir menu"}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="lg:hidden border-t border-border py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navigation.slice(0, 2).map(item => <Link key={item.name} to={item.href} onClick={() => setIsOpen(false)} className={`text-base font-medium py-2 transition-colors ${isActive(item.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                  {item.name}
                </Link>)}
              
              {/* Mobile Áreas de Atuação */}
              <div>
                <button onClick={() => setMobileAreasOpen(!mobileAreasOpen)} className={`text-base font-medium py-2 transition-colors flex items-center gap-1 w-full ${isActive("/atuacao") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                  Áreas de Atuação
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileAreasOpen && <div className="pl-4 space-y-2 mt-2">
                    {areasDeAtuacao.map(area => <Link key={area.href} to={area.href} onClick={() => setIsOpen(false)} className="block py-1 text-sm text-muted-foreground hover:text-foreground">
                        {area.name}
                      </Link>)}
                  </div>}
              </div>

              {navigation.slice(2).map(item => <Link key={item.name} to={item.href} onClick={() => setIsOpen(false)} className={`text-base font-medium py-2 transition-colors ${isActive(item.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                  {item.name}
                </Link>)}
              
              <Button asChild className="w-full mt-4">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Fale Conosco
                </a>
              </Button>
            </div>
          </div>}
      </nav>
    </header>;
}