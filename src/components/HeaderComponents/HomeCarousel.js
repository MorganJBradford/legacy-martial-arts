import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Instructors from "../../img/instructors.jpg";
import MJ from "../../img/jane-em-kick.jpg";
import WolfPack from "../../img/wolf-pack.jpg"

function HomeCarousel() {
  return (
    <Carousel controls={false} indicators={false} interval={3500}>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel container"
          src={MJ}
          alt="Master Jane"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel container"
          src={WolfPack}
          alt="Legacy Martial Arts Wolf Pack"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carousel container"
          src={Instructors}
          alt="Master Jane and instructors"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;