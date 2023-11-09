import React from "react";
import Image from "next/image";
import { styles } from "@/app/styles/styles";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Dr.Stephen Strange",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Full Stack Web Developer | KamarTaj(India)",
    Comment:
      "I personally feel relatable to LMS because I have explored and experienced many of them. Most of us must be not aware of Learning Management System functions & benefits. Since the time, pandemic hit, few industries faced revolutionary changes. If we take an example of Education & Training industry, they had been rescued by e-learning platforms equipped with learning management systems only. ",
  },
  {
    name: "Carol Danvers",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    profession: "Full Stack Web Developer | Canada",
    Comment:
      "I personally feel relatable to LMS because I have explored and experienced many of them. Most of us must be not aware of Learning Management System functions & benefits. Since the time, pandemic hit, few industries faced revolutionary changes. If we take an example of Education & Training industry, they had been rescued by e-learning platforms equipped with learning management systems only. Now, LMS is installed and benefitting to number of corporate offices in Learning and development department. LMS offers training material, professional courses, educational textbooks through electronic media. It brings a smooth management of content, customer enrichment and interaction between students and teachers.",
  },
  {
    name: "Tony Stark",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    profession: "Masters in Robotics | New York",
    Comment:
      "I personally feel relatable to LMS because I have explored and experienced many of them. Most of us must be not aware of Learning Management System functions & benefits. Since the time, pandemic hit, few industries faced revolutionary changes. If we take an example of Education & Training industry, they had been rescued by e-learning platforms equipped with learning management systems only. Now, LMS is installed and benefitting to number of corporate offices in Learning and development department. LMS offers training material, professional courses, educational textbooks through electronic media. It brings a smooth management of content, customer enrichment and interaction between students and teachers.",
  },
  {
    name: "Black window ",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    profession: "Student | Cambridge university",
    Comment:
      "I personally feel relatable to LMS because I have explored and experienced many of them. Most of us must be not aware of Learning Management System functions & benefits. Since the time, pandemic hit, few industries faced revolutionary changes. If we take an example of Education & Training industry, they had been rescued by e-learning platforms equipped with learning management systems only. ",
  },
  {
    name: "T Challa",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    profession: "Full Stack Web Developer | Africa",
    Comment:
      "I personally feel relatable to LMS because I have explored and experienced many of them. Most of us must be not aware of Learning Management System functions & benefits. Since the time, pandemic hit, few industries faced revolutionary changes. If we take an example of Education & Training industry, they had been rescued by e-learning platforms equipped with learning management systems only. ",
  },
  {
    name: "Scarlet johnson",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    profession: "Student | StandFord university",
    Comment:
      "I personally feel relatable to LMS because I have explored and experienced many of them. Most of us must be not aware of Learning Management System functions & benefits. Since the time, pandemic hit, few industries faced revolutionary changes. If we take an example of Education & Training industry, they had been rescued by e-learning platforms equipped with learning management systems only. ",
  },
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50% ] w-full">
          <Image
            src="https://res.cloudinary.com/dbdyxunaq/image/upload/v1699504849/banner-img-2_lgrtjf.png"
            width={700}
            height={700}
            alt="business"
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are <span className="text-gradient">Our Strength</span>{" "}
            <br /> See What They Say About Us
          </h3>

          <br />

          <p className={styles.label}>
            Lorem ipsum dolor sit amet consectetur adipisicing ellt. Eaque unde
            voluptatum dignissimos, nulla perferendis dolorem voluptate nemo
            possimus magni deleniti natus accusamus officiis quasi nihil
            commodi, praesentium quidem, quis doloribus?
          </p>
        </div>
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px]  mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-40px]">
        {reviews &&
          reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
      </div>
    </div>
  );
};

export default Reviews;
