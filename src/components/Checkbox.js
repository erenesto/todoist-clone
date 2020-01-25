/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { firebase } from '../firebaseConfig'

const Checkbox = ({ id }) => {
  const archiveTask = () => {
    firebase
      .firestore()
      .collection('tasks')
      .doc(id)
      .update({
        archived: true,
      })
  }

  return (
    <div className="checkbox-wrapper" onClick={() => archiveTask()}>
      <span className="checkbox" />
    </div>
  )
}

export default Checkbox
