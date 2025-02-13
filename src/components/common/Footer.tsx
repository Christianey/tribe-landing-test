import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

const TwitterIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 512 512">
      <path
        fill="#fff"
        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
      />
    </svg>
  );
};

const socials = [
  {
    href: "https://www.facebook.com/tribapay",
    icon: <FaFacebookF size={20} />,
  },
  {
    href: "https://www.instagram.com/tribapay/",
    icon: <FaInstagramSquare size={22} className="rounded-lg" />,
  },
  {
    href: "https://twitter.com/Tribapay",
    icon: <TwitterIcon />,
  },
  {
    href: "https://medium.com/@tribapay",
    icon: <BsMedium size={20} />,
  },
  {
    href: "https://www.linkedin.com/company/tribapay/",
    icon: <FaLinkedin size={20} />,
  },
];

// Accounts
// Cashpin TM
// Local Checkout
// Cross border Checkouts
// Virtual cards
// Local payment links
// Cross border payment links
// Quickredit,
// Local Airtime and bills payment
// Cross Border Airtime and bills payment
// Airtime to cash
// AfrikStudents Tuition
// Developer APIs (Coming Soon)

const products = [
  // {
  //   label: "Accounts",
  //   link: "#",
  // },
  {
    label: "Cashpin™",
    link: "/cashpin",
  },
  // {
  //   label: "Local & Cross-border payment checkout",
  //   link: "#",
  // },
  {
    label: "Virtual cards",
    link: "/virtual-card",
  },
  {
    label: "Payment Link for Business",
    link: "https://pay.tribapay.com",
    target: "_blank"
  },
  // {
  //   label: "Local & Cross-border payment link",
  //   link: "#",
  // },
  // {
  //   label: "QuicKredit",
  //   link: "#",
  // },
  // {
  //   label: "Local & Cross-border airtime and bills payment",
  //   link: "#",
  // },
  // {
  //   label: "Airtime to cash",
  //   link: "/airtime-to-cash",
  // },
  // {
  //   label: "AfrikStudents Tuition",
  //   link: "#",
  // },
  // {
  //   label: "Developer APIs (Coming Soon)",
  //   link: "#",
  // },
];

const resources = [
  {
    label: "Blog post",
    link: "https://medium.com/@tribapay",
  },
  {
    label: "FAQS",
    link: "/faq",
  },
  {
    label: "About Us",
    link: "/about",
  },
  {
    label: "Contact Us",
    link: "/contact",
  },
];

const company = [
  {
    label: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    link: "/terms",
  },
  {
    label: "Cookies",
    link: "/cookies",
  },
  {
    label: "Information Security Policy",
    link: "/information-security-policy",
  },
  {
    label: "Acceptable Usage Policy",
    link: "/acceptable-usage-policy",
  },
  // {
  //   label: "AML Policy",
  //   link: "/",
  // },
  // {
  //   label: "Join Us",
  //   link: "/",
  // },
];

const contact = [
  {
    label: "help@tribapay.com",
    link: "mailto:help@tribapay.com",
  },
  {
    label: "+2349019080038",
    link: "call:+2349019080038",
  },
];

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  return (
    <div className="bg-stone-50">
      <footer className="bg-primary-deepBlue text-zinc-300 border-t w-full shadow pt-16">
        <div className="max-container-width">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 md:gap-20 lg:gap-10 pb-20 text-sm">
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
              >
                <Image
                  src="/images/TribapayLogo.svg"
                  alt="Tribapay Logo"
                  width={100}
                  height={100}
                  className="cursor-pointer h-[3.125]   md:h-[2.125] w-[8.1865rem] lg:h-[3.125rem]"
                />
              </Link>
              <div className="hidden md:block">
                <MissionOperation />
              </div>
            </div>
            <div>
              <p className="text-lg text-zinc-300 font-semibold">Products</p>
              <div className="flex flex-col mt-6 space-y-4">
                {products?.map((p) => (
                  <Link
                    key={`${(Math.random(), p.label)}`}
                    href={p.link}
                    target={p.target}
                    className="hover:text-primary-main"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-lg text-zinc-300 font-semibold">Resources</p>
              <div className="flex flex-col mt-6 space-y-4">
                {resources?.map((p) => (
                  <Link
                    key={`${(Math.random(), p.label)}`}
                    href={p.link}
                    className="hover:text-primary-main"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-lg text-zinc-300 font-semibold">Company</p>
              <div className="flex flex-col mt-6 space-y-4">
                {company?.map((p) => (
                  <Link
                    key={`${(Math.random(), p.label)}`}
                    href={p.link}
                    className="hover:text-primary-main"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-lg text-zinc-300 font-semibold">Contact</p>
              <div className="flex flex-col mt-6 space-y-4">
                {contact?.map((p) => (
                  <Link
                    key={`${(Math.random(), p.label)}`}
                    href={p.link}
                    className="hover:text-primary-main"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <MissionOperation />
          </div>
          <div className="flex flex-col-reverse gap-4 md:flex-row py-10 justify-between items-center">
            <p className="md:w-32 text-sm text-center">
              <span className="text-zinc-100  font-normal">
                © Tribapay {currentYear}
                <br />
              </span>
              <span className="text-zinc-100 text-lg font-normal"></span>
              <span className="text-zinc-100  font-normal">
                All rights reserved
              </span>
            </p>
            <div className="flex gap-3 ">
              {socials?.map((social, key) => (
                <Link key={key} href={social.href} target="_blank">
                  <p className="p-3 bg-violet-500 text-white rounded-full">
                    {social.icon}{" "}
                  </p>
                </Link>
              ))}{" "}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const MissionOperation = () => {
  return (
    <article className="text-xs text-center md:text-left font-medium max-w-xs mx-auto md:mx-0 pt-5 flex flex-col space-y-5">
      <p className="text-sm">
        Our mission is clear: to create boundless possibilities through
        financial innovation for the 1bn+ people across the continent.
      </p>
      <p className="text-[10px]">
        Tribapay operates as a financial technology company, not a bank. Our
        partner banks, which hold valid banking licenses, provide banking
        services. The debit cards we offer are issued by these partner banks
        under licenses granted by Visa and MasterCard, allowing you to use them
        at any location that accepts Visa and MasterCard debit cards.
      </p>
    </article>
  );
};

export default Footer;
