import React from 'react'

const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav className="nav">
        <div className="logo">
          <span role="img" aria-label="logo">
            👽
          </span>{' '}
          todoist clone app
        </div>
        <div className="nav__right">
          <ul>
            <li className="nav__add" data-testid="header-add-task-action">
              <span>﹢</span>
            </li>
            <li className="mode" data-testid="mode-action">
              <span role="img" aria-labelledby="moon">
                🌒
              </span>
              {/* <span>🌞</span> */}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
