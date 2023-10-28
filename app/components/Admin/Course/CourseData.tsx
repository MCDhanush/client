import React, { FC } from "react";
import { styles } from "@/app/styles/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";

type Props = {
  benefits: { title: string }[];
  setBenefits: (benefits: { title: string }[]) => void;
  prerequisites: { title: string }[];
  setPrerequisites: (prerequisites: { title: string }[]) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseData: FC<Props> = ({
  benefits,
  setBenefits,
  prerequisites,
  setPrerequisites,
  active,
  setActive,
}) => {
  const handleBenefitChange = (index: number, value: any) => {
    // debugger;
    const updateBenefits = [...benefits];
    updateBenefits[index].title = value;
    setBenefits(updateBenefits);
  };
  const handleAddBenefit = () => {
    setBenefits([...benefits, { title: "" }]);
  };

  const handleprerequisitesChange = (index: number, value: any) => {
    // debugger;
    const updateprerequisites = [...prerequisites];
    updateprerequisites[index].title = value;
    setPrerequisites(updateprerequisites);
  };
  const handleAddprerequisites = () => {
    setPrerequisites([...benefits, { title: "" }]);
  };

  const prevButton = () => {
    setActive(active - 1);
  };

  const handleOptions = () => {
    if (
      benefits[benefits.length - 1]?.title != "" &&
      prerequisites[prerequisites.length - 1]?.title !== ""
    ) {
      setActive(active + 1);
    } else {
      toast.error("Please fill the fields for go to next!");
    }
  };

  // console.log(`hi ${benefits}`);
  prerequisites.map((e: any) => {
    console.log(e);
  });

  return (
    <div className="w-[80%] m-auto mt-24 block">
      <div>
        <label className={`${styles.label} text=[20px]`} htmlFor="email">
          {" "}
          What are the benefits for students in this course?
        </label>
        <br />

        {benefits.map((benefit: any, index: number) => (
          <input
            type="text"
            key={index}
            name="Benefit"
            placeholder="You will be able to build a full stack LMS Platform..."
            required
            className={`${styles.input} my-2`}
            value={benefit.title}
            onChange={(e) => handleBenefitChange(index, e.target.value)}
          />
        ))}
        <AddCircleIcon
          style={{ margin: "10px 0px", cursor: "pointer", width: "36px" }}
          onClick={handleAddBenefit}
        />
      </div>
      <br />
      <div>
        <label className={`${styles.label} text=[20px]`} htmlFor="email">
          {" "}
          What are the prerequisites for students in this course?
        </label>
        <br />

        {prerequisites.map((prerequisites: any, index: number) => (
          <input
            type="text"
            key={index}
            name="prerequisites"
            placeholder="Youneed basic knowledge of MERN stack."
            required
            className={`${styles.input} my-2`}
            value={prerequisites.title}
            onChange={(e) => handleprerequisitesChange(index, e.target.value)}
          />
        ))}
        <AddCircleIcon
          style={{ margin: "10px 0px", cursor: "pointer", width: "36px" }}
          onClick={handleAddprerequisites}
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <div
          className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          onClick={() => prevButton()}
        >
          Prev
        </div>
        <div
          className="w-full 800px:w-[180px]  flex items-center  justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          onClick={() => handleOptions()}
        >
          Next
        </div>
      </div>
    </div>
  );
};

// export default CourseData;
export default dynamic(() => Promise.resolve(CourseData), { ssr: false });
