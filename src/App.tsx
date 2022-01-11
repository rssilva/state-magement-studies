import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { TasksPage } from './pages/tasks.tsx'
import './App.css'

function App(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
      {/* <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  )
}

export default App
