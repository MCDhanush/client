import React from "react";
import dynamic from "next/dynamic";

type Props = {};

const Page = (props: Props) => {
  return <div>page</div>;
};

export default dynamic(() => Promise.resolve(Page), { ssr: false });
