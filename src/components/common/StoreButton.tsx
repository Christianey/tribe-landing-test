import classNames from "classnames";
import Link from "next/link";
import React, { useMemo } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

type Props = {
  store?: "app-store" | "play-store";
  theme?: "light" | "dark" | "primary";
  link?: string;
};

export const StoreButton = ({
  store = "app-store",
  theme = "light",
  link,
}: Props) => {
  const appStoreUrl =
    "https://apps.apple.com/us/app/tribapay-by-stanbuzz/id1630686804";
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.tribapay";

  const linkUrl = useMemo(() => {
    if (link) return link;

    return store === "app-store" ? appStoreUrl : playStoreUrl;
  }, [link, store]);

  return (
    <>
      <Link target="_blank" href={linkUrl}>
        <div
          className={classNames(
            " px-2.5 md:px-6 py-1.5 md:py-2 rounded-lg border justify-start items-center gap-3 md:gap-[17px] inline-flex",
            { " bg-white text-black border-white": theme === "light" },
            { " bg-black text-white border-black": theme === "dark" },
            { " bg-primary-main text-white border-primary-main": theme === "primary" }
          )}
        >
          <div className="relative w-6 h-6 md:w-8 md:h-8 ">
            {store === "app-store" ? (
              <FaApple className="w-[105%] h-[105%]" />
            ) : (
              <FaGooglePlay className="w-full h-full" />
            )}
          </div>
          <div>
            <span className="text-[9.5px] block text-left leading-none md:text-xs font-normal">
              Download on the
            </span>
            <span className="md:text-lg text-left leading-none font-bold whitespace-nowrap">
              {store === "app-store" ? "App Store" : "Google Play"}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};
