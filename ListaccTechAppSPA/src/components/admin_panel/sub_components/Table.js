import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';


const Table = ({value, page, handleChange}) => {

   const {returnedList, data} = value
   const navigate = useNavigate();
   
   const viewStudent = (id) =>{
       
                navigate(`/Admin/Student/${id}`);

   }
        



    return ( 
    
    
                <tbody>
                  {
                    returnedList.map((student)=>(

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
           
    
    );
}
 
export default Table;