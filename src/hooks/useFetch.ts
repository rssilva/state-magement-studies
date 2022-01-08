import { useEffect, useState } from 'react'

export function useFetch() {
  const [ data, setData ] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('http://localhost:5002/files')

      const json = await data.json() || []
      
      setData(json)
    }

    fetchData()
  }, [])

  return data
}