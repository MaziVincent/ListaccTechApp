import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

const Landing = () => {
  const [navbar] = useOutletContext()
  // console.log(navbar);
  const [count, setCount] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1)
    }, 1000)
  }, [])
  return (
    <div className=' '>
      <div className='landing-container flex justify-end'>
        <div
          className={
            navbar
              ? 'bg-red-400 w-[85vw] h-screen sm:w-full md:w-[85vw]'
              : 'bg-red-400 w-full h-screen sm:w-full md:w-full'
          }
        >
          <div className='grid gap-1 grid-cols-4 px-6'>
            <div className='flex bg-blue-400'>
              <h4>Currently 10 leaning paths</h4>
            </div>
            <div className='flex bg-blue-400'>
              <h4>Currently 100 moduls</h4>
            </div>
            <div className='flex bg-blue-400'>
              <h4>Currently 1000 topics</h4>
            </div>
            <div className='flex bg-blue-400'>
              <h4>Currently 10,000 users</h4>
            </div>
          </div>
          <h1 className='text-center'>I've rendered {count} times!</h1>
        </div>
      </div>
    </div>
  )
}

export default Landing
