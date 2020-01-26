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
    <div className="add-project">
      <span className="add-project__text" onClick={() => setShow(!show)}>
        Add Project
      </span>
      <span className="add-project__icon">+</span>
      {show && (
        <div className="add-project__input">
          <input
            type="text"
            className="add-project__name"
            placeholder="Project Name"
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
          />
          <button
            className="add-project__btn"
            type="button"
            onClick={() => addProject()}
          >
            Add Project
          </button>
          <span className="add-project__cancel" onClick={() => setShow(false)}>
            Cancel
          </span>
        </div>
      )}
    </div>
  )
}

export default AddProject
