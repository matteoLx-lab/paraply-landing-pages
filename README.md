# Paraply · Landing Pages

Monorepo de landing pages dos clientes de tráfego pago da Paraply. Cada cliente é um app Next.js independente em `apps/`, todos compartilhando o mesmo stack e o mesmo fluxo de deploy — a automação é: **editar copy → `git push` → ar em produção**, sem passo manual de build ou upload.

## Stack

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Vercel. Sem WordPress, sem page builder — cada página é código versionado.

## Estrutura

```
apps/
  gabi-meraki-imersao/     ← piloto: Imersão Primeira Porcelana (metodomeraki.com.br)
    app/page.tsx           ← composição das seções
    lib/content.ts         ← toda a copy da página (título, preço, bullets, links de checkout)
    components/sections.tsx ← os blocos visuais (Hero, Preço, Depoimento, etc.)
```

Cada landing page nova vira uma pasta nova em `apps/<cliente-oferta>/`, criada a partir da mesma base.

## Editar uma página existente

Praticamente toda mudança de copy, preço ou link acontece em um único arquivo:

```
apps/<cliente>/lib/content.ts
```

Não precisa mexer em `components/` pra trocar texto, preço ou CTA. `git push` na branch conectada à Vercel já sobe a mudança pro ar.

## Adicionar um cliente novo

1. `cd apps && npx create-next-app@latest <nome-cliente> --typescript --tailwind --app --no-src-dir --import-alias "@/*" --eslint --use-npm`
2. Copiar `gabi-meraki-imersao/app/globals.css`, `lib/content.ts`, `components/` como ponto de partida e trocar cores/fontes/copy pro novo cliente.
3. No Vercel: **New Project → Import** o mesmo repo → em *Root Directory* apontar pra `apps/<nome-cliente>` → Deploy.
4. A partir daí, todo `git push` que tocar nessa pasta gera um deploy novo automaticamente.

## Deploy (configuração única por app, feita 1x)

1. Repo já no GitHub (ver instruções que o Claude te passou na configuração inicial).
2. Vercel → **Add New → Project** → importar o repo.
3. Em **Root Directory**, apontar pro app específico (ex: `apps/gabi-meraki-imersao`) — é isso que permite ter vários clientes no mesmo repo, cada um como projeto Vercel separado.
4. Framework Preset: Next.js (detecta sozinho).
5. Deploy. A partir daqui, qualquer push na branch `main` gera deploy automático em produção; pushes em outras branches geram uma URL de preview pra validar antes de ir pro ar.

## Pendências antes de ativar o piloto (Gabi Meraki)

Ver `apps/gabi-meraki-imersao/README.md`.
