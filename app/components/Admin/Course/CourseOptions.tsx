import React, { FC } from "react";
import { IoMdCheckmark } from "react-icons/io";
import dynamic from "next/dynamic";

type Props = {
  active: number;
  setActive: (active: number) => void;
};

const CourseOptions: FC<Props> = ({ active, setActive }) => {
  const options = [
    "Course Information",
    "Course Options",
    "Course Content",
    "Course Preview",
  ];
  return (
    <div>
      {options.map((options: any, index: number) => (
        <div
          key={index}
          className={`w-full flex py-5 dark:text-white text-black`}
        >
          <div
            className={`w-[35px] h-[35px] rounded-full flex items-center  justify-center ${
              active + 1 > index ? "bg-blue-500" : "bg-[#384766]"
            } relative`}
          >
            <IoMdCheckmark className="text-[25px] dark:text-white text-black" />
            {index !== options.lenght - 1 && (
              <div
                className={`absolute h-[30px] w-1 ${
                  active + 1 > index ? "bg-blue-500" : "bg-[#384766]"
                } bottom-[-100%]`}
              ></div>
            )}
          </div>
          <h5
            className={`pl-3 ${
              active === index
                ? "dark:text-white text-black"
                : "dark:text-white text-black"
            } text-[20px]`}
          >
            {options}
          </h5>
        </div>
      ))}
    </div>
  );
};

// export default CourseOptions;
export default dynamic(() => Promise.resolve(CourseOptions), { ssr: false });
