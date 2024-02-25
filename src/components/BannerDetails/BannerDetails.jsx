import React from "react";
import Banner from "../../assets/lg1.svg";

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
                Our Commitment to Excellence
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
              Our experience in the industry has earned us a reputation for excellence through our unwavering 
              commitment to customer satisfaction, innovative practices, and strict adherence to safety and 
              environmental standards. 
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2  md:gap-4">
                  <li className="font-medium">
                  Reliable Service: We understand the importance of timely waste collection. Count on us to be there when you need us, every time.
                  </li>
                  <li className="font-medium">
                  Sustainability: We prioritize environmental sustainability by promoting recycling, reducing waste, and implementing eco-friendly practices
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
