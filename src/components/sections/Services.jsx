import React from "react";

import { services } from "../../apis";
import Heading from "../Heading";
import ServiceCard from "../ServiceCard";
export default function Services() {
  return (
    <div className="py-4 md:pt-0 md:pb-10 font-Poppins ">
      <Heading title="services" subTitle="which iam able?" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 mt-14 grid-flow">
        {services.map((service) => (
          <React.Fragment key={service.id}>
            <ServiceCard {...service} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
