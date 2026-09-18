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
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <div className="revela">
          <p className="rotulo">Contato</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-primary md:text-5xl">
            Vamos começar
            <span className="block italic">com autonomia?</span>
          </h2>
          <span className="mt-8 fio" />
          <p className="mt-7 max-w-md text-lg leading-relaxed text-foreground/75">
            Entre em contato para tirar dúvidas, entender o acompanhamento e
            agendar sua consulta.
          </p>

          <a
            href={LINK_AGENDAMENTO}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground shadow-carta transition-transform hover:scale-[1.03]"
          >
            <MessageCircleHeart className="h-5 w-5" strokeWidth={1.8} />
            Agendar minha consulta
          </a>
        </div>

        <div className="revela rounded-2xl bg-secondary/40 p-8 md:p-10">
          <ul className="divide-y divide-primary/10">
            <li className="pb-6">
              <p className="rotulo">Agendamento</p>
              <a
                href={LINK_AGENDAMENTO}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block font-display text-2xl text-primary transition-colors hover:text-accent"
              >
                {ROTULO_AGENDAMENTO}
              </a>
              <p className="mt-1 text-sm text-muted-foreground">
                Fale comigo e agende agora
              </p>
            </li>

            <li className="py-6">
              <p className="rotulo">Instagram</p>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-2.5 font-display text-2xl text-primary transition-colors hover:text-accent"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.7} aria-hidden />
                {INSTAGRAM_HANDLE}
              </a>
            </li>

            <li className="pt-6">
              <p className="rotulo">Atendimento</p>
              <p className="mt-2 font-display text-2xl leading-tight text-primary">
                {ATENDIMENTO}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Contato;
