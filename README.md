# 🧪 Cypress Swag Labs Test Project ![Cypress Badge](https://img.shields.io/badge/tested%20with-Cypress-00b140.svg)

[Exemplo do Cypress em execução](https://testgrid.io/blog/wp-content/uploads/2024/04/cypress-test-automation.jpg)

Este projeto utiliza o [Cypress](https://www.cypress.io/) para realizar testes automatizados end-to-end no site [Swag Labs](https://www.saucedemo.com/). Ele serve como exemplo para demonstrar como estruturar, configurar e executar testes automatizados com Cypress.

This project uses [Cypress](https://www.cypress.io/) to perform end-to-end automated testing on the [Swag Labs](https://www.saucedemo.com/) website. It serves as an example to demonstrate how to structure, configure, and run automated tests with Cypress.

---

## 📁 Estrutura do Projeto

```bash
cypress-swag-labs
├── cypress
│   ├── fixtures
│   │   └── example.json           # Dados de exemplo usados nos testes
│   ├── integration
│   │   └── swag-labs.spec.js      # Testes automatizados
│   ├── plugins
│   │   └── index.js               # Configurações de plugins
│   └── support
│       ├── commands.js            # Comandos personalizados
│       └── index.js               # Configuração global
├── cypress.json                   # Configurações do Cypress
├── package.json                   # Dependências e scripts
└── README.md                      # Documentação do projeto
```
