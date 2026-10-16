# PL01 · Respostas

## Exercício 3 · JSX partido

| # | Erro encontrado | Correcção |
|---|---|---|
| 1 | Usei `class`, mas no JSX isso não funciona porque `class` já é uma palavra do JavaScript | Troquei para `className` |
| 2 | O `return` tinha 3 elementos soltos e o JSX só aceita um "pai" | Meti tudo dentro de `<> ... </>` |
| 3 | O `<img>` estava aberto e o JSX obriga a fechar todas as tags | Fechei com `<img ... />` |
| 4 | Aparecia escrito "nome" em vez de "Daniane". Este não dava erro, só se via no navegador | Pus a variável entre chavetas: `{nome}` |

## Exercício 6 · Erros de tipo da Loja

Achei que ia dar 3 erros e deu 3.

| Linha | Código do erro | O que significa, por palavras minhas | Correcção |
|---|---|---|---|
| 8 | TS2322 | O `preco` tinha de ser número, mas pus texto (`'49.90'` com aspas) | Tirei as aspas: `preco: 49.90` |
| 9 | TS2322 | O `emStock` tinha de ser `true`/`false`, mas pus o texto `'sim'` | Troquei por `emStock: true` |
| 17 | TS2345 | A função `precoComIva` espera um número e eu passei o `nome`, que é texto | Passei `produto.preco` e usei `.toFixed(2)` para mostrar 2 casas decimais |

**Porque é que o `npm run dev` continuava a mostrar a página?**
Porque o `npm run dev` só converte o TypeScript em JavaScript e não verifica os tipos. Quem verifica é o `tsc`, que só corre no `npm run build`.

## git log --oneline

