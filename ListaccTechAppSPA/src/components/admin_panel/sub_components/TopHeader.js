import { Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../../../assets/images/LogoTrans2.png'

const TopHeader = () => {


  return (
    <>
      <div className='fixed w-full bg-[#111827] text-white flex items-center '>
        <div className='h-1/12 px-4 py-2'>
          <Link to='/'  >
            <img src={Logo} alt='logo' className=' h-12 md:h-14' /> 
          </Link>
        </div>
      </div>
    </>
  )
}

export default TopHeader
