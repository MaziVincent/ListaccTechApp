import { Link , useNavigate} from 'react-router-dom'
import { useState } from 'react'
import Logo from '../../../assets/images/LogoTrans2.png'
import useLogout from '../../../hooks/useLogout'
import { toast } from 'react-toastify'


const TopHeader = () => {

  const navigate = useNavigate();
  const logout = useLogout();
  const signOut = async () => {

    const response = await logout();
    toast.success(response.data)
    navigate('/')
  }

  return ( 
    <>
      <div className='fixed w-full bg-[#111827] text-white flex items-center top-0 '>
        <div className='h-1/12 w-11/12 px-4 py-2 flex justify-between'>
          <Link to='/'  >
            <img src={Logo} alt='logo' className=' h-12 md:h-14' /> 
          </Link>
          <button onClick={signOut} className="inline-block  text-center text-red-500 text-gray-900 dark:text-red-500 text-base hover:text-red-800 duration-500  " > Log Out </button>
        </div>
      </div>
    </>
  )
}

export default TopHeader
