import movies1 from "../../assets/images/Movies/MovieList/movies-1.avif";
import movies2 from "../../assets/images/Movies/MovieList/movies-2.avif";
import movies3 from "../../assets/images/Movies/MovieList/movies-3.avif";
import movies4 from "../../assets/images/Movies/MovieList/movies-4.avif";
import movies5 from "../../assets/images/Movies/MovieList/movies-5.avif";
import movies6 from "../../assets/images/Movies/MovieList/movies-6.avif";
import movies7 from "../../assets/images/Movies/MovieList/movies-7.avif";
import movies8 from "../../assets/images/Movies/MovieList/movies-8.avif";
import movies9 from "../../assets/images/Movies/MovieList/movies-9.avif";
import movies10 from "../../assets/images/Movies/MovieList/movies-10.avif";

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
export const leavingSoon: IImageScrollSection = {
  sectionTitle: "Leaving Soon",
  singleImage: [
    {
      id: 1,
      img: movies1,
      hoverText: "",
    },
    {
      id: 2,
      img: movies2,
      hoverText: "",
    },
    {
      id: 3,
      img: movies3,
      hoverText: "",
    },
    {
      id: 4,
      img: movies4,
      hoverText: "",
    },
    {
      id: 5,
      img: movies5,
      hoverText: "",
    },
    {
      id: 6,
      img: movies6,
      hoverText: "",
    },
    {
      id: 7,
      img: movies7,
      hoverText: "",
    },
    {
      id: 8,
      img: movies8,
      hoverText: "",
    },
    {
      id: 9,
      img: movies9,
      hoverText: "",
    },

    {
      id: 10,
      img: movies10,
      hoverText: "",
    },
  ],
  isImageWithIndex: false,
  imageHeight: "",
  imageWidth: "",
};
