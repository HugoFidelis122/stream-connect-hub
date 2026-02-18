import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O que é o UniTV Free?",
    a: "O UniTV Free é um aplicativo de entretenimento que permite assistir TV ao vivo, filmes, séries e conteúdos sob demanda em um só lugar, com ótima qualidade e estabilidade.",
  },
  {
    q: "O UniTV Free é realmente VITALÍCIO?",
    a: "Sim. O UniTV Free oferece acesso vitalício sem mensalidades, com pagamento único — comprou é seu para sempre. Sem cobranças mensais ou surpresas no cartão.",
  },
  {
    q: "Em quais dispositivos posso usar o UniTV Free?",
    a: "O UniTV Free é compatível com TV Box, Smart TV (Android), celular Android, tablet e Fire Stick, oferecendo liberdade total para assistir onde quiser.",
  },
  {
    q: "Quais conteúdos posso assistir?",
    a: "Você terá acesso a diversos canais de TV ao vivo (futebol, notícias, kids, filmes e séries), além de VOD com os filmes e séries mais recentes em definição 4K e UHD.",
  },
  {
    q: "Preciso de internet para usar o UniTV Free?",
    a: "Sim. É necessário ter uma conexão com a internet estável para assistir aos conteúdos sem travamentos. Recomendamos pelo menos 10MB de velocidade para HD e 25MB para 4K.",
  },
  {
    q: "Como funciona a ativação do UniTV Free?",
    a: "A ativação é simples e rápida. Após a compra via WhatsApp, você recebe as instruções para liberar o acesso imediatamente, sem burocracia.",
  },
  {
    q: "Como funciona o teste grátis?",
    a: "Entre em contato via WhatsApp e solicite seu teste grátis. Nossa equipe enviará as credenciais de acesso para você experimentar antes de adquirir.",
  },
  {
    q: "Quais formas de pagamento?",
    a: "Aceitamos Pix, cartão de crédito e débito. Entre em contato via WhatsApp para mais detalhes sobre as formas de pagamento disponíveis.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block bg-primary/20 text-primary text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Dúvidas Frequentes
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-foreground mb-4">
            Perguntas{" "}
            <span className="gradient-red-text">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Respondemos as principais dúvidas sobre o UniTV Free
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/40 transition-all duration-200"
            >
              <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5 hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
