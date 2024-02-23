"use client";
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
// import { usePathname, useSearchParams } from 'next/navigation'
import { usePathname , useRouter } from 'next/navigation'


const ProductCart = ({allData}) => {
  const [first, setFirst] = useState(0)
  const [current , setCurrent] = useState(10)
    const nav = useRouter();
    let pathName = usePathname();
    let  num = + pathName.slice(-1);
    console.log(num);

    const more = ()=>{
        num+=1;
        setFirst(current) ;
        setCurrent(current + 10);
        nav.replace(`${num}`);
    }

  return <>
  <div className="container">
          <div className="title mb-8">
            <h2 className="text-center text-3xl font-semibold lett">Popular Products</h2>
          </div>
          {/* Card  */}
          <div className="parent grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 ">
            {allData?.map((pro , idx)  => {
              return idx > first && idx < current  &&  
              <>
                {" "}
                <Card pro={pro} />
              </>
          }
            )}
          </div>
          {/* Card  */}
          {/* BtnMore  */}
          <div className="btn-more my-5">
            <button onClick={()=>{more()}} className='border-1 border-[#f00]'>More</button>
          </div>
          {/* BtnMore  */}
        </div>
  
  
  
  </>
}

export default ProductCart