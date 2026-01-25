import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock, CheckCircle } from "lucide-react";
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
  return <section className="bg-[#0f1c2e] text-white py-12 md:py-14">
      <div className="container-site text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-3">{title}</h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-6 text-center">
          {description}
        </p>
        
        {/* Buttons - Inline */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-5 py-2.5 h-auto rounded">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Falar com Advogado
              <span className="ml-1">→</span>
            </a>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white px-5 py-2.5 h-auto rounded">
            <a href={`tel:+5511974083838`} className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              {PHONE_NUMBER}
            </a>
          </Button>
        </div>
        
        {/* Indicators */}
        <div className="flex items-center justify-center gap-6 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Resposta em até 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-accent" />
            <span>Atendimento disponível</span>
          </div>
        </div>
      </div>
    </section>;
}