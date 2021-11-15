import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { BasicDiv } from "./BasicDiv";

const MerchandiseSlickCarouselBlock = styled(BasicDiv)`
  display: absolute;
  height: 50%;
  width: 80%;
`;

const MerchandiseSlickCarouselItem = styled(BasicDiv)`
  display: absolute;
  height: 50%;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Image = styled.img`
  display: block;
  margin: 0px auto;
  border-radius: 10px;
  width: 100%;
  max-width: 12rem;
  height: 100%;
  max-height: 8.5rem;
  object-fit: cover;
`;

const MerchandiseSlickCarousel = ({ type, images }) => {
  return (
    <MerchandiseSlickCarouselBlock>
      <Slider {...settings}>
        {images &&
          images.map((image) => (
            <MerchandiseSlickCarouselItem key={image.id}>
              {type === "merchandise" && (
                <Image
                  src={`https://localhost:8443/vendor/${type}image/${image.id}`}
                />
              )}
            </MerchandiseSlickCarouselItem>
          ))}
      </Slider>
    </MerchandiseSlickCarouselBlock>
  );
};

export default MerchandiseSlickCarousel;
