import { Check, Zap, Crown } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WA_LINK = "https://api.whatsapp.com/send/?phone=5561984016006&text=Ol%C3%A1%2C+eu+gostaria+de+saber+mais+sobre+o+aplicativo+UniTV+Free&type=phone_number&app_absent=0";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const plans = [
  {
    tag: null,
    tagColor: "",
    icon: Zap,
    label: "VITALÍCIO",
    subtitle: "1 APLICATIVO",
    originalPrice: "R$ 149,00",
    price: "102",
    cents: "00",
    highlight: false,
    features: [
      "Acesso vitalício — pague uma vez",
      "TV ao vivo com canais HD e 4K",
      "Filmes e séries sob demanda",
      "Conteúdo Kids incluído",
      "Esportes ao vivo",
      "Suporte 24 horas",
      "1 dispositivo simultâneo",
    ],
  },
  {
    tag: "MAIS VENDIDO",
    tagColor: "bg-primary",
    icon: Crown,
    label: "VITALÍCIO",
    subtitle: "2 APLICATIVOS",
    originalPrice: "R$ 219,00",
    price: "157",
    cents: "00",
    highlight: true,
    features: [
      "Acesso vitalício — pague uma vez",
      "TV ao vivo com canais HD e 4K",
      "Filmes e séries sob demanda",
      "Conteúdo Kids incluído",
      "Esportes ao vivo",
      "Suporte 24 horas",
      "2 dispositivos simultâneos",
      "Grupo VIP no WhatsApp",
    ],
  },
];

export default function Plans() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="planos" className="section-alt py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-primary/20 text-primary text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Planos e Preços
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground mb-4">
            ESCOLHA O{" "}
            <span className="gradient-red-text">MELHOR PLANO</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sem fidelidade. Sem taxas extras. Pagamento único e acesso para sempre.
          </p>
        </motion.div>

        {/* Process steps */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { step: "1", label: "ESCOLHA", desc: "Selecione o plano ideal" },
            { step: "2", label: "PAGUE", desc: "Pagamento seguro via PIX" },
            { step: "3", label: "ASSISTA", desc: "Acesso liberado na hora" },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-black text-lg flex items-center justify-center mx-auto mb-2">
                {s.step}
              </div>
              <div className="text-xs font-black text-foreground uppercase tracking-widest">{s.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{s.desc}</div>
            </div>
          ))}
        </motion.div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.subtitle}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className={`relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? "border-2 border-primary shadow-2xl glow-red"
                  : "border border-border hover:border-primary/40"
              }`}
            >
              {/* Top badge */}
              {plan.tag && (
                <div className={`${plan.tagColor} text-primary-foreground text-xs font-black tracking-widest uppercase text-center py-2`}>
                  {plan.tag}
                </div>
              )}

              {/* Card body */}
              <div className="bg-card p-7 flex flex-col flex-1">
                {/* Icon + Label */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${plan.highlight ? "bg-primary" : "bg-secondary"}`}>
                    <plan.icon className={`w-5 h-5 ${plan.highlight ? "text-primary-foreground" : "text-primary"}`} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest">{plan.label}</div>
                    <div className="text-lg font-black text-foreground">{plan.subtitle}</div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-1">
                  <span className="text-muted-foreground text-sm line-through">{plan.originalPrice}</span>
                </div>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-muted-foreground font-bold text-base">R$</span>
                  <span className="text-6xl font-black text-foreground leading-none">{plan.price}</span>
                  <span className="text-xl font-bold text-muted-foreground mb-1">,{plan.cents}</span>
                </div>

                {/* One-time payment pill */}
                <div className="inline-flex items-center gap-1.5 bg-primary/15 border border-primary/30 text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-6 self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  PAGAMENTO ÚNICO — VITALÍCIO
                </div>

                {/* Divider */}
                <div className="border-t border-border mb-5" />

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-whatsapp flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 font-black text-sm px-6 py-4 rounded-xl transition-all duration-200 shadow-lg uppercase tracking-wider w-full ${
                    plan.highlight
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-whatsapp hover:bg-whatsapp-dark text-white"
                  }`}
                >
                  <WaIcon />
                  CONTRATAR VIA WHATSAPP
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          className="mt-10 text-center bg-card border border-border rounded-2xl p-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-3xl mb-3">🛡️</div>
          <h3 className="font-black text-foreground text-lg mb-2">Garantia Incondicional de 7 dias</h3>
          <p className="text-muted-foreground text-sm">
            O código de defesa consumidor (Art. 49) garante 7 dias para solicitar reembolso em caso de insatisfação.
            Confiamos tanto na qualidade que oferecemos{" "}
            <strong className="text-foreground">garantia incondicional!</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
