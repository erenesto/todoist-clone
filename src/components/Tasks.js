import React, { useContext, useEffect } from 'react'
import { useTasks } from '../hooks'
import Checkbox from './Checkbox'
import { comparedTasks } from '../constants'
import { getTitle, getComparedTitle, comparedTasksExist } from '../helpers'
import { SelectedProjectContext, ProjectsContext } from '../context'

const Tasks = () => {
  const { selectedProject } = useContext(SelectedProjectContext)
  const { projects } = useContext(ProjectsContext)
  const { tasks } = useTasks(selectedProject)

  let projectName = ''

  if (projects && selectedProject && !comparedTasksExist(selectedProject)) {
    projectName = getTitle(projects, selectedProject).name
    console.log('proj name 1: ', projectName)
  }

  if (comparedTasksExist(selectedProject) && selectedProject) {
    projectName = getComparedTitle(comparedTasks, selectedProject).name
    console.log('proj name 2: ', projectName)
  }

  useEffect(() => {
    document.title = `${projectName} | todoist clone app`
  })

  console.log(tasks)

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>
      <ul className="tasks__list">
        {tasks.map(t => (
          <li key={t.id}>
            <Checkbox id={t.id} />
            <span>{t.task}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks
