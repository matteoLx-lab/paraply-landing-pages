# Gabi Meraki · Imersão Primeira Porcelana

Recriação da página `metodomeraki.com.br/imersao-primeira-porcelana/` dentro do pipeline automatizado (Next.js + Vercel). Copy e estrutura foram migradas fielmente da página no ar; layout/paleta são um ponto de partida — ajustar pra bater com a identidade visual real da Gabi Meraki antes de ativar em produção.

## Pendências antes de ir ao ar

Resolvido automaticamente (puxado do Meta Ads e da página no ar):

- [x] `CHECKOUT_URL` → `https://clkdmg.site/pay/imersaoprimeiraporcelana` (extraído da página ao vivo)
- [x] `SUPPORT_URL` → `https://lembrete.gabimeraki.com.br/suporte-imersao-primeira-porcelana` (extraído da página ao vivo)
- [x] `META_PIXEL_ID` → `2007418282655049` ("[Pixel Específico] Gabriela Zancopé", conta Meraki CURSOS — é o único pixel dessa conta que disparou hoje junto com os anúncios ativos da campanha; instalado em `app/layout.tsx` via `next/script`)
- [x] Foto do kit de materiais (`public/images/kit-meraki.png`) e foto de aula ao vivo no depoimento (`public/images/aula-ao-vivo.png`) , e agora também a foto da Gabi contando a história dela (`public/images/gabi-historia.png`, cena "Tudo começou na cozinha da minha avó") — vieram de `meraki-criativos-jul26/lote2-png/` (criativos já aprovados da campanha ativa). São recortes de anúncio (têm texto sobreposto do próprio criativo), não fotos limpas — funcionam pro piloto, mas vale trocar por versões sem overlay se o design for revisado. A identidade da Gabi na foto foi confirmada pelo Matteo (é a mais nova, loira e alta).

Ainda pendente:

- [ ] Confirmar se `pricing.scarcityLabel` ("70% dos ingressos vendidos") deve ficar fixo ou vir de uma contagem real
- [ ] Paleta em `app/globals.css` (tons terracota/dourado) é uma estimativa da identidade visual — validar com o brandbook real, se existir
- [ ] Criar `/politica-de-privacidade` e `/termos-de-uso` (hoje o footer linka pra rotas que ainda não existem)
- [ ] GA4/GTM: não encontrei um container configurado nas contas verificadas — só o Pixel Meta foi instalado

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em [http://localhost:3000](http://localhost:3000).

## Onde editar

- **Copy, preço, bullets, CTAs, links** → `lib/content.ts` (arquivo único, sem precisar mexer em componente)
- **Layout dos blocos** → `components/sections.tsx`
- **Cores e fontes** → `app/globals.css` (tokens `--background`, `--accent`, etc.) e `app/layout.tsx` (fontes)

## Deploy

Ver instruções gerais no README na raiz do monorepo (`../../README.md`).
