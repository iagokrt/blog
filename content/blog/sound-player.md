---
title: music-player component
date: "2020-09-27T23:12:03.284Z"
description: "Frontend | javascript"
---

Reactjs Component - MUS1C PL4Y3R


## Nesse post vou falar um pouquin sobre 3 principais coisas:

- **Eu gosto muito do estilo de código guiado nesse sentido de componentizar os elementos e recursos**.

- **Como é fácil utilizar ícones com libs de ícones, não gaste seu tempo desenhando os ícones do zero**.

- **Quão dahora é utilizar o CodeSandBox pra fazer coisas rápidas de compartilhar e desenvolver**.

---

Partindo desses pontos vou contextualizar e depois rapidin explicar as **tools**... 

Pega aquele ***cafézão do bão*** e bora pra ação. Shall we? 

---

### Durante a construção de uma ou mais aplicações web tive a necessidade de rodar música

***Sim... Ter um botão que tu clica e ~~abracadabra~~, música!***

Nisso eu desenvolvi primeiro uma solução usando apenas javascript puro. 

Mas ela não me servia muito, porque quando foi feita eu tinha apenas um propósito pra ela que era de utilizar [nisso aqui](https://vanilladrumkit.netlify.app/)... Enfim.

Decidido então a tocar música nos sites mundo afora, busquei e desenvolvi um componente estilizado p/ inserir em qualquer código react. 

Ou seja, é super mais fácil manter esse componente e quando for necessário basta reutilizá-lo (em qualquer projeto react)

Aqui o link pro CodeSandBox (~~código dentro de uma caixa de areia~~)

[music-player | on codesandbox.io](https://codesandbox.io/s/reactjs-music-player-r4t7u)


---

## Ícones & Caixas de Areia

A utilização da lib [react-icons](https://react-icons.github.io/react-icons/) é super de boa. 

Uma vez dentro da plataforma do SandBox (e com projetinho criado) é só digitar pra procurar o nome do pacote npm e instalar as **dependencies** que você precisa ou quer testar e sair usando sem dó.

```js
// exemplo.react-icons

// importa icone
import { RiMusic2Fill } from "react-icons/ri";
// import { PacoteIconName } from 'react-icons/~pacote';
// import { MdFacebook, MdTwitter } from 'react-icons/md';

const Example = ({ prop }) => {
  const [state, setState] = hook(prop);

  return (
    <div>
      <button onClick={toggle}>
        <RiMusic2Fill size={27} color={state ? "green" : "red"} />
      </button>
    </div>
  );
};

export default Example;

```

Dessa forma, fica fácilimo controlar - através do estado - a cor do ícone ou o tamanho dele, se ele gira ou não, etc...

### CodeSandBox

As SandBoxes suportam a pouco mais de uma semana essa feature de carregamento das dependências, então agora ficou + rápido pra nós developers.

Vale lembrar que essa funcionalidade nos ajuda muito e foi desenvolvida por essa mulher aqui &rarr; [Sara Vieira](https://twitter.com/NikkitaFTW)~

Além de contar com alguns templates prontos pra começar a codar sem se preocupar muito com configuração de webpack, babel, linting, tsconfig e ~~mais um monte de coisa chata pra caramba de settar antes de realmente de verdade iniciar um projeto novo~~

Então deêm uma chance quem sabe pra teste de algum projeto com o [codesandbox.io](https://codesandbox.io/) 

Ou apenas a criação daquela componente que você no fundo sabe que será reaproveitado em outros projetos...

## &rarr; [music-player react component](https://codesandbox.io/s/reactjs-music-player-r4t7u) &larr;

See ya :)