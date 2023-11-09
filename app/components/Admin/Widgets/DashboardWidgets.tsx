import React, { FC } from "react";
import Image from "next/image";
import { styles } from "@/app/styles/styles";
import dynamic from "next/dynamic";

type Props = {
  open: boolean;
};

const DashboardWidgets: FC<Props> = (props: Props) => {
  return (
    <div className="">
      <div className="w-[90%] m-auto py-5 mb-5">
        <div className="w-full  relative top-[90px]">
          <h1 className={`${styles.title}  `}>Welcome to Admin Dashboard</h1>
          <br />
          <Image
            src="https://res.cloudinary.com/dbdyxunaq/image/upload/v1699504849/dashboard-bannner_ncb3ob.jpg"
            width={500}
            height={500}
            alt=""
            className="object-contain  800px:w-[60%] m-auto max-xl:h-[300px]  "
          />
        </div>
      </div>
    </div>
  );
};

// export default DashboardWidgets;
export default dynamic(() => Promise.resolve(DashboardWidgets), { ssr: false });
