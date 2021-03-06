/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from 'react'
import moment from 'moment'
import { firebase } from '../firebaseConfig'
import { SelectedProjectContext } from '../context'
import TaskDate from './TaskDate'
import Overlay from './Overlay'

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
          archived: false,
          projectId,
          task,
          date: compDate || taskDate,
        })
        .then(() => {
          setTask('')
          setProject('')
          setShow('')
        })
    )
  }

  return (
    <div className={showQuickAdd ? 'add-task add-task__overlay' : 'add-task'}>
      {showAddTask && (
        <div className="add-task__slight" onClick={() => setShow(!show)}>
          <div className="add-task__text">Add Task</div>
          <div className="add-task__icon">+</div>
        </div>
      )}

      {(show || showQuickAdd) && (
        <div className="add-task__main">
          {showQuickAdd && (
            <>
              <div className="add-task__header">
                <h2 className="add-task__title">Add Task Quick</h2>
                <span
                  className="add-task__cancel-btn"
                  aria-label="Cancel adding task"
                  onClick={() => {
                    setShow(false)

                    setShowQuickAdd(false)
                  }}
                  onKeyDown={() => {
                    setShow(false)

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

          <div className="add-task__settings">
            <div className="add-task__btns">
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
                  }}
                  onKeyDown={() => {
                    setShow(false)
                  }}
                  aria-label="Cancel adding a task"
                  tabIndex={0}
                  role="button"
                >
                  Cancel
                </span>
              )}
            </div>

            <div className="add-task__icons">
              <Overlay setProject={setProject} />
              <TaskDate setTaskDate={setTaskDate} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AddTask
