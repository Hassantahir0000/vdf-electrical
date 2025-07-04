
 

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import HeroServiceDetails from '@/components/hero/HeroServiceDetails';
import DetailsBanner from '@/components/details/DetailsBanner';
import ServiceDetailsFaq from '@/components/faq/ServiceDetailsFaq';
import ServiceHomeThree from '@/components/service/ServiceHomeThree';
import services_exploring from "@/assets/img/new/a1.jpg";
import sound_box_icon from "@/assets/img/sound_box_icon.jpg";
import service_slider_1 from "@/assets/img/new/d1.jpg";
import service_slider_2 from  "@/assets/img/new/d2.jpg";
import hero_img from '@/assets/img/new/p3.jpg';
import HeroHomeFour from '@/components/hero/HeroHomeFour';

export const metadata = {
  title: "Domestic Electrical",
};

const mainData = {
  title_1: "Domestic",
  title_2: "Electrical",
  des: `Domestic electrician working across Glasgow and the surrounding areas of Scotland.`,
  image: hero_img
};


const heroData = {
  title: "Domestic Electrical",
  description: `Professional domestic electrician serving Glasgow and surrounding areas. From wiring and lighting to fuse board upgrades, we ensure safe and reliable electrical solutions for your home.`,
  features: [
    `Full and partial house rewiring services.`,
    `Installation of lighting, sockets, and appliances.`,
    `Fuse board upgrades and circuit protection.`,
    `Electrical inspections, fault finding, and repairs.`,
  ],
  image: "/assets/img/new/out.jpeg"
};


const service_content = {
  sub_title: "Services",
  title: "Bringing Comfort Home with Professional Domestic Electrical Services",
  service_data: [
    { id: 1, title: "Complete Home Rewiring" },
    { id: 2, title: "Consumer Unit Replacement" },
    { id: 3, title: "EV Charger Installation" },
    { id: 4, title: "Lighting Installation" },
    { id: 5, title: "Electrical Testing" },
  ],
  notice_title: `Creating a Strong Brand Identity Through The Design`,
  notice_des: `Welcome to our digital agency! We specialise in helping businesses like yours succeed. Welcome to our digital agency. We specialise in helping businesses.`,
  servicesImage: services_exploring,
  iconImage: sound_box_icon,
};



const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroHomeFour data={mainData}/>
              <ServiceHomeThree {...service_content}/>
              {/* <div style={{marginBottom:"6rem"}}>
                <DetailsBanner imageOne={service_slider_1} imageTwo={service_slider_2} />
              </div> */}
             <HeroServiceDetails data={heroData} />
            <ServiceDetailsFaq />
            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;