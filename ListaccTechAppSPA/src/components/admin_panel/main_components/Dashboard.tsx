import { useState } from 'react'
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import ViewModuleOutlinedIcon from '@mui/icons-material/ViewModuleOutlined';
import { blue, brown, green, grey, purple, yellow } from '@mui/material/colors';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import useFetchData from '../../../api/useFetchData';
import {useQuery} from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import useAuth from "../../../hooks/useAuth";
import Pagination from '@mui/material/Pagination';
import { useLocation } from 'react-router-dom';
import TopMenu from '../sub_components/TopMenu';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import student from '../../../models/user'
import pageData from '../../../models/pageData'
import { useForm, SubmitHandler } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";







const Dashboard = () => {


  const Fetch = useFetchData();
  const url = 'User/GetUsers?Role=OnlineStudent'
  const dataUrl = 'Data/GetData'
  const [status, setStatus] = useState('loading')
  const [page, setPage] = useState(1)
  const location = useLocation();
  const pathName = location.pathname;
  const {auth} = useAuth();
  const [searchString, setSearchString] = useState(" ")
  const navigate = useNavigate();


  // fetch count of information/data we availiable
    
  //get students

   const getData = async (query:any) => {
    const {queryKey} = query

    //console.log(queryKey)

    
    
    const result = await Fetch(`${url}&PageNumber=${queryKey[1]}&SearchString=${queryKey[2]}`, auth.token)
    const response =  await Fetch(dataUrl, auth.token)
    

    if(result.data){
      setStatus('success')
     
     return {studentInfo:result.data, dashboardInfo:response.data};
    }

    if(result.errors){

      setStatus('error')
      toast.error("Error Loading Data");
      return result.errors

    }

    
   }

  const handleChange = (event:any, value:number) => {
    
   setPage(value)
    
  } 

  const viewStudent = (id:number) =>{
       
    navigate(`/Admin/Student/${id}`);

}

   
   const {data,isError, isLoading, isSuccess} = useQuery(
      ['students',page, searchString], 
      getData,
      {keepPreviousData:true, staleTime:10000} )
      
    console.log(data)
    
     //console.log(data.dataCount)
     // setStudents(data.students)

     

   // handle student search

   const handleSearch = (event:any) =>{
   // console.log(event.target.value)
    setSearchString(event.target.value)

  }

 

  
   
  

  
  return (
    
    <div className='flex flex-col items-start  w-full gap-8 px-6 py-5 overflow-auto'>
       <TopMenu location={pathName} />
       <ToastContainer />
      
      <div className="flex flex-row w-full  justify-center lg:justify-start  items-center flex-wrap lg:flex-nowrap   gap-5">
          
          <div className="flex flex-col basis-4/5 md:basis-1/3 border-b-4 dark:bg-gray-800 border-purple-200 gap-2 items-center justify-center shadow-md bg-white  p-4 rounded-md">
            <div className='flex justify-between w-full border-b-2 pb-4'>
              <span> <ClassOutlinedIcon sx={{ color:purple[700]}} fontSize='large' /> </span>
              <h3 className='text-center text-xl font-bold '> { isSuccess? data.dashboardInfo?.learningPathCount: 0}  </h3>
            </div>
            
            <h3 className="text-lg font-bold"> Learning Paths </h3>
          </div>
          
          <div className="flex flex-col basis-4/5 md:basis-1/3 border-b-4 dark:bg-gray-800 border-green-200 gap-2 items-center justify-center shadow-md bg-white  p-4 rounded-md">
            <div className='flex justify-between w-full border-b-2 pb-4'>
              <span> <ViewModuleOutlinedIcon sx={{ color:green[700]}} fontSize='large' /> </span>
              <h3 className='text-center text-xl  font-bold '> {isSuccess? data.dashboardInfo?.moduleCount : 0} </h3>
            </div>
            
            <h3 className="text-lg font-bold"> Modules </h3>
          </div>

          <div className="flex flex-col basis-4/5 md:basis-1/3 border-b-4 dark:bg-gray-800 border-yellow-200 gap-2 items-center justify-center shadow-md bg-white  p-4 rounded-md">
            <div className='flex justify-between w-full border-b-2 pb-4'>
              <span> <TopicOutlinedIcon sx={{ color:yellow[700]}} fontSize='large' /> </span>
              <h3 className='text-center text-xl  font-bold '> {isSuccess? data.dashboardInfo?.topicCount : 0 } </h3>
            </div>
            
            <h3 className="text-lg font-bold"> Topics </h3>
          </div>

          <div className="flex flex-col basis-4/5 md:basis-1/3 border-b-4 dark:bg-gray-800 border-blue-200 gap-2 items-center justify-center shadow-md bg-white  p-4 rounded-md">
            <div className='flex justify-between w-full border-b-2 pb-4'>
              <span> <NoteAltOutlinedIcon sx={{ color:blue[700]}} fontSize='large' /> </span>
              <h3 className='text-center text-xl  font-bold '> {isSuccess? data.dashboardInfo?.lessonCount : 0 } </h3>
            </div>
            
            <h3 className="text-lg font-bold"> Lessons </h3>
          </div>

          <div className="flex flex-col basis-4/5 md:basis-1/3 border-b-4 dark:bg-gray-800 border-brown-200 gap-2 items-center justify-center shadow-md bg-white  p-4 rounded-md">
            <div className='flex justify-between w-full border-b-2 pb-4'>
              <span> <PeopleAltOutlinedIcon sx={{ color:brown[700]}} fontSize='large' /> </span>
              <h3 className='text-center text-xl  font-bold '> {isSuccess? data.dashboardInfo?.studentCount : 0} </h3>
            </div>
            
            <h3 className="text-lg font-bold"> Students </h3>
          </div>




          
          

        </div>
        
        <div className='flex flex-col items-center justify-center gap-6 w-full'>
          <h2 className='text-3xl font-bold'> Students </h2>
          <div className='flex flex-col md:flex-row justify-center md:justify-between gap-4 items-center w-full lg:w-4/5 border-2 px-3 py-2 rounded'>
            <form className=''>
              <input type='text' placeholder='Search' className='rounded-lg p-1 dark:bg-gray-600 dark:text-gray-50 border-2' onChange={handleSearch} />
            </form>
            <span className='hover:bg-gray-300 rounded-lg shadow-lg flex justify-center items-center w-full md:w-1/12 h-full hover:pointer ' title='Add Student'> 
            <button> <PersonAddAlt1Icon sx={{ color:green[500]}} fontSize='large' /> <span className='md:hidden'> Add Student</span> </button>  </span>
          </div>
          <div className='overflow-x-auto w-full h-full shadow-md sm:rounded-lg'>

            { isLoading && (<div className='flex justify-center items-center w-full'> <CircularProgress />  </div>)}
            { isError && (<div className='flex justify-center items-center w-full' > <ErrorOutlineIcon fontSize='large'/>  </div>)}
            {
              isSuccess &&(

                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto border-collapse">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            First Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Last Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Gender
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span >Actions</span>
                        </th>
                    </tr>
                </thead>

                <tbody>
                  {
                    data?.studentInfo.returnedList.map((student:student)=>(

                        <tr onClick={() => viewStudent(student.id)} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer" key={student.id}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {student.firstName}
                            </th>
                            <td className="px-4 py-4">
                                {student.lastName}
                            </td>
                            <td className="px-4 py-4">
                                {student.gender}
                            </td>
                            <td className="px-4 py-4">
                                {student.phoneNumber}
                            </td>
                            <td className="px-4 py-4 text-right flex gap-3 justify-end">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Deactivate</a>
                            </td>
                            
                        </tr>

                    )


                    )
                  }
                    
                    
                    <tr>
                        
                            <td colSpan={3}  className='py-4'>
                                 <Pagination count={data?.totalPages } page={page} onChange={handleChange} variant="outlined" shape="rounded" className='dark:bg-gray-300 ' />
                            </td>
                      </tr>        
                </tbody>

                </table>
   

              )
            }
            
         



          </div>
       </div> 
     
     
        
    </div>

    
  )
}

export default Dashboard
