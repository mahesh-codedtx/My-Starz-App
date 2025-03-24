import ClaimSpecialOffer from "../../components/ClaimSpecialOffer";
import SignStream from "../../components/SignUpStream";
import HeroCarousel from "../../components/HeroCarousel";
import ComingSoon from "../../components/CominSoon";
import StarzTop from "../../components/StarzTop10";
import Boundary from "../../components/Boundary";
import { boldOriginals } from "../../utils/Home/claimOfferBold";

const Home = () => {
  return (
    <main>
      <HeroCarousel />
      <Boundary />
      <StarzTop />
      <ComingSoon />
      <SignStream />
      <ClaimSpecialOffer props={boldOriginals} />
    </main>
  );
};
export default Home;
