import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

type BackdropProps = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
};

export function Backdrop({ children, onClick, className }: BackdropProps) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classNames(
        "fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[999] !m-0 p-0",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
