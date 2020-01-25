/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from 'react'
import moment from 'moment'
import { AiOutlineUnorderedList, AiFillCalendar } from 'react-icons/ai'
import { firebase } from '../firebaseConfig'
import { SelectedProjectContext } from '../context'

const AddTask = ({
  showAddTask = true,
  showQuickAdd,
  setShowQuickAdd,
  showMain = false,
}) => {
  const [task, setTask] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [project, setProject] = useState('')
  const [show, setShow] = useState(showMain)
  const [showOverlay, setShowOverlay] = useState(false)
  const [showDate, setShowDate] = useState(false)

  const { selectedProject } = useContext(SelectedProjectContext)

  const addTask = () => {
    const projectId = project || selectedProject
    let compDate = ''

    if (projectId === 'TODAY') {
      compDate = moment().format('DD/MM/YYYY')
    } else if (projectId === 'NEXT_SEVEN_DAYS') {
      compDate = moment()
        .add(7, 'days')
        .format('DD/MM/YYYY')
    }

    return (
      task &&
      projectId &&
      firebase
        .firestore()
        .collection('tasks')
        .add({
          userId: '23a4b8ab411a',
          archived: false,
          projectId,
          task,
          date: compDate || taskDate,
        })
        .then(() => {
          setTask('')
          setProject('')
          setShow('')
          setShowOverlay(false)
        })
    )
  }

  return (
    <div className={showQuickAdd ? 'add-task add-task__overlay' : 'add-task'}>
      {showAddTask && (
        <div className="add-task__slight" onClick={() => setShow(!show)}>
          <div className="add-task__icon">+</div>
          <div className="add-task__text">Add Task</div>
        </div>
      )}

      {(show || showQuickAdd) && (
        <div className="add-task__main">
          {showQuickAdd && (
            <>
              <div>
                <h2 className="header">Add Task Quick</h2>
                <span
                  className="add-task__cancel-x"
                  aria-label="Cancel adding task"
                  onClick={() => {
                    setShow(false)
                    setShowOverlay(false)
                    setShowQuickAdd(false)
                  }}
                  onKeyDown={() => {
                    setShow(false)
                    setShowOverlay(false)
                    setShowQuickAdd(false)
                  }}
                  tabIndex={0}
                  role="button"
                >
                  X
                </span>
              </div>
            </>
          )}

          <input
            className="add-task__content"
            aria-label="Enter a task"
            placeholder="Enter a task"
            type="text"
            value={task}
            onChange={e => setTask(e.target.value)}
          />
          <button
            type="button"
            className="add-task__btn"
            onClick={() =>
              showQuickAdd ? addTask() && setShowQuickAdd(false) : addTask()
            }
          >
            Add Task
          </button>
          {!showQuickAdd && (
            <span
              className="add-task__cancel"
              onClick={() => {
                setShow(false)
                setShowOverlay(false)
              }}
              onKeyDown={() => {
                setShow(false)
                setShowOverlay(false)
              }}
              aria-label="Cancel adding a task"
              tabIndex={0}
              role="button"
            >
              Cancel
            </span>
          )}
          <span
            className="add-task__project"
            onClick={() => setShowOverlay(!showOverlay)}
            onKeyDown={() => setShowOverlay(!showOverlay)}
            tabIndex={0}
            role="button"
          >
            <AiOutlineUnorderedList />
          </span>
          <span
            className="add-task__date"
            onClick={() => setShowDate(!showDate)}
            onKeyDown={() => setShowDate(!showDate)}
            tabIndex={0}
            role="button"
          >
            <AiFillCalendar />
          </span>
        </div>
      )}
    </div>
  )
}

export default AddTask
