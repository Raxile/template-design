import Image from "next/image";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const HeaderTextSection = () => {
  return (
    <section className="header-text-section d-flex justify-content-center align-items-center flex-column mt-5">
      <h2 className="header-text w-50 mt-2">
        Seize the summer specials on{" "}
        <span className="active-text">AuctionX</span>
      </h2>
      <div className="button-container d-flex gap-3 mt-3">
        <button className="custom-btn-primary custom-btn ">
          Discover more
          <GoArrowUpRight className="icon" />
        </button>
        <button className="custom-btn-secondary custom-btn">
          All Auctions
          <GoArrowUpRight className="icon" />
        </button>
      </div>
    </section>
  );
};

export default HeaderTextSection;
