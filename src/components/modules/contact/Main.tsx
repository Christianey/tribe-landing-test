/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/common/Button";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Inquiry from "./Inquiry";
import Form from "./Form";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const Main = () => {
  function openFreshChat() {
    if (window.fcWidget) {
      window.fcWidget.open();
    }
  }
  return (
    <>
      <div className="">
        <div className="">
          <div
            className="bg-small-screen bg-primary-main lg:pt-24 pt-32 text-text-secWhite bg-no-repeat block"
            // style={{
            //   backgroundImage: `url("/images/hero-parttern.svg")`,
            //   backgroundPosition: "bottom right",
            // }}
          >
            <div className="max-container-width lg:pb-[16rem] pb-[10rem] flex flex-col max-container-width lg:pt-28">
              <div className="flex flex-col items-center text-center justify-center">
                <h1 className="text-4xl lg:text-7xl font-bold lg:pt-3 pt-8 pb-4">
                  Contact Us
                </h1>
                <p className="max-w-[40rem] mb-[4.75rem]">
                  Our friendly customer support team is ready to assist you with
                  any inquiries you might have. Whether it's about using our
                  services, troubleshooting issues, or providing feedback, we're
                  just a message away.
                </p>
                <div className="absolute">
                  <Image
                    src="/avatar/User4.svg"
                    width={550}
                    height={550}
                    alt="Hero Image"
                    className="lg:h-[9.1875rem] lg:w-[9.1875rem] relative lg:top-[5rem] lg:left-[-26rem] lg:flex hidden"
                  />
                </div>
                <div className="absolute">
                  <Image
                    src="/avatar/User2.svg"
                    width={550}
                    height={550}
                    alt="Hero Image"
                    className="lg:h-[9.1875rem] lg:w-[9.1875rem] relative lg:top-[-6rem] lg:left-[26rem] lg:flex hidden"
                  />
                </div>
                
                  <Button intent="light" onClick={openFreshChat}>
                    Send us a message{" "}
                    <BsArrowRight
                      width={24}
                      height={24}
                      className="fill-primary-main ml-[10px] w-[1.5rem] h-[1.5rem]"
                    />
                  </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-black bg-stone-50">
          <div className=" max-container-width lg:py-[72px] py-14">
            <ScrollAnimation>
              <Inquiry />
            </ScrollAnimation>
          </div>
        </div>
        <div className="text-black bg-stone-50">
          <div className=" max-container-width lg:py-[72px] py-14">
            <ScrollAnimation>
              <Form />
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* mobile view */}
      {/* <div>
      <div
        className="bg-small-screen flex flex-col lg:hidden pt-40 bg-primary-main text-text-secWhite bg-no-repeat"
        style={{
          backgroundImage: `url("/images/hero-parttern.svg")`,
          backgroundPosition: "bottom right",
        }}
      >
        <div className="pb-[10rem] flex flex-col items-center text-center justify-center max-container-width">
          <h1 className="text-5xl lg:text-7xl font-bold lg:pt-3 pt-8 pb-4">
            Contact Us
          </h1>
          <p className="max-w-[40rem] mb-[4.75rem]">
            Our friendly customer support team is ready to assist you with
            any inquiries you might have. Whether it's about using our
            services, troubleshooting issues, or providing feedback, we're
            just a message away.
          </p>
          <div className="absolute">
            <Image
              src="/avatar/User4.svg"
              width={550}
              height={550}
              alt="Hero Image"
              className="lg:h-[9.1875rem] lg:w-[9.1875rem] relative lg:top-[5rem] lg:left-[-26rem] lg:flex hidden"
            />
          </div>
          <div className="absolute">
            <Image
              src="/avatar/User2.svg"
              width={550}
              height={550}
              alt="Hero Image"
              className="lg:h-[9.1875rem] lg:w-[9.1875rem] relative lg:top-[-6rem] lg:left-[26rem] lg:flex hidden"
            />
          </div>
          <a href="#form-section" >
            <Button intent="light" onClick={scrollToForm}>
              Send us a message{" "}
              <BsArrowRight
                width={24}
                height={24}
                className="fill-primary-main ml-[10px] w-[1.5rem] h-[1.5rem]"
              />
            </Button>
          </a>
        </div>
      </div>

      <div className="text-black bg-stone-50 lg:hidden">
        <div className="max-container-width py-14">
          <ScrollAnimation>
            <Inquiry />
          </ScrollAnimation>
        </div>
      </div>

      <div id="form-section">
        <div className="text-black bg-stone-50 lg:hidden">
          <div className="max-container-width py-14">
            <ScrollAnimation>
              <Form />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default Main;
