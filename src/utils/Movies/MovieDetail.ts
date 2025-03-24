import movieDetailMovieBg1 from "../../assets/images/Movies/MovieDetail/movie-detail-bg-1.avif";
import movieDetailMovieSmall1 from "../../assets/images/Movies/MovieDetail/movie-detail-small-1.avif";
import movieDetailMovieBg2 from "../../assets/images/Movies/MovieDetail/Movie2/movie-detail-bg-2.avif";
import movieDetailMovieSmall2 from "../../assets/images/Movies/MovieDetail/Movie2/movie-detail-small-2.avif";
import movieDetailMovieBg3 from "../../assets/images/Movies/MovieDetail/Movie3/movie-detail-bg-3.avif";
import movieDetailMovieSmall3 from "../../assets/images/Movies/MovieDetail/Movie3/movie-detail-small-3.avif";
import movieDetailMovieBg4 from "../../assets/images/Movies/MovieDetail/Movie4/movie-detail-bg-4.avif";
import movieDetailMovieSmall4 from "../../assets/images/Movies/MovieDetail/Movie4/movie-detail-bg-4.avif";
import movieDetailMovieBg5 from "../../assets/images/Movies/MovieDetail/Movie5/movie-detail-bg-5.avif";
import movieDetailMovieSmall5 from "../../assets/images/Movies/MovieDetail/Movie5/movie-detail-small-5.avif";
import movieDetailMovieBg6 from "../../assets/images/Movies/MovieDetail/Movie6/movie-detail-bg-6.avif";
import movieDetailMovieSmall6 from "../../assets/images/Movies/MovieDetail/Movie6/movie-detail-small-6.avif";
import movieDetailMovieBg7 from "../../assets/images/Movies/MovieDetail/Movie7/movie-detail-bg-7.avif";
import movieDetailMovieSmall7 from "../../assets/images/Movies/MovieDetail/Movie7/movie-detail-small-7.avif";
export interface IMovieDetail {
  bannerImage: string;
  smallImage: string;
  movieName: string;
  movieLength: string;
  description: string;
  starring: string;
  cast: string[];
  directedBy: string;
  producedBy: string;
  writtenBy: string;
}

export const movieDetails: Record<string, IMovieDetail> = {
  "1": {
    bannerImage: movieDetailMovieBg1,
    smallImage: movieDetailMovieSmall1,
    movieName: "Blue Streak",
    movieLength: "1h 34m Comedy, Action 1999",
    description:
      "A loose cannon jewel thief hides a stolen diamond - two years later, he learns the hiding place is now a police station. The answer: he'll impersonate...more",
    starring: "Starring Martin Lawrence, Luke Wilson, Peter Greene",
    cast: [
      "Martin Lawrence",
      "Luke Wilson",
      "Peter Greene",
      "David Chappelle",
      "Nicole Ari Parker",
      "Graham Beckel",
      "Robert Miranda",
      "Olek Krupa",
      "Saverio Guerra",
      "Richard C. Sarafian",
      "Tamala Jones",
      "Julio Oscar Mechoso",
    ],
    directedBy: "Les Mayfield",
    producedBy: "Neal H. Moritz, Toby Jaffe",
    writtenBy: "Michael Berry, John Blumenthal ...",
  },
  "2": {
    bannerImage: movieDetailMovieBg2,
    smallImage: movieDetailMovieSmall2,
    movieName: "Jurassic Park",
    movieLength: "2h 7m action, adventure 1993",
    description:
      "An entrepreneur invites scientists, a mathematics theorist and others to his jungle theme-park featuring dinosaurs regenerated from DNA.",
    starring: "Starring Sam Neill, Laura Dern, Jeff Goldblum",
    cast: [
      "Martin Lawrence",
      "Luke Wilson",
      "Peter Greene",
      "David Chappelle",
      "Nicole Ari Parker",
      "Graham Beckel",
      "Robert Miranda",
      "Olek Krupa",
      "Saverio Guerra",
      "Richard C. Sarafian",
      "Tamala Jones",
      "Julio Oscar Mechoso",
    ],
    directedBy: "Steven Spielberg",
    producedBy: "Kathleen Kennedy, Gerald R. Molen",
    writtenBy: "Michael Crichton, David Koepp...",
  },
  "3": {
    bannerImage: movieDetailMovieBg3,
    smallImage: movieDetailMovieSmall3,
    movieName: "The Blackening",
    movieLength: "1h 37m comedy, horror 2023",
    description:
      "Seven Black friends who go away for the weekend only to find themselves trapped in a cabin with a killer who has a vendetta. Will their street smarts ...more",
    starring: "Starring Grace Byers, Jermaine Fowler, Antoinette Robertson",
    cast: [
      "Martin Lawrence",
      "Luke Wilson",
      "Peter Greene",
      "David Chappelle",
      "Nicole Ari Parker",
      "Graham Beckel",
      "Robert Miranda",
      "Olek Krupa",
      "Saverio Guerra",
      "Richard C. Sarafian",
      "Tamala Jones",
      "Julio Oscar Mechoso",
    ],
    directedBy: "Tim Story",
    producedBy: "Tracy Oliver",
    writtenBy: "Michael Crichton, David Koepp...",
  },
  "4": {
    bannerImage: movieDetailMovieBg4,
    smallImage: movieDetailMovieSmall4,
    movieName: "The Son of No One",
    movieLength: "1h 34m action, crime 2011",
    description:
      "A rookie police officer who once killed a pair of junkies in his youth remains haunted by the incident.",
    starring: "Starring Channing Tatum, Al Pacino, Juliette Binoche",
    cast: [
      "Martin Lawrence",
      "Luke Wilson",
      "Peter Greene",
      "David Chappelle",
      "Nicole Ari Parker",
      "Graham Beckel",
      "Robert Miranda",
      "Olek Krupa",
      "Saverio Guerra",
      "Richard C. Sarafian",
      "Tamala Jones",
      "Julio Oscar Mechoso",
    ],
    directedBy: "Dito Montiel",
    producedBy: "Dito Montiel,John Thompson ...",
    writtenBy: "Dito Montiel",
  },
  "5": {
    bannerImage: movieDetailMovieBg5,
    smallImage: movieDetailMovieSmall5,
    movieName: "The 5th Wave",
    movieLength: "1h 53m science-fiction, adventure 2016",
    description:
      "Still alive after four devastating waves of alien invasions upon Earth, Cassie searches through a decimated landscape for her younger brother. Meanwhi...more",
    starring: "Starring Chloe Grace Moretz, Alex Roe, Tony Revolori",
    cast: [
      "Martin Lawrence",
      "Luke Wilson",
      "Peter Greene",
      "David Chappelle",
      "Nicole Ari Parker",
      "Graham Beckel",
      "Robert Miranda",
      "Olek Krupa",
      "Saverio Guerra",
      "Richard C. Sarafian",
      "Tamala Jones",
      "Julio Oscar Mechoso",
    ],
    directedBy: "J Blakeson",
    producedBy: "Susannah Grant",
    writtenBy: "Dito Montiel",
  },
  "6": {
    bannerImage: movieDetailMovieBg6,
    smallImage: movieDetailMovieSmall6,
    movieName: "1992",
    movieLength: "1h 37m crime, drama 2024",
    description:
      "Mercer is trying to rebuild his life and relationship with his son amid the LA riots in 1992. Across town, another father and son put their own strain...more",
    starring: "Starring Tyrese Gibson, Ray Liotta, Scott Eastwood",
    cast: [
      "Martin Lawrence",
      "Luke Wilson",
      "Peter Greene",
      "David Chappelle",
      "Nicole Ari Parker",
      "Graham Beckel",
      "Robert Miranda",
      "Olek Krupa",
      "Saverio Guerra",
      "Richard C. Sarafian",
      "Tamala Jones",
      "Julio Oscar Mechoso",
    ],
    directedBy: "Ariel Vromen",
    producedBy: "Ariel Vromen, Sascha Penn ...",
    writtenBy: "Ariel Vromen,Sascha Penn",
  },
  "7": {
    bannerImage: movieDetailMovieBg7,
    smallImage: movieDetailMovieSmall7,
    movieName: "The Ministry of Ungentlemanly Warfare",
    movieLength: "2h action, comedy 2024",
    description:
      "A top secret combat unit of rogues and mavericks goes on a daring mission against the Nazis, ultimately changing the course of WWII and laying the fou...more",
    starring: "Starring Henry Cavill, Eiza González, Cary Elwes",
    cast: [
      "Martin Lawrence",
      "Luke Wilson",
      "Peter Greene",
      "David Chappelle",
      "Nicole Ari Parker",
      "Graham Beckel",
      "Robert Miranda",
      "Olek Krupa",
      "Saverio Guerra",
      "Richard C. Sarafian",
      "Tamala Jones",
      "Julio Oscar Mechoso",
    ],
    directedBy: "Guy Ritchie",
    producedBy: "Guy Ritchie,Jerry Bruckheimer ...",
    writtenBy: "Ariel Vromen,Sascha Penn",
  },
  "8": {
    bannerImage:
      "https://stz1.imgix.net/web/contentId/71748/type/background/lang/en-US?fit=max&auto=format,compress&w=1500",
    smallImage:
      "https://stz1.imgix.net/web/contentId/71748/type/titleart/dimension/3000x3000/lang/en-US?fit=clip&auto=format,compress&w=280&h=165&trim=color",
    movieName: "How I Learned To Fly",
    movieLength: "2h action, comedy 2024",
    description:
      "A top secret combat unit of rogues and mavericks goes on a daring mission against the Nazis, ultimately changing the course of WWII and laying the fou...more",
    starring: "Starring Henry Cavill, Eiza González, Cary Elwes",
    cast: [
      "Martin Lawrence",
      "Luke Wilson",
      "Peter Greene",
      "David Chappelle",
      "Nicole Ari Parker",
      "Graham Beckel",
      "Robert Miranda",
      "Olek Krupa",
      "Saverio Guerra",
      "Richard C. Sarafian",
      "Tamala Jones",
      "Julio Oscar Mechoso",
    ],
    directedBy: "Guy Ritchie",
    producedBy: "Guy Ritchie,Jerry Bruckheimer ...",
    writtenBy: "Ariel Vromen,Sascha Penn",
  },
  "9": {
    bannerImage:
      "https://stz1.imgix.net/web/contentId/65814/type/background/lang/en-US?fit=max&auto=format,compress&w=1500",
    smallImage:
      "https://stz1.imgix.net/web/contentId/65814/type/titleart/dimension/3000x3000/lang/en-US?fit=clip&auto=format,compress&w=280&h=165&trim=color",
    movieName: "Straight Outta Compton",
    movieLength: "2h action, comedy 2024",
    description:
      "A top secret combat unit of rogues and mavericks goes on a daring mission against the Nazis, ultimately changing the course of WWII and laying the fou...more",
    starring: "Starring Henry Cavill, Eiza González, Cary Elwes",
    cast: [
      "Martin Lawrence",
      "Luke Wilson",
      "Peter Greene",
      "David Chappelle",
      "Nicole Ari Parker",
      "Graham Beckel",
      "Robert Miranda",
      "Olek Krupa",
      "Saverio Guerra",
      "Richard C. Sarafian",
      "Tamala Jones",
      "Julio Oscar Mechoso",
    ],
    directedBy: "Guy Ritchie",
    producedBy: "Guy Ritchie,Jerry Bruckheimer ...",
    writtenBy: "Ariel Vromen,Sascha Penn",
  },
  "10": {
    bannerImage:
      "https://stz1.imgix.net/web/contentId/38138/type/background/lang/en-US?fit=max&auto=format,compress&w=1500",
    smallImage:
      "https://stz1.imgix.net/web/contentId/38138/type/titleart/dimension/3000x3000/lang/en-US?fit=clip&auto=format,compress&w=280&h=165&trim=color",
    movieName: "Life",
    movieLength: "2h action, comedy 2024",
    description:
      "A top secret combat unit of rogues and mavericks goes on a daring mission against the Nazis, ultimately changing the course of WWII and laying the fou...more",
    starring: "Starring Henry Cavill, Eiza González, Cary Elwes",
    cast: [
      "Martin Lawrence",
      "Luke Wilson",
      "Peter Greene",
      "David Chappelle",
      "Nicole Ari Parker",
      "Graham Beckel",
      "Robert Miranda",
      "Olek Krupa",
      "Saverio Guerra",
      "Richard C. Sarafian",
      "Tamala Jones",
      "Julio Oscar Mechoso",
    ],
    directedBy: "Guy Ritchie",
    producedBy: "Guy Ritchie,Jerry Bruckheimer ...",
    writtenBy: "Ariel Vromen,Sascha Penn",
  },
};
