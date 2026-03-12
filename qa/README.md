# Playwright Automation Framework

This project is an Automation Testing Framework built using **Playwright + TypeScript**.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)

## Project Structure

qa
 ├ pages
 │   ├ BasePage.ts
 │   ├ LoginPage.ts
 │   ├ RegisterPage.ts
 │   └ ProjectPage.ts
 │
 ├ tests
 │   ├ login.spec.ts
 │   ├ register.spec.ts
 │   └ projectTask.spec.ts
 │
 ├ Utils
 │   └ testData.ts
 │
 ├ Hooks
 │   └ baseTest.ts
 │
 ├ playwright.config.ts
 └ README.md


## Test Coverage

- User Registration
- User Login
- Create Project
- Add Task to Project

## Framework Features

- Page Object Model (POM)
- Reusable Base Page
- Custom Fixtures
- Data Driven Testing

## Run Tests

Install dependencies:

npm install


Run tests:

npx playwright test


Run tests in UI mode:

npx playwright test --ui


View HTML Report:

npx playwright show-report

## CI/CD

GitHub Actions workflow is configured to run Playwright tests automatically.