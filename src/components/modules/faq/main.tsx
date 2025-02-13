import React, { useState } from "react";
import { Collapsible } from "@/components/common/Collapsible";
import Image from "next/image";

interface Faq {
  id: string;
  header: string;
  content: string;
}

interface FaqList {
  [category: string]: Faq[];
}

const Main = () => {
  const faqList: FaqList = {
    "general FAQs": [
      {
        id: "1",
        header: "How do I sign up for Tribapay?",
        content:
          "To sign up for Tribapay, simply download the app from the  Playstore or  App store, open it, and follow the guided registration process. It's quick and easy!",
      },
      {
        id: "2",
        header: "Is my personal information secure with Tribapay?",
        content:
          "Yes, absolutely. We prioritize the security of your data. Tribapay employs advanced encryption and security measures to ensure your personal information is safe at all times.",
      },
      {
        id: "3",
        header: "What is a Cashpin and how does it work?",
        content:
          "A Cashpin is a unique encrypted 25 digit code that holds money. It's allows you send and receive money without any need to have the recipient’s account number.",
      },
      {
        id: "4",
        header: "How can I convert airtime to cash using Tribapay?",
        content:
          "Converting airtime to cash is simple with Tribapay. Just select the Airtime to Cash feature, provide all requested info, and execute your transaction. You'll receive the stated equivalent value in cash. ",
      },
      {
        id: "5",
        header: "Can I link my bank account to Tribapay?",
        content:
          "You do not need to link any bank account to your Tribapay wallet. All registered and verified users on Tribapay are issued a virtual bank account to seamlessly perform financial and banking transactions.",
      },
      {
        id: "6",
        header: "What are Virtual Dollar Cards and how can I get one?",
        content:
          "Virtual Dollar Cards are digital cards that allow you to pay, spend, shop internationally without worrying about currency conversions. You can easily obtain a Virtual Dollar Card on the Tribapay  app.",
      },
      {
        id: "7",
        header: "How do I pay my bills using Tribapay?",
        content:
          "Paying bills is straightforward with Tribapay. Access the Pay Bills feature, select the bill you want to pay, input the necessary details, and confirm the transaction – it's that simple.",
      },
      {
        id: "8",
        header: "Are there any transaction fees on Tribapay?",
        content:
          "We aim to provide transparent and affordable services. While some services may have nominal transaction fees, we strive to keep them as low as possible.",
      },
      {
        id: "9",
        header: "How can I add funds to my Cashpin wallet??",
        content:
          "You can easily add funds to your Cashpin wallet by clicking on the “Add Money” prompt within the  Cashpin wallet.  The requested sum to be added will be debited from your Tribapay wallet balance. The process is secure and hassle-free.",
      },
      {
        id: "10",
        header: "Can I use Tribapay on multiple devices?",
        content:
          "Yes, you can use Tribapay on multiple devices. Just make sure to log in using your registered account information.",
      },
      {
        id: "11",
        header: "What happens if there's an issue during a transaction?",
        content:
          "In case of any transaction-related issues, our dedicated customer support team is available to assist you. You can reach out through the app or our website.",
      },
      {
        id: "12",
        header: "Can I track my transaction history on Tribapay?",
        content:
          "Absolutely. Tribapay provides a transaction history feature that allows you to monitor your past transactions, ensuring transparency and accountability.",
      },
      {
        id: "13",
        header:
          "How soon will the Cross Border Money Transfers feature be available?",
        content:
          "We're actively working on bringing you the Cross Border Money Transfers feature. Stay tuned for updates on its availability – it's coming soon!",
      },
      {
        id: "14",
        header:
          "What happens if my Virtual Dollar Card information is compromised?",
        content:
          "Your security is our priority. If you suspect any compromise, log in to your account, click on the affected card, click on “Manage”, and click “Freeze Card” to temporarily disable the card, and contact our support immediately.",
      },
      {
        id: "15",
        header: "Are there any spending limits on Tribapay?",
        content:
          "Yes, to ensure security and regulatory compliance, Tribapay implements transaction limits based on your account verification status.",
      },
      {
        id: "16",
        header:
          "Can I use Tribapay to send money to friends and family within my country?",
        content:
          "Yes, Tribapay supports domestic money transfers in countries where we are operational. You can easily send money to friends and family within your country through our platform.",
      },
      {
        id: "17",
        header:
          "What should I do if I encounter a technical issue with the app?",
        content:
          "If you experience any technical issues, you can troubleshoot by checking your internet connection and ensuring you have the latest app version. If the problem persists, reach out to our support team.",
      },
      {
        id: "18",
        header: "How can I provide feedback or suggestions to Tribapay?",
        content:
          "We value your feedback! You can provide suggestions, report issues, or share your experiences through the app's feedback feature or by contacting our support team directly. Your input helps us improve the platform for everyone.",
      },
    ],
    "cashpin FAQs": [
      {
        id: "1",
        header: "How do I get started with Cashpin?",
        content:
          "Getting started is easy! Just download the Tribapay app, register and verify your account, and access the Cashpin feature. From there, you can start generating tokens and enjoying secure transactions.",
      },
      {
        id: "2",
        header: "How does Cashpin work?",
        content:
          "Cashpin is an innovative feature on the Tribapay app that transforms money into a secure 25-digit token. This token can be sent to others, allowing for anonymous transactions, gifting money discreetly, and more.",
      },
      {
        id: "3",
        header: "Is Cashpin secure?",
        content:
          "Absolutely. Cashpin prioritizes security by employing state-of-the-art encryption technology. Tokens can also be locked by the creator as an added layer of security and can only be redeemed when unlocked.",
      },
      {
        id: "4",
        header: "Can I send money anonymously?",
        content:
          "Yes, Cashpin allows you to send money without asking for the recipient’s banking details ie account number. It's the perfect way to gift money anonymously or surprising your friends and loved ones. They can only know how much the token contains after it has being redeemed.",
      },
      {
        id: "5",
        header: "Can I send money to multiple recipients at once?",
        content:
          "Yes, Cashpin offers flexibility by allowing you to generate multiple tokens. Each token is unique and can be sent to different recipients, and also, ensuring precise control over who can redeem the Cashpins.",
      },
      {
        id: "6",
        header: "How do recipients redeem Cashpin tokens?",
        content:
          "Recipients can easily redeem Cashpin tokens within the Tribapay app. The token is exchanged for its monetary value, which is deposited into their account.",
      },
      {
        id: "7",
        header: "Is Cashpin easy to use?",
        content:
          "Absolutely. Cashpin is designed for user convenience. Generating tokens and sending them is straightforward, making financial transactions quick and hassle-free.",
      },
      {
        id: "8",
        header: "Is Cashpin available 24/7?",
        content:
          "Yes, Cashpin is available round the clock, allowing you to send and receive money whenever it's convenient for you.",
      },
      {
        id: "9",
        header: "Can I trust Cashpin with my transactions?",
        content:
          "Yes, Cashpin is developed with your trust in mind. With its robust security measures and user-friendly interface, it's a reliable way to manage your transactions securely.",
      },
    ],
    "Virtual Dollar Card FAQs": [
      {
        id: "1",
        header: "What is a Tribapay Virtual Card?",
        content:
          "Tribapay Virtual Card is a digital virtual prepaid card that you can use for online transactions and international payments.",
      },
      {
        id: "2",
        header: "How do I get a Tribapay Virtual Card?",
        content:
          "Log in to your Tribapay account, access your dashboard, and select the Card option. Follow the prompts to get your virtual card.",
      },
      {
        id: "3",
        header: " Can I use the virtual card for international transactions?",
        content:
          "Yes, Tribapay Virtual Cards are accepted globally, making them ideal for international purchases.",
      },
      {
        id: "4",
        header: "Are there different types of Tribapay Virtual Cards?",
        content:
          "Yes, Tribapay offers various virtual card types tailored to different needs, such as online shopping or travel.",
      },
      {
        id: "5",
        header: "How do I load funds onto my virtual card?",
        content:
          "You can load funds onto your virtual card from your Tribapay main wallet. You CANNOT fund your card from external sources.",
      },
      {
        id: "6",
        header: "Is my virtual card information secure?",
        content:
          "Yes, Tribapay employs advanced security measures to keep your virtual card details safe.",
      },
      {
        id: "7",
        header: "Can I set spending limits for my virtual card?",
        content:
          "Yes, you can set spending limits and transaction restrictions for your virtual card.",
      },
      {
        id: "8",
        header: "Can I have multiple virtual cards?",
        content:
          "Yes, you can have multiple Tribapay Virtual Cards for different purposes.",
      },
      {
        id: "9",
        header: "How long does it take to receive my virtual card?",
        content:
          "Once you complete the application process, your virtual card details are generated instantly",
      },
      {
        id: "10",
        header: "Can I use my virtual card immediately after getting it?",
        content:
          "Yes, you can start using your virtual card for online transactions right away.",
      },
      {
        id: "11",
        header: "Can I use my virtual card with mobile payment apps?",
        content:
          "In most cases, you can use your Tribapay Virtual Card with mobile payment apps that accept card payments.",
      },
      {
        id: "12",
        header: "Can I link my virtual card to a PayPal account?",
        content:
          "Yes, you can link your Tribapay Virtual Card to your PayPal account.",
      },
      {
        id: "13",
        header: " How do I view my virtual card transactions?",
        content:
          "Log in to your Tribapay account and navigate to the transaction history section to view your virtual card transactions.",
      },
      {
        id: "14",
        header: "Can I get a physical card version of my virtual card?",
        content:
          "Tribapay currently offers virtual cards only and does not provide physical card versions.",
      },
      {
        id: "15",
        header: "Is there an expiration date for my virtual card?",
        content:
          "Yes, your virtual card will have an expiration date, similar to physical credit or debit cards.",
      },
      {
        id: "16",
        header: "What if my virtual card expires?",
        content:
          "You can request a new virtual card before the expiration date to continue using Tribapay's services.",
      },
      {
        id: "17",
        header:
          "Can I get a refund for a transaction made with my virtual card?",
        content:
          "Refunds for transactions made with Tribapay Virtual Cards are subject to the merchant's refund policies.",
      },
      {
        id: "18",
        header: "How do I change my virtual card's PIN?",
        content:
          "You can typically change your virtual card's PIN through your Tribapay account settings.",
      },
      {
        id: "19",
        header: "Are there any fees associated with Tribapay Virtual Cards?",
        content: `Please refer to Tribapay's fee schedule for details on any applicable fees.`,
      },
      {
        id: "20",
        header:
          "What if I lose access to my Tribapay account with a virtual card?",
        content:
          "If you lose access, contact Tribapay's customer support immediately to secure your account and virtual card.",
      },
    ],
    "Airtime to Cash FAQs": [
      {
        id: "1",
        header: "What is the Airtime to Cash feature?",
        content:
          "The Airtime to Cash feature allows you to convert your unused mobile airtime balance into real cash that can be deposited into your bank account or wallet.",
      },
      {
        id: "2",
        header: " Is this feature available for all mobile carriers?",
        content:
          "Yes, the Airtime to Cash feature supports airtime conversions from selected network providers.",
      },
      {
        id: "3",
        header: "Would there be any charges for the airtime I sell?",
        content:
          "Yes, we will charge you a 20% commission, so that we can make some money to pay our own bills",
      },
      {
        id: "4",
        header: "Are there any fees associated with this service?",
        content:
          "There might be a nominal processing fee associated with the airtime to cash conversion. The exact fee will be shown to you during the conversion process.",
      },
      {
        id: "5",
        header: "How does cheaper airtime work?",
        content: "There is a video on how to buy cheaper airtime here.",
      },
      {
        id: "6",
        header: "How long does it take to receive the converted cash?",
        content:
          "Typically, the converted cash will be deposited into your Tribapay wallet almost instantly after the conversion is confirmed.",
      },
      {
        id: "7",
        header: "Can I cancel or reverse a conversion after confirming it?",
        content:
          "Unfortunately, once a conversion is confirmed, it cannot be canceled or reversed. Please review your transaction details carefully before confirming.",
      },
      {
        id: "8",
        header: "Is there a minimum or maximum amount for conversion?",
        content:
          "Conversion limits might vary based on your account status. There could be both minimum and maximum conversion amounts to ensure a smooth process.",
      },
      {
        id: "9",
        header: "Can I convert airtime from multiple mobile numbers?",
        content:
          "Yes, as long as the mobile numbers are associated with your account, you can convert airtime from multiple sources.",
      },
      {
        id: "7",
        header:
          "What happens if there's an issue during the conversion process?",
        content:
          "If you encounter any issues during the conversion process, please contact our customer support for assistance. They will help resolve any problems you face.",
      },
    ],
  };
  const [searchQuery, setSearchQuery] = useState<string>("");

  const lowercasedSearchQuery = searchQuery.toLowerCase();

  const filteredFaqs: FaqList = {};

  for (const [category, faqs] of Object.entries(faqList)) {
    const filteredCategoryFaqs = faqs.filter((faq: Faq) =>
      faq.header.toLowerCase().includes(lowercasedSearchQuery)
    );

    if (filteredCategoryFaqs.length > 0) {
      filteredFaqs[category] = filteredCategoryFaqs;
    }
  }

  return (
    <>
      <div className="bg-primary-main lg:flex hidden">
        <div className="max-container-width pt-[60px]">
          <div
            className="bg-small-screen pt-24 text-text-secWhite bg-no-repeat"
            // style={{
            //   backgroundImage: `url("/images/hero-parttern.svg")`,
            //   backgroundPosition: "bottom right",
            // }}
          >
            <div className="lg:pb-[16rem] pb-20 flex flex-col lg:pt-28">
              <div className="flex flex-col items-center text-center justify-center">
                <h1 className="text-5xl lg:text-7xl font-bold lg:pt-3 pt-8 pb-4">
                  Got Questions?
                </h1>
                <p className="max-w-[48rem] mb-[4.75rem] lg:text-lg !text-base">
                  Before contacting us, consider checking the comprehensive FAQs
                  and knowledge base below. You might find the answers you need
                  here quickly without having to wait for a response.
                </p>
                <div className="lg:w-[52.25rem] w-[90%] lg:px-[2.75rem] lg:py-[1.38rem] px-[1.75rem] py-[1.2rem] gap-[0.81rem] flex bg-[#fbfbfb] border border-solid border-[#cab7ff] rounded-[1.25rem]">
                  <Image
                    width={100}
                    height={100}
                    src="/icons/search.svg"
                    alt="search icon"
                    className="lg:w-[2.875rem] w-[1.875rem] lg:h-[2.875rem] h-[1.875rem]"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for a question"
                    className="w-full bg-mainBackground text-black outline-none placeholder:text-base placeholder:font-medium placeholder:text-[#959595] px-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-small-screen lg:hidden flex pt-24 bg-primary-main text-text-secWhite bg-no-repeat"
        // style={{
        //   backgroundImage: `url("/images/hero-parttern.svg")`,
        //   backgroundPosition: "right",
        // }}
      >
        <div className="lg:pb-[16rem] pb-20 flex flex-col max-container-width pt-10 lg:pt-28">
          <div className="flex flex-col items-center text-center justify-center">
            <h1 className="text-4xl lg:text-7xl font-bold lg:pt-3 pt-8 pb-4">
              Got Questions?
            </h1>
            <p className="max-w-[48rem] mb-[4.75rem] lg:text-lg !text-base">
              Before contacting us, consider checking the comprehensive FAQs and
              knowledge base below. You might find the answers you need here
              quickly without having to wait for a response.
            </p>
            <div className="lg:w-[52.25rem] w-[90%] lg:px-[2.75rem] lg:py-[1.38rem] px-[1.75rem] py-[1.2rem] gap-[0.81rem] flex bg-[#fbfbfb] border border-solid border-[#cab7ff] rounded-[1.25rem]">
              <Image
                width={100}
                height={100}
                src="/icons/search.svg"
                alt="search icon"
                className="lg:w-[2.875rem] w-[1.875rem] lg:h-[2.875rem] h-[1.875rem]"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a question"
                className="w-full bg-mainBackground text-black outline-none placeholder:text-base placeholder:font-medium placeholder:text-[#959595] px-2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center max-container-width lg:gap-[6.25rem] gap-16 lg:mt-[8.44rem] mt-12">
        {Object.entries(filteredFaqs).length === 0 ? (
          <p className="lg:text-5xl font-bold">No results found.</p>
        ) : (
          Object.entries(filteredFaqs).map(([category, faqs]) => (
            <div
              key={category}
              className="flex lg:flex-row flex-col justify-between items-start lg:gap-28 gap-4"
            >
              <h2 className="lg:pt-[40px] md:t-[20px] pt-[15px] lg:text-4xl text-3xl lg:w-[19rem] font-bold capitalize">
                {category}
              </h2>
              <div className="flex flex-col w-full md:min-w-[90vw] lg:min-w-0 lg:w-[46rem] lg:max-w-[50rem] xl:max-w-[60rem]">
                {faqs.map((faq) => (
                  <Collapsible
                    key={faq.id}
                    header={faq.header}
                    content={faq.content}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Main;
