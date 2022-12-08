import { useState, useEffect } from 'react'
// import { useOutletContext } from 'react-router-dom'

const Landing = () => {
  // const [navbar] = useOutletContext()
  // console.log(navbar);
  const [count, setCount] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1)
    }, 1000)
  }, [])
  return (
    <div className=''>
      <div className='landing-container flex'>
        <div className='bg-red-400 w-full  sm:w-full md:w-full mt-14'>
          <div className='grid gap-1 grid-cols-1 px-6 justify-center  mt-5 sm:grid-cols-1 md:grid-cols-4'>
            <div className='flex bg-blue-400 p-8 rounded-2xl justify-center justify-items-center'>
              <div className='pr-4'>
                <h4>Currently 10 leaning paths</h4>
              </div>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-10 h-10 text-white'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941'
                  />
                </svg>
              </div>
            </div>
            <div className='flex bg-blue-400 p-8 rounded-2xl justify-center justify-items-center'>
              <div className='pr-4'>
                <h4>Currently 100 moduls</h4>
              </div>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-10 h-10 text-white'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
                  />
                </svg>
              </div>
            </div>
            <div className='flex bg-blue-400 p-8 rounded-2xl justify-center justify-items-center'>
              <div className='pr-4'>
                <h4>Currently 1000 topics</h4>
              </div>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-10 h-10 text-white'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75'
                  />
                </svg>
              </div>
            </div>
            <div className='flex bg-blue-400 p-8 rounded-2xl justify-center justify-items-center'>
              <div className='pr-4'>
                <h4>Currently 10,000 users</h4>
              </div>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-10 h-10 text-white'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
                  />
                </svg>
              </div>
            </div>
          </div>
          <h1 className='text-center'>I've rendered {count} times!</h1>
        </div>
      </div>
    </div>
  )
}

export default Landing
