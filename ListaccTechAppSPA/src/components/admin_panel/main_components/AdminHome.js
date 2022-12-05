import Landing from '../main_components/Landing'
import Footer from '../sub_components/Footer'
const AdminHome = () => {
  return (
    <>
      <div className=' w-screen h-screen bg-fixed bg-cover bg-worldmap dark:bg-blue-300'>
          <Landing />
        <Footer />
      </div>
    </>
  )
}

export default AdminHome
