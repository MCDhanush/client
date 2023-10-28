"use client";
import React, { FC, useState } from "react";
import Heading from "../utils/Heading";
import Header from "../components/Header";
import About from "./About";
import Footer from "../components/route/Footer";
import dynamic from "next/dynamic";

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(2);
  const [route, setRoute] = useState("Login");

  return (
    <div>
      <Heading
        title="About-ELearing"
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
      <About />
      <Footer />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });
// export default Page;
