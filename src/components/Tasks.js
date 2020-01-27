import React, { useContext, useEffect } from 'react'
import { useTasks } from '../hooks'
import Checkbox from './Checkbox'
import { comparedTasks } from '../constants'
import { getTitle, getComparedTitle, comparedTasksExist } from '../helpers'
import { SelectedProjectContext, ProjectsContext } from '../context'
import AddTask from './AddTask'

const Tasks = () => {
  const { selectedProject } = useContext(SelectedProjectContext)
  const { projects } = useContext(ProjectsContext)
  const { tasks } = useTasks(selectedProject)

  let projectName = ''

  if (comparedTasksExist(selectedProject) && selectedProject) {
    projectName = getComparedTitle(comparedTasks, selectedProject).name
  }
  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !comparedTasksExist(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject).name
  }

  useEffect(() => {
    document.title = `${projectName} | todoist clone app`
  })

  return (
    <div className="tasks">
      <h2>{projectName}</h2>
      <ul className="tasks__list">
        {tasks.map(t => (
          <li key={t.id}>
            <Checkbox id={t.id} />
            <span>{t.task}</span>
          </li>
        ))}
      </ul>
      <AddTask />
    </div>
  )
}

export default Tasks
