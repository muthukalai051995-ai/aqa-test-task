import { test, expect } from '../Hooks/baseTest'
import { ProjectPage } from '../pages/projectPage'
import { projectData } from '../Utils/testData'

test('Create Project and Add Task', async ({ loggedInPage }) => {

  const project = new ProjectPage(loggedInPage)

  await project.openProjects()

  await project.createProject(projectData.name)

  await expect(loggedInPage.getByText(projectData.name)).toBeVisible()

  await project.openProject(projectData.name)

  await project.createTask(projectData.task)

  await expect(loggedInPage.getByText(projectData.task)).toBeVisible()

})