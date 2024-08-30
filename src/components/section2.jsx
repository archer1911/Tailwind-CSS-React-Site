import React from "react";
import projectwd from "./images/project-web-design.png";
import projectmp from "./images/project-maps.png";
import projectfire from "./images/project-fire.png";
import img1 from "./images/image-post.jpeg";
import img2 from "./images/image-post2.jpeg";
import img3 from "./images/image-post3.jpeg";
export default class Section2 extends React.Component {
  render() {
    return (
      <>
        <section className="border border-yellow-400 mt-20">
          <p className="text-white text-xl font-semibold">
            Recent <span className="text-blue-400">Projects</span>
          </p>

          <div className="blogs flex flex-col border-blue-500 gap-7">
            <div className="blog bg-[#1E293B]   p-3 rounded   gap-10 items-center flex md:flex-row   flex-col   ">
              {/* <img src=} alt="" /> */}
              <div className=" block md:w-[150px]  w-[350px] ">
                <img className="sm:w-full" src={projectwd} alt="" />
              </div>
              <div className=" w-[70%] ">
                <div className="flex  sm:flex-row flex-wrap  gap-2 items-center">
                  <p className="h1 text-white text-xl">Project 1</p>
                  <span className="bg-blue-600 p-1 h-fit text-[12px] rounded-md">
                    Astro.js
                  </span>
                  <span className="bg-yellow-400 h-fit  p-1 text-[12px] rounded-md">
                    Web design
                  </span>
                  <span className="bg-blue-300 h-fit  p-1 text-[12px] rounded-md">
                    Tailwind.css
                  </span>
                  <span className="bg-pink-400 h-fit  p-1 text-[12px] rounded-md">
                    TypeScript
                  </span>
                </div>
                <div>
                  <p className="  mt-[10px]  md:text-lg text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse bibendum. Nunc non posuere consectetur, justo
                    erat semper enim, non hendrerit dui odio id enim.
                  </p>
                </div>
              </div>
            </div>

            <div className="blog bg-[#1E293B]   p-3 rounded   gap-10 items-center flex md:flex-row   flex-col   ">
              {/* <img src=} alt="" /> */}
              <div className=" block md:w-[150px]  w-[350px] ">
                <img className="sm:w-full" src={projectfire} alt="" />
              </div>
              <div className=" w-[70%] ">
                <div className="flex  sm:flex-row flex-wrap  gap-2 items-center">
                  <p className="h1 text-white text-xl">Project 1</p>
                  <span className="bg-blue-600 p-1 h-fit text-[12px] rounded-md">
                    Astro.js
                  </span>
                  <span className="bg-yellow-400 h-fit  p-1 text-[12px] rounded-md">
                    Web design
                  </span>
                  <span className="bg-blue-300 h-fit  p-1 text-[12px] rounded-md">
                    Tailwind.css
                  </span>
                  <span className="bg-pink-400 h-fit  p-1 text-[12px] rounded-md">
                    TypeScript
                  </span>
                </div>
                <div>
                  <p className="  mt-[10px]  md:text-lg text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse bibendum. Nunc non posuere consectetur, justo
                    erat semper enim, non hendrerit dui odio id enim.
                  </p>
                </div>
              </div>
            </div>

            <div className="blog bg-[#1E293B]   p-3 rounded   gap-10 items-center flex md:flex-row   flex-col   ">
              {/* <img src=} alt="" /> */}
              <div className=" block md:w-[150px]  w-[350px] ">
                <img className="sm:w-full" src={projectmp} alt="" />
              </div>
              <div className=" w-[70%] ">
                <div className="flex  sm:flex-row flex-wrap  gap-2 items-center">
                  <p className="h1 text-white text-xl">Project 1</p>
                  <span className="bg-blue-600 p-1 h-fit text-[12px] rounded-md">
                    Astro.js
                  </span>
                  <span className="bg-yellow-400 h-fit  p-1 text-[12px] rounded-md">
                    Web design
                  </span>
                  <span className="bg-blue-300 h-fit  p-1 text-[12px] rounded-md">
                    Tailwind.css
                  </span>
                  <span className="bg-pink-400 h-fit  p-1 text-[12px] rounded-md">
                    TypeScript
                  </span>
                </div>
                <div>
                  <p className="  mt-[10px]  md:text-lg text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse bibendum. Nunc non posuere consectetur, justo
                    erat semper enim, non hendrerit dui odio id enim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" mt-10">
          <div className="flex justify-between items-center">
            {" "}
            <p className="text-white text-xl font-semibold">
              Recent <span className="text-blue-400">Projects</span>
            </p>
            <p className="text-white text-md font-semibold">Show all posts →</p>
          </div>

          <div className=" mt-10 flex md:flex-row flex-col justify-between gap-5">
            <div className=" md:w-[32%] w-full   pb-1  bg-[rgb(30,41,59)] flex flex-col items-center ">
              <div className="imgbox h-[200px] overflow-hidden w-full ">
                <img src={img1} className="w-full h-full object-cover" alt="" />
              </div>

              <p className="text-white text-lg font-semibold mt-5">
                Typography Example
              </p>
              <p className="text-[12px] text-gray-500">Feb 6th, 2024</p>
              <p className="text-center text-sm p-1 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                vero esse non molestias eos excepturi.
              </p>
            </div>

            <div className=" md:w-[32%] w-full   pb-1  bg-[rgb(30,41,59)] flex flex-col items-center ">
              <div className="imgbox h-[200px] overflow-hidden w-full ">
                <img src={img2} className="w-full h-full object-cover" alt="" />
              </div>

              <p className="text-white text-lg font-semibold mt-5">
                Typography Example
              </p>
              <p className="text-[12px] text-gray-500">Feb 6th, 2024</p>
              <p className="text-center text-sm p-1 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                vero esse non molestias eos excepturi.
              </p>
            </div>

            <div className=" md:w-[32%] w-full   pb-1  bg-[rgb(30,41,59)] flex flex-col items-center ">
              <div className="imgbox h-[200px] overflow-hidden w-full ">
                <img src={img3} className="w-full h-full object-cover" alt="" />
              </div>

              <p className="text-white text-lg font-semibold mt-5">
                Typography Example
              </p>
              <p className="text-[12px] text-gray-500">Feb 6th, 2024</p>
              <p className="text-center text-sm p-1 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                vero esse non molestias eos excepturi.
              </p>
            </div>

           


           

          
          </div>
        </section>
      </>
    );
  }
}
