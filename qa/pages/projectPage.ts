import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProjectPage extends BasePage {

  projectMenu
  newProject
  titleField
  createButton
  taskField
  addTaskButton

  constructor(page: Page) {

    super(page)

    this.projectMenu = page.getByRole('link', { name: 'Projects' })
    this.newProject = page.getByRole('link', { name: 'New project' })
    this.titleField = page.getByRole('textbox', { name: 'Title' })
    this.createButton = page.getByRole('button', { name: 'Create' })
    this.taskField = page.getByRole('textbox', { name: 'Add a task…' })
    this.addTaskButton = page.getByRole('button', { name: 'Add' })

  }

  async openProjects() {

    await this.click(this.projectMenu)

  }

  async createProject(projectName: string) {

    await this.click(this.newProject)

    await this.type(this.titleField, projectName)

    await this.click(this.createButton)

  }

  async openProject(projectName: string) {

    await this.page.getByRole('link', { name: projectName }).click()

  }

  async createTask(taskName: string) {

    await this.type(this.taskField, taskName)

    await this.click(this.addTaskButton)

  }

}