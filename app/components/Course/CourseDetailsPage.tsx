"use client";
import React, { useState } from "react";
import CoursePlayer from "@/app/utils/CoursePlayer";
import { useGetCourseDetailsQuery } from "@/redux/features/courses/courseApi";
import Loader from "../Loader/Loader";
import Heading from "@/app/utils/Heading";
import Header from "../Header";
import Footer from "../route/Footer";
import CourseDetails from "./CourseDetails";
import dynamic from "next/dynamic";

type Props = {
  id: string;
};

const CourseDetailsPage = ({ id }: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(1);
  const [route, setRoute] = useState("Login");
  const { data, isLoading } = useGetCourseDetailsQuery(id);
  // console.log(data);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="">
          <Heading
            title={data.course.name + "-ELearning"}
            description="Elearning is a programming community"
            keywords={data?.course?.tags}
          />
          <Header
            open={open}
            setOpen={setOpen}
            activeItem={activeItem}
            setRoute={setRoute}
            route={route}
          />
          <CourseDetails data={data} />
          <Footer />
        </div>
      )}
    </>
  );
};

// export default CourseDetailsPage;
export default dynamic(() => Promise.resolve(CourseDetailsPage), {
  ssr: false,
});
