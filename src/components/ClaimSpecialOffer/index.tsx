import "./index.css";
import MyButton from "../Button";
import { IClaimSpecialOffer } from "../../utils/Home/claimOfferBold";

const ClaimSpecialOffer = ({ props }: { props: IClaimSpecialOffer }) => {
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(
      to right,
      rgba(0, 120, 139, 0.3),
      rgba(2, 18, 20, 0.7)
    ), url(${props.bgImage})`,
    backgroundSize: "cover",
    minHeight: `${props.bgImageHeight}`,
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: " center",
    alignItems: "center",
    Position: "relative",
    padding: "0px 15px",
  };

  return (
    <section style={backgroundImageStyle} className="claim-special-offer-bg">
      <div className="claim-special-offer-container">
        <h3 className="heading text-capitalize">{props.heading}</h3>
        <h4 className="desc">{props.description}</h4>
        <MyButton btnText={"CLAIM SPECIAL OFFER"} padding={"thick"} />
      </div>
    </section>
  );
};
export default ClaimSpecialOffer;
