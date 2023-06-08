
import codeImage from '../../assets/images/softwaredev1.svg'
import book from '../../assets/images/book.png'
import programmer from '../../assets/images/buildinganapp1.svg'
import build from '../../assets/images/build.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const Main = () => {

    
    return ( 
        <main className="flex flex-col justify-between bg-gray-50 dark:bg-gray-900 
        dark:bg-gray-900 w-screen gap-y-12 pt-20 box-border">
            <section className="flex flex-col justify-center items-center w-full gap-y-4 ">
                <div className="w-3/4">
                    <h2 className="text-center font-sans dark:text-gray-100 text-5xl font-bold">
                        Your Career in <span className="text-orange-600">
                            Software Development </span> Starts Here!</h2>
                </div>
                <p className="text-center w-2/4 text-lg text-gray-500 dark:text-gray-300">Become a powerful Software Engineer in Front-End Web Development, 
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
            <section className="flex flex-row justify-center items-center w-full">
                <div className="flex flex-row justify-evenly w-2/3 " >
                    <div className="flex flex-col justify-evenly items-center w-1/4">
                        <div className="w-full">
                        <img src={programmer} className="" alt="code review" /> 

                        </div>
                        <h4 className="w-full text-center text-xl2 font-bold">Learn</h4>
                        <div className="w-full text-center">
                            <p>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Eaque porro 
                                esse dolores sed saepe doloremque nostrum 
                                voluptate harum, quo consequuntur.
                            </p>
                        </div>

                    </div>
                    <div className="flex flex-col justify-evenly items-center w-1/4">
                    <div className="w-full max-h-fit">
                        <img src={build} className="" alt="code review" /> 

                        </div>
                        <h4 className="w-full text-center text-xl2 font-bold">Build</h4>
                        <div className="w-full text-center">
                            <p>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Eaque porro 
                                esse dolores sed saepe doloremque nostrum 
                                voluptate harum, quo consequuntur.
                            </p>
                        </div>

                    </div>
                    <div className="flex flex-col justify-evenly items-center w-1/4">
                    <div className="w-full">
                        <img src={programmer} className="" alt="code review" /> 

                        </div>
                        <h4 className="w-full text-center text-xl2 font-bold">Achieve</h4>
                        <div className="w-full text-center">
                            <p>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Eaque porro 
                                esse dolores sed saepe doloremque nostrum 
                                voluptate harum, quo consequuntur.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center w-full gap-y-8">
                <h3 className='text-xl3 font-bold'> Everything You Need To Know </h3>
                <div className="flex flex-row justify-evenly flex-wrap w-2/3 gap-5">
                    <div className="flex flex-col w-1/4 items-center shadow-md bg-white p-6 rounded-md gap-y-4">
                        <div className='rounded-full w-full h-3/4 bg-cover border-2 bg-[url("assets/images/book.png")] '>
                             
                        </div>
                        <h3 className='text-xl font-bold'>Front-End</h3>
                    </div>
                    <div className="flex flex-col w-1/4 items-center shadow-md bg-white p-6 rounded-md">
                        <div>
                            <img src={book} alt="" />
                        </div>
                        <h3 className='text-xl font-bold'>Front-End</h3>
                    </div>
                    <div className="flex flex-col w-1/4 items-center shadow-md bg-white p-6 rounded-md">
                        <div>
                            <img src={book} alt="" />
                        </div>
                        <h3 className='text-xl font-bold'>Front-End</h3>
                    </div>
                    <div className="flex flex-col w-1/4 items-center shadow-md bg-white p-6 rounded-md">
                        <div>
                            <img src={book} alt="" />
                        </div>
                        <h3 className='text-xl font-bold'>Front-End</h3>
                    </div>
                    <div className="flex flex-col w-1/4 items-center shadow-md bg-white p-6 rounded-md">
                        <div>
                            <img src={book} alt="" />
                        </div>
                        <h3 className='text-xl font-bold'>Front-End</h3>
                    </div>
                    <div className="flex flex-col w-1/4 items-center bg-white shadow-md p-6 rounded-md">
                        <div>
                            <img src={book} alt="" />
                        </div>
                        <h3 className='text-xl font-bold'>Front-End</h3>
                    </div>
                    <div className="flex flex-col w-1/4 items-center shadow-md bg-white p-6 rounded-md">
                        <div>
                            <img src={book} alt="" />
                        </div>
                        <h3 className='text-xl font-bold'>Front-End</h3>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <Link to="/LearningPath" className='text-orange-500 text-xl'> View More Paths  </Link>
                </div>
                
            </section>
            <section className="flex flex-col items-center justify-center bg-white pt-10 gap-8">
                <h3 className="text-center text-xl3  font-bold"> Testimonials</h3>
                <div className="flex flex-row justify-between w-4/5 gap-10 ">
                    <div className="flex flex-row justify-start gap-3 shadow p-3">
                        <div className="flex w-2/5 rounded-full border-2 items-center justify-center"> image </div>
                        <article className='text-justify flex flex-col'>
                        <h4 className='text-orange-500 text-lg font-bold'>Ikenna</h4>
                            <p className='text-md'>
                            Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Nostrum, recusandae! Est quia ullam similique 
                            deleniti natus sed repellat repellendus suscipit?
                            </p>
                        </article>
                        
                    </div>
                    <div className="flex flex-row justify-evenly gap-3 shadow p-3">
                        <div className=" flex w-2/5 rounded-full border-2 items-center justify-center "> image </div>
                        <article className='text-justify flex flex-col'>
                            <h4 className='text-orange-500 text-lg font-bold'>Ikenna</h4>
                            <p className='text-md'>
                            Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Nostrum, recusandae! Est quia ullam similique 
                            deleniti natus sed repellat repellendus suscipit?
                            </p>
                        </article>
                        
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link to="/Testimonials"> Read More Success Stories</Link>
                </div>
            </section>
        </main>
     );
}
 
export default Main;