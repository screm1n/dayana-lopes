import { Instagram, MessageCircleHeart } from "lucide-react";
import {
  ATENDIMENTO,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  LINK_AGENDAMENTO,
  ROTULO_AGENDAMENTO,
} from "@/lib/links";

const Contato = () => (
  <section id="contato" className="scroll-mt-24 bg-card py-24 md:py-32">
    <div className="container">
      <div className="revela mx-auto max-w-2xl text-center">
        <p className="rotulo">Contato</p>
        <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">
          Vamos começar
          <span className="block italic">com autonomia?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-foreground/75">
          Entre em contato para tirar dúvidas, entender o acompanhamento e
          agendar sua consulta.
        </p>
      </div>

      <a
        href={LINK_AGENDAMENTO}
        target="_blank"
        rel="noopener noreferrer"
        className="revela mx-auto mt-12 flex max-w-3xl flex-col items-center gap-6 rounded-2xl bg-primary p-10 text-center text-primary-foreground shadow-carta transition-transform hover:scale-[1.01] md:flex-row md:justify-between md:p-12 md:text-left"
      >
        <div className="flex flex-col items-center gap-5 md:flex-row">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10">
            <MessageCircleHeart className="h-8 w-8" strokeWidth={1.8} />
          </span>
          <div>
            <h3 className="font-display text-3xl md:text-4xl">
              Agendar minha consulta
            </h3>
            <p className="mt-1 text-primary-foreground/80">
              {ROTULO_AGENDAMENTO}
            </p>
          </div>
        </div>
        <span className="rounded-full bg-primary-foreground px-7 py-3.5 font-medium text-primary">
          Agendar agora
        </span>
      </a>

      <div className="mx-auto mt-4 grid max-w-3xl gap-4 sm:grid-cols-2">
        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="revela group flex items-center gap-4 rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-carta"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-primary/10 bg-secondary text-primary">
            <Instagram className="h-5 w-5" strokeWidth={1.8} aria-hidden />
          </span>
          <div>
            <p className="font-display text-xl text-primary">Instagram</p>
            <p className="text-sm text-muted-foreground group-hover:underline">
              {INSTAGRAM_HANDLE}
            </p>
          </div>
        </a>

        <div
          className="revela flex items-center gap-4 rounded-2xl border border-border bg-background p-6"
          style={{ transitionDelay: "80ms" }}
        >
          <div>
            <p className="font-display text-xl text-primary">Atendimento</p>
            <p className="text-sm text-muted-foreground">{ATENDIMENTO}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contato;
