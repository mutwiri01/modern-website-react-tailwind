import React from "react";
import Banner from "../../assets/blog2.jpg";

const BannerDetails = ({ reverse, img }) => {
  return (
    <section>
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}
            >
              <h1 className="text-2xl md:text-4xl ">
               A Commitment to Innovation and Sustainability    
              </h1>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2  md:gap-4">
                  <li className="font-medium">
                  Our mission goes beyond just collecting and disposing of waste. 
                 We strive to revolutionize the way waste is managed by implementing 
                 innovative and sustainable practices that minimize environmental impact and
                  maximize resource efficiency
                  </li>
                  <li className="font-medium">
                  By leveraging cutting-edge technologies and industry best practices, we continuously improve our services to ensure they are not only reliable and efficient but also environmentally responsible.
                  </li>
                  
                </ul>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={reverse ? "order-1" : ""}
            >
              <img
                src={img}
                alt="No image"
                className="max-auto w-full hover:drop-shadow-md"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails;
