
import Logo from '../../../assets/images/LogoTrans2.png'

const TopHeader = () => {
 

  return (
    <>
     
      <div className=' w-full flex bg-gray-50 shadow-md  px-6 py-6 flex items-center justify-start text-white'>
        
        <div className=' w-1/6 md:w-1/6' >
          <img  className=' w-full ' src={Logo} alt="logo" />
        </div>
    
      </div>
    </>
  )
}

export default TopHeader
