import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import { menu } from "../utils/Constants";
import { Context } from "../utils/ContextApi";
import SearchInput from "./SearchInput";
// import ProfileIcon from "./ProfileIcon";

import Logo from "../assets/google_1998_logo.png";

const SearchResultHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");
  const { setImageSearch } = useContext(Context);

  useEffect(() => {
    return () => setImageSearch(false);
  }, []);

  // const clickHandler = (menuItem) => {
  //   let isTypeImage = menuItem.name === "Images";
  //   setImageSearch(isTypeImage ? true : false);
  //   setSelectedMenu(menuItem.name);
  // };

  return (
    <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center top-0 bg-white">
      <div className="flex items-center justify-between w-full mb-4">
        <div className="flex items-center grow">
          <Link to="/">
            <img src={Logo} alt="logo-image" className="hidden md:block w-[150px] mr-10" />
          </Link>
          <div className="flex justify-center items-center gap-2">
            <SearchInput from="SearchResult" />
            <button className="h-5 px-1 md:px-2 flex items-center  bg-[#FCFCFC] text-[11px] border border-[#AFAFAF] rounded-md">
              Google Search
            </button>
            <button className="h-5 px-2 flex items-center  bg-[#FCFCFC] text-[11px] border border-[#AFAFAF] rounded-md">
              I'm feeling lucky
            </button>
          </div>
        </div>
        <div className="text-[#2914E8] underline relative top-[-20px] hidden md:block cursor-pointer">
          Help
        </div>
      </div>

      {/* <div className="flex ml-[-12px] mt-3">
        {menu.map((menu, idx) => (
          <span
            key={idx}
            className={`flex items-center p-3 text-[#5f6368] cursor-pointer relative ${
              selectedMenu === menu.name ? "text-[#1a73e8]" : ""
            }`}
            onClick={() => clickHandler(menu)}
          >
            <span className="hidden md:block mr-2">{menu.icon}</span>
            <span className="text-sm">{menu.name}</span>
            {selectedMenu === menu.name && (
              <span className="h-[3px] w-[calc(100%-20px)] absolute bg-[#1a73e8] bottom-0 left-[10px]" />
            )}
          </span>
        ))}
      </div> */}
    </div>
  );
};

export default SearchResultHeader;
