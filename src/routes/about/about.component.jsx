import React from "react";
import DP1 from "../../assests/dp1.png";
import DP2 from "../../assests/dp2.png";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full h-full x-4 my-24">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-row justify-around pb-5 md:flex-col md:justify-around md:ml-64 w-10/12">
          <img
            className=" h-32 w-32 rounded-full bg-white md:h-48 md:w-48 md:mb-10"
            src={DP1}
            alt=""
          />
          <img
            className=" h-32 w-32  rounded-full bg-white md:h-48 md:w-48"
            src={DP2}
            alt=""
          />
        </div>
        <div className="mx-10 flex flex-col justify-center items-center text-center">
          <h1 className="text-white font-semibold text-3xl md:text-5xl">
            About
          </h1>
          <hr className=" w-36 md:w-48 mt-3 border-2 rounded-sm mb-6" />
          <p className=" text-white text-lg items-center md:text-xl mr-3 ">
            We are group of persons who are really fond of dogs nad there are
            literally no websites that can give you a complete information about
            dog and dog breeds. Hence we created this directory website to solvw
            this exact problem, this website is in it's initial versions, many
            things may be broken or unusable so, I request you to bear with us
            and if possible write to us, even if you just want to know something
            feel free to reach to us. Thank You for taking your time and
            visiting.
          </p>
          <div className="flex flex-row justify-around mt-5 md:mt-24 text-white">
            <FaTwitter className="ml-5 mt-1 mr-1" />
            Twitter
            <FaFacebook className="ml-5 mt-1 mr-1" />
            Facebook
            <FaInstagram className="ml-5 mt-1 mr-1" />
            Instagram
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
