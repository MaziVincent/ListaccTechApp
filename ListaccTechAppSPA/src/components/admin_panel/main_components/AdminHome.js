import Footer from '../sub_components/Footer'
import TopHeader from '../sub_components/TopHeader'
const AdminHome = () => {
  const [navbar, setNavbar] = useState(true)

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
