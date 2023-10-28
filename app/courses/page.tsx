"use client";
// import React, { useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Course from "../../app/courses/Course";
import Footer from "../components/route/Footer";
import { useGetAllCoursesQuery } from "@/redux/features/courses/courseApi";
import React, { useEffect, useState } from "react";
import { styles } from "../styles/styles";
import dynamic from "next/dynamic";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(1);
  const [route, setRoute] = useState("Login");
  const { data, isLoading } = useGetAllCoursesQuery({});
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    setCourses(data?.courses);
  }, [data]);
  // console.log(data);

  return (
    <div>
      <Heading
        title="ELearing"
        description="Elearning is a platform for students to learn and get help from teachers"
        keywords="MERN,REDUX,NEXT 13,REDIS"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <div>
        <div className="text-black dark:text-white">
          <br />
          <h1 className={`${styles.title} 800px:!text-[45px]`}>
            <span className="bg-gradient-to-r from-red-800 via-pink-500 to-blue-400 inline-block text-transparent bg-clip-text">
              Courses
            </span>
          </h1>
          <div className=" w-[80%]  800px:w-[80%] m-auto text-black dark:text-white ">
            <div className=" grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
              {courses &&
                courses.map((item: any, index: number) => (
                  <Course item={item} key={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });
