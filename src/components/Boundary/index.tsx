import "./index.css";
import { boundaryBreaking } from "../../utils/Home/Boundary";
import { BiCameraMovie } from "react-icons/bi";
import ImageHover from "../ImageHover";

const Boundary = () => {
  return (
    <section style={{ marginTop: "40px" }}>
      <div>
        <h3 className="boundary-main-heading">Boundary Breaking Originals</h3>
        <p className="boundary-sub-heading">Can You Handle The Heat?</p>
      </div>
      <div className="boundary-image-container">
        {boundaryBreaking.map((data) => {
          return (
            <div className="boundary-single-image">
              <div className="boundary-single-image-hover">
                <ImageHover
                  img={data.movieImage}
                  hoverText={data.movieTitle}
                  imageHeight={""}
                />
              </div>
              <div className="movie-desc-on-hover">
                <h5 className="bbo-movie-title">{data.movieTitle}</h5>
                <p className="bbo-movie-desc">{data.movieDesc}</p>
                <div className="flex">
                  <BiCameraMovie
                    style={{ color: "#d2ff00", width: "45px", height: "30px" }}
                  />
                  <p className="trailer-text">TRAILER</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Boundary;
