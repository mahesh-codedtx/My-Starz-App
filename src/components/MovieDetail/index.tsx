import React from "react";
import "./index.css";
import { useParams } from "react-router-dom";
import { movieDetails } from "../../utils/Movies/MovieDetail";
import { ImVideoCamera } from "react-icons/im";
import MyButton from "../Button";
import ImageScrollContainer from "../Series/ImageScrollSection";
import { othersWatched } from "../../utils/Movies/MovieDetailOthersWatch";
const MovieDetailScreen = () => {
  const { id } = useParams<{ id: string }>();
  if (!id || !movieDetails[id]) {
    return <div>Movie Details Not Found!!!</div>;
  }
  const movie = movieDetails[id];
  return (
    <section>
      <div className="movie-detail-banner-container">
        <div className="movie-banner-bg-img">
          <img
            src={movie.bannerImage}
            style={{ height: "700px", width: "100%" }}
          ></img>
        </div>
        <div className="movie-detail-banner-content">
          <p className="movie-detail-leaving">Leaving Monday, March 31st</p>
          <img
            src={movie.smallImage}
            style={{ height: "158px", width: "280px" }}
          />
          <h5 style={{ fontSize: "24px" }}>{movie.movieName}</h5>
          <div className="movie-detail-length" style={{ gap: "10px" }}>
            <span className="small-box">R</span>
            <p>{movie.movieLength}</p>
            <span className="small-box">HD</span>
            <span className="small-box">5.1</span>
            <span className="small-box">CC</span>
          </div>
          <div className="trailer-button cursor">
            <ImVideoCamera className="movie-trailer-icon" />
            <p style={{ margin: "0px 0px" }}>TRAILER</p>
          </div>
          <p className="">{movie.description}</p>
          <p>{movie.starring}</p>
        </div>
        <div className="start-watching-now-card">
          <div>
            <ul style={{ textAlign: "left" }}>
              <li>Ad-free streaming</li>
              <li>Limited time special offer</li>
            </ul>
          </div>
          <div className="start-watch-line"></div>
          <div>
            <p>Starting at</p>
            <p style={{ fontSize: "25px" }}> $2.99/mo</p>
            <p>Cancel Anytime</p>
          </div>
          <div className="start-watch-part">
            <MyButton btnText={"Start watching now"} padding={"thin"} />
            <p className="cursor">Terms of Use</p>
          </div>
        </div>
      </div>
      <div className="cast-section">
        <h6 style={{ fontSize: "16px", margin: "0px 0px" }}>Cast</h6>
        <div className="movie-detail-cast">
          {movie.cast.map((data, index) => {
            return (
              <p key={index} style={{ margin: "12px 0px" }}>
                {data}
              </p>
            );
          })}
        </div>
      </div>
      <div className="cast-crew-container">
        <div className="director-section">
          <span className="director-part">
            <h6 className="h6-size margin-zero">Directed By</h6>
            <p>{movie.directedBy}</p>
          </span>
          <span className="director-part">
            <h6 className="h6-size margin-zero">Produced By</h6>
            <p>{movie.producedBy}</p>
          </span>
          <span className="director-part">
            <h6 className="h6-size margin-zero">Written By</h6>
            <p>{movie.writtenBy}</p>
          </span>
        </div>
        <div className="trailer-button cursor" style={{ display: "inline" }}>
          <p style={{ margin: "0px 0px", fontSize: "18px" }}>
            See all cast & crew
          </p>
        </div>
      </div>
      <div style={{ padding: "10px" }}>
        <ImageScrollContainer props={othersWatched} />
      </div>
    </section>
  );
};

export default MovieDetailScreen;
