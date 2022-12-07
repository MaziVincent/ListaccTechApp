import { useState, useEffect } from 'react'
import TopHeader from '../sub_components/TopHeader'

const Landing = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1)
      }, 1000)
    },[])
  return (
    <div className=' '>
        <TopHeader />
      <h1 className='text-center'>I've rendered {count} times!</h1>
    </div>
  )
}

export default Landing
