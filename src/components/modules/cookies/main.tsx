/* eslint-disable react/no-unescaped-entities */

const Main = () => {
  return (
    <div className="max-container-width pt-48 lg:pt-56 lg:px-48 md:px-20">
      <h2 className="text-center lg:text-6xl md:text-5xl text-4xl mb-8 capitalize text-primary-main">
        Cookie Policy
      </h2>
      <p className="text-center mb-20">Updated 01/10/2023</p>
      <h3 className="mt-4 mb-3 lg:text-lg text-base font-bold text-primary-main">
        WHAT IS A COOKIE ?
      </h3>
      <p className="lg:text-lg text-base font-normal mb-3 text-text-gray-text">
        When you visit a website, a “cookie” or small text file is stored on
        your computer, tablet, or mobile device. When your browser is closed,
        certain cookies are deleted, these are referred to as session cookies,
        while others remain on your device until they expire or you remove them
        from your cache. These cookies, also referred to as persistent cookies,
        help us keep track of information about returning visitors like you.
      </p>

      <h3 className="mt-4 mb-3 lg:text-lg text-base font-bold text-primary-main">
        HOW WE USE COOKIES ?
      </h3>
      <p className="lg:text-lg text-base font-normal mb-3 text-text-gray-text">
        We, along with a few of our vendors and business partners, may use
        cookies and other tracking technologies when you visit our website, use
        our services, or go to a third-party website for which we offer online
        services. In order to recognise you as a customer, to personalise
        services, other content, and advertising, to assess the success of
        promotions, to carry out a variety of analytics, to reduce risk and
        thwart potential fraud, and to advance trust and safety throughout our
        services, we utilise cookies.
      </p>
      <p className="lg:text-lg text-base font-normal mb-3 text-text-gray-text">
        Your usage of some services may be restricted or impossible if you
        choose to disable or reject cookies since some services may only be made
        available through the use of cookies.
      </p>

      <h3 className="mt-4 mb-3 lg:text-lg text-base font-bold text-primary-main">
        CONTACT US
      </h3>
      <p className="lg:text-lg text-base font-normal mb-3 text-text-gray-text">
        If you have any questions or suggestions about our Cookie policy, do not
        hesitate to contact us at{" "}
        <a href="mailto:help@tribapay.com" className="hover:text-primary-main">
          help@tribapay.com
        </a>
      </p>
    </div>
  );
};

export default Main;
