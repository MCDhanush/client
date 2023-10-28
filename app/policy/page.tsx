"use client";
import React, { FC, useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import Footer from "../components/route/Footer";
import Policy from "./Policy";
import dynamic from "next/dynamic";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(3);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="Policy-ELearing"
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
      <Policy />
      <Footer />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });
