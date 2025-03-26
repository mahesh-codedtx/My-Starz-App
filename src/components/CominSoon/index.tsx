import "./index.css";
import ImageHover from "../ImageHover";
import prev from "../../assets/icons/chevron-left-solid.svg";
import next from "../../assets/icons/chevron-right-solid.svg";
import { comingSoonData } from "../../utils/Home/comingSoon";
import { useEffect, useRef, useState } from "react";
const ComingSoon = () => {
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
    <section className="coming-parent-container">
      <h3 className="main-heading">Coming Soon</h3>
      <div className="coming-container">
        <img
          src={prev}
          className="icon-style"
          onClick={handlePrev}
          alt="Previous"
          style={{ visibility: isAtStart ? "hidden" : "visible" }}
        />
        <div
          className="coming-image-container"
          ref={containerRef}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
          }}
        >
          {comingSoonData.map((data, index) => (
            <ImageHover
              key={index}
              img={data.img}
              hoverText={data.hoverText}
              imageHeight="100%"
              imageWidth={""}
              imgClassName={"testing-class"}
            />
          ))}
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
export default ComingSoon;
