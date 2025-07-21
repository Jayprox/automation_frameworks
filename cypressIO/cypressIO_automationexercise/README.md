# 🧪 CypressIO Automation Framework

This repository is an ongoing project aimed at building a robust, maintainable, and scalable test automation framework using [CypressIO](https://www.cypress.io/). The framework leverages the Page Object Model (POM) design pattern to structure tests efficiently, focusing on automating the [Automation Exercise](https://automationexercise.com/) website.

## 🚀 Project Goals

- Implement CypressIO for end-to-end web automation.
- Utilize Page Object Model (POM) to enhance code maintainability and readability.
- Develop reusable components for test automation.
- Automate test cases for the Automation Exercise site.
- Establish a scalable framework suitable for multiple projects.

## 📁 Project Structure

```
cypressIO_automationexercise/
├── cypress/
│   ├── e2e/                # Test specifications
│   ├── pages/              # Page Object Model classes and test data
│   ├── fixtures/           # Static test data and files
│   └── support/            # Custom commands and utilities
├── cypress.config.js       # Cypress configuration
├── package.json            # Project metadata and scripts
└── README.md               # Project documentation
```

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Jayprox/cypressIO_automationexercise.git
   cd cypressIO_automationexercise
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## 🧪 Running Tests

Execute all tests using the following command:

```bash
npx cypress run
```

To open the Cypress Test Runner UI (interactive mode):

```bash
npx cypress open
```

To run a specific test file:

```bash
npx cypress run --spec "cypress/e2e/<your_spec_file>.cy.js"
```

## 🧰 Available Scripts

- `npx cypress run` – Run all tests in headless mode.
- `npx cypress open` – Launch the Cypress Test Runner UI.
- `npx cypress run --spec <file>` – Run a specific test file.

## 🧱 Page Object Model (POM)

This framework adopts the Page Object Model design pattern, which promotes:

- Encapsulation of page-specific locators and methods.
- Reusability of components across different tests.
- Maintainability by isolating changes to specific page classes.

For more information on POM with Cypress, refer to the [official documentation](https://docs.cypress.io/guides/references/best-practices#Page-Objects).

## 📝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your enhancements.

## 📄 License

This project is licensed under the MIT License.