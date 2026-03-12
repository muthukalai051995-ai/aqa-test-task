import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { userData } from '../Utils/testData';

export const test = base.extend({

  loggedInPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page)

    await loginPage.openLoginPage()

    await loginPage.login(userData.username, userData.password)

    await page.waitForURL(/projects/)

    await use(page)

  }

})

export { expect } from '@playwright/test'