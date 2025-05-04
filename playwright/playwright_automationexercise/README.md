
# Playwright Automation Framework Setup

This project provides a starter template for setting up end-to-end tests using [Playwright](https://playwright.dev/). It's designed to help kickstart automation work and can be extended for broader test coverage.

---

## 📦 Prerequisites

- [Node.js](https://www.nodejs.org) (Install and verify with `node -v`)
- A Terminal (Mac) or Command Prompt (Windows)

---

## 🚀 Getting Started

### 1. Initialize the Project

1. Create and navigate to your test project folder:
   - **Mac:** `/Users/{your_username}/{test_folder}`
   - **Windows:** `C:\{test_folder}`

2. Open terminal/command prompt and navigate to the directory:
   ```bash
   cd path/to/your/test_folder
   ```

3. Run the Playwright setup wizard:
   ```bash
   npm init playwright@latest
   ```

4. Follow the prompts:
   - Choose **JavaScript** (or TypeScript if preferred)
   - Accept the default `tests` folder or name your own
   - Optionally add a **GitHub Actions workflow**
   - When asked to install browsers, press **Enter** to confirm

---

## ✅ Running Your First Test

To run the default tests:
```bash
npx playwright test
```

You should see all tests pass in the terminal.

To generate and view the test report:
```bash
npx playwright show-report
```

---

## 🧪 Running Tests in UI Mode

To use Playwright's visual Test Runner UI:
```bash
npx playwright test --ui
```

- The UI will open with a tree of available tests.
- Click the green ▶️ Play icon to run individual or all tests.
- Click on test names (e.g., `example.spec.js`) to inspect details.

---

## 🧰 Notes

- If browsers are not installed, run:
  ```bash
  npx playwright install
  ```

- You can edit and expand your tests in the `/tests` directory.

---

## 📁 Project Structure Example

```
your-project/
├── tests/
│   └── example.spec.js
├── playwright.config.js
├── package.json
└── README.md
```

---

## 👤 Author

This framework is part of an ongoing personal project to build a robust automation suite using Playwright. This is a starter template to help get you started.

---
