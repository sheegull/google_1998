import React from "react";

import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";

import Logo from "../assets/google_1998_logo.png";

const Home = () => {
  return (
    <div className="h-[100vh] flex flex-col">
      <HomeHeader />
      <main className="grow flex flex-col justify-center">
        <div className="w-full px-5 flex flex-col items-center pb-20 absolute top-[150px]">
          <img src={Logo} alt="google-logo" className="w-[172px] md:w-[272px] mb-2" />
          <div className="w-[600px] flex flex-col justify-center items-center bg-[#EAEAEA] pt-[2px] pb-4">
            <p className="text-[13px] text-[#21171E]">Search the web using Google!</p>
            <SearchInput />
            <div className="flex gap-[5px] text-[#21171E] mt-[3px]">
              <button className="h-5 px-2 flex items-center  bg-[#DADADA] text-[13px] border border-[#AFAFAF]">
                Google Search
              </button>
              <button className="h-5 px-2 flex items-center  bg-[#DADADA] text-[13px] border border-[#AFAFAF]">
                I'm Feeling Lucky
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
