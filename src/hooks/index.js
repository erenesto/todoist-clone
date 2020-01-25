/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react'
import moment from 'moment'
import { firebase } from '../firebaseConfig'
import { comparedTasksExist } from '../helpers'

export const useTasks = selectedProject => {
  const [tasks, setTasks] = useState([])
  const [archivedTasks, setArchivedTasks] = useState([])

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', '23a4b8ab411a')

    unsubscribe =
      selectedProject && !comparedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where(
            'date',
            '==',
            moment().format('DD/MM/YYYY'),
          ))
        : selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe = unsubscribe.where('date', '==', ''))
        : unsubscribe

    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      const newTask = snapshot.docs.map(task => ({
        id: task.id,
        ...task.data(),
      }))
      setTasks(
        selectedProject === 'NEXT_SEVEN_DAYS'
          ? newTask.filter(
              task =>
                moment(task.date, 'DD/MM/YYYY').diff(moment(), 'days') <= 7 &&
                task.archived !== true,
            )
          : newTask.filter(task => task.archived !== true),
      )
      setArchivedTasks(newTask.filter(task => task.archived !== false))
    })

    return () => unsubscribe()
  }, [selectedProject])

  return { tasks, archivedTasks }
}

export const useProjects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('projects')
      .where('userId', '==', '23a4b8ab411a')
      .orderBy('projectId')
      .get()
      .then(snapshot => {
        const allProjects = snapshot.docs.map(project => ({
          ...project.data(),
          docId: project.id,
        }))

        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects)
        }
      })
  }, [projects])

  return { projects, setProjects }
}
