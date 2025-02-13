import { Modal } from "@/components/common/Modal";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import { IconPlayTb } from "@/components/icon/IconPlayTb";
import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";

export const CashpinIntro = () => {
  const [isOpen, setIsOpen] = useState(false);

  const src = "https://www.youtube.com/embed/OPFLPflbVIQ";
  return (
    <>
      <ScrollAnimation>
        <div
          className="w-full shadowTB rounded-2xl  h-64 sm:h-96 lg:h-[650px] relative before:inset-0 before:absolute before:rounded-2xl before:bg-black before:bg-opacity-20">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="
          border-2 border-white w-12 h-12 rounded-full text-white flex justify-center items-center
          absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300
          hover:bg-white hover:text-black
          "
          >
            <IconPlayTb />
          </button>
          <div className={classNames("relative w-full h-full rounded-2xl ")}>
            <Image
              src={"/images/jesse.png"}
              alt="cashpin intro"
              quality={100}
              fill
              className="w-full h-full rounded-2xl object-cover object-bottom"
            />
          </div>
          <div className="bg-black/20 m-0 w-full h-full absolute top-0 rounded-2xl shadow-xl shadow-zinc-200" />
        </div>
        {!!src && (
          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            padding={false}
          >
            <iframe
              width="100%"
              height="450"
              src={src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
            />
          </Modal>
        )}
      </ScrollAnimation>
    </>
  );
};
