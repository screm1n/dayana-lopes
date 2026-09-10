# Template de landing page

Base para as landings de profissionais autônomos (nutri, psi, etc).
Vite + React + TypeScript + Tailwind.

## Como começar um projeto novo

```bash
cd "C:/Users/octav/OneDrive/Documents/Claude"
cp -r _template-landing NOME-DO-PROJETO
cd NOME-DO-PROJETO
npm install
npm run dev
```

## O que preencher

| Onde | O quê |
| --- | --- |
| `src/lib/links.ts` | Nome, profissão, registro do conselho, cidade, WhatsApp, Instagram |
| `src/index.css` | Paleta (bloco `:root`), tirada de uma foto ou do Instagram do cliente |
| `tailwind.config.ts` | Fontes (`display` para títulos, `sans` para corpo) |
| `index.html` | Título, descrição, Open Graph, schema.org |
| `public/` | `perfil.png` e as fotos do espaço |
| Componentes | Copy de cada seção |

## Já vem resolvido

- **Botão flutuante de WhatsApp** que aparece depois do hero
- **Conversão do Google Ads** no clique de qualquer link de WhatsApp: preencher
  `GOOGLE_ADS_ID` e `GOOGLE_ADS_CONVERSAO` em `src/lib/analytics.ts`. Vazio =
  nenhum script do Google carrega.
- **Política de privacidade** em `/privacidade`, com link no rodapé. A seção de
  anúncios se adapta conforme o Google Ads esteja configurado.
- **Placeholders de imagem** marcados "Pendente" que somem sozinhos quando o
  arquivo real aparece em `public/`.
- **Revelação no scroll** (classe `.revela`), respeitando `prefers-reduced-motion`.
- `tailwind.config.ts` com `<alpha-value>` nas cores (sem isso, `bg-primary/70`
  é silenciosamente ignorado).
- `netlify.toml` com `from = "/*"` (com `/**` as rotas dão 404).

## Antes de entregar

- [ ] Testar uma URL inexistente: deve cair na página NotFound, não no 404 do Netlify
- [ ] Conferir no celular (o hero empilha título, foto, texto, botões)
- [ ] Otimizar as fotos (foto de celular vem com 5 MB e trava no 4G)
- [ ] Confirmar que os valores/preços NÃO estão na página, se o conselho da
      categoria desaconselhar (CFP e CFN desaconselham)
