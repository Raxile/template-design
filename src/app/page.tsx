import Header from "@/components/Header";
import HeaderTextSection from "@/components/HeaderTextSection";
import Image from "next/image";
import React from "react";
import scrollComponentSvg from "@/assets/images/Frame.svg";
import FeaturedSection from "@/components/FeaturedSection";

const Home = () => {
  return (
    <main className="container mx-auto">
      <Header />
      <HeaderTextSection />
      <section className="mt-5">
        <Image
          src={scrollComponentSvg}
          alt="scrollComponentSvg"
          className="w-100 h-100 "
        />
      </section>

      {/* Featured Section */}

      <FeaturedSection />
    </main>
  );
};

export default Home;
