import React from "react";
import { MenuCardListItem, MenuCardProps } from "./MenuCardListItem";

export const NavBarDropDownList = ({
  menuList,
}: {
  menuList: MenuCardProps[];
}) => {
  if (!menuList.length) return null;
  return (
    <div className="p-5 bg-white rounded-lg w-max shadow">
      <div className="grid grid-cols-2 gap-5">
        {menuList.map((c, i) => (
          <MenuCardListItem
            desc={c?.desc}
            href={c.href}
            icon={c.icon}
            title={c.title}
            key={i}
          />
        ))}
        {/* <MenuCardListItem />
        <MenuCardListItem /> */}
      </div>
    </div>
  );
};
