import Footer from '../sub_components/Footer'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import TopHeader from '../sub_components/TopHeader'
import Nav from '../sub_components/Nav'

const AdminHome = () => {
  const [navbar, setNavbar] = useState(true)

  return (
    <>
      <div className='w-screen h-screen bg-cover bg-fixed bg-worldmap dark:bg-blue-300 overflow-x-hidden'>
        <TopHeader navbar={navbar} setNavbar={setNavbar} />
        <div
          className={
            navbar
              ? 'grid grid-cols-[208px_minmax(0,_1fr)] gap-0 sm:grid-rows-1 md:grid-cols-[208px_minmax(0,_1fr)]'
              : 'grid grid-cols-1 gap-1 '
          }
        >
          {navbar && (
            <div className=' hidden w-52 sm:hidden md:block xsm:hidden'>
              <Nav />
            </div>
          )}
          <div className='w-full col-span-2 sm:col-span-2 xsm:col-span-2 md:col-span-1'>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default AdminHome
