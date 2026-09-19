## 2026-09-19 — Router à mão em vez de Express

**Contexto:** precisava de responder de forma diferente a GET /health e a tudo o
resto. O Express resolvia em três linhas.

**Opções:** (a) Express desde o início, (b) node:http à mão.

**Escolhi:** à mão. Decisão do plano, não minha, regra 6: versão crua primeiro,
framework depois.

**Porquê:** não consigo avaliar o que um framework me poupa sem ter feito aquilo
sem ele. À mão apanhei quatro coisas que o Express esconde: o writeHead tem de
vir antes de qualquer byte do body, o end fecha um stream em vez de enviar uma
mensagem, o Content-Length desaparece e vira Transfer-Encoding: chunked quando
o Node não sabe o tamanho, e o req.url chega sem host nem porta.

**O que abdiquei:** cerca de quinze linhas para o que o Express faz em três, e
um router que não distingue 404 de 405 porque a condição junta method e path
num if só.


## 2026-09-19 — Deixar o 405 por resolver

**Contexto:** um POST a /health devolve 404. Devia devolver 405, porque o
recurso existe e o método é que não é permitido.

**Opções:** (a) corrigir já com um else if a apanhar o caso, (b) deixar para a
Semana 2.

**Escolhi:** deixar para a Semana 2.

**Porquê:** a correção a sério não é uma linha. O if actual junta method e path
numa condição só, por isso quando falha não sei qual das duas partes falhou, e
é exactamente essa informação que distingue 404 de 405. Resolver hoje seria
pôr um caso especial para /health, que não generaliza e é apagado na semana
seguinte. A estrutura certa é verificar o path primeiro e o method dentro dele,
e isso é um router a sério, que é o trabalho da Semana 2.

**O que abdiquei:** a API está a mentir num caso. Um cliente que faça POST a
/health é informado de que o endpoint não existe, quando existe.