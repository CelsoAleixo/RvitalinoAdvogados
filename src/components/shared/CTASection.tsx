import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511974083838?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado.";
const PHONE_NUMBER = "(11) 97408-3838";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({ 
  title = "Pronto para proteger seu negócio?",
  description = "Agende uma consulta com nossos especialistas e descubra como podemos ajudar sua empresa."
}: CTASectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container-site relative z-10 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-5 tracking-tight">
          {title}
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          {description}
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Button 
            asChild 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-7 h-auto text-base rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Phone className="h-5 w-5" />
              Falar com Advogado
              <span className="text-lg">→</span>
            </a>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="border-2 border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 px-8 py-7 h-auto text-base rounded-lg transition-all duration-300"
          >
            <a 
              href={`tel:+5511974083838`}
              className="flex items-center gap-3"
            >
              <MessageCircle className="h-5 w-5" />
              {PHONE_NUMBER}
            </a>
          </Button>
        </div>
        
        {/* Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2 text-primary-foreground/60">
            <Clock className="h-4 w-4" />
            <span>Resposta em até 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary-foreground/60">Atendimento disponível</span>
          </div>
        </div>
      </div>
    </section>
  );
}
