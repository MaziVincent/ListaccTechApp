import { Link } from 'react-router-dom'
import DashboardCustomizeSharpIcon from '@mui/icons-material/DashboardCustomizeSharp';
import BookOnlineSharpIcon from '@mui/icons-material/BookOnlineSharp';

const Nav = () => {


  return (
    <>

      <aside
        className=' w-full h-full bg-gray-600 md:block  z-10 flex '
        aria-label='Sidebar'
      >
        <div className='overflow-y-auto py-4  max-h-full'>

          <ul className='space-y-2 w-full flex flex-col  justify-center items-center '>
            <li className='w-full'>
              <Link
                to='#'
                className='flex justify-center border-b-2 items-center p-2 text-base font-normal text-white hover:text-[#000] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <div className='flex items-center justify-start gap-1'>
                  <span className='w-full flex items-center justify-center md:w-10'>
                    <DashboardCustomizeSharpIcon fontSize='large' />
                  </span>
                  <span className=' hidden lg:inline md:w-3/4'>Dashboard</span>
                </div>
              </Link>
            </li>

            <li className='w-full'>
              <Link
                to='#'
                className='flex justify-center items-center  p-2 text-base font-normal text-white hover:text-[#000] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <div className='flex items-center justify-start gap-1 '>
                  <span className='w-full flex items-center  justify-center md:w-10'>
                    <BookOnlineSharpIcon fontSize='large' />
                  </span>
                  <span className=' hidden lg:inline md:w-3/4'> All Paths</span>
                </div>
              </Link>
            </li>



          </ul>
        </div>
      </aside>

    </>
  )
}

export default Nav
