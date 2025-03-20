import "./index.css";
import { useRef, useState, useEffect } from "react";

import prev from "../../assets/icons/chevron-left-solid.svg";
import next from "../../assets/icons/chevron-right-solid.svg";
import ImageHover from "../ImageHover";
import { starzTop10 } from "../../utils/Home/StarzTop";

const StarzTop = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isAtStart, setIsAtStart] = useState(true); 
  const [isAtEnd, setIsAtEnd] = useState(false); 

  const imagesPerPage = 4;
  const totalImages = starzTop10.length;

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
    <section className="starz-parent-container">
      <h3 className="main-heading">STARZ Top 10 Movies Today</h3>
      <div className="starz-container">
        <img
          src={prev}
          className="icon-style"
          onClick={handlePrev}
          alt="Previous"
          style={{ visibility: isAtStart ? "hidden" : "visible" }} 
        />
        <div
          className="starz-top-image-container"
          ref={containerRef}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {starzTop10.map((data, index) => {
            return (
              <div className="image-with-index" key={index}>
                <span className="index-num">{index + 1}</span>
                <ImageHover
                  img={data.img}
                  hoverText={data.hoverText}
                  imageHeight={""}
                />
              </div>
            );
          })}
        </div>
        <img
          src={next}
          className="icon-style"
          onClick={handleNext}
          alt="Next"
          style={{ visibility: isAtEnd ? "hidden" : "visible" }} 
        />
      </div>
    </section>
  );
};

export default StarzTop;
