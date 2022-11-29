
import codeImage from '../../assets/images/softwaredev1.svg'
import book from '../../assets/images/book.png'
import programmer from '../../assets/images/programmer.png'
import programming from '../../assets/images/programming.png'


const Main = () => {
    return ( 
        <main className="flex flex-col bg-gray-50 dark:bg-gray-700 pt-5
        dark:bg-gray-900 w-screen">
            <section className="flex flex-col justify-center items-center w-full ">
                <div className="w-2/4">
                    <h2 className="text-center font-sans text-xl5 font-bold">Your Career in <span className="text-orange-500">Software Development </span> Starts Here!</h2>
                </div>
                <p className="text-center w-2/4 text-lg text-gray-500">Become a powerful Software Engineer in Front-End Web Development, 
                   Back-End Web Development, Full Stack Web Development, 
                   Mobile Application Development and Cloud Computing </p>
                 
            </section>
            <section className="flex flex-row justify-center items-center w-full">
                <div className="w-full">
                  <img src={codeImage} className="" alt="code review" />  
                </div>
            </section>
            <section className="flex flex-row justify-center items-center w-full">
                <div className="flex flex-col justify-center w-1/5">
                    <div className="w-full">
                    <img src={book} className="" alt="code review" /> 

                    </div>
                    <div className="w-full text-center">
                        <p>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Eaque porro 
                            esse dolores sed saepe doloremque nostrum 
                            voluptate harum, quo consequuntur.
                        </p>
                    </div>

                </div>
                <div className="flex flex-col justify-center w-1/5">
                <div className="w-full">
                    <img src={programming} className="" alt="code review" /> 

                    </div>
                    <div className="w-full">
                        <p>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Eaque porro 
                            esse dolores sed saepe doloremque nostrum 
                            voluptate harum, quo consequuntur.
                        </p>
                    </div>

                </div>
                <div className="flex flex-col justify-center w-1/5">
                <div className="w-full">
                    <img src={programmer} className="" alt="code review" /> 

                    </div>
                    <div className="w-full">
                        <p>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Eaque porro 
                            esse dolores sed saepe doloremque nostrum 
                            voluptate harum, quo consequuntur.
                        </p>
                    </div>

                </div>
            </section>
        </main>
     );
}
 
export default Main;