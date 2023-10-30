import React from "react";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="border border-[#0000000e] dark:border-[#ffffffle]" />
      <br />
      <div className="w-[95%] 800px:w-full 800px:max-w-[85%] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">
              About
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">
              Shortcut
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/courses"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/course-dashboard"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Course DashBoard
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">
              Social Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href=""
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Youtube
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/dhanush-mc-28598a202/"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Linkedin
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/MCDhanush"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Github
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-[28px] font-[600] text-black dark:text-white pb-3">
            <h3 className="text-[28px] font-[600] text-black dark:text-white pb-3">
              Contact Info
            </h3>
            <p className="text-base text-black dark:text-gray-380  no-underline hover:underline dark:text-white  pb-2">
              {" "}
              Call Us: 044-2456789
            </p>
            <p className="text-base text-black dark:text-gray-380  no-underline hover:underline dark:text-white pb-2">
              {" "}
              Address: +7011 King&#39;s Gaurd Ave, Red Keep,Kings Landing.{" "}
            </p>
            <p className="text-base text-black dark:text-gray-380  no-underline hover:underline dark:text-white pb-2">
              Mail Us: hello@elearning.com
            </p>
          </div>
        </div>
        <br />
        <p className="text-center text-black dark:text-white">
          Copyright © 2023 ELearning | All Rights Reserved
        </p>
      </div>
      <br />
      <br />
    </footer>
  );
};

export default Footer;
