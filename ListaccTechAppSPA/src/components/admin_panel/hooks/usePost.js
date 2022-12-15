import {useState} from 'react'

const usePost = (url, formData, jwt) => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [res, setRes] = useState(null)
    
    const makePost = async () => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + jwt,
          },
          body: formData,
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            setRes(json)
            setIsLoading(false)
        }
    }

    return {error, res, isLoading, makePost}
}
 
export default usePost;