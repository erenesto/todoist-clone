import { comparedTasks } from '../constants'

export const comparedTasksExist = selectedProject =>
  comparedTasks.find(task => task.key === selectedProject)

export const getTitle = (projects, id) =>
  projects.find(proj => proj.projectId === id)

export const getComparedTitle = (projects, key) =>
  projects.find(proj => proj.key === key)
