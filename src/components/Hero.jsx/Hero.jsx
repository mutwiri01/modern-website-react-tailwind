import React from "react";
import Banner from "../../assets/hr2.jpg";

const Hero = () => {
  return (
    <main className="bg-gradient-to-r from-green-300 to-green-500 pt-20 dark:bg-violet-950">
      <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] ">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
          >
            <h1 className=" text-4xl ">
            Welcome to Bin-IT Solutions   Your Trusted Partner in cleaning solutions
            </h1>
            <p className="">
            At Bin-It Solutions, we are passionate advocates for cleaner communities, 
            healthier environments, and a sustainable future for all.As a leading provider of waste management 
            solutions, we are dedicated to delivering reliable, efficient, and environmentally responsible 
            services to homes and businesses alike
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <img src={Banner} alt="No image" className="hover:drop-shadow-md" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
