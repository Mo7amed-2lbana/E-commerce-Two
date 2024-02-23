"use client";
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
// import { usePathname, useSearchParams } from 'next/navigation'
import { usePathname, useRouter } from 'next/navigation'


const ProductCart = ({ allData }) => {
  let pathName = usePathname();
  const [num , setNum] = useState(+ pathName.slice(-1))
  const [current, setCurrent] = useState(20 * num);
  const [first, setFirst] = useState(current - 20)
  const nav = useRouter();
  const more = () => {
    if (current < allData.length) {
      // setNum(num + 1);
      setFirst(first * num);
      setCurrent(current * num);
        nav.replace(`${num + 1}`);
      // localStorage.setItem("first", first);
      // localStorage.setItem("current", current);
      console.log(first)
      console.log(current)
    }
    // nav.fastRefresh()
    // console.log(nav)
    // setTimeout(() => {
    // }, 1000)

  }

  // useEffect(()=>{

  //   if(first === 0 && localStorage.getItem("first")){
  //     setFirst(localStorage.getItem("first"))
  //   }

  // },[])

  return <>
    <div className="container">
      <div className="title mb-8">
        <h2 className="text-center text-3xl font-semibold lett">Popular Products</h2>
      </div>
      {/* Card  */}
      <div className="parent grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 ">
        {allData?.map((pro, idx) => {
          return idx > first && idx < current &&
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
        <button onClick={() => { more() }} className='border-1 border-[#f00]'>More</button>
      </div>
      {/* BtnMore  */}
    </div>



  </>
}

export default ProductCart