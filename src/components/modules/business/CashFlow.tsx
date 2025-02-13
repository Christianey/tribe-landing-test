/* eslint-disable react/no-unescaped-entities */

import ScrollAnimation from "@/components/common/ScrollAnimation";

const CashFlow = () => {
  const FeaturesList = [
    {
      title: "AI-Driven Decisions",
      variant: "delay1" as const,
      description:
        "Harness the speed and accuracy of our AI tools for faster loan approvals. Get the funds you need precisely when you need them, without the wait.",
    },
    {
      title: "Hassle-Free Financing",
      variant: "delay2" as const,
      description:
        "Access working capital effortlessly by converting outstanding invoices into immediate cash. Keep your business operations running smoothly.",
    },
    {
      title: "Boosted Cash Flow",
      variant: "delay3" as const,
      description:
        "Smooth out cash flow fluctuations and maintain financial stability. QuicKredit empowers you to take control of your business finances.",
    },
  ];
  return (
    <section className="lg:my-20 my-[60px] max-container-width">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 lg:gap-12 items-center">
        <div className="flex flex-col ">
          {FeaturesList.map((feature, index) => (
            <ScrollAnimation key={index}>
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
        <ScrollAnimation>
          <figure className="flex justify-start">
            <img
              src="/images/business/Cashflow.png"
              alt="Description of the image"
              className="h-full w-full  max-h-[670px] object-contain"
            />
          </figure>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CashFlow;
