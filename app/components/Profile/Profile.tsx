"use client";
import React, { FC, useState } from "react";
import SideBarProfile from "./SideBarProfile";
import { useLogOutQuery } from "@/redux/features/auth/authApi";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import ProfileInfo from "./ProfileInfo";
import ChangePassword from "./ChangePassword";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";

type Props = {
  user: any;
};

const Profile: FC<Props> = ({ user }) => {
  const [scroll, setScroll] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [logoutState, setLogout] = useState(false);
  const {} = useLogOutQuery(undefined, {
    skip: !logoutState ? true : false,
  });
  // const [logout] = useLoadUserQuery();

  const [active, setActive] = useState(1);

  const logOutHandler = async () => {
    toast.error("Logout successfully");
    setLogout(true);
    await signOut();
    // logout();
    redirect("/");
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }

  return (
    <div className="w-[85%] flex mx-auto h-auto">
      <div
        className={`w-[25%] 800px:w-[310px] h-[450px] rounded-lg  mb-[50px] dark:bg-slate-900 bg-opacity-90 border bg-white dark:border-[#ffffff1d] border-[#00000015] round-[5px] shadow-sm dark:shadow-sm mt-[80px] mc-[80px] sticky ${
          scroll ? "top-[120px]" : "top-[30px]"
        } left-[30px]`}
      >
        <SideBarProfile
          user={user}
          active={active}
          avatar={avatar}
          setActive={setActive}
          logOutHandler={logOutHandler}
        />
      </div>
      <div className="w-full  h-full bg-transparent ">
        {active === 1 && (
          <div className="w-full  h-full bg-transparent mt-[80px]">
            <ProfileInfo avatar={avatar} user={user} />
          </div>
        )}
        {active === 2 && (
          <div className="w-full  h-full bg-transparent mt-[80px]">
            <ChangePassword />
          </div>
        )}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Profile), { ssr: false });
