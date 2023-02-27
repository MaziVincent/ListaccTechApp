import Landing from '../main_components/Landing'
import Footer from '../sub_components/Footer'
import TopHeader from '../sub_components/TopHeader'
const AdminHome = () => {
  return (
    
      <div className=' w-full h-screen flex flex-col  '>
        <div className='basis-1/12 '>
          <TopHeader />
          
        </div>
         <div className='basis-10/12'>
          <Landing /> 

         </div>
          

        <div className='basis-1/12'>
          <Footer />
        </div> 

        
      </div>
    
  )
}

export default AdminHome
