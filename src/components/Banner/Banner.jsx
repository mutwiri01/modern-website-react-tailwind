import React from "react";
import Banner1 from "../../assets/c1.png";

const Banner = () => {
  return (
    <main className="bg-green-500 ">
      <section data-aos="fade-up" className="container py-8 md:py-12">
        <div className="grid grid-cols-1 items-center gap-4 sm:text-ellipsis md:grid-cols-3 md:gap-8">
          <div className=" order-2 flex flex-col items-center gap-4 text-center text-black md:col-span-2  md:items-start md:text-left ">
            <h1 className="text-3xl font-bold ">Join Us in Making a Difference</h1>
            <p className="">
            Together, we can make a positive impact on our communities and the planet. 
            Join us in our mission to create a cleaner, greener future for generations to come
            </p>
            <button className="rounded-md bg-white px-4 py-2 text-sm  text-black transition-colors duration-300 hover:bg-white/90">
              contact us
            </button>
          </div>
          <div className="order-1">
          <img src={Banner1} alt="No image" className="hover:drop-shadow-md" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Banner;
