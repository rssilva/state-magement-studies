import React from 'react'
import { Provider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { store } from './store/store.ts'
import { TasksPage } from './pages/tasks.tsx'
import './App.css'

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        {/* <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    </Provider>
  )
}

export default App
