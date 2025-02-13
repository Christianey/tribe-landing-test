import React from "react";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";
import ScrollAnimation from "@/components/common/ScrollAnimation";

const Inquiry = () => {
  function openFreshChat() {
    if (window.fcWidget) {
      window.fcWidget.open();
    }
  }
  const TwitterIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30px"
        viewBox="0 0 512 512"
      >
        <path
          fill="#fff"
          d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
        />
      </svg>
    );
  };

  const ArrowRight = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M7 17.5L17 7.5"
          stroke="#623ECA"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 7.5H17V17.5"
          stroke="#623ECA"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  };

  const socials = [
    {
      href: "https://www.facebook.com/tribapay",
      icon: <FaFacebookF size={30} />,
    },
    {
      href: "https://www.instagram.com/tribapay/",
      icon: <FaInstagramSquare size={32} className="rounded-lg" />,
    },
    {
      href: "https://twitter.com/Tribapay",
      icon: <TwitterIcon />,
    },
  ];

  const form = [
    {
      header: "Email",
      content:
        "For general inquiries or assistance, feel free to drop us an email at help@tribapay.com. We strive to respond to all emails within 24 hours, ensuring your concerns are addressed promptly.",
      link: "mailto:help@tribapay.com",
      linkText: "Email Us",
      icon: "",
    },
    {
      header: "Live chat",
      content:
        "Get real-time assistance through our live chat feature, available on our website during business hours. Connect with our support agents instantly for quick answers and guidance.",
      link: "#livechat",
      linkText: "Live Chat",
      icon: "",
    },
    {
      header: "Business inquiry",
      content:
        "For business partnerships, collaborations, or media inquiries, please send us an email at partnerships@tribapay.com. We're always open to exploring new opportunities.",
      link: "mailto:partnerships@tribapay.com",
      linkText: "Business inquiry",
      icon: "",
    },
    {
      header: "Social media",
      content:
        "Stay connected with us on social media for updates, tips, and announcements. Reach out to us through our official social media accounts, and we will be happy to engage with you.",
      link: "",
      linkText: "",
      icons: socials,
    },
    {
      header: "FAQ's",
      content:
        "Before contacting us, consider checking out our comprehensive FAQs and knowledge base. You might find the answers you need quickly without having to wait for a response.",
      link: "/faq",
      linkText: "Faqs",
      icon: "",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[75px] gap-12">
      {form.map((section, index) => (
        <ScrollAnimation key={index} variant="slideUp">
          <div className="bg-white py-[36px] px-[26px] rounded-[10px]">
            <h1 className="capitalize font-bold text-[32px]">
              {section.header}
            </h1>
            <p className="pt-4 text-base font-normal max-h-32 !text-primaryBlack-default/50">
              {section.content}
            </p>
            {section.link && (
              <Link
                href={section.link}
                className="flex flex-row gap-2 pt-[90px] pb-[15px] text-primary-main"
                onClick={
                  section.link === "#livechat" ? openFreshChat : undefined
                }
              >
                <p className="text-lg font-medium">{section.linkText}</p>
                <ArrowRight />
              </Link>
            )}
            <div
              className={
                section.icons ? "flex flex-row gap-12 pt-[70px]" : "hidden"
              }
            >
              {section.icons?.map((social, socialIndex) => (
                <Link
                  target="_blank"
                  key={socialIndex}
                  href={social.href}
                  className="bg-primary-main text-white p-4 rounded-2xl"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  );
};

export default Inquiry;
