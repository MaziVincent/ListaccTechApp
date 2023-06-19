import Footer from '../sub_components/Footer'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import TopHeader from '../sub_components/TopHeader'
import Nav from '../sub_components/Nav'

const AdminHome = () => {
  const [navbar, setNavbar] = useState(true)

  return (
  
      <div className='w-full flex flex-col overflow-x-hidden dark:text-gray-100 dark:bg-gray-900 '>
        <TopHeader  />
        <div
          className='flex w-full  pt-28 gap-1 justify-center'
          >
          
            <div className=' hidden basis-1/5 w-52 sm:hidden md:block xsm:hidden border-2'>
              <Nav />
            </div>
          
          <div className='w-full basis-4/5 border-2 '>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    
  )
}


export default AdminHome
