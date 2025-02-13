import Image from "next/image";

interface BtnProps {
  buttonText: string;
}

const ReusableButton: React.FC<BtnProps> = ({ buttonText }) => {
  return (
    <button className="hidden lg:flex items-center gap-2 bg-[#EBE6FB] border-[#EBE6FB] rounded-[6.5px] px-[35px] py-[17px] text-[#623ECA]">
      {buttonText}
      <Image
        src="/icons/arrow-up-right.svg"
        alt="Arrow"
        width={24}
        height={24}
        className="w-[1.5rem] h-[1.5rem] !fill-[#623ECA]"
      />
    </button>
  );
};

export default ReusableButton;
