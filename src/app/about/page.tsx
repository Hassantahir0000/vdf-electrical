
'use client'

import React, { useState } from 'react';
import About from '@/components/about/About';
import AwardsHomeOne from '@/components/awards/AwardsHomeOne';
import BannerAbout from '@/components/brand/BannerAbout';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';
import Gellary from '@/components/gellary/Gellary';
import TeamHomeTwo from '@/components/team/TeamHomeTwo';
import Testimonial from '@/components/testimonial/Testimonial';
import VideoHomeOne from '@/components/video/VideoHomeOne';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import VideoPopup from '@/components/modals/VideoPopup';
import HeroHomeTwo from '@/components/hero/HeroHomeTwo';
import HeroHomeFour from '@/components/hero/HeroHomeFour';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import HeroHomeFive from '@/components/hero/HeroHomeFive';
import HeroHomeThree from '@/components/hero/HeroHomeThree';





// export const metadata = {
//   title: "About VDF Group - Domestic, Commercial & Industrial Electricians, Glasgow",
// };

const index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroHomeThree/>
            {/* <HeroHomeFour data={hero_data}/> */}
            <BannerAbout />
            {/* <VideoHomeOne style_2={true} setIsVideoOpen={setIsVideoOpen} /> */}
           
            <About />
             {/* <FunFactHomeOne style_3={true} /> */}
            {/* <TeamHomeTwo style_2={true} style_3={true} /> */}
            <AwardsHomeOne style_2={true} />
            <Testimonial />
            {/* <Gellary style_2={true} /> */}
            {/* <BrandHomeOne /> */}
          </main>
          <FooterOne />
        </div>
      </div>

        {/* video modal start */}
        <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"qmGYnJgCW1o"}
      />
      {/* video modal end */}
    </Wrapper>
  );
};

export default index;