import Hero from "../Hero";
import Movies from "../Movies";
import ENDPOINTS from "../../utils/constant/endpoints";

function Main() {
  return (
    <>
      <Hero endpoint={ENDPOINTS.HERO} />
      <Movies title="Latest Movies" />
    </>
  );
}

export default Main;
