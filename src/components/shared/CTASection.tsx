import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock, CheckCircle } from "lucide-react";
const WHATSAPP_LINK = "https://wa.me/5511974083838?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista.";
const PHONE_NUMBER = "(11) 97408-3838";
interface CTASectionProps {
  title?: string;
  description?: string;
}
export function CTASection({
  title = "Pronto para proteger seu negócio?",
  description = "Agende uma consulta com nossos especialistas e descubra como podemos ajudar sua empresa."
}: CTASectionProps) {
  return <section className="text-white py-10 md:py-14 bg-[#737e91]">
      <div className="container-site text-center px-5 md:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-2 md:mb-3">{title}</h2>
        <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-5 md:mb-6 text-center !text-center">
          {description}
        </p>
        
        {/* Buttons - Stack on mobile, inline on desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-5 md:mb-6">
          <Button asChild size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-5 py-2.5 h-auto rounded text-sm md:text-base">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              Falar com Advogado
              <span className="ml-1">→</span>
            </a>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:text-white px-5 py-2.5 h-auto rounded text-sm md:text-base">
            <a href={`tel:+5511974083838`} className="flex items-center justify-center gap-2">
              <MessageCircle className="h-4 w-4" />
              {PHONE_NUMBER}
            </a>
          </Button>
        </div>
        
        {/* Indicators - Stack on mobile */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs md:text-sm text-white/60">
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 md:h-4 md:w-4" />
            <span>Resposta em até 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent" />
            <span>Atendimento disponível</span>
          </div>
        </div>
      </div>
    </section>;
}