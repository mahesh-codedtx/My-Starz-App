import React from "react";
import ClaimSpecialOffer from "../../components/ClaimSpecialOffer";
import { seriesBanner } from "../../utils/Series/SeriesBanner";
import ImageScrollContainer from "../../components/Series/ImageScrollSection";
import { leavingSoon } from "../../utils/Movies/LeavingSoon";
import { drama } from "../../utils/Movies/Drama";
import { moviesStarzTop10 } from "../../utils/Movies/MoviesStarzTop10";
import MoviesMiddleSection from "../../components/MoviesMiddleSection";
import MovieDetailScreen from "../../components/MovieDetail";

const Movies = () => {
  return (
    <main>
      <ClaimSpecialOffer props={seriesBanner} />
      <h2 className="series-page-container">Movies</h2>
      <ImageScrollContainer props={leavingSoon} />
      <ImageScrollContainer props={drama} />
      <ImageScrollContainer props={moviesStarzTop10} />
      <MoviesMiddleSection />
    </main>
  );
};

export default Movies;
