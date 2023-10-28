import React, { FC, useState } from "react";
import { styles } from "@/app/styles/styles";
import { BiBracket } from "react-icons/bi";
import dynamic from "next/dynamic";

type Props = {
  courseInfo: any;
  setCourseInfo: (courseInfo: any) => void;
  active: number;
  setActive: (actiev: number) => void;
};

const CourseInformation: FC<Props> = ({
  courseInfo,
  setCourseInfo,
  active,
  setActive,
}) => {
  const [dragging, setDragging] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setActive(active + 1);
  };

  const handleFileChange = (e: any) => {
    // debugger;
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setCourseInfo({ ...courseInfo, thumbnail: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: any) => {
    // debugger;
    e.preventDefault();
    setDragging(false);
  };
  const handleDrop = (e: any) => {
    // debugger;
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setCourseInfo({ ...courseInfo, thumbnail: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[80%] m-auto mt-24">
      <form action="" onSubmit={handleSubmit} className={`${styles.label}`}>
        <div className="">
          <label htmlFor="">Course Name</label>
          <input
            type="name"
            className={`${styles.input}  `}
            name=""
            placeholder="MERN stack LMS platform with next 13"
            required
            id="name"
            value={courseInfo.name}
            onChange={(e: any) =>
              setCourseInfo({ ...courseInfo, name: e.target.value })
            }
          />
        </div>
        <br />
        <div className="mb-5">
          <label htmlFor="" className={`${styles.label}`}>
            Course Description
          </label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={8}
            placeholder="Write something amazing..."
            className={`${styles.input} !h-min !py-2`}
            value={courseInfo.description}
            onChange={(e: any) =>
              setCourseInfo({
                ...courseInfo,
                description: e.target.value,
              })
            }
          ></textarea>
        </div>
        <br />
        <div className="w-full flex flex-wrap  justify-between">
          <div className="w-[45%]">
            <label htmlFor="" className={`${styles.label}`}>
              Course Price
            </label>
            <input
              name=""
              id="price"
              type="number"
              required
              placeholder="29"
              className={`${styles.input} `}
              value={courseInfo.price}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, price: e.target.value })
              }
            ></input>
          </div>
          <div className="w-[45%]">
            <label htmlFor="" className={`${styles.label} w-[45%]`}>
              Estimated Price(optional)
            </label>

            <input
              name=""
              id="price"
              type="number"
              placeholder="59"
              // check it out
              className={`${styles.input} `}
              value={courseInfo.estimatedPrice}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, estimatedPrice: e.target.value })
              }
            ></input>
          </div>
        </div>
        <br />
        <div>
          <label className={`${styles.label}`}>Course Tags</label>
          <input
            name=""
            id="tags"
            type="text"
            placeholder="MERN,Next 13,Sockeet io ,tailwind css"
            className={`${styles.input} `}
            value={courseInfo.tags}
            onChange={(e: any) =>
              setCourseInfo({ ...courseInfo, tags: e.target.value })
            }
          ></input>
        </div>
        <br />
        <div className="w-full flex flex-wrap justify-between">
          <div className="w-[45%]">
            <label className={`${styles.label} w-[45%]`}>Course Level</label>
            <input
              name=""
              id="level"
              type="text"
              placeholder="Begineer/Intermediate/Expert"
              className={`${styles.input} `}
              value={courseInfo.level}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, level: e.target.value })
              }
            ></input>
          </div>
          <div className="w-[45%]">
            <label className={`${styles.label} w-[45%]`}>Demo URL</label>
            <input
              name=""
              id="demoUrl"
              type="text"
              placeholder="eer74fd"
              className={`${styles.input} `}
              value={courseInfo.demoUrl}
              onChange={(e: any) =>
                setCourseInfo({ ...courseInfo, demoUrl: e.target.value })
              }
            ></input>
          </div>
        </div>
        <br />
        <div className="w-full">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="file"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file"
            className={`w-full min-h-[10vh] dark:border-white border-[#00000026] p-3 border flex items-center justify-center
         ${dragging ? "bg-blue-500" : "bg-transparent"}`}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {courseInfo.thumbnail ? (
              <img
                src={courseInfo.thumbnail}
                alt=""
                className="max-h-full w-full object-cover"
              />
            ) : (
              <span className="dark:text-white text-black">
                Drag anf drop your thumbail here or click to browse
              </span>
            )}
          </label>
        </div>
        <br />
        <div className="w-full flex items-center justify-end">
          <input
            type="submit"
            value="Next"
            className="w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          />
        </div>
        <br />
        <br />
      </form>
    </div>
  );
};

// export default CourseInformation;
export default dynamic(() => Promise.resolve(CourseInformation), {
  ssr: false,
});
