import { Film, Tv, MessageCircle, Clock, Gift, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Film,
    emoji: "🎬",
    title: "Vasto Catálogo de Filmes e Séries",
    description: "Milhares de títulos nacionais e internacionais disponíveis sob demanda em qualidade HD, FullHD e 4K.",
  },
  {
    icon: Tv,
    emoji: "📺",
    title: "Canais HD, FullHD e 4K",
    description: "Canais fechados e abertos com a melhor qualidade de imagem. Futebol, notícias, entretenimento e muito mais.",
  },
  {
    icon: MessageCircle,
    emoji: "💬",
    title: "Grupo Exclusivo no WhatsApp",
    description: "Acesso ao grupo VIP de clientes no WhatsApp com avisos, novidades e suporte direto.",
  },
  {
    icon: Clock,
    emoji: "🕐",
    title: "Suporte 24 Horas",
    description: "Nossa equipe está disponível 24h por dia, 7 dias por semana para resolver qualquer dúvida.",
  },
  {
    icon: Gift,
    emoji: "🆓",
    title: "Teste IPTV Grátis",
    description: "Antes de assinar, experimente gratuitamente e veja por si mesmo a qualidade do serviço.",
  },
  {
    icon: MapPin,
    emoji: "📍",
    title: "Assista em Qualquer Lugar",
    description: "Acesse o conteúdo de qualquer lugar do mundo, em qualquer dispositivo com internet.",
  },
];

export default function Benefits() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="beneficios" className="py-20 px-4 sm:px-6 lg:px-8 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-primary/20 text-primary text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Vantagens
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground mb-4">
            Por que escolher o{" "}
            <span className="gradient-red-text">UniTV Free?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tudo que você precisa para o melhor entretenimento em um único aplicativo
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "radial-gradient(ellipse at top left, hsl(0 85% 50% / 0.05) 0%, transparent 70%)" }}
              />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-4 text-xl">
                  {benefit.emoji}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
