"use client";
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { usePathname, useRouter } from 'next/navigation';
import {Button} from "@nextui-org/react";



const ProductCart = ({ allData }) => {

  // get URL Path Name
  let pathName = usePathname();

  // Get Navigation Hooks 
  const nav = useRouter();

  // Get Num Of Page 
  const [num , setNum] = useState(+ pathName.slice(-1))
  const [current, setCurrent] = useState(10 * num);
  const [first, setFirst] = useState(current - 10)


  // Products Forward Function 
  const ProductsForward = () => {
    if (current < allData.length) {
      nav.replace(`Page${num + 1}`);   
    } 
  }
  
  // Products Back Function 
  const ProductsBack = () => {
    if(num !== 1){
      nav.replace(`Page${num - 1}`);   
    }
  }
  
  
  useEffect(()=>{

    if(pathName.slice(0 , pathName.length - 1) !== "/page"){
      
      nav.replace(`/`);   
    }


},[])


  return <>
    <div className="container">
      <div className="title mb-8">
        <h2 className="text-center text-3xl font-semibold">Popular Products</h2>
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
      {/* Btns  */}
      <div className="btn w-[60%] mx-auto my-10 flex justify-center items-center">
      <div className="parent  flex w-full justify-between items-center">
      {/* BtnForward  */}
      <div className="btn-forward my-5">
        {current === allData.length?
        <Button isDisabled color="primary">
        Forward
      </Button>        
        :
            <Button onClick={() => { ProductsForward() }} color="primary">
            Forward
          </Button>
        }
      </div>
      {/* BtnForward  */}
      {/* BtnBack  */}
      <div className="btn-back my-5">
        {/* {!last? */}
        {num === 1 ?
        
        <Button isDisabled color="primary">
          Back
      </Button>        
        
        :
        
            <Button onClick={() => {ProductsBack() }} color="primary">
            Back
          </Button>
        
        }
        {/* : */}
        {/* } */}
      </div>
      {/* BtnBack  */}



      </div>

      
      </div>
      {/* Btns  */}
    </div>



  </>
}

export default ProductCart