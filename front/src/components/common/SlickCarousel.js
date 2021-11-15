import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { BasicDiv } from "./BasicDiv";

const SlickCarouselBlock = styled(BasicDiv)`
  display: absolute;
  height: 50%;
  width: 80%;
`;

const SlickCarouselItem = styled(BasicDiv)`
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
  border-radius: 20px;
  margin: 0px auto;
  width: 100%;
  max-width: 20rem;
  height: 100%;
  max-height: 10rem;
  object-fit: cover;
`;

const SlickCarousel = ({ type, images }) => {
  return (
    <SlickCarouselBlock>
      <Slider {...settings}>
        {images &&
          images.map((image) => (
            <SlickCarouselItem key={image.id}>
              {type === "vendor" && (
                <Image
                  src={`https://localhost:8443/${type}/image/${image.id}`}
                />
              )}
              {type === "merchandise" && (
                <Image
                  src={`https://localhost:8443/vendor/${type}image/${image.id}`}
                />
              )}
            </SlickCarouselItem>
          ))}
      </Slider>
    </SlickCarouselBlock>
  );
};

export default SlickCarousel;
