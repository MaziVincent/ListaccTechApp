// import Logo from '../../../assets/images/LogoTrans2.png'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <footer className='fixed bottom-0 left-0 z-[1] p-4 w-full bg-[#111827] text-[#fff] shadow md:px-6 md:py-8 '>
        
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2022{' '}
          <Link href='https://listacc.com/' className='hover:underline'>
            Listacc
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    )
}
 
export default Footer;