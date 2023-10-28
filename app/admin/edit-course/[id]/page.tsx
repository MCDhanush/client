"use client";
import React from "react";
import AdminSidebar from "../../../components/Admin/sidebar/AdminSidebar";
import Heading from "@/app/utils/Heading";
import Editcourse from "../../../components/Admin/Course/Editcourse";
import DashboardHeader from "@/app/components/Admin/DashboardHeader";
import dynamic from "next/dynamic";

type Props = {};

const Page = ({ params }: any) => {
  const id = params?.id;
  return (
    <div>
      <Heading
        title="ELearning-Admin"
        description="ELearning is a platform for students to learn and get help from teachers"
        keywords="Programing,MERN,Redux,Machine Learning"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          {/* <CreateCourse /> */}
          <Editcourse id={id} />
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });
