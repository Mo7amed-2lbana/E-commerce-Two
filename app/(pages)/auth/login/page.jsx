// 'use client'
import React from "react";
import { Input } from "@nextui-org/react";

export default function LoginPage() {
  const sizes = ["sm", "md", "lg"];
  return (
    <>
      <section className="login-page py-20">
        <div className="container">
          <div className="title mb-2">
            <h2 className="text-2xl "> Login Page :</h2>
          </div>
          <div className="form">
            <div className=" flex flex-col gap-4">
              <Input type="email" label="Email" />
              {/* {sizes.map((size) => ( */}
                {/* <div key={size} className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"> */}
                  {/* <Input size={size} type="email" label="Email" placeholder="Enter your email" /> */}
                {/* </div> */}
              {/* ))} */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
