import React from "react";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section className="flex justify-center items-center flex-row flex-wrap sm:mt-20 mt-6">
      {stats.map((stat) => (
        <div
          className="flex-1 flex justify-start items-center 
          flex-row m-3"
          key={stat.id}
        >
          <h4
            className="font-poppins font-semibold 
          xs:text-[40px] text-[30px] xs:leading-[53px] 
          leading-[43px] text-white"
          >
            {stat.value}
          </h4>
          <p
            className="font-poppins font-semibold 
          xs:text-[20px] text-[15px] xs:leading-[26px] 
          leading-[21px] text-gradient uppercase"
          >
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;