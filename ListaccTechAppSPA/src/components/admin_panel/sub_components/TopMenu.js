import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



const TopMenu = ({location}) => {
    const [button, setButton] = useState(1)
    location = location.split("/")
    // console.log(location);

    const breadcrumbs = [
      <Link underline="hover" key="1" className="dark:text-gray-100" to="/Admin" >
        Admin
      </Link>,
      
       
      <span key="3" className="dark:text-gray-100">
        {location}
      </span>,
    ];
  
    return (
      <Stack spacing={2}>
        
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" className='dark:text-gray-100' />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    )
}
 
export default TopMenu;