/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from 'react'
import shortid from 'shortid'
import { firebase } from '../firebaseConfig'
import { ProjectsContext } from '../context'

const AddProject = ({ showing = false }) => {
  const [show, setShow] = useState(showing)
  const [projectName, setProjectName] = useState('')

  const projectId = shortid.generate()
  const { setProjects } = useContext(ProjectsContext)

  const addProject = () => {
    return (
      projectName &&
      firebase
        .firestore()
        .collection('projects')
        .add({
          projectId,
          name: projectName,
          userId: '23a4b8ab411a',
        })
        .then(() => {
          setProjects([])
          setProjectName('')
          setShow(false)
        })
    )
  }

  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="add-project__input">
          <input
            type="text"
            className="add-project__name"
            data-testid="project-name"
            placeholder="Project Name"
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
          />
          <button
            className="add-project__btn"
            data-testid="project-btn"
            type="button"
            onClick={() => addProject()}
          >
            Add Project
          </button>
          <span
            className="add-project__cancel"
            data-testid="hide-project-overlay"
            onClick={() => setShow(false)}
          >
            Cancel
          </span>
        </div>
      )}
      <span className="add-project__icon">+</span>
      <span
        className="add-project__text"
        data-testid="add-project-action"
        onClick={() => setShow(!show)}
      >
        Add Project
      </span>
    </div>
  )
}

export default AddProject
