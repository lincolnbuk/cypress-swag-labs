# 🧪 Cypress Swag Labs Test Project ![Cypress Badge](https://img.shields.io/badge/tested%20with-Cypress-00b140.svg)

Este projeto utiliza o [Cypress](https://www.cypress.io/) para realizar testes automatizados end-to-end no site [Swag Labs](https://www.saucedemo.com/).  
Ele serve como exemplo para demonstrar como estruturar, configurar e executar testes automatizados com Cypress.

This project uses [Cypress](https://www.cypress.io/) to perform end-to-end automated testing on the [Swag Labs](https://www.saucedemo.com/) website.
It serves as an example to demonstrate how to structure, configure, and run automated tests with Cypress.

---

## 📁 Estrutura do Projeto

```bash
cypress-swag-labs
├── cypress
│   ├── fixtures
│   │   └── example.json           # Dados de exemplo
│   ├── integration
│   │   └── swag-labs.spec.js      # Testes automatizados
│   ├── plugins
│   │   └── index.js               # Plugins personalizados
│   └── support
│       ├── commands.js            # Comandos Cypress customizados
│       └── index.js               # Configurações globais
├── cypress.json                   # Configurações do Cypress
├── package.json                   # Dependências e scripts
└── README.md                      # Documentação do projeto
```

---

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- npm ou yarn

---

## ⚙️ Instalação

1.Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
cd cypress-swag-labs
```

2.Instale as dependências:

```bash
npm install
```

---

## 🚀 Executando os Testes

Para abrir o Cypress em modo interativo, use:

```bash
npx cypress open
```

Isso abrirá a interface gráfica do Cypress para você executar os testes disponíveis em `cypress/integration/swag-labs.spec.js`.

---

## 🧪 Estrutura dos Testes

- Os testes estão em: `cypress/integration/swag-labs.spec.js`
- Utilizam dados de apoio em: `cypress/fixtures/example.json`

Você pode editar os arquivos para adicionar novos cenários ou alterar dados dos testes.

---

## 🖼️ Visual da Interface do Cypress

Abaixo está uma imagem da interface do Cypress:

![Cypress Interface](https://testgrid.io/blog/wp-content/uploads/2024/04/cypress-test-automation.jpg)

---

## 🤝 Contribuindo

Contribuições são bem-vindas!  
Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch com sua feature
3. Envie um Pull Request ✨

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
