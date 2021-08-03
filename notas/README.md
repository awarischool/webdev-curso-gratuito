<div align="center">
<img  src="../images/header.png" alt="Curso Gratuito Web Dev Awari" />
</div>

# Notas aula 0

## Referências

- Primeiros parágrafos de ["Estrutura e Interpretação de Programas de Computador"](https://ibrahimcesar.cloud/blog/estrutura-e-interpretacao-de-programas-de-computador/) traduzidos para o português.
- [Hierarquia de Chomsky](https://pt.wikipedia.org/wiki/Hierarquia_de_Chomsky), note que tem 4 níveis, mas a numeração assim como em arrays em JavaScript e outras, se inicia no 0!
- [História da Web](https://css-tricks.com/category/history/), em inglês
- Estudos mostram que... [Habilidades linguísticas valem mais do que habilidades matemáticas](https://www.discovermagazine.com/mind/learning-to-code-strong-language-skills-matter-more-than-being-good-at-math)
- Instalar [VS Code](https://code.visualstudio.com/)
- Instalar o [Pack de Extensões para desenvolvimento NextJS](https://marketplace.visualstudio.com/items?itemName=IbrahimCesar.ibrahimcesar-nextjs-developer-pack)
- Instalar o [Node.js](https://nodejs.org/)

# Notas aula 1

<div align="center">

<img width="1012" alt="blog" src="https://user-images.githubusercontent.com/509054/128005276-d090e894-4004-4570-bca2-d40325632f1a.png">

> Wireframe de nossa aplicação afinal


<img width="581" alt="dependencias" src="https://user-images.githubusercontent.com/509054/128005217-5ec184d4-e6b7-402e-a0ef-1db71d919572.png">

> Gráfico de dependências. Auxilia a criar um modelo mental da aplicação a ser desenvolvida.


<img width="857" alt="next" src="https://user-images.githubusercontent.com/509054/128005162-a286226e-b245-4f9c-bfd0-d8f36ad6f645.png">


<img width="846" alt="slug" src="https://user-images.githubusercontent.com/509054/128005135-8c76f9c4-7b66-404f-97ec-dfe1219d62d5.png">
  
> Como o framework Next.js organiza uma página

<img width="763" alt="times" src="https://user-images.githubusercontent.com/509054/128005099-cba28e9a-8f92-4996-a176-652ae8e70307.png">
  
> Os tempos do ciclo de vida da aplicação: _build time_ e _run time_. Build ou tempo de construção é o momento de construção e o _run time_ quando está sendo executada. No exemplo deste curso nossos arquivos são gerados estaticamente em _build time_.

</div>

- [Next.js no Windows](https://docs.microsoft.com/pt-br/windows/dev-environment/javascript/nextjs-on-wsl) - Documento de referência da própria Microsoft
  - É recomendado pela mesma a [instalação do WSL](https://docs.microsoft.com/pt-br/windows/wsl/install-win10), assim vão ter um ambiente UNIX no Windows
- `pwd` - mostra em que diretório seu Terminal está
- `node --version` ou `node -v` exibe a versão instalada do Node. Recomendada `>= 14.x`
- `npm --version` ou `npm -v` exibe a versão do NPM. Recomendada `>= 6.x`
- `npx create-next-app --example blog-starter-typescript blog-exemplo` — baixa um exemplo completo de blog da Vercel em um diretório chamado `blog-exemplo`, você pode selecionar o exemplo que preferir
- `npx create-next-app --typescript blog` – cria uma aplicação Next.js básica em um diretório chamado `blog`, você pode selecionar o exemplo que preferir
- Você vai precisar entrar na pasta criada, com `cd blog` ou qualquer comando que tenha utilizado
- `new Date().toISOString()` retorna a data do momento em GMT. Você pode executar em seu próprio navegador, em Inspecionar / Console
- `npm install react-markdown gray-matter react-syntax-highlighter` instala 3 dependências que iremos utilizar
- `npm install  @types/react-syntax-highlighter -D`, instala os tipos que dependem uma das dependências
- `npm run dev` roda a aplicação em modo de desenvolvimento
