import React from 'react'
// import { FileList } from './components/file-list/file-list.tsx'
import { Routes, Route } from 'react-router-dom'
import { TasksPage } from './pages/tasks.tsx'
import './App.css'

function App(): React.ReactElement {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        {/* <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    </div>
  )
}

export default App
