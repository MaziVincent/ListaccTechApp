import { Link } from 'react-router-dom'
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import ViewModuleOutlinedIcon from '@mui/icons-material/ViewModuleOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { blue, brown, green, grey, purple, yellow, teal } from '@mui/material/colors';


const Nav = () => {

  return (
  
        <aside
          className='sidebar w-50  min-h-screen  dark:bg-gray-800 md:block sm: z-10 rounded'
          aria-label='Sidebar'
        >
          <div className='overflow-y-auto py-4 px-3 max-h-full'>
            
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/admin'
                  className='flex items-center p-2 text-base font-normal text-white hover:text-[#000] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-200'
                >
                  <DashboardIcon sx={{ color:teal[200], fontSize: 28}}  />
                  <span className='ml-3 hidden md:inline'>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to='/admin/learningPaths'
                  className='flex items-center p-2 text-base font-normal text-white hover:text-[#000] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-200'
                >
                  <ClassOutlinedIcon sx={{ color:purple[700], fontSize: 28}}  />
                  <span className='flex-1 ml-3 whitespace-nowrap hidden md:inline'>
                    Learning path
                  </span>
                </Link>
              </li>
              
              <li>
                <Link
                  to='/admin/modules'
                  className='flex items-center p-2 text-base font-normal text-white hover:text-[#000] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-200'
                >
                   <ViewModuleOutlinedIcon sx={{ color:green[700], fontSize: 28}}  />
                  <span className='flex-1 ml-3 whitespace-nowrap hidden md:inline'>Module</span>
                </Link>
              </li>

             
                
            </ul>
          </div>
        </aside>
    
  )
}

export default Nav
