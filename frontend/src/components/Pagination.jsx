import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { pagination } from "../utils/Constants";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Logo from "../assets/google_1988_pagination.png";

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
    <div className="flex flex-col justify-center items-center mt-3">
      <div className="relative text-[#629889]">
        {queries.previousPage && (
          <div
            className="absolute left-[-30px] md:left-[-40px] top-[10px]"
            onClick={() => paginationClickHandler(queries.previousPage[0].startIndex)}
          ></div>
        )}
        <img src={Logo} alt="logo-image" className="w-[250px] md:w-[300px]" />
        {queries.nextPage && (
          <div
            className="absolute right-[-30px] md:right-[-40px] top-[10px]"
            onClick={() => paginationClickHandler(queries.nextPage[0].startIndex)}
          ></div>
        )}
      </div>
      <div className="flex gap-3 text-[#2914E8] text-sm">
        <p className="text-[#21171E] mr-3">Result Page:</p>
        {pagination.map((p) => (
          <span
            key={p.page}
            onClick={() => paginationClickHandler(p.startIndex)}
            className={`cursor-pointer ${page === p.startIndex ? "text-red-600" : ""}`}
          >
            {p.page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
