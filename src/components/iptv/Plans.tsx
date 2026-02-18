import { Check, Star } from "lucide-react";

const WA_LINK = "https://api.whatsapp.com/send/?phone=5561984016006&text=Ol%C3%A1%2C+eu+gostaria+de+saber+mais+sobre+o+aplicativo+UniTV+Free&type=phone_number&app_absent=0";

const plans = [
  {
    name: "Vitalício",
    subtitle: "1 aplicativo",
    price: "102",
    cents: "00",
    highlight: false,
    badge: null,
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
    name: "Vitalício",
    subtitle: "2 aplicativos",
    price: "157",
    cents: "00",
    highlight: true,
    badge: "⭐ Mais Vendido",
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
  return (
    <section id="planos" className="section-alt py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block bg-primary/20 text-primary text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Planos e Preços
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground mb-4">
            ESCOLHA O{" "}
            <span className="gradient-red-text">MELHOR PLANO</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Não perca mais tempo com listas que só travam. Opte pelo UniTV Free —
            aplicativo próprio e <strong className="text-foreground">sem mensalidades!</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.subtitle}
              className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? "bg-primary/10 border-primary shadow-2xl glow-red scale-105"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-black text-sm px-6 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <div className="text-muted-foreground text-sm font-medium uppercase tracking-widest mb-1">
                  {plan.name}
                </div>
                <h3 className="text-2xl font-black text-foreground">{plan.subtitle}</h3>
              </div>

              <div className="flex items-end gap-1 mb-6">
                <span className="text-muted-foreground text-lg font-bold">R$</span>
                <span className="text-5xl font-black text-foreground leading-none">{plan.price}</span>
                <span className="text-xl font-bold text-muted-foreground mb-1">,{plan.cents}</span>
              </div>

              <div className="text-xs text-primary font-bold uppercase tracking-widest bg-primary/10 rounded-lg px-3 py-2 mb-6 text-center">
                💎 Pagamento único — Acesso vitalício
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-whatsapp flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-black text-base px-6 py-4 rounded-xl transition-all duration-200 shadow-lg uppercase tracking-wide w-full"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                CONTRATAR VIA WHATSAPP
              </a>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-10 text-center bg-card border border-border rounded-2xl p-6 max-w-2xl mx-auto">
          <div className="text-3xl mb-3">🛡️</div>
          <h3 className="font-black text-foreground text-lg mb-2">Garantia Incondicional de 7 dias</h3>
          <p className="text-muted-foreground text-sm">
            O código de defesa consumidor (Art. 49) garante 7 dias para solicitar reembolso em caso de insatisfação.
            Confiamos tanto na qualidade que oferecemos <strong className="text-foreground">garantia incondicional!</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
