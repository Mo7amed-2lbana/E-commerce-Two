"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ArrowTop = () => {
  // to show arrow top icon
  const [scrollToDown, setScrollToDown] = useState(false);

  //  to make scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
    window.onscroll = () => {
      window.scrollY > 200 ? setScrollToDown(true) : setScrollToDown(false);
    };
  }, []);

  return (
    <>
      <div
        onClick={scrollToTop}
        className={`arrow-top ${
          scrollToDown ? " flex " : " hidden "
        }  fixed end-[25px] border-1 p-2 rounded-[50%] bottom-[25px] z-48 bg-white justifay-between items-center`}
      >
        <IoIosArrowUp size={30} color="#333" />
      </div>
    </>
  );
};

export default ArrowTop;
