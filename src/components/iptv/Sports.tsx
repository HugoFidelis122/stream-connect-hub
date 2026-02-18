export default function Sports() {
  const sports = [
    { emoji: "⚽", name: "Futebol" },
    { emoji: "🏀", name: "NBA" },
    { emoji: "🥊", name: "Lutas" },
    { emoji: "🎾", name: "Tênis" },
    { emoji: "🏎️", name: "Fórmula 1" },
    { emoji: "🏆", name: "Campeonatos" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-card border border-border rounded-3xl p-8 sm:p-12 overflow-hidden">
          {/* Red glow background */}
          <div className="absolute inset-0 opacity-10"
            style={{ background: "radial-gradient(ellipse at bottom left, hsl(0 85% 50%), transparent 60%)" }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* Visual */}
            <div className="flex justify-center order-last lg:order-first">
              <div className="relative w-72 h-72 rounded-3xl bg-gradient-to-br from-primary/20 to-orange-500/20 border border-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-4">⚽</div>
                  <div className="text-2xl font-black text-foreground">Esportes</div>
                  <div className="text-sm text-muted-foreground mt-2">Ao vivo, sem mensalidades extras</div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block bg-primary/20 text-primary text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
                Esportes & Jogos
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-foreground leading-tight mb-6">
                O melhor do futebol e{" "}
                <span className="gradient-red-text">esportes!</span> 🏆
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Transmissões de <strong className="text-foreground">futebol, NBA, lutas</strong> e muito mais —{" "}
                <strong className="text-primary">sem mensalidades extras</strong>.
                Assista seus times favoritos e os maiores campeonatos do mundo em alta qualidade.
              </p>

              <div className="grid grid-cols-3 gap-3">
                {sports.map((sport) => (
                  <div
                    key={sport.name}
                    className="flex flex-col items-center gap-2 bg-secondary rounded-xl p-3 text-center"
                  >
                    <span className="text-2xl">{sport.emoji}</span>
                    <span className="text-xs font-medium text-foreground">{sport.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
