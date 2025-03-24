import React from "react";
import "./index.css";
import { CiPlay1 } from "react-icons/ci";
import { ImVideoCamera } from "react-icons/im";
import { CiCircleInfo } from "react-icons/ci";
import bgImage from "../../assets/images/Movies/movies-middle-bg-img.avif";
import smallImage from "../../assets/images/Movies/movies-middle-small-img.avif";
interface IMovieMiddleSection {
  bgImage: string;
  smallImage: string;
  about: string;
  description: string;
}
const movieMiddleSection: IMovieMiddleSection = {
  bgImage: bgImage,
  smallImage: smallImage,
  about: "2h 33m action, drama 2009",
  description:
    "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theater owner's vengeful plans for the same.",
};

const MoviesMiddleSection = () => {
  const backgroundImageStyle = {
    backgroundImage: ` url(${movieMiddleSection.bgImage})`,
    backgroundSize: "contain",
    backgroundPosition: "right",
    minHeight: "500px",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    Position: "relative",
  };
  return (
    <section style={backgroundImageStyle}>
      <div className="movie-middle-content-container">
        <img src={movieMiddleSection.smallImage} style={{ width: "200px" }} />
        <div className="movie-middle-content-text about-part">
          <span className="small-box">R</span>
          <p>{movieMiddleSection.about}</p>
          <span className="small-box">HD</span>
          <span className="small-box">5.1</span>
          <span className="small-box">CC</span>
        </div>
        <p className="movie-middle-content-text">
          {movieMiddleSection.description}
        </p>
        <div className="flex" style={{ gap: "20px" }}>
          <div className="flex about-part">
            <CiPlay1 className="react-icons" strokeWidth="1" />
            <p>Play</p>
          </div>
          <div className="flex about-part">
            <ImVideoCamera className="react-icons" />
            <p>Trailer</p>
          </div>
          <div className="flex about-part">
            <CiCircleInfo className="react-icons" strokeWidth="0.5" />
            <p>Info</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviesMiddleSection;
