import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../../../assets/images/LogoTrans2.png'

const TopHeader = () => {
 

  return (
    <>
      {navbar && <Nav navbar={navbar} setNavbar={setNavbar} />}
      <div className='relative bg-[#111827] text-white -z-1'>
        <div className='mx-auto max-w-7xl px-2 sm:px-3'>
          <div className='flex items-center justify-between border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10'>
            <div className='hidden xsm:hidden sm:hidden md:block'>
              <button
                className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                onClick={showSideNave}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6 text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>

            <div className='lg:flex-1 md:flex-1'>
              <h3>Admin</h3>
            </div>

            <div className='sm:flex justify-end -my-2 -mr-2 md:hidden lg:hidden'>
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                aria-expanded='false'
                onClick={() => setSmallNav(true)}
              >
                <span className='sr-only'>Open menu</span>
                {/* <!-- Heroicon name: outline/bars-3 --> */}
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>
              </button>
            </div>
            <nav className='hidden space-x-10 md:flex'>
              <Link
                href='#'
                className='text-base font-medium text-gray-500 hover:text-gray-900'
              >
                Pricing
              </Link>
              <Link
                href='#'
                className='text-base font-medium text-gray-500 hover:text-gray-900'
              >
                Docs
              </Link>
            </nav>
            <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0'>
              <Link
                href='#'
                className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
              >
                Sign out
              </Link>
            </div>
          </div>
        </div>
    
      </div>
    </>
  )
}

export default TopHeader
