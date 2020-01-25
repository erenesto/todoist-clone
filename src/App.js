import React from 'react'
import Header from './layout/Header'
import Content from './layout/Content'
import './styles/App.scss'

import { ProjectsProvider, SelectedProjectProvider } from './context'

const App = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  )
}

export default App
