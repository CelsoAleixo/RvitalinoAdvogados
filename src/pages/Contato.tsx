import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, CheckCircle, Clock, Shield, MessageCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_LINK = "https://wa.me/5511940449696?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado.";

export default function Contato() {
  const {
    toast
  } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve."
    });
  };
  if (isSubmitted) {
    return <Layout>
        <PageHero title="Contato" description="Entre em contato conosco para uma consulta jurídica." breadcrumb={[{
        label: "Contato"
      }]} />
        <section className="section-padding">
          <div className="container-site">
            <div className="max-w-xl mx-auto text-center">
              <div className="bg-secondary rounded-lg p-12">
                <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6" />
                <h2 className="font-serif text-2xl mb-4">Mensagem Enviada!</h2>
                <p className="text-muted-foreground mb-8">
                  Obrigado pelo seu contato. Nossa equipe responderá em breve.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>
                  Enviar nova mensagem
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>;
  }
  return <Layout>
      <PageHero title="Contato" description="Entre em contato conosco para uma consulta jurídica." breadcrumb={[{
      label: "Contato"
    }]} />

      {/* Quick Contact Banner */}
      <section className="bg-accent/10 border-b border-accent/20 py-4">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-2.5 h-2.5 bg-accent rounded-full animate-ping opacity-75" />
                <span className="relative w-2.5 h-2.5 bg-accent rounded-full" />
              </div>
              <span className="text-sm font-medium">Atendimento disponível agora</span>
              <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>Resposta em minutos via WhatsApp</span>
              </div>
            </div>
            <Button asChild size="sm" className="group">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Resposta Imediata
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl mb-6">Envie sua mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
                    <Input id="name" name="name" required placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(11) 99999-9999" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" name="email" type="email" required placeholder="seu@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea id="message" name="message" required placeholder="Descreva brevemente sua necessidade jurídica..." rows={6} />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button type="submit" size="lg" disabled={isLoading} className="flex-1">
                    {isLoading ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </div>
                
                {/* Trust indicators below form */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-accent" />
                    <span>Sigilo garantido</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>Resposta em 24h</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span>OAB Regular</span>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <h2 className="font-serif text-2xl mb-6">Informações de Contato</h2>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">E-mail</h4>
                    <a href="mailto:contato@rvitalinoadvogados.com.br" className="text-muted-foreground hover:text-foreground transition-colors">
                      contato@rvitalinoadvogados.com.br
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Telefone</h4>
                    <a href="tel:+551156100812" className="text-muted-foreground hover:text-foreground transition-colors">
                      +55 (11) 5610-0812
                    </a>
                  </div>
                </div>

                {/* Brazil Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Endereço Brasil</h4>
                    <p className="text-muted-foreground">
                      Rua Manoel de Oliveira, 269, Sala 412, Torre 1,<br />
                      Patteo Mogilar-Sky Mall,<br />
                      Mogi das Cruzes-SP, CEP: 08773-130
                    </p>
                  </div>
                </div>

                {/* Portugal Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Endereço Comercial Portugal</h4>
                    <p className="text-muted-foreground font-medium text-left">Avenida da Liberdade, nº 706 – 1º andar, lado esquerdo Código Postal 4710-249, Braga – Distrito de Braga Portugal</p>
                  </div>
                </div>

                {/* Portugal WhatsApp */}
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Tefone Portugal</h4>
                    <a href="https://wa.me/351910385021?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20Representante%20Uni%C3%A3o%20Europeia." target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      +351 910 385 021
                    </a>
                  </div>
                </div>

                {/* Portugal Email */}
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">E-mail Portugal</h4>
                    <a href="mailto:arthur@rvitalinoadvogados.com.br" className="text-muted-foreground hover:text-foreground transition-colors">
                      arthur@rvitalinoadvogados.com.br
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-10 pt-8 border-t border-border">
                <h4 className="font-medium mb-3">Horário de Atendimento</h4>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 9h às 18h<br />
                  Sábado: Mediante agendamento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
}