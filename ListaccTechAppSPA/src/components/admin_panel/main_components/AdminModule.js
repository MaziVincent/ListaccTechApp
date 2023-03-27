import TopMenu from '../sub_components/TopMenu'
import { useLocation } from 'react-router-dom'
import ListModules from '../sub_components/ListModules'
const AdminModule = () => {
    const location = useLocation()
  return (
    <div className='flex w-full'>
      <div className='w-full  sm:w-full md:w-full mt-14 mb-40'>
        <TopMenu location={location.pathname} />
        <ListModules />
      </div>
    </div>
  )
}

export default AdminModule
