"use client";
import React, { ReactNode, useState } from "react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { IconDown } from "../icon/IconDown";

type CollapsibleProps = {
  header: string | ReactNode;
  content: string | ReactNode;
  icon?: ReactNode;
  defaultStyles?: boolean;
};

export const Collapsible = ({
  header,
  content,
  icon = null,
  defaultStyles = true,
}: CollapsibleProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={classNames("overflow-hidden w-full", {
        "!border-b-gray-100 ": expanded && defaultStyles,
        " border-b border-gray-200 lg:py-[40px] md:py-[20px] py-[15px]": defaultStyles,
      })}
    >
      <button
        className={classNames(
          "flex gap-1 cursor-pointer justify-between items-center w-full pr-3 rounded-lg transition-all md:text-xl font-semibold", )}
        onClick={() => setExpanded((v) => !v)}
      >
        <div className="flex-1 text-left">{header}</div>
        <div
          className={classNames(
            "h-5 w-5  transition-all duration-300",
            {
              "-rotate-180": expanded,
            }
          )}
        >
          {icon ? icon : <IconDown />}
        </div>
      </button>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {!!expanded && (
          <motion.section
            animate="open"
            exit="collapsed"
            initial="collapsed"
            key="content"
            variants={{
              collapsed: { height: 0 },
              open: { height: "auto" },
            }}
          >
            <div className="py-5 md:px-2 pt-2 text-sm md:text-base">
              {content}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

// export default Collapsible;
