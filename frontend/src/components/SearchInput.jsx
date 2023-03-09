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
      className="h-[23px] w-[250px] flex items-center gap-3 px-3 border border-[#9A9A9A] bg-white hover:bg-white"
    >
      <input
        type="text"
        className="grow h-[18px] items-center outline-0 text-black/[0.87]"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        onKeyUp={searchQueryHandler}
        autoFocus
      />
    </div>
  );
};

export default SearchInput;
