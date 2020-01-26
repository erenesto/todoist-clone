import React, { useContext } from 'react'
import { ProjectsContext } from '../context'

const Overlay = ({ setProject, showOverlay, setShowOverlay }) => {
  const { projects } = useContext(ProjectsContext)

  return (
    projects &&
    showOverlay && (
      <div className="project-overlay" data-testid="project-overlay">
        <ul className="project-overlay__list">
          {projects.map(project => (
            <li key={project.projectId}>
              <div
                data-testid="project-overlay-action"
                onClick={() => {
                  setProject(project.projectId)
                  setShowOverlay(false)
                }}
                onKeyDown={() => {
                  setProject(project.projectId)
                  setShowOverlay(false)
                }}
                role="button"
                tabIndex={0}
                aria-label="Select the task project"
              >
                {project.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  )
}

export default Overlay
