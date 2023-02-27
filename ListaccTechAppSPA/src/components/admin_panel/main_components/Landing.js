import { useState, useEffect } from 'react'
import Nav from '../sub_components/Nav'

const Landing = () => {
  const [navbar, setNavbar] = useState(true)
  const [count, setCount] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1)
    }, 1000)
  }, [])
  return (
    <div className='flex items-start w-full h-full '>
     
     <div className='md:basis-1/6 h-full w-1/12  border-2 border-red-500'>
        <Nav  /> 

      </div>
     <div className='md:basis-5/6 w-11/12 bg-gray border-2 border-red'> Contents </div> 
        
    </div>
  )
}

export default Landing
