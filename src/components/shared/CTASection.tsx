import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511974083838?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado.";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export function CTASection({ 
  title = "Fale com um advogado",
  description = "Entre em contato para uma consulta sobre sua necessidade jurídica."
}: CTASectionProps) {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container-site text-center">
        <h2 className="text-3xl md:text-4xl mb-4">{title}</h2>
        <p className="text-lg opacity-80 max-w-xl mx-auto mb-8">
          {description}
        </p>
        <Button 
          asChild 
          size="lg" 
          variant="secondary"
          className="group"
        >
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            Entrar em Contato
          </a>
        </Button>
      </div>
    </section>
  );
}
