
'use client'

import React, { useState } from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroHomeOne from '@/components/hero/HeroHomeOne';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import ServiceHomeOne from '@/components/service/ServiceHomeOne';
import MarqueeAreaHomeOne from '@/components/brand/MarqueeAreaHomeOne';
import PortfolioHomeOne from '@/components/portfolio/PortfolioHomeOne';
import AwardsHomeOne from '@/components/awards/AwardsHomeOne';
import Testimonial from '@/components/testimonial/Testimonial';
import FunFactHomeOne from '@/components/funfact/FunFactHomeOne';
import VideoHomeOne from '@/components/video/VideoHomeOne';
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import SubscribeHomeOne from '@/components/subscribe/SubscribeHomeOne';
import BrandHomeOne from '@/components/brand/BrandHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';
import VideoPopup from '@/components/modals/VideoPopup';
import ServiceHomeThree from '@/components/service/ServiceHomeThree';
import AboutUs from '@/components/about/AboutUs';


// export const metadata = {
//   title: "VDF Electrical - Domestic, Commercial & Industrial Electricians, Glasgow",
// };


const index = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroHomeOne />
            <MarqueeAreaHomeOne />
            <AboutHomeOne />
            <ServiceHomeOne />
            {/* <PortfolioHomeOne /> */}
            <div style={{marginTop:"5rem"}}>
                <AwardsHomeOne />
            </div>
            <Testimonial />
           <div style={{marginTop:"-100px"}}>
             <AboutUs />
           </div>
            {/* <FunFactHomeOne /> */}
            {/* <VideoHomeOne setIsVideoOpen={setIsVideoOpen} /> */}
            {/* <BlogHomeOne /> */}
            {/* <SubscribeHomeOne /> */}
            {/* <BrandHomeOne style_2={false} /> */}
          </main>
          <FooterOne />
        </div>
      </div>

      {/* video modal start */}
      {/* <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"qmGYnJgCW1o"}
      /> */}
      {/* video modal end */}
    </Wrapper>
  );
};

export default index;