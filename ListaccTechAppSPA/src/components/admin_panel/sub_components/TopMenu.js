import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



const TopMenu = ({location}) => {
    const [button, setButton] = useState(1)
    location = location.split("/")
    // console.log(location);

    const breadcrumbs = [
      <Link underline="hover" key="1" color="inherit" to="/Admin" >
        Admin
      </Link>,
      
       
      <Typography key="3" color="text.primary">
        {location}
      </Typography>,
    ];
  
    return (
      <Stack spacing={2}>
        
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    )
}
 
export default TopMenu;