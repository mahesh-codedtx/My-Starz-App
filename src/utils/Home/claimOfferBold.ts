const backgroundImage =
  "https://starz.imgix.net/BuyStarz/v3/generic/footer-desktop-092424.jpg?&auto=compress,format";
export interface IClaimSpecialOffer {
  heading: string;
  description: string;
  bgImage: string;
  bgImageHeight: string;
}

export const boldOriginals: IClaimSpecialOffer = {
  heading: "Bold Originals & Big Hit Movies",
  description: "Don't Miss A Moment Of The Action",
  bgImage: backgroundImage,
  bgImageHeight: "500px",
};
