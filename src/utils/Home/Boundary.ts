import bbo1 from "../../assets/images/Home/Boundary/bmf3-club-oos.jpg";
import bbo2 from "../../assets/images/Home/Boundary/bmu-oos.jpg";
import bbo3 from "../../assets/images/Home/Boundary/cnd1-oos.jpg";
import bbo4 from "../../assets/images/Home/Boundary/div1-oos.jpg";
import bbo5 from "../../assets/images/Home/Boundary/fjp1-oos.jpg";

export interface IBoundaryOriginals {
  movieImage: string;
  movieTitle: string;
  movieDesc: string;
}
export const boundaryBreaking: IBoundaryOriginals[] = [
  {
    movieImage: bbo1,
    movieTitle: "BMF",
    movieDesc:
      "“BMF” follows the story of two brothers who created the “Black Mafia Family,” the most prominent drug distribution network in American history.",
  },
  {
    movieImage: bbo2,
    movieTitle: "The BMF Documentary: Blowing Money Fast",
    movieDesc:
      "“BMF: Blowing Money Fast” is a docuseries about the Black Mafia Family, who built one of the largest American cocaine empires.",
  },
  {
    movieImage: bbo3,
    movieTitle: "The Couple Next Door",
    movieDesc:
      "A young couple move to the suburbs and instantly strike up a friendship with their new neighbors. But are they a bit too friendly?",
  },
  {
    movieImage: bbo4,
    movieTitle: "Down in the Valley",
    movieDesc:
      "'Down in the Valley' is a documentary series inspired by the vibrant world of “P-Valley.” The series will take viewers on a tantalizing tour of the...",
  },
  {
    movieImage: bbo5,
    movieTitle: "Fat Joe Talks",
    movieDesc:
      "“Fat Joe Talks” brings the audience along for intimate conversations led by Fat Joe with America’s favorite people who drive the cultural zeitgeist.",
  },
];
