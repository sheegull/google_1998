import React from "react";

import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";

import Logo from "../assets/google_1998_logo.png";

const Home = () => {
  return (
    <div className="h-[100vh] flex flex-col font-serif">
      {/* <HomeHeader /> */}
      <main className="grow flex flex-col justify-center">
        <div className="w-full flex flex-col items-center absolute top-[150px]">
          <img src={Logo} alt="google-logo" className="w-[172px] md:w-[272px] mb-2" />
          <div className="w-[600px] flex flex-col justify-center items-center bg-[#EAEAEA] pt-[2px] pb-4">
            <p className="text-[13px] text-[#21171E]">Search the web using Google!</p>
            <SearchInput />
            <div className="flex gap-[5px] text-[#21171E] mt-[3px]">
              <button className="h-5 px-2 flex items-center  bg-[#DADADA] text-[12px] border border-[#AFAFAF]">
                Google Search
              </button>
              <button className="h-5 px-2 flex items-center  bg-[#DADADA] text-[12px] border border-[#AFAFAF]">
                I'm feeling lucky
              </button>
            </div>
          </div>
          <div className="w-[602px] h-[75px] flex flex-row leading-4 text-[11px]">
            <div className="w-[215px] flex flex-col justify-center items-center text-center bg-[#6FE1D1] border-[1px] border-white">
              <ul>
                <li className="">Special Searches</li>
                <li className="text-[#2914E8] underline">Stanford Search</li>
                <li className="text-[#2914E8] underline">Linux Search</li>
              </ul>
            </div>
            <div className="w-[140px] flex flex-col justify-center items-center text-center bg-[#60C3B5] border-[1px] border-white">
              <ul>
                <li className="text-[#2914E8] underline">Help!</li>
                <li className="text-[#2914E8] underline">About Google!</li>
                <li className="text-[#2914E8] underline">Company Info</li>
                <li className="text-[#2914E8] underline">Google! Logos</li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center text-center bg-[#52A59A] flex-1 border-[1px] border-white">
              <p>Get Google!</p>
              <p>updates monthly:</p>
              <input
                type="email"
                className="grow w-[120px] items-center outline-0 text-black/[0.87]"
              />
              <div className="flex gap-2 m-[1.5px] items-center">
                <button className="h-5 px-2 flex items-center  bg-[#DADADA] border border-[#AFAFAF]">
                  Subscribe
                </button>
                <p className="text-[#2914E8] underline">Archive</p>
              </div>
            </div>
          </div>
          <div className="text-[11px] mt-2 flex justify-center text-center">
            Copyright @1998 Google Inc.
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
