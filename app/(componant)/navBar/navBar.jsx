"use client";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import "./navbarStyle.module.css";
const NavBar = () => {
  let userData = false;
  const [makeScroll, setMakeScroll] = useState(false);

  useEffect(() => {
    // Last scroll postion
    let lastPostion = 0;
    window.onscroll = () => {
      window.scrollY > 50 && lastPostion > window.scrollY ? setMakeScroll(true) : setMakeScroll(false);

      lastPostion = window.scrollY;
    }

  }, [])

  return (
    <>
      {/* start navbar  */}
      <nav
        className={`py-5 ${makeScroll ? "sticky" : "relative"} top-0 z-50 shadow-lg  transition-all bg-white`}
      >
        <div className="container">
          <div className="parent grid grid-cols-8 items-center ">
            {/* Logo  */}
            <div className="logo col-span-2 uppercase text-2xl text-black font-bold">
              <h1>E-Commerce</h1>
            </div>
            {/* Logo  */}

            {/* Navbar Links  */}
            <ul className="navbar-links flex items-center gap-4 col-span-5 text-[#999] ">
              <IoSearchOutline size={20} />
              <Link className=" transition-all hover:opacity-hover " href={"/"}>
                Home
              </Link>
              <Link
                className=" transition-all hover:opacity-hover"
                href={"/products"}
              >
                Products
              </Link>
              <Link
                className=" transition-all hover:opacity-hover"
                href={"/popular"}
              >
                Popular
              </Link>
              <Link
                className=" transition-all hover:opacity-hover"
                href={"brands"}
              >
                Brands
              </Link>
              <Link
                className=" transition-all hover:opacity-hover"
                href={"/cart"}
              >
                Cart
              </Link>
            </ul>
            {/* Navbar  */}
            {/* Navbar Info  */}
            <ul className="navbar-info flex gap-5 items-center col-span-1 text-[#999]">
              {userData ? (
                <>
                  <h2>Heloo User</h2>
                </>
              ) : (
                <>
                  <Link href="/auth/login">Login</Link>
                  <Link href="/auth/register">Register</Link>
                </>
              )}
            </ul>
            {/* Navbar Info  */}
          </div>
        </div>
      </nav>
      {/* end navbar  */}
    </>
  );
};

export default NavBar;
