"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ArrowTop = () => {

  const [arrow, setArrow] = useState(false);

  //  to make scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  console.log(window.scrollY)

window.addEventListener("scroll" , ()=>{
  if(window.scrollY > 300){
    setArrow(true);
  }else{
    setArrow(false);

  }
})

  return (
    <>
    {arrow ?
      <div
        onClick={scrollToTop}
        className={`arrow-top  fixed end-[25px] border-1 p-2 rounded-[50%] bottom-[25px] z-48 bg-white justifay-between items-center`}
      >
        <IoIosArrowUp size={30} color="#333" />
      </div>
    
    :""}
    </>
  );
};

export default ArrowTop;
