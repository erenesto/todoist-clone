import React, { useState, useContext } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { SelectedProjectContext, ProjectsContext } from '../context'
import { firebase } from '../firebaseConfig'

const Project = ({ proj }) => {
  const [confirmDelete, setConfirmDelete] = useState(false)
  const { projects, setProjects } = useContext(ProjectsContext)
  const { setSelectedProject } = useContext(SelectedProjectContext)

  const deleteProject = id => {
    firebase
      .firestore()
      .collection('projects')
      .doc(id)
      .delete()
      .then(() => {
        setProjects([...projects])
        setSelectedProject('INBOX')
      })
  }

  return (
    <>
      <span className="sidebar__square">▪︎</span>
      <span className="sidebar__project-name">{proj.name}</span>
      <span
        className="sidebar__project-delete"
        role="button"
        tabIndex={0}
        onClick={() => setConfirmDelete(!confirmDelete)}
        onKeyDown={() => setConfirmDelete(!confirmDelete)}
      >
        <AiOutlineDelete />
      </span>
      {confirmDelete && (
        <div className="project-delete-modal">
          <div className="project-delete-modal__inner">
            <p>Are you sure ?</p>
            <button type="button" onClick={() => deleteProject(proj.docId)}>
              Delete
            </button>
            <span
              onClick={() => setConfirmDelete(!confirmDelete)}
              onKeyDown={() => setConfirmDelete(!confirmDelete)}
              tabIndex={0}
              role="button"
              aria-label="Cancel delete"
            >
              Cancel
            </span>
          </div>
        </div>
      )}
    </>
  )
}

export default Project
