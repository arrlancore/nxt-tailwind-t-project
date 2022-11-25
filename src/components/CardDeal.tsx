import Image from "next/image";
import React from "react";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section
      id="deal"
      className="flex md:flex-row flex-col
       sm:py-16 py-6"
    >
      <div className="flex-1 flex justify-center items-start flex-col mb-6 md:mb-0">
        <h2
          className="font-poppins font-semibold 
    xs:text-[48px] text-[40px] text-white 
    xs:leading-[76.8px] leading-[66.8px] w-full"
        >
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p
          className="font-poppins font-normal text-dimWhite 
    text-[18px] leading-[30.8px] max-w-[470px]"
        >
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>

      <div
        className="flex-1 flex justify-center
    items-start flex-col"
      >
        <Image
          {...card}
          className="w-[100%] h-[100%]
      relative z-[5]"
          alt="bill"
        />
      </div>
    </section>
  );
};

export default CardDeal;
