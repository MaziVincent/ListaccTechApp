
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import { grey, purple } from '@mui/material/colors';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import {useForm, SubmitHandler} from "react-hook-form";

import {useLocation} from 'react-router-dom'
import { useState } from 'react';
import axios from '../../../api/axios';


const AdminLearningPath = () => {

    const formData = new FormData();
    const LearningPathCreate_Url = '/api/LearningPath/Create'

    interface LearningPath {
      Name:string,
      Description:string,
      LearningPathAvatar:any
    
    }
    
      const {register, handleSubmit, formState:{errors}} = useForm<LearningPath>({});
    
      const submit:SubmitHandler<LearningPath> = async (data:any) => {

        formData.append('Name', data.Name);
        formData.append('Description',data.Description);
        formData.append('LearningPathData',data.LearningPathAvatar[0]);
        console.log(data.LearningPathAvatar[0])
        console.log(formData)
        try{

          const response = await axios.post(LearningPathCreate_Url,formData,
            {
              headers:{'Content-Type':'multipart/form-data'},
              withCredentials:true,


          })

        }catch(error){
          
        }


      }
      
        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
      
        
        return (
          <div className='flex flex-col items-center  w-full h-screen gap-8 px-6 py-5' >
            
            <div className="flex flex-col border-b-4 border-purple-200 gap-2 items-center justify-center shadow-md bg-white  p-6 rounded-md">
                <div className='flex justify-between w-full border-b-2 pb-4'>
                  <span> <ClassOutlinedIcon sx={{ color:purple[700]}} fontSize='large' /> </span>
                  <h3 className='text-center text-xl font-bold '> 4 </h3>
                </div>
                
                <h3 className="text-xl font-bold"> Learning Paths </h3>
            </div>
    
            <div className='flex flex-col items-center justify-center gap-6 w-full'>
              
              <div className='flex justify-between items-center px-4 w-full lg:w-4/5 border-2'>
                <form>
                  <input type='text' placeholder='Search' className='rounded-lg p-2 border-2' />
                </form>
                <span className='hover:bg-gray-300 hover:border-2 hover:border-purple-700 px-2 rounded-full' title='Add Student'> <button onClick={handleOpen} > <AddOutlinedIcon  />Create </button>  </span>
              </div>
              {/* Modal for creating learning path */}
    
              
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div className='flex flex-col  w-2/4 bg-white absolute md:w-2/4 top-1/3  left-1/3 rounded-lg shadow-lg border-2'>
                  <span className='absolute right-0 top-0 cursor-pointer p-1' onClick={handleClose}><CloseIcon sx={{ color:grey[300]}} /></span>
                  <div className='flex flex-col justify-center items-center py-2 gap-3'>
                    <h2 id="modal-modal-title" className='text-2xl font-bold' >
                      Create Learning Path
                    </h2>
                    <div> 
                      <form onSubmit={handleSubmit(submit)} className='flex flex-col gap-4'>
                        <div>
                          <input type='text' 
                          id='Name'
                          placeholder='Name' 
                          {...register('Name',{required:true})}
                          className='border-2 rounded-md px-1' />
                          {errors.Name && <p className="text-sm text-red-400"> Name is required</p>}
    
                        </div>
                     
                        <div>
                          <textarea placeholder='Description' 
                          {...register('Description',{required:true})}
                          className='border-2 rounded-md px-1'>
    
                          </textarea>
                          {errors.Description && <p className="text-sm text-red-400"> Description is required</p>}
                        </div>
                        <div>
                          <input type='file' placeholder='Avatar' 
                          {...register('LearningPathAvatar',{required:true})}
                          className='border-2 rounded-md'  />
                          {errors.LearningPathAvatar && <p className="text-sm text-red-400"> Avatar is required</p>}
    
                        </div>
                        <div className='flex justify-center'>
                          <input type='submit' value='Create' className='border-2 p-2 rounded-lg hover:bg-purple-100 cursor-pointer border-purple-600' />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Modal>
    
    
    
    
    
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
     
    export default AdminLearningPath;