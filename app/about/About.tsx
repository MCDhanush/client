import React from "react";
import { styles } from "../styles/styles";
import dynamic from "next/dynamic";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is{" "}
        <span className="bg-gradient-to-r from-blue-600 via-pink-600 to-red-600 inline-block text-transparent bg-clip-text">
          LMS?
        </span>
      </h1>
      <br />
      <div className="w-[75%] text-justify 800px:w-[75%] m-auto">
        <br />
        <p className="text-[18px] font-Poppins">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Enim eum pariatur necessitatibus repudiandae
          adipisci veritatis nesciunt, ipsum officiis natus consequuntur veniam
          odit libero fugiat? Vero tempore minus id at aperiam. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Enim eum pariatur
          necessitatibus repudiandae adipisci veritatis nesciunt, ipsum officiis
          natus consequuntur veniam odit libero fugiat? Vero tempore minus id at
          aperiam.
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Autem vero fugit eum, fuga illo unde, iure,
          cupiditate voluptatem error eius quam accusamus obcaecati voluptas
          asperiores. Id beatae totam deleniti? Neque?
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Autem vero fugit eum, fuga illo unde, iure,
          cupiditate voluptatem error eius quam accusamus obcaecati voluptas
          asperiores. Id beatae totam deleniti? Neque?
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Autem vero fugit eum, fuga illo unde, iure,
          cupiditate voluptatem error eius quam accusamus obcaecati voluptas
          asperiores. Id beatae totam deleniti? Neque? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Voluptatem, quis quibusdam! Modi
          aut, consequatur numquam est tempore repellendus, molestiae soluta
          voluptatum amet hic maiores blanditiis. Blanditiis nam ipsa modi qui.
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit, amet consectetur
          adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Ullam ratione corporis culpa, dicta harum officiis quos aperiam
          qui iste labore consectetur dolorem ad possimus at, obcaecati ipsa
          suscipit exercitationem placeat! Autem vero fugit eum, fuga illo unde,
          iure, cupiditate voluptatem error eius quam accusamus obcaecati
          voluptas asperiores. Id beatae totam deleniti.
          <br />
          <br />
        </p>
        <span className="font-Cursive text-[22px] text-sky-400/100">
          Dhanush MC
        </span>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default dynamic(() => Promise.resolve(About), { ssr: false });
// export default About;
