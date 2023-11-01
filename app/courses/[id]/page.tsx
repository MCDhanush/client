"use client";
import React, { useState } from "react";
import CourseDetailsPage from "../../components/Course/CourseDetailsPage";
import dynamic from "next/dynamic";

const Page = ({ params }: any) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(2);
  const [route, setRoute] = useState("Login");
  return (
    <div className="">
      <CourseDetailsPage id={params.id} />
    </div>
  );
};

// export default Page;
export default dynamic(() => Promise.resolve(Page), { ssr: false });
