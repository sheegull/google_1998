import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/sheegull_icon.png";

export const Page404 = () => {
  return (
    <div className="flex justify-center items-center text-lg my-10">
      <img src={Logo} alt="sheegull-logo" className="w-[272px] rounded-3xl" />
      <div className="flex flex-col ml-10 leading-10">
        <h1 className="">404 NOT FOUND</h1>
        <p>HI!! API REQUEST LIMIT...</p>
        <p>THANKS COME AGAIN!!!!</p>
        <Link
          to="/"
          className="mt-10 w-[100px] h-10 px-2 flex justify-center items-center bg-[#DADADA] border border-[#AFAFAF] rounded-sm"
        >
          Top Page
        </Link>
      </div>
    </div>
  );
};
