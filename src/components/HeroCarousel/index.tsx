import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";
import { BiCameraMovie } from "react-icons/bi";
import { heroCarouselArray } from "../../utils/Home/heroCarousel";
import MyButton from "../Button";

const HeroCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {heroCarouselArray.map((data, index) => {
        return (
          <div className="hero-banner">
            <div className="hero-bg-img">
              <img src={data.bgImage} alt={`Slide ${index + 1}`} />
            </div>
            <div className={`title-image image-${data.titlePosition}`}>
              <img src={data.titleImage} style={{ width: "90%" }} />
              <div className="flex">
                <BiCameraMovie
                  style={{ color: "#d2ff00", width: "45px", height: "30px" }}
                />
                <p className="trailer-text">TRAILER</p>
              </div>
              <MyButton btnText={"Claim Special Offer"} padding={"thick"} />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default HeroCarousel;
