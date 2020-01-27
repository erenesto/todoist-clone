import React, { useContext, useState } from 'react'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { ProjectsContext } from '../context'
import Dropdown from './Dropdown'

const Overlay = ({ setProject }) => {
  const { projects } = useContext(ProjectsContext)
  const [activeId, setActiveId] = useState(null)

  return (
    <Dropdown projects={projects} BtnIcon={AiOutlineUnorderedList}>
      {projects.map(project => (
        <li key={project.projectId}>
          <div
            onClick={() => {
              setProject(project.projectId)
              setActiveId(project.projectId)
            }}
            onKeyDown={() => {
              setProject(project.projectId)
            }}
            role="button"
            tabIndex={0}
            aria-label="Select the task project"
            className={activeId === project.projectId ? 'active' : ''}
          >
            {project.name}
          </div>
        </li>
      ))}
    </Dropdown>
  )
}

export default Overlay
