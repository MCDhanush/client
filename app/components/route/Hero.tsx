import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";

type Props = {};
const Hero: FC<Props> = (props) => {
  return (
    <div className="w-full  items-center">
      <div className=" !h-[950px] top-[100px] flex-wrap flex 900px:flex 1000px:top-[unset]  dark:bg-gradient-to-b bg-no-repeat dark:from-gray-900 dark:to-black  1500px:h-[700px] 1500px:w-[700px] 1100px:h-[600px] 1100px:w-[600px]  mt-0	max-w-fit min-w-[100%]    rounded-red">
        <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end 1000px:pt-[0] z-10  dark:bg-gradient-to-b bg-no-repeat dark:from-gray-900 dark:to-black duration-300">
          <Image
            src={require("../../../public/assets/banner-img-1.png")}
            alt=""
            className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]"
          />
        </div>
        <div className="1000px:w-[60%]  flex flex-col items-center   dark:bg-gradient-to-b bg-no-repeat dark:from-gray-900 dark:to-black duration-300 1000px:mt-[0px] justify-center text-center 1000px:text-left ">
          <h2 className="darkitext-white text-[#000000c7] text-[38px] px-3 w3-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[60%]  dark:from-gray-900 dark:to-black ">
            Improve Your Online Learning Experience
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-pink-700 to-indigo-400 inline-block text-transparent bg-clip-text">
              Better Instantly
            </span>
          </h2>
          <br />
          <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[55%) 1100px:!w-[78%]">
            We have 48k+ Online courses & 500K+ Online registered student. Find
            your desired Courses from them.
          </p>
          <br />
          <br />
          {/* <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
            <input
              type="search"
              placeholder="Search Courses..."
              className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin "
            />
            <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]">
              <BiSearch className="text-white" size={30} />
            </div>
          </div> */}
          {/* <br /> */}
          <br />
          <div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center">
            <Image
              src={require("../../../public/assets/client-3.jpg")}
              alt=""
              className="rounded-full ml-[-20px]"
            />
            <Image
              src={require("../../../public/assets/client-2.jpg")}
              alt=""
              className="rounded-full ml-[-20px]"
            />
            <Image
              src={require("../../../public/assets/client-1.jpg")}
              alt=""
              className="rounded-full ml-[-20px]"
            />
            <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
              500k+ People already trustes us.{""}
              <Link
                href="/course"
                className="dark:text-[#46e256] text-[crimson]"
              >
                &nbsp; Course
              </Link>
              {""}
            </p>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Hero;
