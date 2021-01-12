import { useState, useEffect } from 'react'
import fetch from 'node-fetch'


export default function useFetch() {
  const [data, setData] = useState("")
  return {data}
}



