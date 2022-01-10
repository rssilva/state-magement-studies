import React from 'react'
// import { useFetchFiles } from '../hooks/useFetchFiles.ts'

const Item = ({ file, onChange }) => {
  const fileName = file.replace('_discography.json', '').replace('_', ' ')

  return (
    <li key={file}>
      <input id={file} onClick={(ev) => onChange(ev)} type="checkbox" />
      <label htmlFor={file}>{fileName}</label>
    </li>
  )
}

type Args = {
  items: { [key: string]: unknown }[]
  onChange: (file: string, ev: Event) => void
}

export const List = ({ items, onChange }: Args): React.ReactElement => {
  // const files: string[] = useFetch()

  function onItemClick(ev, file) {
    onChange(file, ev.target.checked)
  }

  return (
    <ul>
      {items.map((file) => (
        <Item key={file} file={file} onChange={(ev) => onItemClick(ev, file)} />
      ))}
    </ul>
  )
}
