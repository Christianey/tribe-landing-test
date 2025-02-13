import React, { ReactNode, useEffect } from "react";
import classNames from "classnames";
import { FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { IconButton } from "./IconButton";
import { Backdrop } from "./Backdrop";

type ModalProps = {
  isOpen: boolean;
  title?: string;
  padding?: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: "md" | "sm" | "lg";
  showClose?: boolean;
};

export function Modal({
  isOpen,
  title,
  padding = true,
  showClose = true,
  onClose,
  children,
  size = "md",
}: ModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflowY = "auto";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  const variants = {
    hidden: {
      y: "-100px",
      opacity: 0,
    },
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
      y: "100px",
      opacity: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
  };

  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {isOpen && (
        <Backdrop onClick={onClose} className="text-black md:py-5">
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classNames(
              "w-full overflow-hidden mx-auto relative bg-transparent rounded-lg min-h-52 max-h-full overflow-y-auto",
              {
                "p-8": padding,
                "max-w-3xl": size === "md",
                "max-w-lg": size === "sm",
              }
            )}
          >
            {(showClose || title) && (
              <div className="flex items-center justify-between mb-2 sticky top-0 ">
                <h3 className="text-xl font-semibold">{title}</h3>
                {showClose && (
                  <IconButton
                    onClick={onClose}
                    icon={<FiX size={24} />}
                    size="sm"
                    className="!text-white !border-0 my-10"
                  />
                )}
              </div>
            )}
            {children}
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
}
