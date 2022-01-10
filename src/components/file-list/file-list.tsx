import React, { useState } from 'react'
import { List } from '../list.tsx'
import { useFetchFiles } from '../../hooks/useFetchFiles.ts'
// import { useFetchDataByFile } from '../../hooks/useFetchDataByFile.ts'

async function getData(files: object) {
  const filesToFetch = Object.entries(files).reduce((previous, current) => {
    if (current[1]) {
      return {
        ...previous,
        [`${current[0]}`]: true,
      }
    }

    return previous
  }, {})

  const data = await fetch('http://localhost:5002/data', {
    method: 'POST',
    body: JSON.stringify(filesToFetch),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return data.json()
}

type Args = {
  onData: (data) => { [key: string]: unknown }
}

export const FileList = ({ onData }: Args): React.ReactElement => {
  const files: string[] = useFetchFiles()
  // const [dataByFile, setDataByFile] = useState({})
  const [selected, setSelected] = useState({})

  function onChange(value, isChecked) {
    setSelected((prev) => ({
      ...prev,
      [`${value}`]: isChecked,
    }))
  }

  async function getDataByFile(selectedFiles) {
    const data = await getData(selectedFiles)
    // setDataByFile(data)
    onData(data)
  }

  return (
    <div>
      <button onClick={() => getDataByFile(selected)}>Search</button>
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
