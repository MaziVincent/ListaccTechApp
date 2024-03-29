import TopMenu from '../sub_components/TopMenu'
import { useLocation } from 'react-router-dom'

const AdminModule = () => {
    const location = useLocation()
  return (
    <div className='flex w-full'>
      <div className='w-full  sm:w-full md:w-full mt-14 mb-40'>
        <TopMenu location={location.pathname} />
       
      </div>
    </div>
  )
}

export default AdminModule
