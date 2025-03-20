import "./index.css";
import MyButton from "../Button";
import { boldOriginals } from "../../utils/Home/claimOfferBold";

const ClaimSpecialOffer = () => {
  return (
    <section className="background-container">
      <div>
        <h3 className="heading">{boldOriginals.heading}</h3>
        <p className="desc">{boldOriginals.description}</p>
        <MyButton btnText={"CLAIM SPECIAL OFFER"} padding={"thick"} />
      </div>
    </section>
  );
};
export default ClaimSpecialOffer;
