import appBgHero from "../../assets/images/Home/HeroBanner/app-bg-hero-desktop-020725.avif";
import greedyBgHero from "../../assets/images/Home/HeroBanner/greedypeople-bghero-desktop.avif";
import cndBgHero from "../../assets/images/Home/HeroBanner/cnd1-bghero-desktop.avif";
import killerBgHero from "../../assets/images/Home/HeroBanner/killersgame-bghero-desktop.avif";
import fastxBgHero from "../../assets/images/Home/HeroBanner/fastx-herobg-desktop.avif";
import pbkBgHero from "../../assets/images/Home/HeroBanner/pbk4-bghero-desktop.avif";
import appTitle from "../../assets/images/Home/HeroBanner/3for3offer-glint-ta-web.avif";
import greedyTitle from "../../assets/images/Home/HeroBanner/greedypeople-ta-web.avif";
import cndTitle from "../../assets/images/Home/HeroBanner/cnd1-ta-web.avif";
import killerTitle from "../../assets/images/Home/HeroBanner/killersgame-ta-web.avif";
import fastxTitle from "../../assets/images/Home/HeroBanner/fastx-ta-web.avif";
import pbkTitle from "../../assets/images/Home/HeroBanner/pbk4-2line-ta-web.avif";

export interface IHeroBanner {
  bgImage: string;
  titleImage: string;
  titlePosition: "left" | "center";
}

export const heroCarouselArray: IHeroBanner[] = [
  {
    bgImage: appBgHero,
    titleImage: appTitle,
    titlePosition: "left",
  },
  {
    bgImage: greedyBgHero,
    titleImage: greedyTitle,
    titlePosition: "center",
  },
  {
    bgImage: cndBgHero,
    titleImage: cndTitle,
    titlePosition: "center",
  },
  {
    bgImage: killerBgHero,
    titleImage: killerTitle,
    titlePosition: "left",
  },
  {
    bgImage: fastxBgHero,
    titleImage: fastxTitle,
    titlePosition: "left",
  },
  {
    bgImage: pbkBgHero,
    titleImage: pbkTitle,
    titlePosition: "center",
  },
];
