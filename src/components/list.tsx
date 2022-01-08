import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch.ts'

const Item = ({ file, onChange }) => {
  const fileName = file
    .replace('_discography.json', '')
    .replace('_', ' ')

  return (
    <li>
      <input id={file} onClick={(ev) => onChange(ev)} type="checkbox" />
      <label id={file}>{fileName}</label>
    </li>
  )
}

export const List = ({ items, onChange }) => {
  // const files: string[] = useFetch()

  function onItemClick (ev, file) {
    onChange(file, ev.target.checked)
  }

  return (
    <ul>
      {items.map((file) => <Item key={file} file={file} onChange={(ev) => onItemClick(ev, file)} />)}
    </ul>
  )
}