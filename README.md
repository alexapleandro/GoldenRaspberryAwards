# Desafio: Golden Raspberry Awards

Desenvolver uma interface para possibilitar a leitura da lista de indicados e vencedores
da categoria Pior Filme do Golden Raspberry Awards.  

### Bibliotecas utilizadas

**Angular CLI**

[Angular CLI 13.3.0](https://angular.io/cli) é uma ferramenta de interface de linha de comando que você usa para inicializar, desenvolver, estruturar e manter aplicativos Angular diretamente de um shell de comando.

**Node**

[Node 14.15.1](https://nodejs.org/en/docs/) é um ambiente de execução Javascript server-side.

**Karma**

[Karma 6.3.0](https://karma-runner.github.io/latest/index.html) é um ambiente de teste produtivo para os desenvolvedores.

**Bootstrap**

[bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/) é um framework front-end que fornece estruturas de CSS para a criação de sites.

**Font Awesome**

[Font Awesome 4](https://fontawesome.com/v4/) é uma biblioteca de icones.

**Docker**

[Docker 20.10.12](https://docs.docker.com/) é uma forma de virtualizar aplicações no conceito de “containers”, trazendo da web ou de seu repositório interno uma imagem completa, incluindo todas as dependências necessárias para executar sua aplicação.

**Docker Compose**

[Docker Compose 2.2.3](https://docs.docker.com/compose/) é o orquestrador de containers da Docker.

### Utilizando o Docker

Navegue até o diretório: 
`golden-raspberry-awards-app`

Rodar o projeto.

```bash
docker-compose up -d --build
```

Acessar o link: http://localhost:5000

Parar o projeto.

```bash
docker-compose down
```

### Utilizando o ambiente configurado

Navegue até o diretório:
`golden-raspberry-awards-app`

Instalar as dependências do projetos.

```bash
npm install
```

Rodar o projeto.

```bash
npm start
```

Acessar o link: http://localhost:4200.

Rodar os testes.

```bash
npm run test
```

Rodar o coverage.

```bash
npm run test-coverage
```

Acessar o arquivo no navegador na pasta:

```
golden-raspberry-awards-app
└─ coverage
   └─ golden-raspberry-awards-app
      └─ index.html
```
