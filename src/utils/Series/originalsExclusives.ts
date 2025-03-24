import series1 from "../../assets/images/Series/Slider/series-1-1.avif";
import series2 from "../../assets/images/Series/Slider/series-1-2.avif";
import series3 from "../../assets/images/Series/Slider/series-1-3.avif";
import series4 from "../../assets/images/Series/Slider/series-1-4.avif";
import series5 from "../../assets/images/Series/Slider/series-1-5.avif";
import series6 from "../../assets/images/Series/Slider/series-2-1.avif";
import series7 from "../../assets/images/Series/Slider/series-2-2.avif";
import series8 from "../../assets/images/Series/Slider/series-2-3.avif";
import series9 from "../../assets/images/Series/Slider/series-2-4.avif";
import series10 from "../../assets/images/Series/Slider/series-2-5.avif";

export interface IImageScrollSection {
  sectionTitle: string;
  isImageWithIndex: boolean;
  singleImage: IImageScroll[];
  imageHeight: string;
  imageWidth: string;
}
export interface IImageScroll {
  id: number;
  img: string;
  hoverText: string;
}
export const originalsExclusives: IImageScrollSection = {
  sectionTitle: "Originals & Exclusives",
  singleImage: [
    {
      id: 1,
      img: series1,
      hoverText: "",
    },
    {
      id: 2,
      img: series2,
      hoverText: "",
    },
    {
      id: 3,
      img: series3,
      hoverText: "",
    },
    {
      id: 4,
      img: series4,
      hoverText: "",
    },
    {
      id: 5,
      img: series5,
      hoverText: "",
    },
    {
      id: 6,
      img: series6,
      hoverText: "",
    },
    {
      id: 7,
      img: series7,
      hoverText: "",
    },
    {
      id: 8,
      img: series8,
      hoverText: "",
    },
    {
      id: 9,
      img: series9,
      hoverText: "",
    },

    {
      id: 10,
      img: series10,
      hoverText: "",
    },
  ],
  isImageWithIndex: false,
  imageHeight: "",
  imageWidth: "",
};
