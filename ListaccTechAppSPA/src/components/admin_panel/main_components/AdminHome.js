import Footer from '../sub_components/Footer'
import { useState } from "react";
import {Outlet} from 'react-router-dom'
import TopHeader from '../sub_components/TopHeader'
import Nav from '../sub_components/Nav'
const AdminHome = () => {
  const [navbar, setNavbar] = useState(true)

  return (
    <>
      <div className=' w-screen h-screen bg-fixed bg-cover bg-worldmap dark:bg-blue-300'>
        <TopHeader navbar={navbar} setNavbar={setNavbar} />
        {navbar && <Nav navbar={navbar} />}
        <Outlet context={[navbar]} />
        <Footer />
      </div>
    </>
  )
}

export default AdminHome
