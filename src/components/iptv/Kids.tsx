export default function Kids() {
  return (
    <section className="section-alt py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-card border border-border rounded-3xl p-8 sm:p-12 overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 opacity-10"
            style={{ background: "radial-gradient(ellipse at top right, #9333ea, transparent 60%)" }}
          />
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5"
            style={{ background: "radial-gradient(circle, #eab308, transparent)" }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block bg-accent/40 text-accent-foreground text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
                Conteúdo Infantil
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-foreground leading-tight mb-6">
                Diversão para as{" "}
                <span className="gradient-red-text">Crianças!</span> 👶🎠
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Para as crianças, tudo do <strong className="text-foreground">Universo Kids</strong> — filmes,
                séries e programas de TV reunidos em um só lugar. Conteúdo seguro e educativo para toda a família.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Desenhos animados", "Filmes infantis", "Séries educativas", "Programas Kids", "Animes", "Conteúdo seguro"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">★</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Visual placeholder */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-3xl bg-secondary border border-border flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-4">🎠</div>
                  <div className="text-2xl font-black text-foreground">Kids Zone</div>
                  <div className="text-sm text-muted-foreground mt-2">Conteúdo para toda família</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
