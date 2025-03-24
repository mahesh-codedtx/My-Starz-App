import "./footer.css";
import logo from "../../assets/icons/starz-logo-glint.svg";
import facebook from "../../assets/icons/facebook-f-brands (1).svg";
import insta from "../../assets/icons/instagram-brands.svg";
import youtube from "../../assets/icons/youtube-brands.svg";
import tiktok from "../../assets/icons/tiktok-brands.svg";
import { footerContent } from "../../utils/footer";
import { useNavigate } from "react-router-dom";
const MyFooter = () => {
  const navigate = useNavigate();
  return (
    <section className="footer-parent-container">
      <div style={{ width: "70%", margin: "auto" }}>
        <div className="footer-container">
          {footerContent.map((data) => {
            return (
              <div>
                {data.title === "" ? (
                  <h6 className="footer-part-title">'</h6>
                ) : (
                  <h3 style={{ visibility: "visible" }}>{data.title}</h3>
                )}
                <div>
                  {data.subTitle.map((submovie, index) => {
                    return (
                      <p key={index} className="sub-title cursor">
                        {submovie}
                      </p>
                    );
                  })}
                </div>
                <p className="cursor">{data.moreLink}</p>
              </div>
            );
          })}
        </div>
        <div className="social-container">
          <img src={facebook} className="social-network" />
          <img src={insta} className="social-network" />
          <img src={youtube} className="social-network" />
          <img src={tiktok} className="social-network" />
        </div>

        <div className="hr-line"></div>
        <div className="footer-logo">
          <img
            src={logo}
            className="cursor footer-logo-img"
            onClick={() => {
              navigate("/");
            }}
          />
          <p className="footer-copyright">&copy; 2025 STARZ</p>
        </div>
      </div>
    </section>
  );
};
export default MyFooter;
