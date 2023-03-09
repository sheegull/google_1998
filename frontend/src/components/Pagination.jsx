import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { pagination } from "../utils/Constants";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Logo from "../assets/google-pagination-logo.png";

const Pagination = ({ queries }) => {
  const [page, setPage] = useState(pagination[0].startIndex);
  const { query } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setPage(pagination[0].startIndex);
  }, [query]);

  const paginationClickHandler = (startIndex) => {
    setPage(startIndex);
    navigate(`/${query}/${startIndex}`);
  };

  return (
    <div className="flex flex-col items-center py-14 max-w-[700px]">
      <div className="relative text-[#4285f4]">
        {queries.previousPage && (
          <div
            className="absolute left-[-30px] md:left-[-40px] top-[10px]"
            onClick={() => paginationClickHandler(queries.previousPage[0].startIndex)}
          >
            <FiChevronLeft size={20} className="cursor-pointer" />
            <span className="cursor-pointer absolute left-[-5px] top-[30px] hidden md:block">
              Prev
            </span>
          </div>
        )}
        <img src={Logo} alt="logo-image" className="w-[250px] md:w-[300px]" />
        {queries.nextPage && (
          <div
            className="absolute right-[-30px] md:right-[-40px] top-[10px]"
            onClick={() => paginationClickHandler(queries.nextPage[0].startIndex)}
          >
            <FiChevronRight size={20} className="cursor-pointer" />
            <span className="cursor-pointer absolute left-[-5px] top-[30px] hidden md:block">
              Next
            </span>
          </div>
        )}
      </div>
      <div className="flex gap-3 text-[#4285f4] text-sm">
        {pagination.map((p) => (
          <span
            key={p.page}
            onClick={() => paginationClickHandler(p.startIndex)}
            className={`cursor-pointer ${page === p.startIndex ? "text-black" : ""}`}
          >
            {p.page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
