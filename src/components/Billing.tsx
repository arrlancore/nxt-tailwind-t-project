import React from "react";
import { apple, bill, google } from "../assets";
import { display } from "tailwindcss-classnames";
import Image from "next/image";

const Billing = () => {
  return (
    <section
      id="product"
      className="flex md:flex-row
      flex-col-reverse sm:py-16 py-6"
    >
      <div
        className="flex-1 flex justify-center
        items-start flex-col-reverse relative"
      >
        <Image
          {...bill}
          className="w-[100%] h-[100%]
          relative z-[5]"
          alt="bill"
        />

        <div
          className="absolute z-[3] -left-1/2 top-0
          w-[50%] h-[50%] rounded-full white__gradient"
        />
        <div
          className="absolute z-[0] -left-1/2 bottom-0
          w-[50%] h-[50%] rounded-full pink__gradient"
        />
      </div>

      <div className="flex-1 flex justify-center items-start flex-col mb-6 md:mb-0">
        <h2
          className="font-poppins font-semibold 
        xs:text-[48px] text-[40px] text-white 
        xs:leading-[76.8px] leading-[66.8px] w-full"
        >
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p
          className="font-poppins font-normal text-dimWhite 
        text-[18px] leading-[30.8px] max-w-[470px]"
        >
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <Image
            {...apple}
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
            alt="apple_store"
          />
          <Image
            {...google}
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
            alt="google_play"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
