import EESTEC from "./components/Eestec";
import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import Promo from "./components/Promo";
import Sponsors from "./components/Sponsors";
import Statistics from "./components/Statistics";
import Events from "./components/Events";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <KeyFeatures></KeyFeatures>
      <EESTEC></EESTEC>
      <Statistics></Statistics>
      <Events></Events>
      <Sponsors></Sponsors>
      <Promo></Promo>
    </>
  );
}
