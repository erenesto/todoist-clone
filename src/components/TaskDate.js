import React, { useState } from 'react'
import moment from 'moment'
import {
  AiFillRocket,
  AiOutlineGlobal,
  AiOutlineDingding,
  AiFillCalendar,
} from 'react-icons/ai'

import Dropdown from './Dropdown'

const TaskDate = ({ setTaskDate }) => {
  const [active, setActive] = useState(false)
  const [dataId, setDataId] = useState('')

  const handleActive = id => {
    if (id === 'today') {
      setDataId('today')
    } else if (id === 'tomorrow') {
      setDataId('tomorrow')
    } else if (id === 'nextweek') {
      setDataId('nextweek')
    }
  }

  return (
    <Dropdown BtnIcon={AiFillCalendar}>
      <li>
        <div
          onClick={e => {
            setTaskDate(moment().format('DD/MM/YYYY'))
            handleActive(e.currentTarget.dataset.id)
          }}
          onKeyDown={() => {
            setTaskDate(moment().format('DD/MM/YYYY'))
          }}
          tabIndex={0}
          aria-label="Select today as the task date"
          role="button"
          data-id="today"
          className={dataId === 'today' ? 'active' : ''}
        >
          <span>
            <AiFillRocket />
          </span>
          <span>Today</span>
        </div>
      </li>
      <li>
        <div
          onClick={e => {
            setTaskDate(
              moment()
                .add(1, 'day')
                .format('DD/MM/YYYY'),
            )
            handleActive(e.currentTarget.dataset.id)
          }}
          onKeyDown={() => {
            setTaskDate(
              moment()
                .add(1, 'day')
                .format('DD/MM/YYYY'),
            )
          }}
          role="button"
          tabIndex={0}
          data-id="tomorrow"
          aria-label="Select tomorrow as the task date"
          className={dataId === 'tomorrow' ? 'active' : ''}
        >
          <span>
            <AiOutlineGlobal />
          </span>
          <span>Tomorrow</span>
        </div>
      </li>
      <li>
        <div
          onClick={e => {
            setTaskDate(
              moment()
                .add(7, 'days')
                .format('DD/MM/YYYY'),
            )
            handleActive(e.currentTarget.dataset.id)
          }}
          onKeyDown={() => {
            setTaskDate(
              moment()
                .add(7, 'days')
                .format('DD/MM/YYYY'),
            )
          }}
          aria-label="Select next week as the task date"
          tabIndex={0}
          role="button"
          data-id="nextweek"
          className={dataId === 'nextweek' ? 'active' : ''}
        >
          <span>
            <AiOutlineDingding />
          </span>
          <span>Next week</span>
        </div>
      </li>
    </Dropdown>
  )
}

export default TaskDate
