import ClaimSpecialOffer from "../../components/ClaimSpecialOffer";
import SignStream from "../../components/SignUpStream";
import HeroCarousel from "../../components/HeroCarousel";
import ComingSoon from "../../components/CominSoon";
import StarzTop from "../../components/StarzTop10";
import Boundary from "../../components/Boundary";

const Home = () => {
  return (
    <main>
      <HeroCarousel />
      <Boundary />
      <StarzTop />
      <ComingSoon />
      <SignStream />
      <ClaimSpecialOffer />
    </main>
  );
};
export default Home;
