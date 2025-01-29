# Playwright-BDD Project
This project uses **Playwright-BDD** to write and execute tests following a **BDD (Behavior-Driven Development)** approach. Playwright-BDD combines the power of Playwright with `.feature` files to make tests more readable and collaborative.
## 🛠️ Installation
1. Ensure you have **Node.js** (version 12 or higher) installed on your machine. 2. Clone this project and install the necessary dependencies: `npm install` 3. Install Playwright browsers if not already installed: `npx playwright install`
## 📂 Project Structure
- **`features/`**: Contains `.feature` files describing BDD scenarios.- **`steps/`**: Contains step definitions (`Given`, `When`, `Then`) for each scenario.- **`fixtures/`**: Contains shared fixtures for test setup.- **`playwright.config.ts`**: Playwright configuration file.
## 🚀 Commands to Run Tests
### Run all tests in headless mode (default) `npx playwright test`
### Run all tests in headed mode `npx playwright test --headed`
### Run a specific test file `npx playwright test path/to/test.spec.ts`
### Run a single scenario in a `.feature` file `npx playwright test --grep "Scenario Name"`
## 🎯 Tag Management
### Add tags in your `.feature` files
### Commands to run scenarios with specific tags
#### Run only scenarios with a specific tag: `npx playwright test --grep "@create"`
#### Exclude scenarios with a specific tag: `npx playwright test --grep-invert "@regression"`
## 🧪 Debugging and Development
### Launch Playwright in interactive mode (`--debug`) `npx playwright test --debug`
### Display more information during execution (`--trace`) `npx playwright test --trace=on`
## 📊 Generating Reports
### Generate an HTML report after running tests: `npx playwright test --reporter=html` Then open the generated file (`playwright-report/index.html`) in your browser.
### Generate a JSON report: `npx playwright test --reporter=json > report.json`
## 🔄 Additional Commands
### Reinstall Playwright browsers: `npx playwright install`
### Update Playwright: `npm install @playwright/test@latest playwright-bdd@latest`
## 🌐 Additional Documentation
- [Official Playwright Documentation](https://playwright.dev)- [Official Playwright-BDD Documentation](https://github.com/vitalets/playwright-bdd)


