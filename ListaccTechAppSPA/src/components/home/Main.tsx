
import codeImage from '../../assets/images/softwaredev1.svg'
import book from '../../assets/images/book.png'
import programmer from '../../assets/images/buildinganapp1.svg'
import build from '../../assets/images/build.svg'
import nodejs from '../../assets/images/nodejs.png'
import dotnet from '../../assets/images/dotnet.png'
import php from '../../assets/images/PhP.png'
import Python from '../../assets/images/Python_Django.png'
import FrontEnd from '../../assets/images/Front-End.png'
import Flutter from '../../assets/images/Flutter.png'
import maleface from '../../assets/images/maleface.webp'
import femaleface from '../../assets/images/femaleface.webp'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Main = () => {

    
    return ( 
        <main className="flex flex-col justify-between bg-gray-50 dark:bg-gray-900 
        dark:bg-gray-900 w-screen gap-y-12 pt-20 box-border">
            <section className="flex flex-col justify-center items-center w-full gap-y-4 ">
                <div className="md:w-3/4 xl:w-2/4 w-4/5">
                    <h2 className="text-center font-sans dark:text-gray-100 text-5xl font-bold">
                        Your Career in <span className="text-orange-600">
                            Software Development </span> Starts Here!</h2>
                </div>
                <p className="text-center md:w-2/4 w-3/4  text-lg text-gray-500 dark:text-gray-300">Become a powerful Software Engineer in Front-End Web Development, 
                   Back-End Web Development, Full Stack Web Development, 
                   Mobile Application Development and Cloud Computing </p>
                <div className="flex flex-row justify-center items-center">
                    <button type="button"
              className="bg-orange-500 hover:bg-orange-400 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
               px-5 py-2.5 text-center text-base
               mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 
               dark:focus:ring-blue-800"
            >         
                        View Learning Paths</button>
                </div>
                 
            </section>
            <section className="flex flex-row justify-center items-center w-full">
                <div className="w-full">
                  <img src={codeImage} className="" alt="code review" />  
                </div>
            </section>
            <section className="flex flex-col justify-center items-center w-full dark:text-gray-100 gap-10">
                <div className='flex-col w-10/12 lg:w-8/12 justify-center items-center space-y-3 w-full'>
                    <h3 className='text-center  text-4xl  font-sans '> Our Goal</h3>
                    <div className=''>
                    <p className='dark:text-gray-300  text-center '>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Perferendis sed est voluptatibus, reprehenderit atque delectus 
                        nesciunt. Ducimus nostrum deserunt delectus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Perferendis sed est voluptatibus, reprehenderit atque delectus 
                        nesciunt. Ducimus nostrum deserunt delectus.
                    </p>

                    </div>
                   
                </div>
                <div className="flex flex-col justify-center items-center md:justify-evenly md:w-10/12  w-2/3 md:flex-row gap-10 " >
                    <div className="flex flex-col justify-evenly items-center w-3/4  md:w-1/4 gap-6">
                        <div className="w-5/6 md:w-full lg:w-4/6">
                            <img src={programmer} className="" alt="code review" /> 

                        </div>
                        <h4 className="w-full text-center text-2xl font-bold">Learn</h4>
                        <div className="w-full text-center ">
                            <p className='text-gray-300'>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Eaque porro 
                                esse dolores sed saepe doloremque nostrum 
                                voluptate harum, quo consequuntur.
                            </p>
                        </div>

                    </div>
                    <div className="flex flex-col justify-evenly items-center w-3/4  md:w-1/4 gap-6">
                    <div className="w-5/6 md:w-full lg:w-4/6">
                        <img src={build} className="" alt="code review" /> 

                        </div>
                        <h4 className="w-full text-center text-2xl font-bold">Build</h4>
                        <div className="w-full text-center">
                            <p className='text-gray-300'>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Eaque porro 
                                esse dolores sed saepe doloremque nostrum 
                                voluptate harum, quo consequuntur.
                            </p>
                        </div>

                    </div>
                    <div className="flex flex-col justify-evenly items-center w-3/4  md:w-1/4 gap-6">
                        <div className="w-5/6 md:w-full lg:w-4/6">
                         <img src={programmer} className="" alt="code review" /> 

                        </div>
                        <h4 className="w-full text-center text-2xl font-bold">Achieve</h4>
                        <div className="w-full text-center">
                            <p className='text-gray-300'>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Eaque porro 
                                esse dolores sed saepe doloremque nostrum 
                                voluptate harum, quo consequuntur.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <section className="flex flex-col justify-center dark:bg-gray-800 dark:text-gray-100 py-10 items-center w-full gap-y-8">
                <h3 className='text-3xl dark:text-gray-100 text-center p-2 font-bold'> Everything You Need To Know </h3>
                <div className="flex flex-row justify-evenly flex-wrap w-10/12 md:w-10/12 lg:w-4/6 gap-5">
                    <div className="flex flex-col w-2/5 md:w-3/12 items-center dark:bg-gray-900 shadow-md bg-white p-6 rounded-md">
                        <div>
                            <img src={dotnet} alt="" />
                        </div>
                        <h3 className='text-xl text-center font-bold'>DotNet Core</h3>
                    </div>
                    <div className="flex flex-col w-2/5 md:w-3/12 items-center shadow-md dark:bg-gray-900 bg-white p-6 rounded-md">
                        <div>
                            <img src={nodejs} alt="" />
                        </div>
                        <h3 className='text-xl text-center font-bold'>NodeJS</h3>
                    </div>
                    <div className="flex flex-col w-2/5 md:w-3/12 items-center dark:bg-gray-900 shadow-md bg-white p-6 rounded-md">
                        <div>
                            <img src={Python} alt="" />
                        </div>
                        <h3 className='text-xl text-center font-bold'>Python Django</h3>
                    </div>
                    <div className="flex flex-col w-2/5 md:w-3/12 items-center shadow-md dark:bg-gray-900 bg-white p-6 rounded-md">
                        <div>
                            <img src={php} alt="" />
                        </div>
                        <h3 className='text-xl text-center font-bold'>PhP</h3>
                    </div>
                    <div className="flex flex-col w-2/5 md:w-3/12 items-center shadow-md dark:bg-gray-900 bg-white p-6 rounded-md">
                        <div>
                            <img src={FrontEnd} alt="" />
                        </div>
                        <h3 className='text-xl text-center font-bold'>Front-End</h3>
                    </div>
                    <div className="flex flex-col w-2/5 md:w-3/12 items-center dark:bg-gray-900 bg-white shadow-md p-6 rounded-md">
                        <div>
                            <img src={Flutter} alt="" />
                        </div>
                        <h3 className='text-xl text-center font-bold'>Flutter</h3>
                    </div>
                   
                </div>
                <div className="flex items-center justify-center">
                    <Link to="/LearningPath" className='text-orange-500 text-xl'> View More Paths  </Link>
                </div>
                
            </section>
            <section className="flex flex-col items-center justify-center dark:bg-gray-900 dark:text-gray-100 bg-white pt-10 gap-8">
                <h3 className="text-center text-3xl  font-bold"> Testimonials</h3>
                <div className="flex flex-col md:flex-row justify-evenly items-center w-5/6 gap-10 ">
                    <div className="flex flex-row justify-start gap-3 shadow p-3">
                        <div className='flex flex-col justify-start pt-2 w-1/5'>
                            <div className="flex w-full rounded-full items-center justify-center"> 
                                <img className='w-16 rounded-full overflow-hidden' src={maleface} alt="" />
                            </div>
                        </div>
                       
                        <article className='text-justify w-3/4 flex flex-col'>
                            <h4 className='text-orange-500 text-lg font-bold'>Ikenna</h4>
                            <p className='text-md'>
                                Lorem ipsum dolor sit amet consectetur adipisicing 
                                elit. Nostrum, recusandae! Est quia ullam similique 
                                deleniti natus sed repellat repellendus suscipit?
                            </p>
                        </article>
                        
                    </div>
                    
                    <div className="flex flex-row justify-start gap-3 shadow p-3">
                        <div className='flex flex-col justify-start pt-2 w-1/5'>
                            <div className="flex w-full rounded-full items-center justify-center"> 
                                <img className='w-16 rounded-full overflow-hidden'  src={femaleface} alt="" />
                            </div>
                        </div>
                       
                        <article className='text-justify w-3/4 flex flex-col'>
                            <h4 className='text-orange-500 text-lg font-bold'>Ikenna</h4>
                            <p className='text-md'>
                                Lorem ipsum dolor sit amet consectetur adipisicing 
                                elit. Nostrum, recusandae! Est quia ullam similique 
                                deleniti natus sed repellat repellendus suscipit?
                            </p>
                        </article>
                        
                    </div>

                </div>
                <div className="flex justify-center text-orange-600">
                    <Link to="/Testimonials"> Read More Success Stories</Link>
                </div>
            </section>
        </main>
     );
}
 
export default Main;