import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import { blue, grey, purple, red } from "@mui/material/colors";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQuery } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "../../../api/axios";
import useFetchData from "../../../api/useFetchData";
import CircularProgress from "@mui/material/CircularProgress";
import ErrorIcon from "@mui/icons-material/Error";
import Pagination from "@mui/material/Pagination";
import useAuth from "../../../hooks/useAuth";
import baseURL from "../../../api/BaseURL";
import LearningPath from "../../../models/learningPath";

const url = `${baseURL}LearningPath/`;

const AdminLearningPath = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const { auth } = useAuth();
  const fetchData = useFetchData();

  const fetchLearningPaths = async (query: any) => {
    const { queryKey } = query;
    const learningPathsData = fetchData(
      `${url}GetAll?PageNumber=${queryKey[1]}`,
      auth.token
    );

    return learningPathsData;
  };

  const { data, status } = useQuery(
    ["learning Path", page],
    fetchLearningPaths,
    {
      staleTime: 15000,
      onError: () => {
        toast.error("Error Fetching Learning Paths");
      },
    }
  );

  console.log(data);
  const formData = new FormData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LearningPath>({});

  const submit: SubmitHandler<LearningPath> = async (data: any) => {
    formData.append("Name", data.Name);
    formData.append("Description", data.Description);
    formData.append("LearningPathData", data.LearningPathAvatar[0]);
    console.log(data.LearningPathAvatar[0]);
    console.log(formData);
    try {
      const response = await axios.post(url + "Create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
    } catch (error) {}
  };

  //open modal
  const handleOpen = () => setOpen(true);
  //close modal
  const handleClose = () => setOpen(false);
  //set change of page
  const handleChange = (event: any, value: number) => {
    setPage(value);
  };

  return (
    <div className="flex flex-col items-center  w-full h-full gap-8 px-6 py-5 overflow-x-auto">
      {/* <ToastContainer />
            <div className="flex flex-col border-b-4 border-purple-200 gap-2 items-center justify-center shadow-md bg-white  p-6 rounded-md">
                <div className='flex justify-between w-full border-b-2 pb-4'>
                  <span> <ClassOutlinedIcon sx={{ color:purple[700]}} fontSize='large' /> </span>
                  <h3 className='text-center text-xl font-bold '> {data? data.data.totalCount : 0} </h3>
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

      {/* <Modal
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
        </Modal> */}

      {status === "success" && (
        <div className=" w-full overflow-x-auto rounded-lg border-gray-200 shadow-md ">
          <table className="w-full border-collapse bg-white  dark:bg-gray-800 dark:text-gray-100 text-left text-sm text-gray-700">
            <thead className="">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-center"
                >
                  Avatar / Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-center "
                >
                  Description{" "}
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-center"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {data.data.result?.map((learningPath: LearningPath) => (
                <tr
                  key={learningPath.id}
                  className="bg-white dark:bg-gray-700 border-b hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th className="flex gap-3 px-6 py-4 font-normal items-center">
                    <div className="relative h-10 w-10">
                      <img
                        className="h-full w-full rounded-full object-cover object-center"
                        src="http://localhost:7051/\\images2abcdf06-0f25-4f19-be7f-f2f0a0e1d1bbdownload.png"
                        alt=""
                      />
                      <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                    </div>
                    
                      <div className="font-medium text-center ">
                        {learningPath.name}
                      </div>
                    
                  </th>

                  <td className="px-6 py-4 text-center">{learningPath.description}</td>

                  <td className=" px-6  py-4 text-center ">
                    <a
                      href="#"
                      className="font-medium mx-2 text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}

              <tr>
                <td
                  colSpan={3}
                  className="py-4"
                >
                  <Pagination
                    count={data.data.dataList.totalPages}
                    page={page}
                    onChange={handleChange}
                    variant="outlined"
                    shape="rounded"
                    className="bg-gray-500 "
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {status === "loading" && (
        <div className="flex justify-center items-center">
          <CircularProgress sx={{ fontSize: 60, color: blue }} />
        </div>
      )}

      {status === "error" && (
        <div className="flex justify-center items-center">
          <ErrorIcon sx={{ fontSize: 60, color: red }} />
        </div>
      )}

     
    </div>
  );
};

export default AdminLearningPath;
