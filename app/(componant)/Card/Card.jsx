import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ pro }) => {
  // console.log(pro._id);

  return (
    <>
      <div className="card ">
        <div className=" border-1 border-[f2f2f2] transition-all  shadow-xl   text-center rounded-[14px]">
          {/* image cart  */}
          <div className="grid-element overflow-hidden">
            <Image
              src={pro.imageCover}
              alt={pro.title}
              width={300}
              height={100}
              style={{ transition: ".5s"}}
              className="p-5 hover:scale-[1.1] cursor-pointer mx-auto"
            />
          </div>
          {/* image cart  */}
          {/* details cart  */}
          <Link href={`productdetails/${pro._id}`} className="cart-details">
          <h2 className="my-4 whitespace-nowrap text-ellipsis overflow-hidden mx-2">
            {pro.title}
          </h2>
          </Link>
          {/* details cart  */}
        </div>
      </div>
    </>
  );
};

export default Card;
