/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from 'react'
import {
  AiOutlineInbox,
  AiOutlineCalendar,
  AiOutlineHistory,
  AiOutlineCaretDown,
} from 'react-icons/ai'
import { SelectedProjectContext } from '../context'
import Projects from '../components/Projects'
import AddProject from '../components/AddProject'

const Sidebar = () => {
  const { setSelectedProject } = useContext(SelectedProjectContext)
  const [active, setActive] = useState('inbox')
  const [showProjects, setShowProjects] = useState(true)

  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <li
          className={active === 'inbox' ? 'active' : ''}
          onClick={() => {
            setActive('inbox')
            setSelectedProject('INBOX')
          }}
        >
          <div>
            <span>
              <AiOutlineInbox />
            </span>
            <span>Inbox</span>
          </div>
        </li>
        <li
          className={active === 'today' ? 'active' : ''}
          onClick={() => {
            setActive('today')
            setSelectedProject('TODAY')
          }}
        >
          <div>
            <span>
              <AiOutlineCalendar />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li
          className={active === 'nextseven' ? 'active' : ''}
          onClick={() => {
            setActive('nextseven')
            setSelectedProject('NEXT_SEVEN_DAYS')
          }}
        >
          <div>
            <span>
              <AiOutlineHistory />
            </span>
            <span>Next 7 days</span>
          </div>
        </li>
      </ul>
      <div
        className="sidebar__mid"
        onClick={() => setShowProjects(!showProjects)}
      >
        <span>
          <AiOutlineCaretDown
            className={!showProjects ? 'hidden-projects' : ''}
          />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  )
}

export default Sidebar
