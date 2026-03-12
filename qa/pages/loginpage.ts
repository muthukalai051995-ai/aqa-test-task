import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  usernameField
  passwordField
  loginButton

  constructor(page: Page) {
    super(page)

    this.usernameField = page.getByRole('textbox', { name: 'Username Or Email Address' })
    this.passwordField = page.getByRole('textbox', { name: 'Password' })
    this.loginButton = page.getByRole('button', { name: 'Login' })
  }

  async openLoginPage() {
    await this.navigate('http://localhost:8080/login')
  }

  async login(username: string, password: string) {

    await this.type(this.usernameField, username)

    await this.type(this.passwordField, password)

    await this.click(this.loginButton)

  }

}