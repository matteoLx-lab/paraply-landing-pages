# Gabi Meraki · Imersão Primeira Porcelana

Recriação da página `metodomeraki.com.br/imersao-primeira-porcelana/` dentro do pipeline automatizado (Next.js + Vercel). Copy e estrutura foram migradas fielmente da página no ar; layout/paleta são um ponto de partida — ajustar pra bater com a identidade visual real da Gabi Meraki antes de ativar em produção.

## Pendências antes de ir ao ar

- [ ] `lib/content.ts` → `CHECKOUT_URL`: colocar o link real de pagamento (hoje é placeholder)
- [ ] `lib/content.ts` → `SUPPORT_URL`: colocar o link real de suporte (WhatsApp/outro)
- [ ] Substituir os 3 `ImagePlaceholder` por fotos reais (kit de materiais, depoimento da aluna, foto da Gabi) — puxar do Drive da Paraply
- [ ] Confirmar se `pricing.scarcityLabel` ("70% dos ingressos vendidos") deve ficar fixo ou vir de uma contagem real
- [ ] Paleta em `app/globals.css` (tons terracota/dourado) é uma estimativa da identidade visual — validar com o brandbook real, se existir
- [ ] Criar `/politica-de-privacidade` e `/termos-de-uso` (hoje o footer linka pra rotas que ainda não existem)
- [ ] Pixel Meta + GA4/GTM: ainda não instalados nesta página

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
