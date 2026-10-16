# Uso de IA · PL01

**Ferramenta:** Claude (Claude Code, no VS Code)

## Para que usei

- **Ex. 1 e 2:** guiou-me passo a passo na criação do projecto, na limpeza do modelo e na instalação do Tailwind v4. Ajudou-me a perceber erros (estava na pasta errada no terminal, ficheiro não guardado, um ponto final a mais na classe `text-sky-700.`).
- **Git/GitHub:** explicou-me que os commits ficam locais até fazer `git push` e ajudou-me a ligar o projecto ao repositório no GitHub.
- **Ex. 3 e 6:** explicou-me os erros do build (porque um `<img>` aberto gera vários erros em cadeia) e ajudou-me a escrever as tabelas.
- **Ex. 4 a 9:** por falta de tempo, pedi-lhe o código completo, que colei e testei no navegador e com `npm run build`.

## O que verifiquei eu

- Corri o `npm run build` depois de cada passo e confirmei no navegador.
- Testei apagar a `cidade` do `perfil` (erro TS2741) e chamar `saudacao('15')` (erro TS2345).
- Testei o cartão a 375 px e em computador nas DevTools.

## O que aprendi

- O Tailwind não dá erro quando uma classe está mal escrita: simplesmente ignora-a.
- O `npm run dev` não verifica tipos; só o `npm run build` (com `tsc`) é que verifica.
- Quando aparecem muitos erros, corrigir o primeiro muitas vezes resolve os outros.
