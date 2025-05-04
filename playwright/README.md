
# 🧪 Automation Frameworks with Playwright

This repository is an ongoing project aimed at building a robust, maintainable, and scalable test automation framework using [Playwright](https://playwright.dev/). The framework leverages the Page Object Model (POM) design pattern to structure tests efficiently, focusing on automating the [Automation Exercise](https://automationexercise.com/) website.

## 🚀 Project Goals

- Implement Playwright for end-to-end web automation.
- Utilize Page Object Model (POM) to enhance code maintainability and readability.
- Develop reusable components for test automation.
- Automate test cases for the Automation Exercise site.
- Establish a scalable framework suitable for multiple projects.

## 📁 Project Structure

```
automation_frameworks/
├── pages/                 # Page Object Model classes
│   └── ExamplePage.js
├── tests/                 # Test specifications
│   └── example.spec.js
├── utils/                 # Utility functions and helpers
├── playwright.config.js   # Playwright configuration
├── package.json           # Project metadata and scripts
└── README.md              # Project documentation
```

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Jayprox/automation_frameworks.git
   cd automation_frameworks
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install Playwright browsers:

   ```bash
   npx playwright install
   ```

## 🧪 Running Tests

Execute all tests using the following command:

```bash
npx playwright test
```

To run tests in headed mode with slower execution (useful for debugging):

```bash
npx playwright test --headed --slow-mo=100
```

## 🧰 Available Scripts

- `npx playwright test` – Run all tests.
- `npx playwright test --debug` – Launch tests in debug mode with the Playwright Inspector.
- `npx playwright codegen` – Open the Playwright code generator for recording actions.

## 🧱 Page Object Model (POM)

This framework adopts the Page Object Model design pattern, which promotes:

- Encapsulation of page-specific locators and methods.
- Reusability of components across different tests.
- Maintainability by isolating changes to specific page classes.

For more information on POM with Playwright, refer to the [official documentation](https://playwright.dev/docs/pom).

## 📝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your enhancements.

## 📄 License

This project is licensed under the MIT License.
