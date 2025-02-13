import { ReadOnlyProps, sizeType } from "@/types";
import classNames from "classnames";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  leftNode?: React.ReactNode;
  block?: boolean;
  size?: sizeType;
  className?: string;
  rounded?: boolean;
  clearBorder?: boolean;
};

export const IconButton = ({
  size = "md",
  disabled = false,
  loading = false,
  block = false,
  rounded = false,
  clearBorder = false,
  onClick,
  className,
  icon,
  leftNode,
  title,
  ...rest
}: ReadOnlyProps<ButtonProps>) => {
  return (
    <button
      title={title}
      onClick={onClick}
      className={classNames(
        "border border-border-eo dark:text-slate-200 hover:bg-slate-100 hover:text-white focus:ring-4 focus:ring-slate-600 focus:ring-opacity-20",
        {
          "px-2 py-[2px] text-[.88rem]": size === "xs",
          "px-1.5 py-1 text-[.94rem]": size === "sm",
          "px-2 py-2": size === "md",
          "px-2 py-3": size === "lg",
          "opacity-50 pointer-events-none cursor-not-allowed": disabled,
          "opacity-80 pointer-events-none cursor-default": loading,
          "flex w-full": block,
          "!rounded-full": rounded,
          "!border-0": clearBorder,
        },
        "font-medium rounded-md transition duration-100 inline-flex items-center whitespace-nowrap",
        className
      )}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <span className="mx-auto text-3xl">
          ...
          {/* <Loader
            className={classNames(
              classes[color].loader[
                variant as keyof BtnClassType[keyof BtnClassType]["loader"]
              ]
            )}
          /> */}
        </span>
      ) : (
        <>
          {!!leftNode && (
            <span
              className={classNames(
                {
                  "pl-2 text-[.88rem]": size === "xs",
                  "pr-1.5  text-[.94rem]": size === "sm",
                  "pr-2 ": size === "md",
                  "pr-2.5 ": size === "lg",
                },
                "font-medium rounded-md transition duration-100 inline-flex items-center whitespace-nowrap",
                className
              )}
            >
              {leftNode}
            </span>
          )}
          {!!icon && <span>{icon}</span>}
        </>
      )}
    </button>
  );
};
