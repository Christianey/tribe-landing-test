"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { IconBlogs } from "../icon/dash/IconBlogs";
import { IconCashPin } from "../icon/dash/IconCashPin";
import { IconConnect } from "../icon/dash/IconConnect";
import { IconCookie } from "../icon/dash/IconCookie";
import { IconFaq } from "../icon/dash/IconFaq";
import { IconPrivacy } from "../icon/dash/IconPrivacy";
import { IconQuickCredit } from "../icon/dash/IconQuickCredit";
import { IconTerms } from "../icon/dash/IconTerms";
import { MenuCardProps } from "../shared/menu/MenuCardListItem";
import { NavBarDropDownList } from "../shared/menu/NavBarDropDownList";
import { Button } from "./Button";
import { Collapsible } from "./Collapsible";
import { IconButton } from "./IconButton";
import MenuDropdown from "./MenuDropdown";

type link = {
  name: string;
  route: string;
  external?: boolean;
};

type Links<T> = {
  children?: T[];
} & link;

type NLink = {
  name: string;
  href?: string;
  children: MenuCardProps[];
};

const exlinks = [
  {
    name: "FOR BUSINESSES",
    route: "/business",
    external: false,
  },
  {
    name: "FOR CONSUMERS",
    route: "/consumer",
    external: false,
  },
];

const links: Links<link>[] = [
  {
    name: "Products",
    route: "",
    children: [
      {
        name: "Cashpin™",
        route: "/cashpin",
      },
      {
        name: "Virtual Card",
        route: "/virtual-card",
      },
      // {
      //   name: "Airtime to cash",
      //   route: "/airtime-to-cash",
      // },
    ],
  },
  {
    name: "Resources",
    route: "",
    children: [
      {
        name: "Faq",
        route: "/faq",
      },
      {
        name: "Blog",
        route: "https://medium.com/@tribapay",
        external: true,
      },
      {
        name: "Contact",
        route: "/contact",
      },
      {
        name: "About Us",
        route: "/about",
      },
    ],
  },

  {
    name: "Company",
    route: "",
    children: [
      {
        name: "Terms and Conditions",
        route: "terms",
      },
      {
        name: "Privacy Policy",
        route: "privacy-policy",
      },
    ],
  },
];

const businessProduct = [
  // {
  //   title: "Cashpin For Business ",
  //   desc: "Tokenized payments at physical terminals.",
  //   href: "#",
  //   icon: <IconCashPin />,
  // },
  {
    title: "Payment Link for Business",
    desc: "Create a payment link and share with your customers.",
    href: "https://pay.tribapay.com",
    icon: <IconCashPin />,
  },
  // {
  //   title: "Connect By Tribapay: ",
  //   desc: "Accept online payments locally and across borders.",
  //   href: "#",
  //   icon: <IconConnect />,
  // },
  {
    title: "Connect By Tribapay: ",
    desc: "Accept online payments locally and across borders.",
    href: "#",
    icon: <IconConnect />,
  },
  // {
  //   title: "AfrikStudent Tuition",
  //   desc: "Pay tuition fees around the world in local currency",
  //   href: "#",
  //   icon: <IconSwitch />,
  // },
  // {
  //   title: "Quickredit",
  //   desc: "Credit financing for your business",
  //   href: "#",
  //   icon: <IconQuickCredit />,
  // },
];

// - Pay with Cashpin
// - Cashpin Wallet
// - Local airtime and bills
// - Cross border airtime and bills
// - Local payment
// - Cross-border payment
// - Airtime to cash
// - Virtual cards

