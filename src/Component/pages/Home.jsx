import React from "react";
import HeroSection from "../Homepage/banner";
import Marquee from "../Homepage/Marquee";
import IntroductionSection from "../Homepage/introductionsection";
import FeatureSection from "../Homepage/featuresection";
import Box from "../Homepage/card";
import Team from "../Homepage/Team";


const Home = () => {
  return (
    <div className="bg-slate-100">
<HeroSection></HeroSection>
<Marquee></Marquee>
   <IntroductionSection></IntroductionSection>
   <FeatureSection></FeatureSection>
   <Box></Box>
   <Team></Team>

    </div>
  );
};

export default Home;
