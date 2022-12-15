import ListLearningPaths from '../sub_components/ListLearningPaths'
import TopMenu from '../sub_components/TopMenu'
import {useLocation} from 'react-router-dom'
const AdminLearningPath = () => {
    const location = useLocation()
    const path_name = location.pathname.split("/")
    console.log(path_name[2]);
    return (
      <div className='flex w-full'>
        <div className='w-full  sm:w-full md:w-full mt-14 mb-40'>
          <TopMenu location={location.pathname} />
          <ListLearningPaths />
        </div>
      </div>
    )
}
 
export default AdminLearningPath;