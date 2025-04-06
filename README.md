# Cypress Swag Labs Test Project

Este projeto utiliza o Cypress para realizar testes automatizados no site Swag Labs. Abaixo estão as instruções para configurar e executar os testes.

## Estrutura do Projeto

O projeto possui a seguinte estrutura de diretórios:

```
cypress-swag-labs
├── cypress
│   ├── fixtures
│   │   └── example.json
│   ├── integration
│   │   └── swag-labs.spec.js
│   ├── plugins
│   │   └── index.js
│   └── support
│       ├── commands.js
│       └── index.js
├── cypress.json
├── package.json
└── README.md
```

## Pré-requisitos

- Node.js instalado
- npm ou yarn

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd cypress-swag-labs
   ```

2. Instale as dependências:
   ```
   npm install
   ```

## Executando os Testes

Para executar os testes, utilize o seguinte comando:

```
npx cypress open
```

Isso abrirá a interface do Cypress, onde você poderá selecionar e executar os testes definidos em `cypress/integration/swag-labs.spec.js`.

## Estrutura dos Testes

Os testes estão localizados em `cypress/integration/swag-labs.spec.js` e utilizam dados de exemplo armazenados em `cypress/fixtures/example.json`. Você pode personalizar os testes e os dados conforme necessário.

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, crie um fork do repositório e envie um pull request.

## Licença

Este projeto está licenciado sob a MIT License.