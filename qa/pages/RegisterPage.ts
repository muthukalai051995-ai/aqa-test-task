import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class RegisterPage extends BasePage {

  createAccountLink
  username
  email
  password
  createButton

  constructor(page: Page) {

    super(page)

    this.createAccountLink = page.getByRole('link', { name: 'Create account' })
    this.username = page.getByRole('textbox', { name: 'Username' })
    this.email = page.getByRole('textbox', { name: 'Email address' })
    this.password = page.getByRole('textbox', { name: 'Password' })
    this.createButton = page.getByRole('button', { name: 'Create account' })

  }

  async registerUser(username: string, email: string, password: string) {

    await this.click(this.createAccountLink)

    await this.type(this.username, username)

    await this.type(this.email, email)

    await this.type(this.password, password)

    await this.click(this.createButton)

  }

}