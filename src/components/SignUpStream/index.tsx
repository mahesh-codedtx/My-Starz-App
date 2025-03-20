import MyButton from "../Button";
import "./index.css";
import { signStream } from "../../utils/Home/signStream";
import apple from "../../assets/icons/apple-brands.svg";
import chromeCast from "../../assets/icons/chromecast-brands.svg";
import android from "../../assets/icons/android-brands.svg";
import WebCoupleDoor from "../../assets/images/Home/couple-next-door-web.avif";

const SignStream = () => {
  return (
    <section style={{ marginTop: "40px" }}>
      <div>
        <h5 className="heading">{signStream.heading}</h5>
        <p className="grey-color sub-heading">{signStream.subHeading}</p>
      </div>
      <div className="bottom-section">
        <p className="grey-color desc">{signStream.description}</p>
        <MyButton btnText={"CLAIM SPECIAL OFFER"} padding={"thick"} />
        <div className="icon-container">
          <img src={android} className="mobile-os-icons" />
          <img src={apple} className="mobile-os-icons" />
          <img src={chromeCast} className="mobile-os-icons" />
        </div>
      </div>
      <div className="image-container">
        <img src={WebCoupleDoor} style={{ width: "90%" }} />
      </div>
    </section>
  );
};

export default SignStream;
