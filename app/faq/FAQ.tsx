import React, { useState } from "react";
import { styles } from "../styles/styles";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import dynamic from "next/dynamic";

type Props = {};

const FAQ = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <div>
      <div className="text-black dark:text-white">
        <br />
        <h1 className={`${styles.title} 800px:!text-[45px]`}>
          <span className="bg-gradient-to-r from-blue-400 via-pink-500 to-red-800 inline-block text-transparent bg-clip-text">
            Frequently Asked Questions
          </span>
        </h1>
        <br />
        <br />
        <br />
        <div
          className={` w-[55%]  800px:w-[55%] m-auto text-black dark:text-white `}
        >
          <div className=" border-b-blue-950  border-b-2 pt-4 pb-8">
            <div className="flex flex-row justify-between">
              <p>Will i receive a certificate for each course?</p>
              <AddOutlinedIcon onClick={() => setOpen(!open)} />
            </div>
            <br />
            {!open ? (
              ""
            ) : (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates doloremque maiores molestiae eligendi sequi
                aspernatur, velit, sit culpa reiciendis dolor adipisci at illum
                tempore modi. Fugiat atque et ad enim.
              </p>
            )}
          </div>
          <div className=" border-b-blue-950  border-b-2 pt-4  pb-8">
            <div className="flex flex-row justify-between">
              <p>When i Get course Certificate</p>
              <AddOutlinedIcon onClick={() => setOpen2(!open2)} />
            </div>
            <br />
            {!open2 ? (
              ""
            ) : (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates doloremque maiores molestiae eligendi sequi
                aspernatur, velit, sit culpa reiciendis dolor adipisci at illum
                tempore modi. Fugiat atque et ad enim.
              </p>
            )}
          </div>
          <div className=" border-b-blue-950  border-b-2 pt-4 pb-8 ">
            <div className="flex flex-row justify-between">
              <p>Can i download the course</p>
              <AddOutlinedIcon onClick={() => setOpen1(!open1)} />
            </div>
            <br />
            {!open1 ? (
              ""
            ) : (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates doloremque maiores molestiae eligendi sequi
                aspernatur, velit, sit culpa reiciendis dolor adipisci at illum
                tempore modi. Fugiat atque et ad enim.
              </p>
            )}
          </div>
          <div className=" border-b-blue-950   border-b-2 pt-4 pb-8">
            <div className="flex flex-row justify-between">
              <p>Will i receive a certificate for each course?</p>
              <AddOutlinedIcon onClick={() => setOpen3(!open3)} />
            </div>
            <br />
            {!open3 ? (
              ""
            ) : (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates doloremque maiores molestiae eligendi sequi
                aspernatur, velit, sit culpa reiciendis dolor adipisci at illum
                tempore modi. Fugiat atque et ad enim.
              </p>
            )}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default dynamic(() => Promise.resolve(FAQ), { ssr: false });
// export default Page;
