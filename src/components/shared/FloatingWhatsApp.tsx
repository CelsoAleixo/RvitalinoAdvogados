import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/5511974083838?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado.";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    const tooltipTimer = setTimeout(() => {
      if (!dismissed) {
        setShowTooltip(true);
      }
    }, 4000);

    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 12000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, [dismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 sm:gap-4">
      {/* Desktop Tooltip - Premium Design */}
      {showTooltip && !dismissed && (
        <div className="relative animate-fade-in hidden sm:block">
          {/* Glassmorphism card */}
          <div className="relative bg-gradient-to-br from-primary/95 to-primary backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] p-5 max-w-[260px] border border-accent/20 overflow-hidden">
            {/* Decorative accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/80 to-accent/40" />
            
            {/* Close button */}
            <button 
              onClick={() => {
                setShowTooltip(false);
                setDismissed(true);
              }}
              className="absolute top-2 right-2 w-6 h-6 bg-background/10 hover:bg-background/20 text-foreground/70 hover:text-foreground rounded-full flex items-center justify-center transition-all duration-200"
              aria-label="Fechar"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            
            {/* Content */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-accent font-semibold uppercase tracking-wider">
                    Atendimento
                  </p>
                  <p className="text-sm text-foreground font-medium">
                    Fale com um advogado
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-10">
                Resposta rápida e atendimento personalizado
              </p>
            </div>
          </div>
          
          {/* Premium arrow pointer */}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-primary rotate-45 shadow-lg border-r border-b border-accent/20" />
        </div>
      )}

      {/* Mobile Tooltip - Compact Premium */}
      {showTooltip && !dismissed && (
        <div className="relative animate-fade-in sm:hidden">
          <div className="relative bg-gradient-to-br from-primary/95 to-primary backdrop-blur-xl rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] px-4 py-3 max-w-[180px] border border-accent/20 overflow-hidden">
            {/* Accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent/40" />
            
            <button 
              onClick={() => {
                setShowTooltip(false);
                setDismissed(true);
              }}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
              aria-label="Fechar"
            >
              <X className="w-3 h-3" />
            </button>
            
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-accent flex-shrink-0" />
              <p className="text-xs text-foreground font-medium">
                Fale conosco agora!
              </p>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-primary rotate-45 border-r border-b border-accent/20" />
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-accent to-accent/90 rounded-full shadow-[0_8px_30px_-5px_rgba(181,155,96,0.5)] hover:shadow-[0_12px_40px_-5px_rgba(181,155,96,0.6)] hover:scale-110 transition-all duration-300 animate-fade-in"
        aria-label="Contato via WhatsApp"
      >
        {/* Subtle pulse ring */}
        <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-15" />
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-accent/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Icon */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-7 h-7 sm:w-8 sm:h-8 text-accent-foreground relative z-10 drop-shadow-sm"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}