# Desafio NodeJS

## Dependências

- node v8 (recomendo instalar [via](https://github.com/creationix/nvm))
  - [yarn](https://yarnpkg.com)

## Instalar dependências e iniciar servidor

```bash
yarn # instalar dependências
yarn start # iniciar servidor
```

## Instruções

Faça um fork do repositório e abra um pull request com seu desafio.

## Objetivos do desafio

Você é livre pra instalar quaiquer libs que quiser.

1. Modifique o arquivo routes/fat.js pra que o comando abaixo retorne o fatorial de um número qualquer `n`
```bash
curl -X POST http://localhost:7777/calcs/fat -H 'Content-Type: application/json' -d '{"n": 1}'

```
2. Implemente a rota que responde com o valor fibonacci de um número. Como a chamada abaixo
```bash
curl -X POST http://localhost:7777/calcs/fib -H 'Content-Type: application/json' -d '{"n": 1}'

```
3. Faça log da URL de todas as requisições que chegam ao servidor automaticamente
4. Implemente rotas de CRUD de uma entidade livro, com os atributos `{id, nome}`. A persistência pode ser em memória, mas usar MongoDB, é um bônus.
5. Atualize a seção [resultados](#resultados) com instruções de como testar o passo 4
6. Bônus: use docker

## Resultados

### Passos para teste do CRUD

Primeiramente devemos executar a seguinte chamada no terminal para ativar o servidor mongoDB:

```bash
mongod --dbpath path/node-intern-challenge/data/
```

onde ```path``` é o caminho onde se encontra o repositório.

#### Create

Após o primeiro passo, seguimos para a parte de inserção no banco de dados, um exemplo pode ser visto nas seguintes instruções:

```bash
curl -X POST http://localhost:7777/crud/create -H 'Content-Type: application/json' -d '{"_id": 7, "nome": "Algoritmo e Estrutura de Dados"}'
curl -X POST http://localhost:7777/crud/create -H 'Content-Type: application/json' -d '{"_id": 5, "nome": "Redes de Computadores"}'
```

#### Read

Para verificar se os registros realmente encontram-se no banco de dados, abrimos o seguinte link no navegador: http://localhost:7777/crud/read, onde podemos ver uma mensagem desse estilo:

```{"message":"Registros encontrados","docs":[{"_id":7,"nome":"Algoritmos e estruturas de dados"},{"_id":5,"nome":"Redes de Computadores"}]}```

#### Update

Chamada para update:

```bash
curl -X POST http://localhost:7777/crud/update/5 -H 'Content-Type: application/json' -d '{"nome": "Redes de Computadores: Uma abordagem top-down"}'
```

onde o ```7``` após ```...update/``` refere-se ao id do registro que deseja-se alterar.

#### Delete

Simplesmente inserimos o endereço http://localhost:7777/crud/delete/4 no navegador. Mais uma vez o número após ao ```...delete/``` refere-se ao id que desejamos deletar.
