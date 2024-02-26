import React from "react";
import { FaRecycle } from "react-icons/fa";

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col  justify-between bg-slate-950 px-8 pb-6 pt-24 text-white transition-all duration-200 md:hidden`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaRecycle size={50} />
          <div>
            <h1>ECOWASTE SOLUTIONS</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            <li>
              <a href="#" className="mb-5 inline-block">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="mb-5 inline-block">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="mb-5 inline-block">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mb-5 inline-block">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>© EcoWaste All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
