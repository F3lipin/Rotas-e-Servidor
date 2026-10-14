# Aprendizados da Aula de Node.js

## Sobre o projeto

Neste projeto, aprendi os conceitos básicos de desenvolvimento back-end utilizando Node.js e Express. Durante a atividade prática, desenvolvi uma API de livros capaz de cadastrar, consultar, atualizar, excluir e pesquisar livros.

O objetivo foi compreender como funciona um servidor e como as requisições HTTP permitem que uma aplicação receba e envie informações.

## O que eu aprendi

### 1. Node.js

Aprendi que o Node.js permite executar JavaScript fora do navegador, possibilitando o desenvolvimento de servidores e aplicações back-end.

Também aprendi a executar arquivos JavaScript pelo terminal utilizando o comando:

```bash
node server.js
```

### 2. npm e instalação de dependências

Aprendi que o npm é utilizado para gerenciar os pacotes de um projeto.

Utilizei os comandos:

```bash
npm init -y
npm install express
```

O primeiro comando cria o arquivo `package.json`, que armazena informações e configurações do projeto. O segundo instala o Express, uma ferramenta que facilita a criação de servidores e rotas.

### 3. Servidor e rotas

Aprendi a criar um servidor com Express e a utilizar a porta 3000 para disponibilizar a aplicação localmente.

Também compreendi que uma rota é identificada pelo método HTTP e pelo caminho utilizado na requisição.

### 4. Métodos HTTP

Durante a atividade, aprendi a utilizar os principais métodos HTTP:

- **GET:** consultar e listar livros.
- **POST:** cadastrar novos livros.
- **PUT:** atualizar informações de livros existentes.
- **DELETE:** excluir livros.

### 5. Criação da API de livros

Na atividade prática, transformei uma API de tarefas em uma API de livros.

Implementei as seguintes funcionalidades:

- Listar todos os livros.
- Consultar um livro pelo seu ID.
- Cadastrar um livro informando título e autor.
- Atualizar o título ou o autor de um livro.
- Excluir um livro pelo ID.
- Pesquisar livros pelo título ou pelo autor.

### 6. Parâmetros e envio de dados

Aprendi a utilizar diferentes formas de receber informações nas requisições:

- `req.params`: obtém parâmetros presentes no caminho da URL, como o ID de um livro.
- `req.query`: obtém parâmetros de pesquisa presentes na URL.
- `req.body`: acessa os dados enviados no corpo da requisição, como o título e o autor de um livro.

Também aprendi a utilizar `express.json()` para permitir que o Express interprete os dados enviados em formato JSON.

### 7. Validação e códigos HTTP

Aprendi a validar os dados recebidos antes de cadastrar ou atualizar um livro.

Também compreendi alguns códigos de resposta HTTP:

- **200:** requisição realizada com sucesso.
- **201:** recurso criado com sucesso.
- **204:** operação concluída sem conteúdo na resposta.
- **400:** dados enviados inválidos ou incompletos.
- **404:** recurso não encontrado.

### 8. Testes da API

Aprendi que posso testar as rotas utilizando o navegador para requisições GET e ferramentas como Postman ou Thunder Client para enviar requisições POST, PUT e DELETE.

Esses testes permitem verificar se as funcionalidades estão funcionando corretamente e se os dados são alterados conforme o esperado.

## O que foi mais importante para mim

O principal aprendizado foi entender como o JavaScript pode ser utilizado no back-end para criar um servidor e disponibilizar uma API.

Também compreendi como as rotas, os métodos HTTP, os parâmetros e o JSON trabalham juntos para permitir que uma aplicação manipule informações.

## Limitação do projeto

Os livros são armazenados em memória, por meio de um array JavaScript. Por isso, os dados cadastrados durante a execução são perdidos quando o servidor é reiniciado.

Uma possível melhoria futura seria integrar a API a um banco de dados, como o MySQL, para armazenar os livros de forma persistente.

## Conclusão

Com esta atividade, pratiquei conceitos fundamentais de desenvolvimento back-end utilizando Node.js e Express. Consegui compreender melhor o funcionamento de um servidor, a criação de rotas e a implementação das operações básicas de uma API REST.

Este projeto serviu como uma introdução prática ao desenvolvimento de aplicações que recebem, processam e retornam dados por meio de requisições HTTP.
