const WA_LINK = "https://api.whatsapp.com/send/?phone=5561984016006&text=Ol%C3%A1%2C+eu+gostaria+de+saber+mais+sobre+o+aplicativo+UniTV+Free&type=phone_number&app_absent=0";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-bg" />
      
      {/* Red overlay grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(hsl(0 85% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(0 85% 50% / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsl(0 85% 50% / 0.4) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 text-sm font-semibold text-primary mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Eleito o melhor serviço IPTV de 2025 🏆
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-foreground leading-tight mb-4">
          CONTEÚDO DE{" "}
          <span className="gradient-red-text">QUALIDADE</span>
          <br />
          PARA TODA{" "}
          <span className="gradient-red-text">FAMÍLIA</span> 🎬
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Quer assistir tudo o que quiser?{" "}
          <span className="text-foreground font-semibold">UniTV Free</span> tem a solução pra você.
          Transforme sua forma de assistir televisão com a melhor qualidade, preços acessíveis e suporte incomparável.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#planos"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-lg glow-red uppercase tracking-wide"
          >
            🎯 QUERO CONHECER OS PLANOS
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-black text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-lg uppercase tracking-wide"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            CONTRATAR VIA WHATSAPP
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-16">
          {[
            { value: "+50mil", label: "Clientes satisfeitos" },
            { value: "4K", label: "Qualidade máxima" },
            { value: "24h", label: "Suporte disponível" },
            { value: "100%", label: "Vitalício" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black gradient-red-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* App Interface Preview */}
        <div className="mt-14 relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl glow-red">
            <img
              src="/interface-unitv.webp"
              alt="Interface do UniTV Free"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary/90 text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
            Interface real do aplicativo
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Role para baixo</span>
        <div className="w-5 h-8 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
