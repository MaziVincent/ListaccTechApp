import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/LogoTrans2.png'
const Nav = ({ navbar }) => {

  return (
    <>
        <aside
          className='sidebar w-50  min-h-screen hidden dark:bg-gray-800 md:block sm:hidden z-10 xsm:hidden'
          aria-label='Sidebar'
        >
          <div className='overflow-y-auto py-4 px-3 max-h-full'>
            
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/admin'
                  className='flex items-center p-2 text-base font-normal text-white hover:text-[#000] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                >
                  <svg
                    aria-hidden='true'
                    className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
                    <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
                  </svg>
                  <span className='ml-3'>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to='/admin/learningPaths'
                  className='flex items-center p-2 text-base font-normal text-white hover:text-[#000] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                >
                  <svg
                    aria-hidden='true'
                    className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <span className='flex-1 ml-3 whitespace-nowrap'>
                    Learning path
                  </span>
                </Link>
              </li>
              
              <li>
                <Link
                  to='/admin/modules'
                  className='flex items-center p-2 text-base font-normal text-white hover:text-[#000] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                >
                  <svg
                    aria-hidden='true'
                    className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <span className='flex-1 ml-3 whitespace-nowrap'>Module</span>
                </Link>
              </li>
              
             
              
             
                
            </ul>
          </div>
        </aside>
    </>
  )
}

export default Nav
