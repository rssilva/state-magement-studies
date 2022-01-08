import React, { useState } from 'react'
import { List } from '../list.tsx'
import { useFetch } from '../../hooks/useFetch.ts'

function getData(files: object) {
  console.log(files)
}

export const FileList = () => {
  const files: string[] = useFetch()
  const [selected, setSelected] = useState({})

  function onChange(value, isChecked) {
    setSelected((prev) => ({
      ...prev,
      [`${value}`]: isChecked,
    }))
  }

  return (
    <div>
      <button onClick={() => getData(selected)}>Search</button>
      <div>
        <input type="checkbox" />
        <span>Select All</span>
      </div>
      <List
        items={files}
        onChange={(value, checked) => onChange(value, checked)}
      />
    </div>
  )
}
