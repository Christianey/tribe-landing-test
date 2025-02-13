/* eslint-disable react/no-unescaped-entities */

import ScrollAnimation from "@/components/common/ScrollAnimation";

const AiFeatures = () => {
  const FeaturesList = [
    {
      variant: "delay1" as const,
      title: "AI-Enhanced Insights",
      description:
        "Connect is more than a payment platform; it's your data-driven ally. AI algorithms analyze your business data, providing valuable insights for informed decisions and competitive advantage.",
    },
    {
      variant: "delay2" as const,
      title: "Multi-currency infrastructure",
      description:
        "Connect enables online payments in local currencies, reducing currency conversion complexities and costs for both customers and businesses.",
    },
    {
      variant: "delay3" as const,
      title: "Regulatory Compliance",
      description:
        "Rest easy knowing that CONNECT helps you stay compliant with industry regulations and manages risks effectively, safeguarding your business's reputation.",
    },
  ];
  return (
    <section className="lg:my-20 my-[60px] max-container-width">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 lg:gap-12 items-center">
        <ScrollAnimation>
          <figure className="flex justify-start">
            <img
              src="/images/business/AiFeat.png"
              alt="Description of the image"
              className="h-full w-full max-h-[600px] object-contain"
            />
          </figure>
        </ScrollAnimation>

        <div className="flex flex-col ">
          {FeaturesList.map((feature, index) => (
            <ScrollAnimation variant={feature.variant} key={index}>
              <div>
                <h2 className="mb-5 text-2xl sm:text-3xl lg:text-4xl font-bold">
                  {feature.title}
                </h2>
                <p className="text-primaryBlack-default/50 font-medium text-sm lg:text-base mb-8">
                  {feature.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiFeatures;
