:octocat:

### AMMA: Amar, Manter, Melhorar e Abandonar. :mailbox: 
 O Amma é uma forma que a empresa [Solutis](https://solutis.com.br/) utiliza para ter o feedback das mudanças que precisam ser feitas no ponto de vista dos colaboradores. Os colaboradores escrevem o que desejam em post-it e colam em um mural, os outros colaboradores por sua vez podem votar nos post-it que concordam fazendo um pequeno risco de caneta.
 Com o pandemia e o trabalho remoto esse processo teve que ser alterado para um formato digital, então criei uma forma de melhorar esse processo.

### Projeto: :mailbox: 
- Consumir dados de uma [API](https://github.com/KevenBarauna/Amma/edit/develop-api/Api/ApiAmma/README.md)
- React Hooks e Redux.
- React Router para navegação entre páginas
- Componentes do React bootstrap
- Formulário com React


Este projeto foi iniciado com o [Create React App](https://github.com/facebook/create-react-app)<br>
 `$ npx create-react-app amma`

### Requisistos: :pencil:
- [Node js](https://nodejs.org/en/)


### Iniciar o projeto :outbox_tray:
No diretório do projeto, você pode executar:<br>
`npm install` - <sub>Instalar todas as dependências do projeto</sub><br>
`npm start` - <sub>Iniciar o projeto</sub>

Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

### Padrão pessoal :bowtie:
- Toda classe de css deve começar com o nome do componente e separado por traço.<br>
<sub>Exemplo: No componente topo, a classe de style que cuida da imagem do topo:</sub><br> 
```
.topo-imagem-logo 
no lugar de 
.imagem-logo
```

- Usar aspas simples.<br>
<sub>Exemplo: no import do react</sub>
```
import React from 'react'; 
no lugar de  
import React from "react";
```

- Usar pt para tamanho de fonte no css.<br>
<sub>Exemplo: no style.css</sub> 
```
font-size: 12pt; 
no lugar de 
font-size: 20px;
```