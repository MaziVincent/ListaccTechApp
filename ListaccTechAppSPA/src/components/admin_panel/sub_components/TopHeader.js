import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../../../assets/images/LogoTrans2.png'

const TopHeader = ({ navbar, setNavbar }) => {
  const [smallNav, setSmallNav] = useState(false)

  const showSideNave = () => {
    setNavbar(!navbar)
  }
  const removeHeader = () => {
    setSmallNav(false)
  }

  return (
    <>
      <div className='relative bg-[#111827] text-white -z-1'>
        <div className='mx-auto max-w-7xl px-2 sm:px-3'>
          <div className='flex items-center justify-between border-b-2 border-gray-100 py-2 md:justify-start md:space-x-10'>
            <div className='hidden xsm:hidden sm:hidden md:block'>
              {!navbar ? (
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
              ) : (
                <button
                  className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                  onClick={showSideNave}
                >
                  <svg
                    className='h-6 w-6 text-white '
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
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              )}
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

        {/* <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  --> */}
        {smallNav && (
          <div className=' absolute inset-x-0 top-0 origin-top-right transform transition md:hidden'>
            <div className='divide-y-2 divide-gray-50 rounded-lg bg-blue-500 shadow-lg ring-1 ring-black ring-opacity-5'>
              <div className='px-5 pt-5 pb-6'>
                <div className='flex items-center justify-between'>
                  <div>
                    <img className='h-8 w-auto' src={Logo} alt='Your Company' />
                  </div>
                  <div className='-mr-2'>
                    <button
                      type='button'
                      className='inline-flex items-center justify-center rounded-md bg-blue-400 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                      onClick={removeHeader}
                    >
                      <span className='sr-only'>Close menu</span>
                      {/* <!-- Heroicon name: outline/x-mark --> */}
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
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='mt-6'>
                  <nav className='grid gap-y-8'>
                    <Link
                      href='#'
                      className='-m-3 flex items-center rounded-md p-3 hover:bg-gray-50'
                    >
                      {/* <!-- Heroicon name: outline/chart-bar --> */}
                      <svg
                        className='h-6 w-6 flex-shrink-0 text-indigo-600'
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
                          d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
                        />
                      </svg>
                      <span className='ml-3 text-base font-medium text-gray-900'>
                        Analytics
                      </span>
                    </Link>

                    <Link
                      href='#'
                      className='-m-3 flex items-center rounded-md p-3 hover:bg-gray-50'
                    >
                      {/* <!-- Heroicon name: outline/cursor-arrow-rays --> */}
                      <svg
                        className='h-6 w-6 flex-shrink-0 text-indigo-600'
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
                          d='M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59'
                        />
                      </svg>
                      <span className='ml-3 text-base font-medium text-gray-900'>
                        Engagement
                      </span>
                    </Link>

                    <Link
                      href='#'
                      className='-m-3 flex items-center rounded-md p-3 hover:bg-gray-50'
                    >
                      {/* <!-- Heroicon name: outline/shield-check --> */}
                      <svg
                        className='h-6 w-6 flex-shrink-0 text-indigo-600'
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
                          d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
                        />
                      </svg>
                      <span className='ml-3 text-base font-medium text-gray-900'>
                        Security
                      </span>
                    </Link>

                    <Link
                      href='#'
                      className='-m-3 flex items-center rounded-md p-3 hover:bg-gray-50'
                    >
                      {/* <!-- Heroicon name: outline/squares-2x2 --> */}
                      <svg
                        className='h-6 w-6 flex-shrink-0 text-indigo-600'
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
                          d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'
                        />
                      </svg>
                      <span className='ml-3 text-base font-medium text-gray-900'>
                        Integrations
                      </span>
                    </Link>

                    <Link
                      href='#'
                      className='-m-3 flex items-center rounded-md p-3 hover:bg-gray-50'
                    >
                      {/* <!-- Heroicon name: outline/arrow-path --> */}
                      <svg
                        className='h-6 w-6 flex-shrink-0 text-indigo-600'
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
                          d='M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3'
                        />
                      </svg>
                      <span className='ml-3 text-base font-medium text-gray-900'>
                        Automations
                      </span>
                    </Link>
                  </nav>
                </div>
              </div>
              <div className='space-y-6 py-6 px-5'>
                <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                  <Link
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Pricing
                  </Link>

                  <Link
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Docs
                  </Link>

                  <Link
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Help Center
                  </Link>

                  <Link
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Guides
                  </Link>

                  <Link
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Events
                  </Link>

                  <Link
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Security
                  </Link>
                </div>
                <div>
                  <Link
                    href='#'
                    className='text-indigo-600 hover:text-indigo-500'
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default TopHeader
