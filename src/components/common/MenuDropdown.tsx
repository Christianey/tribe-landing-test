import React, { ReactNode } from "react";
import { Menu } from "@headlessui/react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type itemsArray = {
  text: string | ReactNode;
  icon?: ReactNode;
  onClick: () => void | Record<any, any>;
  classNames?: string;
  route?: string;
};

type MenuDropdownProps = {
  header: string | ReactNode;
  body?: string | ReactNode;
  items?: itemsArray[];
};

const MenuDropdown = ({ header, items, body }: MenuDropdownProps) => {
  const variants = {
    hidden: { y: "-12px", opacity: 0 },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "-12px",
      opacity: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
  };
  return (
    <Menu>
      {({ open }) => (
        <div
          className={classNames("relative inline-block z-10", { "z-50": open })}
        >
          <Menu.Button type="button">{header}</Menu.Button>
          <AnimatePresence initial={false} mode="wait">
            {open && (
              <Menu.Items
                as={motion.div}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                static
                className="absolute -left-[230%] top-full mt-3  text-gray-900 rounded-lg flex flex-col z-50"
              >
                {body && <div className="p-2">{body}</div>}
                {items &&
                  items.map((item, i) => (
                    <>
                      {item?.text && (
                        <Menu.Item
                          key={
                            typeof item.text === "string"
                              ? item.text
                              : item.route || i.toString()
                          }
                          aria-label={item.text}
                        >
                          {({ active }) =>
                            item?.route ? (
                              <Link
                                href={item.route}
                                className={classNames(
                                  "whitespace-nowrap flex items-center px-3 font-medium py-2 text-sm rounded-[4px] space-x-4 hover:bg-slate-100",
                                  { "bg-slate-400 bg-opacity-10": active },
                                  item.classNames
                                )}
                                onClick={item?.onClick ?? null}
                              >
                                {!!item.icon && <span>{item.icon}</span>}
                                <span>{item.text}</span>
                              </Link>
                            ) : (
                              <button
                                className={classNames(
                                  "whitespace-nowrap flex items-center px-3 font-medium py-2 text-sm rounded-[4px] space-x-4 hover:bg-slate-100",
                                  { "bg-slate-400 bg-opacity-10": active },
                                  item.classNames
                                )}
                                onClick={item?.onClick ?? null}
                              >
                                {!!item.icon && <span>{item.icon}</span>}
                                <span>{item.text}</span>
                              </button>
                            )
                          }
                        </Menu.Item>
                      )}
                    </>
                  ))}
              </Menu.Items>
            )}
          </AnimatePresence>
        </div>
      )}
    </Menu>
  );
};

export default MenuDropdown;
