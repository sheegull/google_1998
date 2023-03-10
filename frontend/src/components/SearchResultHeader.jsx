import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../utils/ContextApi";
import SearchInput from "./SearchInput";

import Logo from "../assets/google_1998_logo.png";

const SearchResultHeader = () => {
  const { setImageSearch } = useContext(Context);

  useEffect(() => {
    return () => setImageSearch(false);
  }, []);

  return (
    <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center top-0 bg-white">
      <div className="flex items-center justify-between w-full mb-4">
        <div className="flex items-center grow">
          <Link to="/">
            <img src={Logo} alt="logo-image" className="hidden md:block w-[150px] mr-10" />
          </Link>
          <div className="flex justify-center items-center gap-2">
            <SearchInput from="SearchResult" />
            <button className="h-5 px-2 flex items-center  bg-[#FCFCFC] text-[11px] border border-[#AFAFAF] rounded-md">
              <span className="hidden md:block">Google&nbsp;</span>Search
            </button>
            <button className="flex h-5 px-2 items-center  bg-[#FCFCFC] text-[11px] border border-[#AFAFAF] rounded-md">
              <span className="hidden md:block">I'm feeling&nbsp;</span>lucky
            </button>
          </div>
        </div>
        <div className="text-[#2914E8] underline relative top-[-20px] hidden md:block cursor-pointer">
          Help
        </div>
      </div>
    </div>
  );
};

export default SearchResultHeader;
