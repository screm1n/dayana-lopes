import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  INSTAGRAM_HANDLE,
  NOME_COMPLETO,
  PROFISSAO,
} from "@/lib/links";
import { GOOGLE_ADS_ID } from "@/lib/analytics";

const ATUALIZADO_EM = "setembro de 2026";

const Privacidade = () => (
  <main className="min-h-screen bg-background py-20 md:py-28">
    <div className="container">
      <div className="mx-auto max-w-2xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Voltar ao site
        </Link>

        <h1 className="mt-8 font-display text-4xl leading-tight text-primary md:text-5xl">
          Política de privacidade
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Atualizada em {ATUALIZADO_EM}.
        </p>

        <div className="mt-12 space-y-10 leading-relaxed text-foreground/80">
          <section>
            <h2 className="font-display text-2xl text-primary">
              Quem é a responsável
            </h2>
            <p className="mt-3">
              Este site é mantido por {NOME_COMPLETO}, {PROFISSAO.toLowerCase()}.
              Para qualquer assunto relacionado aos seus dados, o contato é o
              canal de agendamento informado neste site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-primary">
              O que este site coleta
            </h2>
            <p className="mt-3">
              O site não tem formulário, cadastro ou área de login. Ele não pede,
              não armazena e não processa dados pessoais seus diretamente.
            </p>
            <p className="mt-3">
              Ao clicar nos botões de contato, você é levada para serviços de
              terceiros, e é lá que a conversa acontece:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex gap-3">
                <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>
                  <strong className="font-medium text-primary">
                    Canal de agendamento
                  </strong>
                  , para conversar comigo e marcar uma consulta. As mensagens
                  seguem a política de privacidade do próprio serviço usado.
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>
                  <strong className="font-medium text-primary">Instagram</strong>,
                  se você acessar o perfil {INSTAGRAM_HANDLE} pelo link.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-primary">
              Medição de anúncios
            </h2>
            {GOOGLE_ADS_ID ? (
              <p className="mt-3">
                Este site usa o Google Ads para medir a eficácia dos anúncios.
                Quando alguém clica no botão de contato, o Google registra esse
                clique como uma conversão. Esse registro usa cookies e
                identificadores do navegador, e me mostra apenas números
                agregados: quantas pessoas clicaram e vindas de quais anúncios.
                Não recebo nome, telefone nem qualquer dado que te identifique
                por esse caminho. Você pode desativar a personalização de
                anúncios nas{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-2"
                >
                  configurações do Google
                </a>
                .
              </p>
            ) : (
              <p className="mt-3">
                No momento este site não usa cookies de publicidade nem
                ferramentas de análise de tráfego. Nenhum comportamento seu na
                página é registrado.
              </p>
            )}
          </section>

          <section>
            <h2 className="font-display text-2xl text-primary">
              Sigilo do atendimento
            </h2>
            <p className="mt-3">
              Tudo que você compartilhar comigo em consulta, incluindo dados de
              saúde, histórico alimentar, peso e exames, é protegido pelo sigilo
              profissional previsto no Código de Ética da profissão. Esses
              dados nunca são usados para publicidade e não são compartilhados
              com ninguém sem a sua autorização expressa.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-primary">Seus direitos</h2>
            <p className="mt-3">
              Pela Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode
              pedir a qualquer momento para saber quais dados seus eu tenho,
              corrigi-los ou apagá-los. É só me chamar pelo canal de contato
              informado neste site que eu resolvo.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-primary">Mudanças</h2>
            <p className="mt-3">
              Se esta política mudar, a data no topo da página é atualizada. Vale
              sempre a versão publicada aqui.
            </p>
          </section>
        </div>

        <Link
          to="/"
          className="mt-14 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Voltar ao site
        </Link>
      </div>
    </div>
  </main>
);

export default Privacidade;
