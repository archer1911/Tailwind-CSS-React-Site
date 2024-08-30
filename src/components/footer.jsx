import React from "react";
export default class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className=" mt-20">
          <div className="sm">
            <div className="flex justify-between items-center">
             
              <p className="text-white text-2xl font-semibold">
                Subscribe to my
                <span className="text-blue-400"> Newsletter</span>
              </p>
            </div>


            <div className="flex sm:flex-row flex-col gap-2 justify-between sm:items-center  mt-5">
                <p className="sm:w-[50%] text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi, inventore atque cupiditate.</p>
                <div className="sm:w-[40%] p-3 flex bg-[rgb(30,41,59)] rounded-full  justify-between gap-1 border-2 border-transparent hover:border-blue-600" >
                    <input className="w-full bg-inherit text-[13px] text-white outline-none  " type="text" />
                    <button className="button w-[fit] bg-blue-400 h-[30px]  text-[13px] rounded-full pl-2 pr-2 font-medium  text-white">Subscribe</button>
                    
                </div>

            </div>


          </div>

          <div className="border-t border-gray-700 mt-10 flex items-center text-gray-500 p-3 font-medium text-sm">
          © Copyright 2022 by Astro boilerplate. Built with ♥ by CreativeDesignsGuru.

          </div>
        </footer>
      </>
    );
  }
}
