import { useState, useEffect } from 'react'
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import ViewModuleOutlinedIcon from '@mui/icons-material/ViewModuleOutlined';
import { blue, brown, green, purple, yellow } from '@mui/material/colors';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import fetchData from '../../../api/fetchData';
import {useQuery} from 'react-query';
import useRefreshToken from '../../../hooks/useRefreshToken';


const Landing = () => {
  const url = '/api/Students/GetAll'
  const fetchStudents = async ()=>{
    const {data} = await fetchData(url)
  }
const refresh = useRefreshToken();
  const {data,status} = useQuery("students",fetchStudents);
  
  return (
    <div className='flex flex-col items-start  w-full h-screen gap-8 px-6 py-5'>

      <div className="flex flex-row w-full  justify-center lg:justify-start items-center flex-wrap lg:flex-nowrap   gap-5">
          
          <div className="flex flex-col basis-3/5 md:basis-1/3 border-b-4 border-purple-200 gap-2 items-center justify-center shadow-md bg-white  p-4 rounded-md">
            <div className='flex justify-between w-full border-b-2 pb-4'>
              <span> <ClassOutlinedIcon sx={{ color:purple[700]}} fontSize='large' /> </span>
              <h3 className='text-center text-xl font-bold '> 4 </h3>
            </div>
            
            <h3 className="text-lg font-bold"> Learning Paths </h3>
          </div>
          
          <div className="flex flex-col basis-3/5 md:basis-1/3 border-b-4 border-green-200 gap-2 items-center justify-center shadow-md bg-white  p-4 rounded-md">
            <div className='flex justify-between w-full border-b-2 pb-4'>
              <span> <ViewModuleOutlinedIcon sx={{ color:green[700]}} fontSize='large' /> </span>
              <h3 className='text-center text-xl  font-bold '> 4 </h3>
            </div>
            
            <h3 className="text-lg font-bold"> Modules </h3>
          </div>

          <div className="flex flex-col basis-3/5 md:basis-1/3 border-b-4 border-yellow-200 gap-2 items-center justify-center shadow-md bg-white  p-4 rounded-md">
            <div className='flex justify-between w-full border-b-2 pb-4'>
              <span> <TopicOutlinedIcon sx={{ color:yellow[700]}} fontSize='large' /> </span>
              <h3 className='text-center text-xl  font-bold '> 4 </h3>
            </div>
            
            <h3 className="text-lg font-bold"> Topics </h3>
          </div>

          <div className="flex flex-col basis-3/5 md:basis-1/3 border-b-4 border-blue-200 gap-2 items-center justify-center shadow-md bg-white  p-4 rounded-md">
            <div className='flex justify-between w-full border-b-2 pb-4'>
              <span> <NoteAltOutlinedIcon sx={{ color:blue[700]}} fontSize='large' /> </span>
              <h3 className='text-center text-xl  font-bold '> 4 </h3>
            </div>
            
            <h3 className="text-lg font-bold"> Lessons </h3>
          </div>

          <div className="flex flex-col basis-3/5 md:basis-1/3 border-b-4 border-brown-200 gap-2 items-center justify-center shadow-md bg-white  p-4 rounded-md">
            <div className='flex justify-between w-full border-b-2 pb-4'>
              <span> <PeopleAltOutlinedIcon sx={{ color:brown[700]}} fontSize='large' /> </span>
              <h3 className='text-center text-xl  font-bold '> 4 </h3>
            </div>
            
            <h3 className="text-lg font-bold"> Students </h3>
          </div>

          
          

        </div>
        <button onClick={() => refresh()} > refreshtoken</button> <br/>
        <div className='flex flex-col items-center justify-center gap-6 w-full'>
          <h2 className='text-3xl font-bold'> Students </h2>
          <div className='flex justify-between items-center w-full lg:w-4/5 border-2'>
            <form>
              <input type='text' placeholder='Search' className='rounded-lg p-2 border-2' />
            </form>
            <span className='hover:bg-gray-300 rounded-full' title='Add Student'> <button> <AddOutlinedIcon fontSize='large' /> </button>  </span>
          </div>
          <div className='overflow-x-auto w-full h-full shadow-md sm:rounded-lg'>
            
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
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
                          <span className="sr-only">Edit</span>
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Apple MacBook Pro 17"
                      </th>
                      <td className="px-6 py-4">
                          Silver
                      </td>
                      <td className="px-6 py-4">
                          Laptop
                      </td>
                      <td className="px-6 py-4">
                          $2999
                      </td>
                      <td className="px-6 py-4 text-right flex gap-3 justify-end">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                          <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                      </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Microsoft Surface Pro
                      </th>
                      <td className="px-6 py-4">
                          White
                      </td>
                      <td className="px-6 py-4">
                          Laptop PC
                      </td>
                      <td className="px-6 py-4">
                          $1999
                      </td>
                      <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Magic Mouse 2
                      </th>
                      <td className="px-6 py-4">
                          Black
                      </td>
                      <td className="px-6 py-4">
                          Accessories
                      </td>
                      <td className="px-6 py-4">
                          $99
                      </td>
                      <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                          <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>

                      </td>
                  </tr>
              </tbody>
          </table>




          </div>
        </div>
     
     
        
    </div>
  )
}

export default Landing
