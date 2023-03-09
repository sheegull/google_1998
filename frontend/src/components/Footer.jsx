import React from "react";
import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
  return (
    <footer className="bg-white border-t-2">
      <div className="hidden md:flex pt-[5px] px-[15px] justify-center items-center">
        <div className=" text-[12px] flex gap-1">
          <span className="text-[#35373B]">Try your query on:</span>
          <ul className="text-[#2914E8] underline flex gap-1 cursor-pointer">
            <li>AltaVista</li>
            <li>Excite</li>
            <li>HotBot</li>
            <li>Infoseek</li>
            <li>Lycos</li>
            <li>Deja</li>
            <li>Yahoo!</li>
            <li>Amazon</li>
            <li>Open</li>
            <li>Directory</li>
            <li>eGroups</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center py-3 md:pb-5 md:px-[15px]">
        <div className="flex gap-2">
          Copyright @1998 Google Inc.
          <div className=" flex gap-1">
            <span>-</span>
            <span className="text-[#2914E8] underline cursor-pointer">About</span>
            <span>-</span>
            <span className="text-[#2914E8] underline cursor-pointer">Help</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
