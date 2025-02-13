/* eslint-disable react/no-unescaped-entities */

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/common/Button";
import Image from "next/image";
import { motion } from "framer-motion";
const Form = () => {
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .send("service_qalm4xg", "template_abn56yd", values, "r-8h2pQwbKBV_l9Md")
      .then(
        (response) => {
          setValues({
            user_name: "",
            user_email: "",
            message: "",
          });
          setSuccess("Message Sent Successfully");
        },
        (error) => {
          setError("Message Failed to send, Try Again!");
        }
      );
  };

  useEffect(() => {
    if (success === "Message Sent Successfully") {
      setTimeout(() => {
        setSuccess("");
      }, 3000);
    }
  }, [success]);

  useEffect(() => {
    if (error === "Message Failed to send, Try Again!") {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="flex flex-col">
        <h3 className="font-bold text-[32px] text-[#18171B] capitalize mb-4 text-center lg:text-left">
          Get in touch
        </h3>
        <div className="flex items-center justify-center lg:justify-normal">
          <p className="text-[#5b5a5d] text-base font-medium max-w-xl text-center lg:text-left">
            At Tribapay, we're committed to ensuring your experience with our
            platform is smooth and enjoyable. Your feedback matters to us, and
            we're dedicated to providing you with the support you deserve.
          </p>
        </div>

        <div className="px-3 mt-20">
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            <Image
              src="/images/Email.svg"
              width={100}
              height={100}
              alt=""
              className="w-[80%] h-[80%]"
            />
          </motion.div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="shadow-2xl lg:p-20 md:p-12 p-10 rounded-3xl bg-white flex flex-col items-center"
      >
        <div className="w-full flex flex-col gap-4 text-black">
          <div className="bg-[#F3F3F3] lg:px-[2.75rem] lg:py-[1.38rem] px-[1.75rem] py-[1.2rem] flex items-center justify-center">
            <input
              onChange={handleChange}
              value={values.user_name}
              id="user_name"
              name="user_name"
              required
              type="text"
              placeholder="Your Name"
              className="w-full bg-inherit outline-none text-black px-1 placeholder:bg-[#F3F3F3] placeholder:text-base placeholder:font-medium placeholder:text-[#5B5A5D]"
            />
          </div>
          <div className="bg-[#F3F3F3] lg:px-[2.75rem] lg:py-[1.38rem] px-[1.75rem] py-[1.2rem] flex items-center justify-center">
            <input
              onChange={handleChange}
              value={values.user_email}
              name="user_email"
              id="user_email"
              type="email"
              required
              placeholder="Your Email"
              className="w-full bg-inherit outline-none text-black px-1 placeholder:bg-[#F3F3F3] placeholder:text-base placeholder:font-medium placeholder:text-[#5B5A5D]"
            />
          </div>
          <div className="bg-[#F3F3F3] lg:px-[2.75rem] lg:py-[1.38rem] px-[1.75rem] py-[1.2rem] flex items-center justify-center">
            <textarea
              onChange={handleChange}
              value={values.message}
              id="message"
              name="message"
              required
              placeholder="Leave Us a Message"
              className="w-full bg-inherit outline-none h-[175px] px-1 text-black placeholder:bg-[#F3F3F3] placeholder:text-base placeholder:font-medium placeholder:text-[#5B5A5D]"
            />
          </div>
        </div>
        {error && (
          <div className="w-full mt-4 px-auto py-2 leading-normal text-white bg-red-500 rounded mb-5 text-center">
            {error}
          </div>
        )}
        {success && (
          <div className="w-full mt-4 px-auto py-2 leading-normal text-white bg-green-500 rounded mb-5 text-center">
            {success}
          </div>
        )}

        <div className={`w-full ${success || error ? "mt-0" : "mt-[24px]"}`}>
          <Button
            type="submit"
            block
            rightIcon={
              <Image
                src="/icons/Arrow.svg"
                alt="Arrow"
                width={24}
                height={24}
                className="w-[1.5rem] h-[1.5rem]"
              />
            }
          >
            Send us a message
          </Button>
        </div>
        <p className="mt-4 text-black font-medium lg:text-xl text-xs">
          Or call us on{" "}
          <a
            href="tel:+2349019080038"
            className="hover:text-primary-main hover:underline"
          >
            +234 901 908 0038
          </a>
        </p>
      </form>
    </div>
  );
};

export default Form;
