import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const PopUpModal = () => {
  const [showModal, setShowModal] = useState(false);

  const Svg = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path
        d="M20.9138 20.0863C21.1936 20.3659 21.3842 20.7223 21.4615 21.1103C21.5388 21.4983 21.4992 21.9005 21.3479 22.266C21.1966 22.6315 20.9402 22.944 20.6113 23.1638C20.2824 23.3836 19.8956 23.5009 19.5 23.5009C19.1044 23.5009 18.7177 23.3836 18.3887 23.1638C18.0598 22.944 17.8035 22.6315 17.6521 22.266C17.5008 21.9005 17.4613 21.4983 17.5385 21.1103C17.6158 20.7223 17.8064 20.3659 18.0863 20.0863C18.4613 19.7115 18.9698 19.5009 19.5 19.5009C20.0302 19.5009 20.5387 19.7115 20.9138 20.0863ZM10.0863 19.0863C9.80642 19.3659 9.61581 19.7223 9.53853 20.1103C9.46126 20.4983 9.50079 20.9005 9.65212 21.266C9.80346 21.6315 10.0598 21.944 10.3887 22.1638C10.7177 22.3836 11.1044 22.5009 11.5 22.5009C11.8956 22.5009 12.2824 22.3836 12.6113 22.1638C12.9402 21.944 13.1966 21.6315 13.3479 21.266C13.4992 20.9005 13.5388 20.4983 13.4615 20.1103C13.3842 19.7223 13.1936 19.3659 12.9138 19.0863C12.5387 18.7115 12.0302 18.5009 11.5 18.5009C10.9698 18.5009 10.4613 18.7115 10.0863 19.0863ZM11.9138 14.9137C12.1936 14.6341 12.3842 14.2777 12.4615 13.8897C12.5388 13.5017 12.4992 13.0995 12.3479 12.734C12.1966 12.3685 11.9402 12.056 11.6113 11.8362C11.2824 11.6164 10.8956 11.4991 10.5 11.4991C10.1044 11.4991 9.71766 11.6164 9.38873 11.8362C9.0598 12.056 8.80346 12.3685 8.65212 12.734C8.50079 13.0995 8.46126 13.5017 8.53853 13.8897C8.61581 14.2777 8.80642 14.6341 9.08626 14.9137C9.46129 15.2885 9.9698 15.4991 10.5 15.4991C11.0302 15.4991 11.5387 15.2885 11.9138 14.9137ZM17.9138 14.0863C17.6341 13.8064 17.2777 13.6158 16.8897 13.5385C16.5017 13.4612 16.0995 13.5008 15.734 13.6521C15.3685 13.8035 15.0561 14.0598 14.8362 14.3887C14.6164 14.7177 14.4991 15.1044 14.4991 15.5C14.4991 15.8956 14.6164 16.2823 14.8362 16.6113C15.0561 16.9402 15.3685 17.1965 15.734 17.3479C16.0995 17.4992 16.5017 17.5388 16.8897 17.4615C17.2777 17.3842 17.6341 17.1936 17.9138 16.9137C18.2885 16.5387 18.4991 16.0302 18.4991 15.5C18.4991 14.9698 18.2885 14.4613 17.9138 14.0863ZM29.5 16C29.5 18.67 28.7082 21.2801 27.2248 23.5002C25.7414 25.7203 23.633 27.4506 21.1662 28.4724C18.6994 29.4942 15.985 29.7615 13.3663 29.2406C10.7475 28.7197 8.34207 27.434 6.45406 25.5459C4.56606 23.6579 3.28031 21.2525 2.7594 18.6337C2.2385 16.015 2.50585 13.3006 3.52763 10.8338C4.54942 8.36697 6.27974 6.25856 8.49981 4.77516C10.7199 3.29176 13.33 2.5 16 2.5C16.3978 2.5 16.7794 2.65804 17.0607 2.93934C17.342 3.22064 17.5 3.60218 17.5 4C17.5 5.19347 17.9741 6.33807 18.818 7.18198C19.6619 8.02589 20.8065 8.5 22 8.5C22.3978 8.5 22.7794 8.65804 23.0607 8.93934C23.342 9.22064 23.5 9.60218 23.5 10C23.5 11.1935 23.9741 12.3381 24.818 13.182C25.6619 14.0259 26.8065 14.5 28 14.5C28.3978 14.5 28.7794 14.658 29.0607 14.9393C29.342 15.2206 29.5 15.6022 29.5 16ZM26.4163 17.3312C24.9727 17.017 23.6536 16.2845 22.6237 15.2252C21.5937 14.166 20.8986 12.8269 20.625 11.375C19.1731 11.1017 17.8338 10.4069 16.7743 9.37716C15.7148 8.34746 14.9821 7.02854 14.6675 5.585C12.7206 5.8346 10.8827 6.62491 9.36227 7.86624C7.84184 9.10758 6.69979 10.7502 6.06572 12.6078C5.43165 14.4654 5.33094 16.4635 5.77503 18.3754C6.21911 20.2873 7.19022 22.0365 8.57813 23.4244C9.96605 24.8123 11.7152 25.7834 13.6271 26.2275C15.539 26.6716 17.5371 26.5709 19.3947 25.9368C21.2523 25.3027 22.8949 24.1607 24.1363 22.6402C25.3776 21.1198 26.1679 19.2819 26.4175 17.335L26.4163 17.3312Z"
        fill="#9672FF"
      />
    </svg>
  );

  const cookiePageUrl = "/cookies";

  useEffect(() => {
    const hasAcceptedCookies = Cookies.get("hasAcceptedCookies");
    if (!hasAcceptedCookies) {
      setShowModal(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    Cookies.set("hasAcceptedCookies", "true", { expires: 365 });
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <>
          <div
            style={{
              fontFamily: "Patron",
            }}
            className="max-w-[1163px] fixed hidden md:flex flex-row items-center lg:gap-16 gap-8 z-50 bg-[#FEFEFE] bottom-0 rounded-[20px] ml-2 mb-2 lg:py-[80px] py-[40px] lg:px-[100px] px-[50px] shadow-2xl"
          >
            <div className="flex flex-col">
              <div className="flex flex-row gap-4 items-center mb-[15px]">
                <Svg />
                <h4 className="font-bold text-lg text-[#9672FF]">
                  Cookies Consent
                </h4>
              </div>

              <p className="lg:max-w-[538.719px] max-w-[400px] font-bold text-base text-black">
                This website uses cookies to help you have a better and{" "}
                <br className="lg:flex hidden" /> more admissible browsing
                experience on the website.{" "}
                <span className="text-[#9672FF] hover:underline">
                  <Link href={cookiePageUrl}>Read More.</Link>
                </span>
              </p>
            </div>

            <div className="flex lg:gap-[30px] gap-4 h-[61px] w-[207.750px] lg:w-[333.750px]">
              <button
                className="bg-[#9672FF] text-white py-[17px] lg:px-[26px] px-[10px] rounded-[10px] font-bold hover:bg-[#7858da] transition ease-in duration-300 "
                onClick={handleAcceptCookies}
              >
                Accept All
              </button>
              <button
                className="border-[#FF002E] border-2 border-solid text-[#FF002E] py-[17px] lg:px-[26px] px-[10px] rounded-[10px] font-bold hover:bg-[#FF002E] hover:text-white transition duration-300 ease-in-out"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Reject All
              </button>
            </div>
          </div>

          {/* mobile ui */}
          <div
            style={{
              fontFamily: "Patron",
            }}
            className="w-full fixed flex flex-col md:hidden p-[25px] z-[21474836000] bg-[#fefefe] bottom-0 rounded-t-[20px]"
          >
            <div className="flex flex-row gap-4 items-center mb-[15px]">
              <Svg />
              <h4 className="font-bold lg:text-lg te text-[#9672FF]">
                Cookies Consent
              </h4>
            </div>

            <p className="font-bold text-sm text-black mb-[25px]">
              This website uses cookies to help you have a better and more
              admissible browsing experience on the website.{" "}
              <span className="text-[#623ECA]">
                <Link href={cookiePageUrl}>Read More.</Link>
              </span>
            </p>

            <div className="flex gap-[10px]">
              <button
                className="bg-[#9672FF] text-white py-[10px] px-[20px] rounded-[10px] font-bold hover:bg-[#8b69f1] transition ease-in duration-300 "
                onClick={handleAcceptCookies}
              >
                Accept All
              </button>
              <button
                className="text-[#FF002E] border-[#FF002E] border-2 border-solid py-[10px] px-[20px] rounded-[10px] font-bold transition duration-300 ease-in-out hover:bg-[#FF002E] hover:text-white"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Reject All
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PopUpModal;
