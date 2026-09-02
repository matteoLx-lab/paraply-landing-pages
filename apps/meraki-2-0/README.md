# Método Meraki 2.0

Duas landing pages estáticas para as campanhas de avanço de funil da conta
**Meraki CURSOS** (`act_79955182`), campanha `52642011532439`.

| Arquivo | URL | Público do anúncio |
|---|---|---|
| `imersao.html` | `/imersao` | Compradoras da Imersão Primeira Porcelana |
| `clube.html` | `/clube` | Assinantes ativas do Clube da Porcelana |

Não são geradas à mão. O fonte fica no scratchpad da sessão do Claude
(`tpl2.html`, `base_css.html`, `corpo_clube.html`, `img/imgs2.json`) e
`deploy.py` monta o documento final: injeta as imagens em base64, envelopa em
`<!doctype html>` e acrescenta o bloco de rastreio.

## Rastreio

Cada página carrega o pixel `2007418282655049` (*[Pixel Específico] Gabriela
Zancopé*, o mesmo dos conjuntos ativos da conta) com `PageView`, dispara
`InitiateCheckout` no clique de qualquer CTA e, o mais importante, **repassa a
query string da URL para o link do checkout**. Sem isso a UTM do anúncio morre
na landing page e a transação chega no Guru sem `utm_content`, que é
exatamente o buraco que deixa 77% da receita órfã.

As páginas são `noindex,nofollow`: existem só para tráfego pago e não devem
competir com `metodomeraki.com.br` na busca.

## Deploy

Projeto estático, sem build. Da raiz desta pasta:

```
npx vercel login
npx vercel --prod
```

Na primeira vez o CLI pergunta o escopo e o nome do projeto. Diretório de
saída é a própria pasta, sem comando de build.

Pelo painel dá no mesmo: importar o repositório e apontar **Root Directory**
para `apps/meraki-2-0`, framework `Other`.

## Pendente com a Gabi antes de mandar tráfego

- Preço real do 2.0. Está `R$ 1.497` riscado, `12x R$ 99,53` ou `R$ 997` à vista,
  que é só o valor mais pago nos últimos quatro meses, não uma confirmação.
- Nome real do módulo comercial listado na oferta.
- Tempo de acesso (o FAQ está marcado como pendente na própria página).
- Conteúdo dos quatro bônus.
- Link de checkout próprio para o Clube. Os dois arquivos apontam hoje para
  `metodo-meraki-desconto-imersao-primeira-porcelana`, que soa errado para quem
  vem do Clube.
- Nome e foto reais nos depoimentos, hoje assinados como "Aluna do Método Meraki".

## Versao leve (para Lovable ou qualquer host que peca o HTML colado)

`lovable/imersao.html` e `lovable/clube.html` sao as mesmas paginas com as
imagens apontando para o CDN em vez de embutidas em base64: 28 KB cada, em vez
de 1,3 MB. As imagens ficam em `img/` e sao servidas pelo jsDelivr, fixadas no
commit `51299e176b681159fc9be1cae2181ccb55c94996`. Se alguma imagem mudar, o
commit muda e as URLs dentro desses dois arquivos precisam ser regeradas.

Prompts prontos para colar (instrucao + HTML) ficam em `paraply-lp/PROMPT-LOVABLE-*.txt`.
