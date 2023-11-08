import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Ratings from "@/app/utils/Ratings";
import { Box } from "@mui/material";
import { AiOutlineUnorderedList } from "react-icons/ai";
import dynamic from "next/dynamic";

type Props = {
  item: any;
  isProfile?: boolean;
};

const CourseCard: FC<Props> = ({ item, isProfile }) => {
  // console.log(item);
  return (
    <Link
      href="/courses"
      className="border-2 shadow-lg shadow-cyan-500/50 border-indigo-400/100"
    >
      <div className="w-full min-h-[40vh] dark:bg-slate-500 dark:bg-opacity-20 backdrop-blur dark:border-[#fffffd1d] border-[#00000015] dark:shadow-[bg-slate-700] rounded-lg p-3 shadow-sm dark-shadow-inner">
        <Image
          src={item.thumbnail.url}
          width={500}
          height={300}
          objectFit="contain"
          className="rounded-lg"
          alt=""
        />
        <br />
        <h1 className="font-Poppins text-[16px] text-black dark:text-[#fff]">
          {item.name}
        </h1>

        <div className="w-full flex items-center justify-between pt-2">
          <Ratings rating={item.ratings} />
          <h5
            className={`text-black dark:text-[#fff] ${
              isProfile && "hidden 800px:inline"
            }`}
          >
            {item.purchased} Students
          </h5>
        </div>
        <div className="w-ful flex items-center justify-between pt-3">
          <div className="flex">
            <h3 className="text-black dark:text-[#fff]">
              {item.price === 0 ? "Free" : item.price + "$"}
            </h3>
            <h5 className="pl-3 text-[14px] mt-[-5px] line-through opacity-80 text-black dark:text-[#fff]">
              {item.estimatedPrice}$
            </h5>
          </div>
          <div className="flex items-center pb-3">
            <AiOutlineUnorderedList size={20} fill="#fff" />
            <h5 className="pl-2 text-black dark:text-[#fff]">
              {item.courseData?.length} Lectures
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

// export default CourseCard;
export default dynamic(() => Promise.resolve(CourseCard), { ssr: false });
