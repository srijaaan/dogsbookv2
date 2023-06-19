import { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assests/logo.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import './navigation.styles.css'

const Navigation = () => {
  const [nav, setNav] = useState(false);
  let menuRef = useRef();
  const { pathname } = useLocation();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setNav(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  useEffect(() => {
    setNav(false);
  }, [pathname]);

  return (
    <>
      <div
        className="my-5 flex justify-between h-24 items-center text-white max-w-[1500px] mx-auto px-4 "
        ref={menuRef}
      >
        <Link to="/">
          <img src={Logo} alt="" className=" w-60 md:w-80" />
        </Link>

        <ul className="hidden md:flex">
          <Link className="p-4 md:text-xl md:font-semibold hover:text-[#f7d7ca]" to="/">
            Home
          </Link>
          <Link className="p-4 md:text-xl md:font-semibold hover:text-[#f7d7ca]" to="random">
            Random
          </Link>
          <Link className="p-4 md:text-xl md:font-semibold hover:text-[#f7d7ca]" to="search">
            Search
          </Link>
          <Link className="p-4 md:text-xl md:font-semibold hover:text-[#f7d7ca]" to="about">
            About
          </Link>
          <Link to="contact">
            <button className="ctnbtn mt-2">Contact Us</button>
          </Link>
        </ul>
        <div
          onClick={() => {
            setNav(!nav);
          }}
          className="block md:hidden"
        >
          {nav ? (
            <AiOutlineClose size={30} className=" cursor-pointer" />
          ) : (
            <AiOutlineMenu size={30} className=" cursor-pointer" />
          )}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 border-r border-r-white w-3/5 h-full bg-[#fbbf8e] ease-in-out duration-500 md:hidden z-[4]"
              : "fixed left-[-100%]"
          }
        >
          <img src={Logo} alt="dog" className="w-72" />
          <div className=" uppercase p-4 flex flex-col">
            <Link className="p-4 border-b border-white" to="/">
              Home
            </Link>
            <Link className="p-4 border-b border-white" to="random">
              Random
            </Link>
            <Link className="p-4 border-b border-white" to="search">
              Search
            </Link>
            <Link className="p-4 border-b border-white" to="about">
              About
            </Link>
            <Link className="p-4 " to="contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