const consumerProduct: MenuCardProps[] = [
  {
    title: "Pay with Cashpin",
    icon: <IconCashPin />,
    desc: "",
    href: "/cashpin",
  },

  // {
  //   title: "Local airtime & bills",
  //   icon: <IconFaq />,
  //   desc: "",
  //   href: "",
  // },
  // {
  //   title: "Cross-border airtime & bills",
  //   icon: <IconConnect />,
  //   desc: "",
  //   href: "",
  // },
  // {
  //   title: "Cross-border payment",
  //   icon: <IconQuickCredit />,
  //   desc: "",
  //   href: "",
  // },
  // {
  //   title: "Local payment",
  //   icon: <IconCashPin />,
  //   desc: "",
  //   href: "",
  // },
  // {
  //   title: "Cashpin Wallet",
  //   icon: <IconCashPin />,
  //   desc: "/cashpin",
  //   href: "",
  // },
  // {
  //   title: "Airtime to cash",
  //   icon: <IconSwitch />,
  //   desc: "",
  //   href: "/airtime-to-cash",
  // },
  {
    title: "Virtual cards",
    icon: <IconQuickCredit />,
    desc: "",
    href: "/virtual-card",
  },
];

const lightNavPaths = ["/airtime-to-cash", "/cashpin", "/faq", "/contact"];
const darkNavPath = ["/airtime-to-cash"];

