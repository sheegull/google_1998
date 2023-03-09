import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SearchInput = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const [composing, setComposing] = useState(false);
  const navigate = useNavigate();

  const searchQueryHandler = (e) => {
    if (composing) return;
    if (e?.key === "Enter" && searchQuery?.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  return (
    <div
      id="searchBox"
      className="h-[23px] w-[250px] flex items-center gap-3 px-1 border border-[#9A9A9A] bg-white hover:bg-white"
    >
      <input
        type="text"
        className="grow h-[20px] text-[13px] items-center outline-0 text-black/[0.87] font-serif"
        onChange={(e) => setSearchQuery(e.target.value)}
        onCompositionStart={() => {
          setComposing(true);
        }}
        onCompositionEnd={() => {
          setComposing(false);
        }}
        value={searchQuery}
        onKeyDown={searchQueryHandler}
        autoFocus
      />
    </div>
  );
};

export default SearchInput;
