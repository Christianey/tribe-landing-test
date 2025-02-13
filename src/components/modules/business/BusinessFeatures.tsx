/* eslint-disable react/no-unescaped-entities */

import ScrollAnimation from "@/components/common/ScrollAnimation";

const BusinessFeatures = () => {
  const FeaturesList = [
    {
      title: "Global Accessibility:",
      variant: "delay1" as const,
      description:
        "Grow your business and accept payments from users in various African countries across different e-channels by enabling them to pay with Cashpin.",
    },
    {
      title: "Customizable Solutions",
      variant: "delay2" as const,
      description:
        "Cashpin for Business offers flexibility in designing payment solutions, so you can create a seamless user experience aligned with your brand.",
    },
    {
      title: "Speed and Efficiency",
      variant: "delay3" as const,
      description:
        "Experience the fast and highly reliable payment system with our Cashpin for business infrastructure. Users generate a pin and simply scan it using a QR code at payment terminals to successfully complete transactions",
    },
  ];
  return (
    <section className="lg:my-20 my-[60px] max-container-width">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 lg:gap-12 items-center">
        <div className="flex flex-col ">
          {FeaturesList.map((feature, index) => (
            <ScrollAnimation variant={feature.variant} key={index}>
              <div>
                <h2 className="mb-5 text-2xl sm:text-3xl lg:text-4xl font-bold">
                  {feature.title}
                </h2>
                <p className="text-primaryBlack-default/50 font-medium text-sm lg:text-base mb-8 md:mb-4 lg:mb-8">
                  {feature.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        <ScrollAnimation>
          <figure className="flex justify-start">
            <img
              src="/images/business/BusinessImage.png"
              alt="Description of the image"
              className="h-auto w-full max-h-[670px] object-contain"
            />
          </figure>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default BusinessFeatures;
