import codeImage from "../../assets/images/softwaredev1.svg";
import book from "../../assets/images/book.png";
import programmer from "../../assets/images/buildinganapp1.svg";
import build from "../../assets/images/build.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Main = () => {
  
  return (
    <main
      className="flex flex-col justify-between bg-gray-50 dark:bg-gray-700 pt-5 pb-10
        dark:bg-gray-900  gap-y-12"
    >
      <section className="flex flex-col justify-center items-center w-full gap-y-4 ">
        <div className="w-3/4 lg:w-3/5">
          <h2 className="text-center font-sans text-5xl font-bold">
            Your Career in{" "}
            <span className="text-orange-500">Software Development </span>{" "}
            Starts Here!
          </h2>
        </div>
        <p className="text-center w-3/4 lg:w-3/5 text-lg text-gray-500">
          Become a powerful Software Engineer in Front-End Web Development,
          Back-End Web Development, Full Stack Web Development, Mobile
          Application Development and Cloud Computing{" "}
        </p>
        <div className="flex flex-row justify-center items-center">
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-400 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
               px-5 py-2.5 text-center text-xl
               mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 
               dark:focus:ring-blue-800" 
          >
            Get Started{" "}
          </button>
        </div>
      </section>
      <section className="flex flex-row justify-center items-center w-full">
        <div className="w-full">
          <img src={codeImage} className="" alt="code review" />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full gap-6">
        <div className="flex flex-col justify-center items-center gap-6 w-full md:w-3/4 p-4 ">
          <h3 className="text-center text-3xl font-bold"> What we do </h3>
          <p className="text-center text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vitae
            molestias similique, facilis adipisci consectetur, officiis
            voluptatum perspiciatis rem modi, architecto ipsum quasi. Dolore
            eum, ad consequatur perspiciatis deleniti commodi!
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:w-11/12  justify-center items-center gap-6 w-full ">
          <div className="flex flex-col justify-center items-center gap-6 w-4/5  ">
            <div className="w-2/4">
              <img src={programmer} className="" alt="code review" />
            </div>
            <h4 className="w-full text-center text-2xl font-bold">Learn</h4>
            <div className="w-full text-lg p-3 text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                porro esse dolores sed saepe doloremque nostrum voluptate harum,
                quo consequuntur.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6 w-4/5 ">
            <div className="w-2/4">
              <img src={build} className="" alt="code review" />
            </div>
            <h4 className="w-full text-center text-2xl font-bold">Build</h4>
            <div className="w-full text-lg p-3 text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                porro esse dolores sed saepe doloremque nostrum voluptate harum,
                quo consequuntur.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6 w-4/5 ">
            <div className="w-2/4">
              <img src={programmer} className="" alt="code review" />
            </div>
            <h4 className="w-full text-center text-2xl font-bold">Achieve</h4>
            <div className="w-full text-lg p-3 text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                porro esse dolores sed saepe doloremque nostrum voluptate harum,
                quo consequuntur.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full gap-y-8">
        <h3 className="text-3xl text-center font-bold"> Everything You Need To Know </h3>
        <div className="flex flex-row w-4/5 justify-center flex-wrap  gap-5">
          
          <div className="flex flex-col  basis-3/5 md:basis-1/3 lg:basis-1/5 items-center shadow-md bg-white p-6 rounded-md">
            <div>
              <img src={book} alt="" />
            </div>
            <h3 className="text-xl font-bold">Front-End</h3>
          </div>
          <div className="flex flex-col basis-3/5 md:basis-1/3 lg:basis-1/5 items-center shadow-md bg-white p-6 rounded-md">
            <div>
              <img src={book} alt="" />
            </div>
            <h3 className="text-xl font-bold">Front-End</h3>
          </div>
          <div className="flex flex-col basis-3/5 md:basis-1/3 lg:basis-1/5 items-center shadow-md bg-white p-6 rounded-md">
            <div>
              <img src={book} alt="" />
            </div>
            <h3 className="text-xl font-bold">Front-End</h3>
          </div>
          <div className="flex flex-col basis-3/5 md:basis-1/3 lg:basis-1/5 items-center shadow-md bg-white p-6 rounded-md">
            <div>
              <img src={book} alt="" />
            </div>
            <h3 className="text-xl font-bold">Front-End</h3>
          </div>
          <div className="flex flex-col basis-3/5 md:basis-1/3 lg:basis-1/5 items-center bg-white shadow-md p-6 rounded-md">
            <div>
              <img src={book} alt="" />
            </div>
            <h3 className="text-xl font-bold">Front-End</h3>
          </div>
          <div className="flex flex-col basis-3/5 md:basis-1/3 lg:basis-1/5 items-center shadow-md bg-white p-6 rounded-md">
            <div>
              <img src={book} alt="" />
            </div>
            <h3 className="text-xl font-bold">Front-End</h3>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link to="/LearningPath" className="text-orange-500 text-xl">
            {" "}
            View More Paths{" "}
          </Link>
        </div>
      </section>
      <section className="flex flex-col  items-center justify-center bg-white pt-10 gap-8 pb-5">
        <h3 className="text-center text-3xl  font-bold"> Testimonials</h3>
        <div className="flex flex-col lg:flex-row justify-between w-11/12 gap-10 ">
          <div className="flex flex-row justify-start gap-3 shadow p-3">
            <div className="flex w-2/5 rounded-full border-2 h-auto items-center justify-center">
            <img src={book} alt="" className="rounded-full w-full object-cover " />
            </div>
            <article className="text-justify flex flex-col">
              <h4 className="text-orange-500 text-xl font-bold">Ikenna</h4>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, recusandae! Est quia ullam similique deleniti natus sed
                repellat repellendus suscipit?
              </p>
            </article>
          </div>
          <div className="flex flex-row justify-evenly gap-3 shadow p-3">
            <div className=" flex w-2/5 rounded-full border-2 h-auto items-center justify-center  ">
            <img src={book} alt="" className="rounded-full w-full object-cover  " />
            </div>
            <article className="text-justify flex flex-col">
              <h4 className="text-orange-500 text-xl font-bold">Ikenna</h4>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, recusandae! Est quia ullam similique deleniti natus sed
                repellat repellendus suscipit?
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
};

export default Main;
