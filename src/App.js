import React, { useState } from 'react'
import Header from './layout/Header'
import Content from './layout/Content'
import './styles/App.scss'

import {
  ProjectsProvider,
  SelectedProjectProvider,
  ThemeContext,
} from './context'

const App = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light')

  return (
    <ThemeContext.Provider value={theme}>
      <SelectedProjectProvider>
        <ProjectsProvider>
          <div className={`App ${theme}`}>
            <Header toggleTheme={toggleTheme} />
            <Content />
          </div>
        </ProjectsProvider>
      </SelectedProjectProvider>
    </ThemeContext.Provider>
  )
}

export default App
