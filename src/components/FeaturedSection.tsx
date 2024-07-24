import React from "react";
import { FaArrowRight, FaDollarSign } from "react-icons/fa";
import SimpleSlider from "./Carousel";
import product from "@/assets/images/product-images/product.png";
import product2 from "@/assets/images/product-images/product2.png";
import product3 from "@/assets/images/product-images/product3.png";
import product4 from "@/assets/images/product-images/product4.png";
import product5 from "@/assets/images/product-images/product5.png";
import greenThumb from "@/assets/images/icons/green-thumbs-up.png";
import robotIcon from "@/assets/images/icons/robot.png";
import redThumb from "@/assets/images/icons/red-thumbs-down.png";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const data = [
  { image: product, isMinMax: true, type: "Highest Unique Bid", id: 2 },
  { image: product2, isMinMax: true, type: "Lowest Unique Bid", id: 1 },
  { image: product3, isMinMax: false, type: "The Last Play", id: 3 },
  { image: product4, isMinMax: false, type: "The Last Play", id: 4 },
  { image: product5, isMinMax: false, type: "The Last Play", id: 5 },
];

const FeaturedSection = () => {
  return (
    <section className="featured-section-container">
      <div className="featured-title">
        <div>Featured Item in Auctions</div>
        <div className="d-flex justify-content-center align-items-center gap-2">
          Discover more
          <div className="arrow-btn-icon">
            <FaArrowRight className="icon" />
          </div>
        </div>
      </div>

      <div className="mb-5 w-100 featured-slider-container">
        <SimpleSlider slidesToShow={5}>
          {data?.map((product) => (
            <div key={product.id} className="featured-slider-slide">
              <div className="slide-image-container position-relative">
                <Image
                  src={product.image}
                  alt="product"
                  className="h-100 w-100 slide-image"
                />
                <div className="auction-type-container position-absolute">
                  {`${product?.type} | 1x`}
                </div>
              </div>
              {product.isMinMax ? (
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-center align-items-center flex-column slider-thumbs-icon-container">
                    <Image
                      src={greenThumb}
                      alt="highest"
                      className="thumbs-icon"
                    />
                    <p className="text m-0">Highest</p>
                  </div>
                  <div className="d-flex justify-content-center align-items-center flex-column slider-thumbs-icon-container">
                    <Image
                      src={redThumb}
                      alt="unique"
                      className="thumbs-icon"
                    />
                    <p className="text m-0">Unique</p>
                  </div>
                </div>
              ) : null}

              <div className="mt-2">
                <ProductDetails product={product} />
              </div>
            </div>
          ))}
        </SimpleSlider>
      </div>
    </section>
  );
};

export default FeaturedSection;

const ProductDetails = ({ product }: { product: TProduct }) => {
  if (product.isMinMax) {
    return (
      <>
        <div className="slide-form-input-container position-relative">
          <input
            type="text"
            className="h-100"
            placeholder="Enter Your Bid..."
          />
          <GoArrowRight className="slide-form-icon" />
        </div>
        <hr className="separator-line" />
        <div className="title-container">
          <div className="title">Product Name</div>
          <div className="other-details">Text</div>
        </div>
      </>
    );
  }
  return (
    <div className="mt-5">
      <div className="title-container d-flex align-items-center">
        <div className="title">Product Name</div>
        <div className="bid-bot-container">
          <div className="bid-limit">145/1799</div>
          <Image src={robotIcon} alt="robotIcon" className="bid-bot-icon" />
        </div>
      </div>
      <hr className="separator-line" />

      <div className="player-name-container">
        <div className="player-name">pratikj</div>
        <div className="bid-price">
          <FaDollarSign className="dollar-icon" />
          365
        </div>
      </div>
    </div>
  );
};

export type TProduct = {
  image: any;
  isMinMax: boolean;
  type: string;
  id: number | string;
};
