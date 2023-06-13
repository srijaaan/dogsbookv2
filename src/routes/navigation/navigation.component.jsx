import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assests/logo.png";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="my-5 flex justify-between h-24 items-center text-white max-w-[1500px] mx-auto px-4 ">
        <Link to="/">
          <img src={Logo} alt="" className=" w-64 md:w-80" />
        </Link>

        <ul className="hidden md:flex">
          <Link className="p-4 md:text-xl md:font-semibold" to="/">
            Home
          </Link>
          <Link className="p-4 md:text-xl md:font-semibold" to="random">
            Random
          </Link>
          <Link className="p-4 md:text-xl md:font-semibold" to="search">
            Search
          </Link>
          <Link className="p-4 md:text-xl md:font-semibold" to="about">
            About
          </Link>
          <Link className="p-4 md:text-xl md:font-semibold" to="contact">
            Contact
          </Link>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
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
