"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/route/Hero";
import Courses from "./components/route/Courses";
import Reviews from "./components/route/Reviews";
import Footer from "./components/route/Footer";
import FAQ from "./faq/FAQ";
import dynamic from "next/dynamic";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <>
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
      </div>
      <Hero />
      <Courses />
      <Reviews />
      <FAQ />
      <Footer />
    </>
  );
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });
// export default Page;
