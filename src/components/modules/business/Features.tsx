/* eslint-disable react/no-unescaped-entities */

import ScrollAnimation from "@/components/common/ScrollAnimation";
import { motion } from "framer-motion";

const Features = () => {
  const FeaturesList = [
    {
      title: "Payment Processing",
      variant: "delay1" as const,
      description:
        "We simplify payment integration for businesses, allowing them to accept various payment methods for both local and cross-border transactions via payment links, payment checkouts and cashpin.",
      icon: "/images/business/icons/Vector.png",
      bgIcon: "rgba(203, 184, 255, 0.30)",
    },
    {
      title: "Developer-Friendly",
      variant: "delay2" as const,
      description:
        "We offer developer resources, documentation, and support to make integration simple for development teams, reducing the time and effort required to implement payment solutions.",
      icon: "/images/business/icons/Vector1.png",
      bgIcon: "rgba(126, 223, 183, 0.30)",
    },
    {
      title: "Predictive Analytics",
      variant: "delay3" as const,
      description:
        "Our AI-driven APIs analyze historical data to make predictions about future trends and demands. This helps businesses optimize inventory, pricing and resource allocation.",
      icon: "/images/business/icons/Vector2.png",
      bgIcon: "rgba(255, 222, 86, 0.30)",
    },
    {
      title: "Streamlined Checkout",
      variant: "delay4" as const,
      description:
        "With Our APIs, businesses can create a seamless and user-friendly checkout experience, reducing cart abandonment rates and improving conversion rates for online transactions.",
      icon: "/images/business/icons/Vector3.png",
      bgIcon: "rgba(244, 50, 73, 0.30)",
    },
  ];
  return (
    <section className="lg:my-20 my-[60px] max-container-width !overflow-visible">
      <div className="items-center mb-16">
        {/* <h3 className="font-bold text-4xl md:text-5xl lg:text-6xl">
          Worry less,
          <br /> we’ve got this!
        </h3> */}
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6"> */}
        {FeaturesList.map((feature, index) => (
          <ScrollAnimation
            variant={feature.variant}
            key={index}
            className="bg-white flex flex-col lg:px-6 px-5 py-[30px] rounded-[20px] border border-gray-100 shadow-sm "
          >
            <div className="">
              {feature.icon && (
                <div
                  className="flex w-14 h-14 items-center justify-center rounded-full mb-10"
                  style={{ backgroundColor: feature.bgIcon }}
                >
                  <motion.div
                    className="w-6 h-6"
                    initial={{ y: 0 }}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <img
                      className="w-full h-full object-contain"
                      src={feature.icon}
                      alt="Icon"
                    />
                  </motion.div>
                </div>
              )}
            </div>

            <h2 className="mb-4 text-2xl font-bold">{feature.title}</h2>
            <p className="text-primaryBlack-default/50 font-medium text-sm">
              {feature.description}
            </p>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Features;
