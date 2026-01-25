import { Shield, Award, Users, Clock, Phone, CheckCircle } from "lucide-react";
interface TrustIndicatorsProps {
  variant?: "light" | "dark";
  compact?: boolean;
}
const indicators = [{
  icon: Shield,
  title: "OAB Ativo",
  description: "Registro Regular"
}, {
  icon: Award,
  title: "17+ Anos",
  description: "Experiência Consolidada"
}, {
  icon: Users,
  title: "500+ Clientes",
  description: "Empresas Atendidas"
}, {
  icon: Clock,
  title: "Resposta Rápida",
  description: "Em até 24h"
}];
export function TrustIndicators({
  variant = "light",
  compact = false
}: TrustIndicatorsProps) {
  const isDark = variant === "dark";
  if (compact) {
    return <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {indicators.map((item, index) => <div key={index} className={`flex items-center gap-2 ${isDark ? "text-white/70" : "text-muted-foreground"}`}>
            <item.icon className={`w-4 h-4 ${isDark ? "text-accent" : "text-accent"}`} />
            <span className="text-sm font-medium">{item.title}</span>
          </div>)}
      </div>;
  }
  return;
}