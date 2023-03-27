import { useState, useEffect } from 'react'

const useGet = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)
  const token = JSON.parse(localStorage.getItem('token'))
  const jwt = token.token
  

  useEffect(() => {
    const abortCont = new AbortController()
    setTimeout(() => {
        const response = fetch(url, {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + jwt },
        })
            const json = response.json()
        if (!response.ok) {
            setIsPending(false)
            setError(true)
        }
        if (response.ok) {
            setData(json)
            setIsPending(false)
        }
    }, 1000);
    return () => abortCont.abort()
  }, [url, jwt])

  return { data, isPending, error }
}

export default useGet
