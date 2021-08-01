<div align="center">
<img  src="../images/header.png" alt="Curso Gratuito Web Dev Awari" />
</div>

# Projeto final


O projeto final a ser integre é incluir uma url neste repositório em `code/blog/blogroll.ts`, com as informações de seu blog:

```ts
import type { IBlogroll } from "@/lib/types";

const blogroll: IBlogroll[] = [
  {
    title: "Ibrahim Cesar",
    description: `A descrição vai poder renderizar HTML, como links para o <a href="https://twitter.com/ibrahimcessar" target="_blank">twitter</a> e outros.`,
    url: "https://ibrahimcesar.cloud",
    color: "#e66533",
  },
];

export default blogroll;
```

O que você preccisa fazer é incluir suas próprias informações e abrir um Pull Request como mostrado em aula.

```ts
  {
    title: "",
    description: ``,
    url: "",
    color: "",
  },
```

Em **`title`** você coloca seu nome ou o nome de seu blog. Usaremos este nome para ordenar a listagem no blog do curso. Em **`description`** você pode incluir dentro da string qualquer HTML válido! Em **`url`**, o endereço de seu blog criado e feito o deploy. E em **`color`**, uma propriedade de cor CSS que você goste / representa você.

Condição de inclusão no PR é ter no footer, compartilhado o seguinte `snippet`, que renderiza uma imagem do logo da Awari e um link para a mesma:

```
  <Image 
    src="https://awari.com.br/wp-content/themes/awari/dist/img/awari@2x.webp"
    alt="Awari"
    height="30px"
    width="100%"
  />
```

Boa sorte!
