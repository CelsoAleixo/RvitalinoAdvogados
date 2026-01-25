import { Shield, Award, Users, Clock, Phone, CheckCircle } from "lucide-react";

interface TrustIndicatorsProps {
  variant?: "light" | "dark";
  compact?: boolean;
}

const indicators = [
  {
    icon: Shield,
    title: "OAB Ativo",
    description: "Registro Regular"
  },
  {
    icon: Award,
    title: "17+ Anos",
    description: "Experiência Consolidada"
  },
  {
    icon: Users,
    title: "500+ Clientes",
    description: "Empresas Atendidas"
  },
  {
    icon: Clock,
    title: "Resposta Rápida",
    description: "Em até 24h"
  }
];

export function TrustIndicators({ variant = "light", compact = false }: TrustIndicatorsProps) {
  const isDark = variant === "dark";
  
  if (compact) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {indicators.map((item, index) => (
          <div 
            key={index} 
            className={`flex items-center gap-2 ${isDark ? "text-white/70" : "text-muted-foreground"}`}
          >
            <item.icon className={`w-4 h-4 ${isDark ? "text-accent" : "text-accent"}`} />
            <span className="text-sm font-medium">{item.title}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`py-8 ${isDark ? "bg-[#0f1c2e]" : "bg-secondary/50"}`}>
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {indicators.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 group"
            >
              <div className={`p-2.5 rounded-lg ${isDark ? "bg-accent/10" : "bg-accent/10"} group-hover:bg-accent/20 transition-colors`}>
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className={`font-semibold text-sm ${isDark ? "text-white" : "text-foreground"}`}>
                  {item.title}
                </div>
                <div className={`text-xs ${isDark ? "text-white/60" : "text-muted-foreground"}`}>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
