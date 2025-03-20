import top1 from "../../assets/images/Home/StarzTop/starz-top-1.avif";
import top2 from "../../assets/images/Home/StarzTop/starz-top-2.avif";
import top3 from "../../assets/images/Home/StarzTop/starz-top-3.avif";
import top4 from "../../assets/images/Home/StarzTop/starz-top-4.avif";
import top5 from "../../assets/images/Home/StarzTop/starz-top-5.avif";
import top6 from "../../assets/images/Home/StarzTop/starz-top-6.avif";

export interface IStarzTop {
  img: string;
  hoverText: string;
}
export const starzTop10: IStarzTop[] = [
  {
    img: top1,
    hoverText: "The Killer's Game",
  },
  {
    img: top2,
    hoverText: "The Ministry Of Ungentlemanly Warfare",
  },
  {
    img: top3,
    hoverText: "FastX",
  },
  {
    img: top4,
    hoverText: "1992",
  },
  {
    img: top5,
    hoverText: "Expend4bles",
  },
  {
    img: top6,
    hoverText: "BorderLands",
  },
];
