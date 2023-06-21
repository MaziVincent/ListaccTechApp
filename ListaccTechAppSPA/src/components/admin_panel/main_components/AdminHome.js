import Footer from '../sub_components/Footer'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import TopHeader from '../sub_components/TopHeader'
import Nav from '../sub_components/Nav'

const AdminHome = () => {
  const [navbar, setNavbar] = useState(true)

  return (
  
      <div className='w-full flex flex-col  dark:text-gray-100 dark:bg-gray-900 '>
        <TopHeader  />
        <div
          className='flex w-full  pt-28 gap-1 justify-center mb-12'
          >
          
            <div className=' hidden md:basis-1/5  sm:basis-1/12 md:block xsm:hidden border-2'>
              <Nav />
            </div>
          
          <div className='w-full basis-4/5 sm:basis-10/12 border-2 mb-28'>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    
  )
}


export default AdminHome
