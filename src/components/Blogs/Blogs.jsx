import React, { useEffect } from "react";
import Img1 from "../../assets/bn8.jpg";
import Img2 from "../../assets/b9.jpg";
import Img3 from "../../assets/b10.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  return (
    <main data-aos="fade-up" data-aos-offset="200">
      <section className="container mb-10 py-8">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
        Explore Our Services
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img1}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
              Residential Waste Collection.
              </h1>
              <p >
              From weekly curbside pickup to special waste disposal services, we make managing household waste
               convenient and hassle-free
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img2}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
              Commercial Waste Management.
              </h1>
              <p >
              Let us handle your business waste management needs so you can focus 
              on what matters most running your business.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Img3}
                alt="No image"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
              Specialized Solutions.
              </h1>
              <p >
              We offer a range of specialized services, including hazardous waste disposal, bulk item pickup, 
              and recycling programs tailored to your requirements.
              </p>
            </div>
          </div>
        </div>
        
        <button className="rounded-md bg-green-500 px-4 py-2 text-sm  text-black transition-colors duration-300 hover:bg-white/90">
              more services
            </button>
      </section>
    </main>
  );
};

export default Blogs;
