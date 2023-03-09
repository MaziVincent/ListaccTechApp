import Footer from '../sub_components/Footer'
import Nav from '../sub_components/Nav'
import TopHeader from '../sub_components/TopHeader'
import Landing from '../main_components/Landing'
import { Outlet } from 'react-router-dom'
const AdminHome = () => {
  

  return (
    <div className=' w-full h-full flex flex-col  '>
      <div className='basis-1/12 '>
        <TopHeader />
        
      </div>
      <div className='basis-10/12 gap-2 flex items-start w-full h-full'>
          <div className='md:basis-1/6 h-screen w-1/12  shadow'>
           <Nav />
          </div>
        <div className='md:basis-5/6 w-11/12 bg-gray h-screen '> 
          <Outlet/>
        </div> 

      </div>
        

      {/* <div className='basis-1/12'>
        <Footer />
      </div>  */}

    
  </div>
  )
}

export default AdminHome
