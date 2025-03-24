import React from "react";
import MovieDetailScreen from "../../components/MovieDetail";
import ClaimSpecialOffer from "../../components/ClaimSpecialOffer";

import { movieDetailBottomSection } from "../../utils/Movies/MovieDetailBottomSection";

const MovieDetailPage = () => {
  return (
    <main>
      <MovieDetailScreen />
      <ClaimSpecialOffer props={movieDetailBottomSection} />
    </main>
  );
};

export default MovieDetailPage;
