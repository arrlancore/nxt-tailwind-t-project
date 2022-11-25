import Image from "next/image";
import React from "react";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section
      className="flex justify-center items-center
  flex-wrap w-full"
    >
      {clients.map((client) => (
        <div
          className="flex-1 flex justify-center 
        items-center sm:min-w-[192px] min-w-[120px]"
          key={client.id}
        >
          <Image
            {...client.logo}
            className="sm:w-[192px]
          w-[100px] object-contain hover:opacity-75"
            alt="client"
          />
        </div>
      ))}
    </section>
  );
};

export default Clients;
