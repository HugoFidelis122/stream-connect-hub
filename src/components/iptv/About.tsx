import { Tv, Smartphone, Monitor, Wifi, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

export default function About() {
  const { ref, isInView } = useScrollAnimation();

  const devices = [
    { icon: Tv, label: "Smart TV" },
    { icon: Smartphone, label: "Celular / Tablet" },
    { icon: Monitor, label: "Computador" },
  ];

  const highlights = [
    { icon: Wifi, text: "Sinal estável e de alta qualidade" },
    { icon: Shield, text: "Acesso vitalício sem mensalidades" },
    { icon: Star, text: "Eleito melhor IPTV de 2025" },
  ];

  return (
    <section className="section-alt py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="inline-block bg-primary/20 text-primary text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              Sobre o serviço
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-foreground leading-tight mb-6">
              Conteúdo Completo
              <br />
              <span className="gradient-red-text">Para Toda Família!</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              O <strong className="text-foreground">UniTV Free</strong> oferece a você e sua família os conteúdos de
              TV <strong className="text-foreground">completos e em alta definição</strong>. Incluindo todas as categorias
              de <strong className="text-foreground">TV ao vivo (futebol, notícias, Kids, filmes e séries)</strong>.
              Fornecemos <strong className="text-foreground">VOD dos filmes e séries</strong> mais recentes em definição{" "}
              <strong className="text-foreground">4K e UHD</strong>.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Com sinal estável e qualidade incomparável, você pode conectar em sua TV, celular ou computador com facilidade.
              Mais de <strong className="text-foreground">50 mil clientes</strong> já aprovaram!
            </p>

            {highlights.map((h, i) => (
              <motion.div
                key={h.text}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3 mb-3"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <h.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">{h.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Devices */}
          <motion.div
            className="grid grid-cols-1 gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative bg-card border border-border rounded-2xl p-8 text-center overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{
                background: "radial-gradient(ellipse at center, hsl(0 85% 50%) 0%, transparent 70%)"
              }} />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                  <Tv className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-2">UniTV Free APP</h3>
                <p className="text-muted-foreground text-sm mb-6">Disponível em múltiplos dispositivos</p>
                <div className="flex justify-center gap-4">
                  {devices.map((d) => (
                    <div key={d.label} className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                        <d.icon className="w-6 h-6 text-foreground" />
                      </div>
                      <span className="text-xs text-muted-foreground text-center">{d.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h4 className="font-bold text-foreground mb-4 text-center">Aparelhos Compatíveis</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                {["TV Box", "Smart TV (Android)", "Celular Android", "Tablet", "Fire Stick", "iOS (iPhone/iPad)"].map((d) => (
                  <div key={d} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
