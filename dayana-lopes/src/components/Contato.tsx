import { ArrowUpRight } from "lucide-react";
import {
  ATENDIMENTO,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  LINK_AGENDAMENTO,
  ROTULO_AGENDAMENTO,
} from "@/lib/links";
import Rotulo from "./Rotulo";

const Contato = () => (
  <section id="contato" className="secao scroll-mt-24 bg-card">
    <div className="container">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="revela">
          <Rotulo numero="07" semFio>
            Contato
          </Rotulo>
          <h2 className="titulo mt-6 text-[2.6rem] md:text-5xl lg:text-[3.4rem]">
            Vamos começar
            <span className="block italic text-accent/85">com autonomia?</span>
          </h2>
          <p className="mt-8 max-w-sm leading-relaxed text-foreground/70">
            Entre em contato para tirar dúvidas, entender o acompanhamento e
            agendar sua consulta.
          </p>

          <a
            href={LINK_AGENDAMENTO}
            target="_blank"
            rel="noopener noreferrer"
            className="botao mt-11"
          >
            Agendar consulta
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden />
          </a>
        </div>

        <ul className="revela lg:pt-4">
          <li className="border-b border-border py-7 first:border-t">
            <p className="rotulo">Agendamento</p>
            <a
              href={LINK_AGENDAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="titulo mt-3 block text-3xl transition-colors hover:text-accent"
            >
              {ROTULO_AGENDAMENTO}
            </a>
          </li>

          <li className="border-b border-border py-7">
            <p className="rotulo">Instagram</p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="titulo mt-3 block text-3xl transition-colors hover:text-accent"
            >
              {INSTAGRAM_HANDLE}
            </a>
          </li>

          <li className="border-b border-border py-7">
            <p className="rotulo">Atendimento</p>
            <p className="titulo mt-3 text-3xl">{ATENDIMENTO}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Contato;
