import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)
  const token = JSON.parse(localStorage.getItem('token'))
  const jwt = token.token
  let count

  useEffect(() => {
    const abortCont = new AbortController()
    fetch(url, {
      method: 'GET',
      headers: { Authorization: 'Bearer ' + jwt },
    })
      .then((res) => {
        if (!res.ok) {
          if (res.status === 401) {
            throw Error('Unauthorised')
          } else {
            throw Error('could not fetch the data for the resource')
          }
        }
        return res.json()
      })
      .then((data) => {
        setData(data)
        setIsPending(false)
        setError(null)
      })
      .catch((err) => {
        setIsPending(false)
        setError(err.message)
      })
    return () => abortCont.abort()
  }, [url, jwt])
  if (data) {
    count = data.length()
  }
  return { data, isPending, error, count }
}

export default useFetch
