import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context'
import AddTask from '../components/AddTask'

const Header = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext)

  const [showMain, setShowMain] = useState(false)
  const [showQuickAdd, setShowQuickAdd] = useState(false)

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <span role="img" aria-label="logo">
            👽
          </span>{' '}
          todoist clone app
        </div>
        <div className="nav__right">
          <ul>
            <li className="nav__add">
              <button
                onClick={() => {
                  setShowQuickAdd(true)
                  setShowMain(true)
                }}
                onKeyDown={() => {
                  setShowQuickAdd(true)
                  setShowMain(true)
                }}
                aria-label="Task quick add"
                type="button"
              >
                ﹢
              </button>
            </li>
            <li className="nav__mode">
              {theme === 'light' ? (
                <button
                  onClick={toggleTheme}
                  onKeyDown={toggleTheme}
                  aria-label="Dark mode on"
                  type="button"
                >
                  <span role="img" aria-labelledby="dark">
                    🌒
                  </span>
                </button>
              ) : (
                <button
                  onClick={toggleTheme}
                  onKeyDown={toggleTheme}
                  aria-label="Dark mode off"
                  type="button"
                >
                  <span role="img" aria-labelledby="light">
                    🌞
                  </span>
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>

      <AddTask
        showAddTask={false}
        showQuickAdd={showQuickAdd}
        setShowQuickAdd={setShowQuickAdd}
        showMain={showMain}
      />
    </header>
  )
}

export default Header
