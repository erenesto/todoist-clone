import React from 'react'
import moment from 'moment'
import {
  AiFillRocket,
  AiOutlineGlobal,
  AiOutlineDingding,
} from 'react-icons/ai'

const TaskDate = ({ setTaskDate, showDate, setShowDate }) =>
  showDate && (
    <div className="task-date" data-testid="task-date-overlay">
      <ul className="task-date__list">
        <li>
          <div
            onClick={() => {
              setShowDate(false)
              setTaskDate(moment().format('DD/MM/YYYY'))
            }}
            onKeyDown={() => {
              setShowDate(false)
              setTaskDate(moment().format('DD/MM/YYYY'))
            }}
            data-testid="task-date-today"
            tabIndex={0}
            aria-label="Select today as the task date"
            role="button"
          >
            <span>
              <AiFillRocket />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              setShowDate(false)
              setTaskDate(
                moment()
                  .add(1, 'day')
                  .format('DD/MM/YYYY'),
              )
            }}
            onKeyDown={() => {
              setShowDate(false)
              setTaskDate(
                moment()
                  .add(1, 'day')
                  .format('DD/MM/YYYY'),
              )
            }}
            role="button"
            tabIndex={0}
            aria-label="Select tomorrow as the task date"
          >
            <span>
              <AiOutlineGlobal />
            </span>
            <span>Tomorrow</span>
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              setShowDate(false)
              setTaskDate(
                moment()
                  .add(7, 'days')
                  .format('DD/MM/YYYY'),
              )
            }}
            onKeyDown={() => {
              setShowDate(false)
              setTaskDate(
                moment()
                  .add(7, 'days')
                  .format('DD/MM/YYYY'),
              )
            }}
            data-testid="task-date-next-week"
            aria-label="Select next week as the task date"
            tabIndex={0}
            role="button"
          >
            <span>
              <AiOutlineDingding />
            </span>
            <span>Next week</span>
          </div>
        </li>
      </ul>
    </div>
  )

export default TaskDate
