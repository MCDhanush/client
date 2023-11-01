import CoursePlayer from "@/app/utils/CoursePlayer";
import Ratings from "@/app/utils/Ratings";
import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { Button } from "@mui/material";

type Props = {
  data: any;
};

const CourseDetails = ({ data }: Props) => {
  const { user } = useSelector((state: any) => state.auth);
  const dicountPercentage =
    ((data?.estimatedPrice - data.price) / data?.estimatedPrice) * 100;
  const dicountedPercentageprice = dicountPercentage.toFixed(0);

  // const isPurchhased
  console.log(data.course);

  return (
    <div>
      <div>
        <div className="w-[90%] 800px:w-[90%] m-auto py-5">
          <div className="w-full flex flex-col-reverse 800px:flex-row">
            <div className="w-full 800px:w-[85%] 800px:pr-5">
              <h1 className="text-[25px] font-Poppins font-[600] bg-gradient-to-r from-blue-600 via-pink-700 to-indigo-400 inline-block text-transparent bg-clip-text">
                {data.course.name}
              </h1>
              <div className="w-full mt-10">
                <CoursePlayer
                  videoUrl={data?.course.demoUrl}
                  title={data?.course.title}
                />
              </div>
              <div className="flex items-center justify-between pt-3">
                <div className="flex items-center">
                  <Ratings rating={data.ratings} />

                  <h5 className="text-black dark:text-white">
                    {data.reviews?.length} Reviews
                  </h5>
                </div>

                <h5 className="text-black dark:text-white">
                  {data.purchased} Students
                </h5>
              </div>

              <br />

              <h1 className="text-[25px] font-Poppins font-[600] bg-gradient-to-r from-orange-600 via-indigo-700 to-green-800 inline-block text-transparent bg-clip-text">
                What you will learn from this course?
              </h1>
              <br />
              {data.course.benefits?.map((e: any, index: number) => (
                <div
                  className="w-full flex 800px:items-center py-2"
                  key={index}
                >
                  <div className="w-full mr-1">
                    <IoCheckmarkDoneOutline
                      size={20}
                      className=" text-black dark:text-white"
                    />
                    <p className="pl-2 text-black dark:text-white">{e.title}</p>
                  </div>
                </div>
              ))}
              <br />
              <br />
              <h1 className="text-[25px] font-Poppins font-[600] bg-gradient-to-r from-orange-600 via-indigo-700 to-green-800 inline-block text-transparent bg-clip-text">
                What are prerequisites are in the course?
              </h1>
              <br />
              {data.course.prerequisites?.map((e: any, index: number) => (
                <div
                  className="w-full flex 800px:items-center py-2"
                  key={index}
                >
                  <div className="w-full mr-1">
                    <IoCheckmarkDoneOutline
                      size={20}
                      className=" text-black dark:text-white"
                    />
                    <p className="pl-2 text-black dark:text-white">{e.title}</p>
                  </div>
                </div>
              ))}
              <br />
              <br />
              <div className="text-[25px] font-Poppins font-[600] bg-gradient-to-r from-orange-600 via-indigo-700 to-green-800 inline-block text-transparent bg-clip-text">
                Languages and tools that are used in this course
                <br />
                <IoCheckmarkDoneOutline
                  size={20}
                  className=" text-black dark:text-white"
                />
                <p className="pl-2 text-[20px]  text-black dark:text-white">
                  {data.course.tags}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

// export default CourseDetails;
export default dynamic(() => Promise.resolve(CourseDetails), { ssr: false });
