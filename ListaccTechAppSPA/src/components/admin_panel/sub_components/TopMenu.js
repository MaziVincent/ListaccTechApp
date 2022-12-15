import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
const TopMenu = ({location}) => {
    const [button, setButton] = useState(1)
    location = location.split("/")
    // console.log(location);

    useEffect(() => {
      if (location[2] === 'learningPaths') {
        setButton(1)
      } else if (location[2] === 'modules') {
        setButton(2)
      } else if (location[2] === 'students') {
        setButton(3)
      } else if (location[2] === 'users') {
        setButton(4)
      } else if (location[2] === 'topics') {
        setButton(5)
      } else if (location[2] === 'lessons') {
        setButton(6)
      } else {
        setButton(-1)
      }
    }, [location])
    return (
      <div className='bg-gray-100 mx-6 px-6 py-3 mt-5 rounded-md bg-opacity-70'>
        <ol className='list-reset flex'>
          <li>
            <Link to='/admin' className='text-blue-600 hover:text-blue-700'>
              Home
            </Link>
          </li>
          <li>
            <span className='text-gray-500 mx-2'>></span>
          </li>
          <li>
            <Link to={`/${location[1]}`} className='text-blue-600 hover:text-blue-700'>
              {location[1]}
            </Link>
          </li>
          <li>
            <span className='text-gray-500 mx-2'>></span>
          </li>
          <li>
            <Link to={location} className='text-blue-600 hover:text-blue-700'>
              {location[2]}
            </Link>
          </li>
        </ol>

        <div className='flex items-center justify-end '>
          {button === 1 && (
            <button
              type='button'
              className='btn  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out '
            >
              <Link to='/user/add'>+ AddLearningPath</Link>
            </button>
          )}
          {button === 2 && (
            <button className='btn  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out '>
              <Link to='/author/add'>+ AddModule</Link>
            </button>
          )}
          {button === 3 && (
            <button className='btn  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out '>
              <Link to='/book/add'>+ AddStudent</Link>
            </button>
          )}
          {button === 4 && (
            <button className='btn  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out '>
              <Link to='/book/add'>+ AddUser</Link>
            </button>
          )}
          {button === 5 && (
            <button className='btn  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out '>
              <Link to='/book/add'>+ AddTopic</Link>
            </button>
          )}
          {button === 6 && (
            <button className='btn  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out '>
              <Link to='/book/add'>+ AddLesson</Link>
            </button>
          )}
        </div>
      </div>
    )
}
 
export default TopMenu;