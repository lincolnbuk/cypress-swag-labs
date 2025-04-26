# Swag Labs Test Automation

![poster](https://cdn.eveclass.com/p/64da9e3dedc4a33519851fbe/files/gallery/image/9abd0cf0-c86f-11ee-8a0a-175ce68ebadf/original.png)

---

## 🧪 Cypress Swag Labs Test Project ![Cypress Badge](https://img.shields.io/badge/tested%20with-Cypress-00b140.svg)

Este projeto utiliza o [Cypress](https://www.cypress.io/) para realizar testes automatizados end-to-end no site [Swag Labs](https://www.saucedemo.com/).  
Ele serve como exemplo para demonstrar como estruturar, configurar e executar testes automatizados com Cypress.

This project uses [Cypress](https://www.cypress.io/) to perform end-to-end automated testing on the [Swag Labs](https://www.saucedemo.com/) website.
It serves as an example to demonstrate how to structure, configure, and run automated tests with Cypress.

---

## 📁 Estrutura do Projeto / Project Structure

```bash
cypress-swag-labs
├── cypress
│   ├── fixtures
│   │   └── example.json           # Dados de exemplo - Example data
│   ├── e2e
│   │   └── swag-labs.cy.js        # Testes automatizados - Automated Tests
│   ├── plugins
│   │   └── index.js               # Plugins personalizados - Custom plugins
│   ├── downloads                  # Downloads do Cypress
│   ├── screenshots                # Screenshots dos testes
│   └── support
│       ├── commands.js            # Comandos Cypress customizados - Custom Cypress Commands
│       └── e2e.js                 # Configurações globais - Global Settings
├── cypress.config.js              # Configurações do Cypress - Cypress Settings
├── package.json                   # Dependências e scripts - Dependencies and scripts
└── README.md                      # Documentação do projeto - Project documentation
```

---

## 🧪 Estrutura dos Testes / Tests Structure

- Os testes estão em - Tests are in: `cypress/e2e/swag-labs.cy.js`
- Utilizam dados de apoio em - They use supporting data in: `cypress/fixtures/example.json`

Você pode editar os arquivos para adicionar novos cenários ou alterar dados dos testes.

You can edit the files to add new scenarios or change test data.

---

## 🤘 Sobre / About

Projeto para o meu TCC, da Universidade Católica de Pernambuco sobre automação de testes, testando o site Swag Labs, um projeto usando Cypress e Javascript.

Project for my undergraduate thesis at the Catholic University of Pernambuco about test automation, testing the Swag Labs website, a project using Cypress and Javascript.

---

- [Node.js](https://nodejs.org/) instalado - installed
- npm ou yarn

---

## 💻 Tecnologias / Technologies

- Cypress
- Javascript

---

## 🤖 Como executar / How to execute

1. Clonar o repositório, e executar o comando:
2. Clone the repository and run the command:

---

npx cypress open

---

npx cypress run

---

Isso abrirá a interface gráfica do Cypress, ou o terminal, para você executar os testes disponíveis em - This will open the Cypress graphical interface, or terminal, for you to run the tests available at `cypress/integration/swag-labs.spec.js`.

---

## 🤝 Contribuindo / Contributing

Contribuições são bem-vindas!  
Para contribuir - Contributions are welcome!
To contribute:

1. Faça um fork do repositório - Fork the repository
2. Crie uma branch com sua feature - Create a branch with your feature
3. Envie um Pull Request - Send a Pull Request ✨

---

Automação do site swag labs, para estes sete casos de testes:

1. Possuir um carrinho de compras: o sistema deve fornecer aos usuários a capacidade de adicionar itens a um carrinho de compras enquanto navegam pelo site;

2. Seleção de multiplos produtos: possibilitar ao usuário a inserção de mais de um produto ao carrinho de compras, permitindo compras múltiplas em uma única transação;

3. Confirmação de itens adicionados: antes de finalizar a compra o sistema deve possibilitar a revisão dos itens selecionados no carrinho;

4. Ajuste na quantidade de itens selecionados: deve ser permitido aos usuários ajustar a quantidade de itens adicionados ao carrinho de compras, tanto aumentando quanto diminuindo a quantidade desejada;

5. Boa visualização dos produtos na home page: os produtos devem ser apresentados de forma clara e atrativa, exibindo informações essenciais como nome, descrição, preço e uma foto de preview para facillitar a escolha dos usuários;

6. Visualizar na íntegra todos os produtos na home page: a página inicial do site deve exibir uma lista ou galeria de todos os produtos disponíveis, permitindo aos usuários uma visão geral do catálogo;

7. Permissão de login com credenciais válidas: o sistema deve garantir a segurança das informações dos usuários, incluindo a necessidade de login com credenciais válidas;

Automation of the Swag Labs website for the following seven test cases:

1. Have a shopping cart:
   The system must provide users with the ability to add items to a shopping cart while browsing the website.

2. Multiple product selection:
   The system should allow users to add more than one product to the shopping cart, enabling multiple purchases in a single transaction.

3. Confirmation of added items:
   Before completing the purchase, the system should allow users to review the selected items in the cart.

4. Adjustment of selected item quantities:
   Users must be able to adjust the quantity of items in the shopping cart, both increasing and decreasing the desired amount.

5. Clear product display on the homepage:
   Products should be presented clearly and attractively, displaying essential information such as name, description, price, and a preview image to facilitate user choices.

6. Full view of all products on the homepage:
   The homepage must display a list or gallery of all available products, allowing users to have an overview of the catalog.

7. Allow login with valid credentials:
   The system must ensure the security of user information, including requiring login with valid credentials.

---

## 📄 Licença / License

---

Este projeto está licenciado sob a [MIT License](LICENSE).

This project is licensed under the [MIT License](LICENSE).

---
