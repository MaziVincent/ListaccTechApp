const ListModules = () => {
    return (
      <div className='overflow-hidden px-6 mt-4 mb-4'>
        <h3 className=' text-center font-bold font-serif text-2xl bg-white rounded-t-xl w-3/6 m-auto bg-opacity-70'>
          Modules
        </h3>
        <div className='flex flex-col'>
          <div className='overflow-x-auto '>
            <table className='min-w-full mb-2'>
              <thead className='bg-white border-b bg-opacity-70'>
                <tr>
                  <th scope='col' className='px-6 py-4 text-left'>
                    Song
                  </th>
                  <th scope='col' className='px-6 py-4 text-left'>
                    Artist
                  </th>
                  <th scope='col' className='px-6 py-4 text-left'>
                    Year
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-blue-300 bg-opacity-70'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    >The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    Malcolm Lockyer
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    1961
                  </td>
                </tr>
                <tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-blue-300 bg-opacity-70'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    Witchy Woman
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    The Eagles
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    1972
                  </td>
                </tr>
                <tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-blue-300 bg-opacity-70'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    Shining Star
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    Earth, Wind, and Fire
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                    1975
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
}
 
export default ListModules;