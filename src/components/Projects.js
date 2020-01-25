/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from 'react'
import { SelectedProjectContext, ProjectsContext } from '../context'
import Project from './Project'

const Projects = ({ activeVal = null }) => {
  const [active, setActive] = useState(activeVal)
  const { setSelectedProject } = useContext(SelectedProjectContext)
  const { projects } = useContext(ProjectsContext)

  const onProjectClick = id => {
    setActive(id)
    setSelectedProject(id)
  }
  return (
    projects &&
    projects.map(proj => {
      const { docId, projectId } = proj
      return (
        <li
          key={docId}
          data-doc-id={docId}
          className={
            active === projectId
              ? 'active sidebar__project'
              : 'sidebar__project'
          }
          onClick={() => onProjectClick(projectId)}
        >
          <Project proj={proj} />
        </li>
      )
    })
  )
}

export default Projects