const Navbar = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [navTheme, setNavTheme] = useState<"light" | "dark" | "deepblue">(
    "dark"
  );
  const pathname = usePathname();
  const el = useRef(null);
  const toggleMobileNav = () => setIsMobileNavVisible((v) => !v);
  const closeMobileNav = () => setIsMobileNavVisible(false);
  const router = useRouter();
  // const { isMobile } = useResponsive();

  // console.log("df", router.asPath);

  const linksRe: NLink[] = [
    {
      name: "Products",
      href: "",
      // children: consumerProduct,
      children: router.pathname.includes("/business")
        ? businessProduct
        : consumerProduct,
    },
    {
      name: "Resources",
      href: "",
      children: [
        {
          title: "Faqs ",
          desc: "Find answers to Frequently asked questions you might have",
          href: "/faq",
          icon: <IconFaq />,
        },
        {
          title: "Blogs",
          desc: "Come with us on our journey, see what we've being up to lately.",
          href: "https://medium.com/@tribapay",
          icon: <IconBlogs />,
        },
        {
          title: "Contact",
          desc: "Get in touch with us",
          href: "/contact",
          icon: <IconBlogs />,
        },
        {
          title: "About Us",
          desc: "Learn more about us",
          href: "/about",
          icon: <IconFaq />,
        },
      ],
    },
    {
      name: "Company",
      href: "",
      children: [
        {
          title: "Privacy Policy",
          desc: "Check out our Privacy Policy",
          href: "/privacy-policy",
          icon: <IconPrivacy />,
        },
        {
          title: "Terms",
          desc: "Check out our Terms & Condition",
          href: "/terms",
          icon: <IconTerms />,
        },
        {
          title: "Security Policy",
          desc: "Check out our Privacy Policy",
          href: "/information-security-policy",
          icon: <IconTerms />,
        },
        {
          title: "Cookies",
          desc: "Check out our Cookie Policy",
          href: "/cookies",
          icon: <IconCookie />,
        },
        {
          title: "Usage Policy",
          desc: "Check out our Usage Policy",
          href: "/acceptable-usage-policy",
          icon: <IconTerms />,
        },
      ],
    },
  ];

  useOnClickOutside(el, () => isMobileNavVisible && toggleMobileNav());

  const getActivePath = (link: Links<link>) => {
    const linkHasChildren = !!link?.children?.length;
    if (linkHasChildren && link.children) {
      for (const l of link.children) {
        if (pathname === l.route) {
          return true;
        }
      }
    }
    return pathname === link.route;
  };
  const getActivePathern = (link: NLink) => {
    const linkHasChildren = !!link?.children?.length;
    if (linkHasChildren && link.children) {
      for (const l of link.children) {
        if (pathname === l.href) {
          return true;
        }
      }
    }
    return pathname === link.href;
  };

  const getNavTheme = useCallback(() => {
    const theme =
      pathname && darkNavPath.includes(pathname)
        ? "deepblue"
        : pathname && lightNavPaths.includes(pathname)
        ? "light"
        : "dark";

    setNavTheme(theme);
  }, [pathname, darkNavPath, lightNavPaths]);

  useEffect(() => {
    getNavTheme();
  }, [getNavTheme, pathname]);

  useEffect(() => {
    if (isMobileNavVisible) document.body.style.overflow = "hidden";
    else document.body.style.overflowY = "auto";
  }, [isMobileNavVisible]);

  return (
    <div ref={el} className="transition-all w-full top-0 z-50 fixed">
      <nav
        className={classNames(
          "w-full ",
          {
            "bg-[#623ECA] border-b-[#623ECA] shadow-md": navTheme === "light",
          },
          {
            "bg-white shadow-sm": navTheme === "dark",
          },
          {
            "bg-[#160840] border-b-[#160840] shadow-md":
              navTheme === "deepblue",
          }
        )}
      >
        <div className="flex justify-between items-center py-3.5 max-container-width">
          <div className="flex justify-between items-center gap-8">
            <Link href="/business" className="flex items-center justify-start">
              {/* <Logo
                width={isMobile ? 180 : 190}
                light={navTheme === "light" ? true : false}
              /> */}
              <Image
                src={
                  navTheme === "light" || navTheme === "deepblue"
                    ? "/images/TribapayLight.png"
                    : "/images/Tribapay.png"
                }
                alt="Tribapay"
                width={100}
                height={100}
                className="cursor-pointer w-[7.2] h-[3]  md:w-[10rem] md:h-[2.125] lg:w-[8.5rem] lg:h-[2rem]"
              />
            </Link>
            <div className="lg:flex hidden lg:flex-row lg:items-center lg:justify-center lg:gap-8">
              {exlinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.route}
                  className={classNames("font-medium", {
                    "!font-bold text-[#9672FF]": getActivePath(link),
                  })}
                >
                  <div className="flex flex-col items-center justify-center text-sm pt-2">
                    <p
                      className={classNames("p-2.5", {
                        "text-white":
                          navTheme === "light" || navTheme === "deepblue",
                        "!text-black": navTheme === "dark",
                      })}
                    >
                      {link.name}
                    </p>
                    <p
                      className={`${
                        getActivePath(link)
                          ? "w-[80px]  border-[2px] border-solid border-[#9672FF]"
                          : ""
                      }`}
                    ></p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex md:gap-8 items-center justify-center">
            <ul className="hidden lg:flex md:gap-4 px-4">
              {linksRe.map((link) => {
                const active = getActivePathern(link);
                return !link?.children ? (
                  <li
                    key={link.name}
                    className={classNames(
                      "cursor-pointer transition duration-300 py-1.5 font-medium rounded-xl w-full opacity-100 text-primaryBlack-default",
                      {
                        "text-primary-main font-medium !opacity-100": active,
                      },
                      {
                        "!text-primary-Primary/light font-bold !opacity-100":
                          (navTheme === "light" && active) ||
                          (navTheme === "deepblue" && active),
                      },
                      {
                        "text-white/60 hover:bg-opacity-[20%]":
                          navTheme === "light" || navTheme === "deepblue",
                      },
                      {
                        "hover:bg-gray-100 !text-primaryBlack-default": !active,
                      }
                    )}
                  >
                    <Link
                      key={link.name}
                      href={link.href!! ?? "#"}
                      className="flex items-center"
                    >
                      <span
                        className={classNames(
                          "px-3 text-base font-medium text-primaryBlack-default",
                          {
                            "!font-semibold": active,
                          }
                        )}
                      >
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ) : (
                  link.children && (
                    <MenuDropdown
                      key={link.name}
                      header={
                        <li
                          key={link.name}
                          className={classNames(
                            "cursor-pointer transition duration-300 py-1.5 rounded-xl w-full opacity-100 text-primaryBlack-default",
                            {
                              "text-primary-main font-medium !opacity-100":
                                active,
                            },
                            {
                              "!text-primary-Primary/light font-medium !opacity-100":
                                navTheme === "light" ||
                                (navTheme === "deepblue" && active),
                            },
                            {
                              "text-white/60 hover:bg-opacity-[20%]":
                                navTheme === "light" || navTheme === "deepblue",
                            },

                            { " text-gray-700": !active }
                          )}
                        >
                          <span className="px-3 flex gap-2 font-normal text-sm items-center">
                            {link.name} <HiChevronDown size={20} />
                          </span>
                        </li>
                      }
                      body={<NavBarDropDownList menuList={link.children} />}
                      // items={link?.children?.map((v) => ({
                      //   text: v.name,
                      //   onClick: () => {},
                      //   route: v.route,
                      //   classNames:
                      //     pathname === v.route
                      //       ? "text-primary-main font-base"
                      //       : "",
                      // }))}
                    />
                  )
                );
              })}
            </ul>
            <Link aria-label="Tribapay login" href="https://app.tribapay.com">
              <Button
                className="!h-10 !w-[127px] font-semibold"
                intent={
                  navTheme === "light" || navTheme === "deepblue"
                    ? "light-outlined"
                    : "outlined"
                }
              >
                Login
              </Button>
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <IconButton
              aria-label="Menu"
              clearBorder
              onClick={toggleMobileNav}
              className={classNames(" !border", {
                "bg-white": navTheme === "light" || navTheme === "deepblue",
              })}
              icon={
                <div className="text-text-default flex justify-center items-center">
                  <FiMenu size={24} />
                </div>
              }
            />
          </div>
        </div>
      </nav>
      <nav
        className={classNames(
          "fixed top-24 left-1/2 max-h-[80%] overflow-y-auto -translate-x-1/2 w-11/12 rounded-md bg-white shadow-lg transition-all duration-200 ease-in-out max-w-md z-50",
          { "opacity-100 top-24 translate-y-0": isMobileNavVisible },
          {
            "opacity-0 top-16 pointer-events-none -translate-y-10":
              !isMobileNavVisible,
          }
        )}
      >
        <ul className="flex flex-col items-start space-y-1 px-6 py-6">
          {linksRe.map((link) => {
            const active = getActivePathern(link);
            return !link?.children ? (
              <Link
                onClick={closeMobileNav}
                key={link.name}
                href={link.href!! ?? "#"}
                className="flex w-full"
              >
                <li
                  className={classNames(
                    "cursor-pointer font-medium transition duration-150 py-4 px-5 rounded-md hover:bg-slate-100 w-full",
                    {
                      "bg-slate-50 text-primary-main !font-bold": active,
                    }
                  )}
                >
                  {link.name}
                </li>
              </Link>
            ) : (
              <li className="relative block w-full" key={link.name}>
                {
                  <Collapsible
                    defaultStyles={false}
                    icon={<HiChevronDown className="ml-auto" size={18} />}
                    header={
                      <li
                        className={classNames(
                          "cursor-pointer text-base font-medium transition duration-150 py-4 px-5 rounded-md w-full",
                          {
                            " text-primary-main !font-semibold": active,
                          }
                        )}
                      >
                        {link.name}
                      </li>
                    }
                    content={
                      <ul className="p-1.5 rounded-md bg-slate-50 block">
                        {link?.children?.map((v) => (
                          <Link
                            onClick={closeMobileNav}
                            key={v.title}
                            href={v.href}
                            className="flex w-full"
                          >
                            <li
                              className={classNames(
                                "cursor-pointer font-medium transition duration-150 py-4 px-5 rounded-md hover:bg-slate-100 w-full",
                                {
                                  "bg-slate-50 text-primary-main !font-bold":
                                    pathname === v.href,
                                }
                              )}
                            >
                              {v.title}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    }
                  />
                }
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className="w-full bg-black py-1 block lg:hidden">
        <ul className="flex max-container-width space-x-4">
          {exlinks.map((link, index) => (
            <Link
              key={index}
              href={link.route}
              className={classNames("font-medium text-white", {
                "!font-bold text-[#9672FF]": getActivePath(link),
              })}
            >
              <li className="flex flex-col items-center text-xs font-bold pt-2">
                <p
                  className={classNames("py-1.5", {
                    "text-white":
                      navTheme === "light" || navTheme === "deepblue",
                  })}
                >
                  {link.name}
                </p>
                <p
                  className={`${
                    getActivePath(link)
                      ? "w-[80px]  border-[2px] border-solid border-[#9672FF]"
                      : ""
                  }`}
                ></p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
