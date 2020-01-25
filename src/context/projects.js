import React, { createContext } from 'react'
import { useProjects } from '../hooks'

export const ProjectsContext = createContext()

export const ProjectsProvider = ({ children }) => {
  const { projects, setProjects } = useProjects()

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  )
}
