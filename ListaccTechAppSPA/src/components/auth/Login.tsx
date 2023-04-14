import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/images/LogoTrans2.png";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "../../api/axios";

const Login_Url = "/api/Auth/Login";

const Login = () => {
  const navigate = useNavigate();
  const {auth, setAuth } = useAuth();
  const [errorMsg, setErrorMsg] = useState("");
  interface Login {
    EmailAddress: String;
    Password: String;
  }
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    mode: "onTouched",
  });

  const submit: SubmitHandler<Login> = async (data, e) => {
    e?.preventDefault();
    

    try {
      const response = await axios.post(Login_Url, JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
        withCredentials: false,
      });
     // console.log(JSON.stringify(response.data));
      
      console.log(response.data)

      setAuth(response.data);
      switch(response.data.currentUser.role){
        case "Admin" :
          navigate("/admin")
          break;
        case "OnlineStudent" :
          navigate("/Dashboard")
          break;
        default :
        toast.error("An error Occured During Login");
      }
      
    
      
    } catch (error: any) {
        console.log(error)
      if (!error.response) {
        setErrorMsg("No Server Response");

        toast.error("No Server Response");
      }
      
      switch (error.response.status) {
        case 400: {
          setErrorMsg("missing username or password");

          toast.error("missing username or password");
          break;
        }
        case 401: {
          setErrorMsg("unauthorized user");

          toast.error("unauthorized user");
          break;
        }
        case 404: {
            setErrorMsg("user does not exist");
  
            toast.error("user does not exist");
            break;
          }
        
        default: {
          setErrorMsg("Login failed");

          toast.error("Login failed");
        }
      }
    }

    // console.log(data);
  };

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <ToastContainer />
        <div>
          <img className="mx-auto h-12 w-auto" src={logo} alt="Company Logo" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or &nbsp;
            <Link
              to="/Registeration"
              className="font-medium text-orange-500 hover:text-orange-600"
            >
              get started for free
            </Link>
          </p>
        </div>
        {errorMsg && <p className="text-sm text-red-400">{errorMsg}</p>}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(submit)}>
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div className="mb-1">
              <label htmlFor="emailAddress" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                {...register("EmailAddress", {
                  required: "email required",
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "invalid email address",
                  },
                })}
                type="email"
                autoComplete="off"
                required
                className={`relative block w-full appearance-none rounded-none rounded-t-md border 
                border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
               ${
                 errors.EmailAddress &&
                 "focus:border-red-500 focus:ring-red-500 border-red-300"
               } `}
                placeholder="Email address"
              />
              {errors.EmailAddress && (
                <span className="text-sm text-red-400">
                  {errors.EmailAddress.message}
                </span>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                {...register("Password", { required: "password required" })}
                type="password"
                autoComplete="current-password"
                required
                className={`relative block w-full appearance-none rounded-none rounded-b-md 
                border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 
                focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm
                ${
                  errors.Password &&
                  "focus:border-red-500 focus:ring-red-500 border-red-300"
                } `}
                placeholder="Password"
              />
              {errors.Password && (
                <span className="text-sm text-red-400">
                  {errors.Password.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="/ForgotPassword"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
