import { useState, useEffect } from 'react'
// import { useOutletContext } from 'react-router-dom'

const Landing = () => {
  // const [navbar] = useOutletContext()
  // console.log(navbar);
  const [count, setCount] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1)
    }, 1000)
  }, [])
  return (
    <div className=''>
      <div className='landing-container flex'>
        <div className='bg-red-400 w-full  sm:w-full md:w-full mt-14'>
          <div className='grid gap-1 grid-cols-4 px-6 mt-5'>
            <div className='flex bg-blue-400 p-8'>
              <h4>Currently 10 leaning paths</h4>
            </div>
            <div className='flex bg-blue-400 p-8'>
              <h4>Currently 100 moduls</h4>
            </div>
            <div className='flex bg-blue-400 p-8'>
              <h4>Currently 1000 topics</h4>
            </div>
            <div className='flex bg-blue-400 p-8'>
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
