import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { IoMdClose } from "react-icons/io";

const SearchInput = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();

  const searchQueryHandler = (e) => {
    if (e?.key === "Enter" && searchQuery?.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };
  return (
    <div
      id="searchBox"
      className="h-[20px] w-[250px] flex items-center gap-3 px-4 border border-[#9A9A9A] hover:bg-white"
    >
      {/* h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl */}
      <input
        type="text"
        className="grow outline-0 text-black/[0.87]"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        onKeyUp={searchQueryHandler}
        autoFocus
      />
      <div className="flex items-center gap-3">
        {searchQuery && (
          <IoMdClose
            size={24}
            color="#70757a"
            className="cursor-pointer"
            onClick={() => setSearchQuery("")}
          />
        )}
      </div>
    </div>
  );
};

export default SearchInput;
