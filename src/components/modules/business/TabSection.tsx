import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { forwardRef, useState } from "react";
import Switch from "./Switch";
import BusinessFeatures from "./BusinessFeatures";
import CashFlow from "./CashFlow";
import Empowering from "./Empowering";
import AiFeatures from "./AiFeatures";
import { useResponsive } from "@/components/hooks/useResponsive";

type TabButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  name: string;
  selected: boolean;
};

const MyCustomButton = forwardRef<HTMLButtonElement, TabButtonProps>(
  (props, ref) => {
    const { name, selected } = props;
    const { isMobile } = useResponsive();

    // Define styles for desktop
    const desktopStyles = classNames(
      "w-full md:w-1/2 lg:w-1/3 text-2xl font-bold py-8 px-4 focus-visible:outline-none",
      selected && "border-t-4 border-t-primaryLight"
    );

    // Define styles for mobile
    const mobileStyles = classNames(
      "w-full text-lg md:text-xl lg:text-2xl font-bold py-4 md:py-6 px-4 rounded-lg transition-all duration-300 focus-visible:outline-none text-gray-700",
      selected && "bg-primaryLight text-white shadow-lg"
    );

    return (
      <button
        className={isMobile ? mobileStyles : desktopStyles}
        ref={ref}
        {...props}
      >
        {name}
      </button>
    );
  }
);

MyCustomButton.displayName = "MyCustomButton";

const TabSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="my-20 max-container-width">
      <div className="relative lg:px-20 px-5 py-10 lg:py-20 bg-violet-50 rounded-[40px] lg:gap-16 gap-9 border border-gray-100 shadow-md shadow-slate-100 overflow-hidden w-full">
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List as="aside" className="flex flex-col md:flex-row">
            <Tab
              as={MyCustomButton}
              name="Analyze Your Business Data"
              selected={selectedIndex === 0}
            />
            <Tab
              as={MyCustomButton}
              name="Global Accessibility"
              selected={selectedIndex === 1}
            />
            <Tab
              as={MyCustomButton}
              name="Smoother Cashflow & Stability"
              selected={selectedIndex === 2}
            />
          </Tab.List>
          <Tab.Panels as="section" className="mt-8">
            <Tab.Panel>
              <BusinessFeatures />
            </Tab.Panel>
            <Tab.Panel>
              <CashFlow />
            </Tab.Panel>
            <Tab.Panel>
              <AiFeatures />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>

        {/* Mobile Indicator Dots */}
        <div className="flex justify-center mt-6 md:hidden">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={classNames(
                "w-3 h-3 rounded-full mx-1 transition-all",
                selectedIndex === index
                  ? "bg-primaryLight scale-125"
                  : "bg-gray-300"
              )}
              aria-label={`Go to tab ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabSection;
