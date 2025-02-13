/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/common/Button";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import { useResponsive } from "@/components/hooks/useResponsive";
import classNames from "classnames";

const Code = () => {
  const { isMobile } = useResponsive();

  return (
    <section className="bg-primary-deepBlue py-5 lg:py-10">
      <div className="my-5 max-container-width">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-[106px] gap-9 items-center">
          <ScrollAnimation>
            <div>
              {/* lg:max-w-[567px] */}
              <h4 className=" mb-10 text-base sm:text-2xl md:text-2xl lg:text-3xl !leading-tight font-normal text-white">
                Unlock your business potential with our powerful APIs and easy
                to use resources.
              </h4>
              {/* <Btn buttonText="Read our APIs Docs" /> */}
              <Button
                intent={"light"}
                // rightIcon={<HiMiniArrowUpRight size={24} />}
                // disabled
                size={isMobile ? "sm" : "md"}
                  className={classNames("!text-gray-900", { "py-5": isMobile })} 
              >
                Coming soon
              </Button>
            </div>
          </ScrollAnimation>

          <div>
            <ScrollAnimation>
              <img
                src="/images/business/Code.png"
                alt="Description of the image"
                className="h-full w-full"
              />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Code;
