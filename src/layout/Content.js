import React from 'react'
import Sidebar from './Sidebar'
import Tasks from '../components/Tasks'

const Content = () => {
  return (
    <section className="content">
      <Tasks />
      <Sidebar />
    </section>
  )
}

export default Content
