import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useForm, SubmitHandler} from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Registeration = () => {

  const navigate = useNavigate();
  interface FormInput  {
    FirstName:string,
    LastName:string,
    Gender:string,
    PhoneNumber:string,
    Email:string,
    Password:string,
    ConfirmPassword:string
    
  }

 
  const {register, handleSubmit,watch, formState:{errors}} = useForm<FormInput>({
    mode:'onTouched'
  });
  const submit:SubmitHandler<FormInput> = (data:any) => {
    
    //post registeration form 
    fetch("https://localhost:7188/api/Student/Create",{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify(data)
    }).then( (res)=>{
      const response = res.json()
      if(res.ok){

        toast.success("Registered Successfully", {
          theme: "colored"
        })
        setTimeout(()=>{
          
          navigate('/Login');
        },3000);
        
        
      }else{
        response.then(data => {
          toast.error(data.error)
        })
        
       
       
      }
   
     // navigate('/Login');
    })
    .catch((error)=>{
      toast.error(error)
    })
  };

const password = watch('Password');


  return (
    <div className="mt-1 pt-10 h-screen bg-gray-50">
      <ToastContainer />
      <div className="md:flex md:flex-col justify-center items-center md:gap-6">
        <div className="md:col-span-1">
          <div className="px-6 flex flex-col justify-center items-start ">
            <h3 className="text-3xl font-extrabold leading-6 text-gray-700">
              Sign Up
            </h3>
            <p className="mt-4 text-md text-gray-600">
              Or <Link to="/Login" className="text-orange-600"> Sign in to your existing account. </Link>
            </p>
          </div>
        </div>
        <div className="mt-5 md:col-span-2 w-full lg:w-1/2 md:w-3/4 md:mt-0">
          <form onSubmit={handleSubmit(submit)}>
            <div className="overflow-hidden shadow-md sm:rounded-md">
              <div className="bg-white px-4 mx-2 md:mx-0 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6  sm:col-span-3">
                        <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                        >
                        First name
                        </label>
                        <input
                        type="text"
                        id="firstName"
                        {...register("FirstName",{required:true})}
                        autoComplete="first-name"
                        className="mt-1 block w-full p-2  rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        {errors.FirstName && <p className="text-sm text-red-400"> first name is required</p>}
                 
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      {...register("LastName",{required:true})}
                      id="lastName"
                      autoComplete="family-name"
                      className="mt-1 block w-full p-2 rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    
                    />
                     {errors.LastName && <p className="text-sm text-red-400"> last name is required</p>}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      {...register("Gender",{required:'gender is required'})}
                      autoComplete="gender"
                      defaultValue={"DEFAULT"}
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white p-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                     
                      <option value="DEFAULT" disabled>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    {errors.Gender && <p className="text-sm text-red-400"> {errors.Gender.message} </p>}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                        <label
                        htmlFor="phonenumber"
                        className="block text-sm font-medium text-gray-700"
                        >
                        Phone Number
                        </label>
                        <input
                        type="tel"
                        {...register("PhoneNumber",{required:true})}
                        id="phoneNumber"
                        autoComplete="phone number"
                        className="mt-1 block w-full p-2 rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                         {errors.PhoneNumber && <p className="text-sm text-red-400"> phone number is required</p>}
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      {...register("Email",{required:true})}
                      id="emailAddress"
                      className="mt-1 block w-full p-2 rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                     {errors.Email && <p className="text-sm text-red-400"> email address is required</p>}
                  </div>

                  

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      {...register("Password",{required:true})}
                      id="password"
                      
                      className="mt-1 block w-full p-2 rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    
                    />
                     {errors.Password && <p className="text-sm text-red-400"> password is required</p>}
                  </div>

                  <div className="col-span-6  sm:col-span-3">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      {...register("ConfirmPassword",{required:'confirm password is required',
                      validate:(value)=> value === password || "passwords do not match"
                      
                      })}
                      id="confirmPassword"
                    
                      className="mt-1 block w-full p-2 rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    
                    />
                     {errors.ConfirmPassword && <p className="text-sm text-red-400"> {errors.ConfirmPassword.message} </p>}
                  </div>



                  

                  

                  
                     
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right flex justify-center  sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registeration;
