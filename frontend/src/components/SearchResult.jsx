import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SearchResultHeader from "./SearchResultHeader";
import { Context } from "../utils/ContextApi";
import { fetchDataFromApi } from "../utils/api";
import SearchedItem from "./SearchedItem";
import Pagination from "./Pagination";
import Footer from "./Footer";
import SearchInput from "./SearchInput";

const SearchResult = () => {
  const [result, setResult] = useState();
  const { query, startIndex } = useParams();
  const { imageSearch } = useContext(Context);

  useEffect(() => {
    fetchSearchResults();
    window.scrollTo(0, 0);
  }, [query, startIndex, imageSearch]);

  const fetchSearchResults = () => {
    let payload = { q: query, start: startIndex };
    if (imageSearch) {
      payload.searchType = "image";
    }
    fetchDataFromApi(payload).then((res) => {
      console.log(res);
      setResult(res);
    });
  };

  if (!result) return;
  const { items, queries, searchInformation } = result;
  return (
    <div className="flex flex-col min-h-[100vh] font-serif text-[12px]">
      <SearchResultHeader />
      <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
        <div className="flex text-[10px] text-[#70767a] mb-3 justify-center">
          {`Showing results 1-10 of approximately ${searchInformation.formattedTotalResults} for google. Search took ${searchInformation.formattedSearchTime} seconds.`}
        </div>
        {!imageSearch ? (
          <>
            {items?.map((item, idx) => (
              <SearchedItem key={idx} data={item} />
            ))}
          </>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
            {items?.map((item, idx) => (
              <SearchedImageItem key={idx} data={item} />
            ))}
          </div>
        )}
        <Pagination queries={queries} />
        <div className="flex mt-5 gap-2 justify-center items-center mb-2">
          <SearchInput />
          <button className="h-5 px-1 md:px-2 flex items-center  bg-[#FCFCFC] text-[11px] border border-[#AFAFAF] rounded-md">
            <span className="hidden md:block">Google&nbsp;</span>Search
          </button>
          <p className="text-[#2914E8] underline cursor-pointer">Search within results?</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResult;
