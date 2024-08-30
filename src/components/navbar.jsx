import React from "react";
import { BsBarChart } from "react-icons/bs";

export default class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="flex  sm:flex-row flex-col sm:justify-between gap-3 mt-8  sm:ml-0 ml-5    ">
          <div className="flex gap-2 items-center  ">
           
            <BsBarChart className="font-bold text-[35px]  text-[rgb(8,145,178)]  " />
            <p className="font-bold text-lg  text-[rgb(8,145,178)]">
              Ixartz's Blog
            </p>
          </div>
          <div className="flex items-center ">
            <ul className="flex h-fit list-none gap-2  font-medium text-white">
              <li className="cursor-pointer">Blogs</li>
              <li className="cursor-pointer">Github</li>
              <li className="cursor-pointer">Twitter</li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
