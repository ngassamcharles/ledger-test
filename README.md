# Playwright-BDD Project
This project uses **Playwright-BDD** to write and execute tests following a **BDD (Behavior-Driven Development)** approach. Playwright-BDD combines the power of Playwright with .feature files to make tests more readable and collaborative.

## 🛠️ Installation
1. Ensure you have **Node.js** (version 12 or higher) installed on your machine.
2. Clone this project and install the necessary dependencies:
   ```sh
   npm install
   ```
3. Install Playwright browsers if not already installed:
   ```sh
   npx playwright install
   ```

## 📂 Project Structure
- **features/**: Contains .feature files describing BDD scenarios.
- **steps/**: Contains step definitions (Given, When, Then) for each scenario.
- **fixtures/**: Contains shared fixtures for test setup.
- **playwright.config.ts**: Playwright configuration file.

## 🚀 Commands to Run Tests
### Run all tests in headless mode (default)
```sh
npx playwright test
```
### Run all tests in headed mode
```sh
npx playwright test --headed
```
### Run a specific test file
```sh
npx playwright test path/to/test.spec.ts
```
### Run a single scenario in a .feature file
```sh
npx playwright test --grep "Scenario Name"
```

## 🎯 Tag Management
### Add tags in your .feature files
### Commands to run scenarios with specific tags
#### Run only scenarios with a specific tag:
```sh
npx playwright test --grep "@createContact"
```
#### Exclude scenarios with a specific tag:
```sh
npx playwright test --grep-invert "@api"
```

## 🧪 Debugging and Development
### Launch Playwright in interactive mode (--debug)
```sh
npx playwright test --debug
```
### Display more information during execution (--trace)
```sh
npx playwright test --trace=on
```

## 📊 Generating Reports
### Generate an HTML report after running tests:
```sh
npx playwright test --reporter=html
```
Then open the generated file (`playwright-report/index.html`) in your browser.

### Generate a JSON report:
```sh
npx playwright test --reporter=json > report.json
```

## 📖 Design Choices, Tools Used, and Challenges

### Design Choices:
1. **Behavior-Driven Development (BDD)**:
    - We chose BDD to improve collaboration between technical and non-technical stakeholders by using `.feature` files written in plain English.
    - This approach ensures that scenarios are easy to understand and maintain.

2. **Playwright-BDD**:
    - Playwright-BDD was selected because it combines the robust browser automation capabilities of Playwright with the readability of Cucumber-like `.feature` files.
    - It allows us to write reusable step definitions (`Given`, `When`, `Then`) for consistent and modular tests.

3. **Modular Architecture**:
    - The project is structured into `features`, `steps`, and `fixtures` directories to separate concerns and improve maintainability.
    - Shared logic, such as API helpers, is encapsulated in utility classes for reuse across multiple tests.
