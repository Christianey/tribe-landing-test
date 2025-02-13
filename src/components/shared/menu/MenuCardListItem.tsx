import classNames from "classnames";
import Link from "next/link";
import React, { ReactNode } from "react";

export type MenuCardProps = {
  icon: ReactNode;
  title: string;
  desc: string;
  href: string;
};

export const MenuCardListItem = ({
  desc,
  icon,
  title,
  href,
}: MenuCardProps) => {
  return (
    <Link href={href}>
      <div
        className={classNames("justify-start items-start gap-3 inline-flex", {
          "!items-center": !desc,
        })}
      >
        <div className="">{icon}</div>

        <div className="flex-col justify-start items-start gap-0.5 inline-flex">
          <h3 className="text-zinc-900 text-base font-bold  leading-normal pb-1">
            {title}
          </h3>
          <div className="max-w-[200px]">
            <p className="text-zinc-600 text-xs font-medium leading-normal ">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
