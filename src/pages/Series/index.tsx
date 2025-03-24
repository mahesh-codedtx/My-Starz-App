import "./index.css";
import React from "react";
import ClaimSpecialOffer from "../../components/ClaimSpecialOffer";
import { seriesBanner } from "../../utils/Series/SeriesBanner";
import ImageScrollContainer from "../../components/Series/ImageScrollSection";
import { originalsExclusives } from "../../utils/Series/originalsExclusives";
import { bingeWeekend } from "../../utils/Series/BingeWeekend";
const Series = () => {
  return (
    <main>
      <ClaimSpecialOffer props={seriesBanner} />
      <h2 className="series-page-container">TV shows</h2>
      <ImageScrollContainer props={originalsExclusives} />
      <ImageScrollContainer props={bingeWeekend} />
    </main>
  );
};

export default Series;
