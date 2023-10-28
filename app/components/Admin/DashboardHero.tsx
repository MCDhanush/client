"use client";
import React, { FC, useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardWidgets from "./Widgets/DashboardWidgets";
import dynamic from "next/dynamic";

type Props = {
  isDashboard?: any;
};

const DashboardHero = ({ isDashboard }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <DashboardHeader open={open} setOpen={setOpen} />
      {isDashboard && <DashboardWidgets open={open} />}
    </div>
  );
};

// export default DashboardHero;
export default dynamic(() => Promise.resolve(DashboardHero), { ssr: false });
