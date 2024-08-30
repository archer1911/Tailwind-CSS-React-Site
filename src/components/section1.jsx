import React from "react";
import avatar from "./images/avatar.svg";
import fb from "./images/facebook-icon.png";
import twt from "./images/twitter-icon.png";
import lk from "./images/linkedin-icon.png";
import yt from "./images/youtube-icon.png";

export default class Section1 extends React.Component {
  render() {
    return (
      <>
        <section className=" mt-20  flex justify-between   md:flex-row sm:flex-col  sm:items-center   items-center flex-col  " >
          <div className=" w-[70%] mt-10 sm:w-full">
            <p className="text-3xl font-bold text-white">
              Hi there, I'm <span className="text-blue-400">Ixartz</span> 👋
            </p>
            <p className="mt-5 text-white  text-xl font-loose leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus{" "}
              <br /> <span className="text-blue-400">malesuada</span> nisi
              tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet,{" "}
              <br /> <span className="text-blue-400">consectetur</span>{" "}
              adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore
              et dolore.
            </p>
            <div className="flex gap-2 px-1 mt-5">
              <div className="icon w-[45px] hover:mt-1 ">
                <img src={twt} alt="" />
              </div>
              <div className="icon w-[45px] hover:mt-1 ">
                <img src={fb} alt="" />
              </div>
              <div className="icon w-[45px] hover:mt-1 ">
                <img src={lk} alt="" />
              </div>
              <div className="icon w-[45px] hover:mt-1 ">
                <img src={yt} alt="" />
              </div>
            </div>
          </div>

          <div className=" sm:w-[300px] w-[200px] ">
            <img className="   w-full" src={avatar} alt="" />
          </div>
        </section>
      </>
    );
  }
}
