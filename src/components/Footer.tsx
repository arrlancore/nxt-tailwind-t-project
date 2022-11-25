import Image from "next/image";
import Link from "next/link";
import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section
      id="footer"
      className="flex justify-center items-center sm:py-16 py-6 flex-col"
    >
      <div className="flex justify-center items-start  md:flex-row flex-col mb-8 w-full">
        <div className="flex-1 flex flex-col justify-start mr-10">
          <Image
            {...logo}
            alt="hoobank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[310px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              Useful Links
            </h4>
            <ul>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                Content
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                How it Works
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                Create
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                Explore
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                Terms &amp; Services
              </li>
            </ul>
          </div>
          <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              Community
            </h4>
            <ul>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                Help Center
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                Partners
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                Suggestions
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                Blog
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                Newsletters
              </li>
            </ul>
          </div>
          <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              Partner
            </h4>
            <ul>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                Our Partner
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                Become a Partner
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-medium text-[18px] leading-[27px] text-white text-center">
          Copyright 2021 HooBank. <br className="sm:hidden block" /> All Rights
          Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((sm) => (
            <Link target={`_blank`} key={sm.id} href={sm.link}>
              <Image
                {...sm.icon}
                alt="social-media-2"
                className="w-[21px] h-[21px] object-contain cursor-pointer mr-6"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
