import React from "react";
import { styles } from "../styles/styles";
import dynamic from "next/dynamic";

type Props = {};

const Policy = (props: Props) => {
  return (
    <>
      <div className="">
        <div
          className={`w-[75%]  800px:w-[75%] m-auto dark:text-white text-black px-3`}
        >
          <br />
          <h1 className={`${styles.title} !text-start pt-2`}>
            Platform Terms and Condition
          </h1>

          <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
            <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              repudiandae sed ullam dolores ipsam quaerat impedit id tempora
              natus voluptate fuga iste dolorum provident vel, nobis veritatis
              officia eius laboriosam?Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Magni voluptatem nam, dolorum necessitatibus
              nemo, quidem fugit assumenda ab repellendus ea ad recusandae
              consequatur et. Eaque nostrum dolore deserunt vero doloribus?
            </p>
            <br />
            <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              repudiandae sed ullam dolores ipsam quaerat impedit id tempora
              natus voluptate fuga iste dolorum provident vel, nobis veritatis
              officia eius laboriosam?Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Magni voluptatem nam, dolorum necessitatibus
              nemo, quidem fugit assumenda ab repellendus ea ad recusandae
              consequatur et. Eaque nostrum dolore deserunt vero doloribus?
            </p>
            <br />
            <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              repudiandae sed ullam dolores ipsam quaerat impedit id tempora
              natus voluptate fuga iste dolorum provident vel, nobis veritatis
              officia eius laboriosam?Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Magni voluptatem nam, dolorum necessitatibus
              nemo, quidem fugit assumenda ab repellendus ea ad recusandae
              consequatur et. Eaque nostrum dolore deserunt vero doloribus?
            </p>
            <br />
            <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              repudiandae sed ullam dolores ipsam quaerat impedit id tempora
              natus voluptate fuga iste dolorum provident vel, nobis veritatis
              officia eius laboriosam?Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Magni voluptatem nam, dolorum necessitatibus
              nemo, quidem fugit assumenda ab repellendus ea ad recusandae
              consequatur et. Eaque nostrum dolore deserunt vero doloribus?
            </p>
            <br />
          </ul>
        </div>
      </div>
    </>
  );
};

// export default Policy;
export default dynamic(() => Promise.resolve(Policy), { ssr: false });
