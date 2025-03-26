import "./index.css";
import ImageHover from "../../ImageHover";
import prev from "../../../assets/icons/chevron-left-solid.svg";
import next from "../../../assets/icons/chevron-right-solid.svg";
import { IImageScrollSection } from "../../../utils/Series/originalsExclusives";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const ImageScrollContainer = ({ props }: { props: IImageScrollSection }) => {
  const navigate = useNavigate();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", checkScrollPosition);
    }
    checkScrollPosition();

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="image-scroll-parent-container">
      <div className="flex justify-between">
        <h3 className="main-heading-scroll-container cursor">
          {props.sectionTitle}
        </h3>
        <p className="view-all-text">VIEW ALL</p>
      </div>
      <div className="image-scroll-container">
        <div
          className="absolute-icon-bg absolute-prev-icon cursor"
          style={{ visibility: isAtStart ? "hidden" : "visible" }}
        >
          <img
            src={prev}
            className="absolute-icon-style"
            onClick={handlePrev}
            alt="Previous"
          />
        </div>
        <div
          className="coming-image-container"
          ref={containerRef}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {props.singleImage.map((data, index) => {
            return (
              <div
                className="image-with-index"
                key={index}
                onClick={() => {
                  navigate(`/movies/${data.id}`);
                }}
              >
                {props.isImageWithIndex && (
                  <span className="index-num">{index + 1}</span>
                )}
                <ImageHover
                  key={index}
                  img={data.img}
                  hoverText={data.hoverText}
                  imageHeight={props.imageHeight || "200px"}
                  imageWidth={props.imageWidth || "300px"}
                />
              </div>
            );
          })}
        </div>
        <div
          className="absolute-icon-bg absolute-next-icon cursor"
          style={{ visibility: isAtEnd ? "hidden" : "visible" }}
        >
          <img
            src={next}
            className="absolute-icon-style"
            onClick={handleNext}
            alt="Next"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageScrollContainer;
