import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import rodrigoVitalinoBrasilia from "@/assets/rodrigo-vitalino-brasilia.png";
export function ManifestoModal() {
  const [open, setOpen] = useState(false);
  return <>
      <button type="button" onClick={() => setOpen(true)} aria-label="Abrir manifesto: Não existe por acaso, nem coincidência" style={{
      WebkitTapHighlightColor: 'rgba(0,0,0,0.1)',
      touchAction: 'manipulation'
    }} className="inline-flex items-center gap-2 min-h-[56px] bg-accent/10 border border-accent/30 rounded-full text-accent hover:bg-accent/20 active:bg-accent/30 active:scale-95 transition-all cursor-pointer font-medium select-none py-px px-4 text-base">
        <span className="w-2 h-2 bg-accent rounded-full animate-pulse flex-shrink-0" aria-hidden="true" />
        <span>"Não existe por acaso, nem coincidência"</span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-background border-accent/20">
          <ScrollArea className="max-h-[90vh]">
            <div className="p-6 md:p-8">
              {/* Header with Photo */}
              <DialogHeader className="mb-6">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-accent/30 shadow-lg">
                      <img src={rodrigoVitalinoBrasilia} alt="Dr. Rodrigo Vitalino" className="w-full h-full object-cover object-top" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <div className="text-center md:text-left">
                    <DialogTitle className="font-serif text-2xl md:text-3xl text-accent mb-2">
                      "Não Existe por Acaso, Nem Coincidência"
                    </DialogTitle>
                    <p className="text-muted-foreground text-sm">
                      Um Manifesto Filosófico-Jurídico
                    </p>
                    <p className="text-foreground font-medium mt-2">
                      Dr. Rodrigo Vitalino
                    </p>
                  </div>
                </div>
              </DialogHeader>

              {/* Content */}
              <div className="space-y-6 text-muted-foreground leading-relaxed">
              {/* Introdução */}
              <div className="bg-secondary/50 rounded-lg p-4 md:p-6 border-l-4 border-accent mx-0">
                <p className="italic text-foreground md:text-base leading-relaxed text-base text-justify">
                  Há mais de dois mil anos, Aristóteles nos ensinou que tudo o que existe possui uma causa final — 
                  um propósito. Nada ocorre por mero acaso; cada ação, cada escolha, cada caminho tem uma razão de ser. 
                  É com essa convicção que o escritório Rodrigo Vitalino Advogados construiu sua trajetória: 
                  não por coincidência, mas por vocação.
                </p>
              </div>

                {/* Valores Jurídicos */}
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-accent" />
                    Valores Jurídicos
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-card rounded-lg p-4 border border-border">
                      <h4 className="font-semibold text-accent mb-2">Justiça</h4>
                      <p className="text-sm">
                        Não como abstração, mas como equilíbrio concreto entre direitos e deveres. 
                        A justiça que buscamos não é cega — ela enxerga as nuances de cada caso.
                      </p>
                    </div>
                    <div className="bg-card rounded-lg p-4 border border-border">
                      <h4 className="font-semibold text-accent mb-2">Responsabilidade</h4>
                      <p className="text-sm">
                        Cada palavra proferida, cada documento assinado, cada conselho dado carrega o peso 
                        da confiança depositada. Não há espaço para negligência onde há compromisso.
                      </p>
                    </div>
                    <div className="bg-card rounded-lg p-4 border border-border">
                      <h4 className="font-semibold text-accent mb-2">Liberdade</h4>
                      <p className="text-sm">
                        O Direito existe para garantir a autonomia do indivíduo frente ao Estado e à sociedade. 
                        Defendemos a liberdade como fundamento de uma vida digna.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Valores Humanos */}
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-accent" />
                    Valores Humanos
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-card rounded-lg p-4 border border-border">
                      <h4 className="font-semibold text-accent mb-2">Dignidade</h4>
                      <p className="text-sm">
                        Cada cliente que nos procura traz consigo uma história única. Tratamos cada pessoa 
                        com o respeito que sua singularidade merece, porque a dignidade humana é inegociável.
                      </p>
                    </div>
                    <div className="bg-card rounded-lg p-4 border border-border">
                      <h4 className="font-semibold text-accent mb-2">Solidariedade</h4>
                      <p className="text-sm">
                        Compreendemos que nossas ações reverberam além do processo judicial. 
                        O que fazemos por um cliente impacta famílias, empresas e comunidades inteiras.
                      </p>
                    </div>
                    <div className="bg-card rounded-lg p-4 border border-border">
                      <h4 className="font-semibold text-accent mb-2">Respeito</h4>
                      <p className="text-sm">
                        Ouvir antes de falar. Entender antes de agir. O respeito é o fundamento de toda 
                        relação duradoura entre advogado e cliente.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Valores Sociais */}
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-accent" />
                    Valores Sociais
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-card rounded-lg p-4 border border-border">
                      <h4 className="font-semibold text-accent mb-2">Equidade</h4>
                      <p className="text-sm">
                        Tratar os desiguais na medida de sua desigualdade é o caminho para uma sociedade 
                        verdadeiramente justa. Não buscamos igualdade formal, mas material.
                      </p>
                    </div>
                    <div className="bg-card rounded-lg p-4 border border-border">
                      <h4 className="font-semibold text-accent mb-2">Ordem</h4>
                      <p className="text-sm">
                        Não a ordem que oprime, mas aquela que organiza e harmoniza. O Direito é instrumento 
                        de paz social, não de dominação.
                      </p>
                    </div>
                    <div className="bg-card rounded-lg p-4 border border-border">
                      <h4 className="font-semibold text-accent mb-2">Progresso</h4>
                      <p className="text-sm">
                        Acreditamos que o Direito deve evoluir com a sociedade. Estamos comprometidos com 
                        a construção de um futuro mais justo e sustentável.
                      </p>
                    </div>
                  </div>
                </div>

              {/* Conclusão */}
              <div className="bg-secondary/50 rounded-lg p-4 md:p-6 border-l-4 border-accent mt-8 mx-0">
                <p className="text-foreground font-medium mb-4 text-sm md:text-base leading-relaxed text-center">
                  Esta é a nossa causa final, nosso propósito aristotélico: ser instrumento de justiça, 
                  guardião de direitos e parceiro na construção de um mundo mais equânime.
                </p>
                <p className="text-foreground italic text-sm md:text-base leading-relaxed text-center">
                  Não existe por acaso, nem coincidência. Existe por vocação, por propósito e por compromisso 
                  inabalável com aqueles que confiam em nosso trabalho.
                </p>
              </div>

                {/* Signature */}
                <div className="text-right pt-4 border-t border-border">
                  <p className="font-serif text-lg text-foreground">Rodrigo Vitalino Advogados</p>
                  <p className="text-sm text-muted-foreground">Desde 2008</p>
                </div>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>;
}