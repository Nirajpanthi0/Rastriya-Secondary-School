// import React from "react";
import HeroSection from "../Homepage/banner";
import Marquee from "../Homepage/Marquee";
import IntroductionSection from "../Homepage/introductionsection";
// import FeatureSection from "../Homepage/featuresection";
import Box from "../Homepage/card";
import Team from "../Homepage/Team";


const Home = () => {
  return (
    <div className="bg-slate-100">
<HeroSection></HeroSection>
<Marquee></Marquee>
<div className="my-12 flex justify-center items-center w-screen h-[500px]">
<iframe width="560" className="rounded-2xl w-3/4 h-full" height="315" src="https://www.youtube.com/embed/0qGzJ6al9ZE?si=DAvOX_w_WNGovH1s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
   <IntroductionSection></IntroductionSection>
   {/* <FeatureSection></FeatureSection> */}
   <Box></Box>
   <Team></Team>

    </div>
  );
};

export default Home;
