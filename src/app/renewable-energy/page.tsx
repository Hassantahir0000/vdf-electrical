
 

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import HeroServiceDetails from '@/components/hero/HeroServiceDetails';
import DetailsBanner from '@/components/details/DetailsBanner';
import ServiceDetailsFaq from '@/components/faq/ServiceDetailsFaq';
import ServiceHomeThree from '@/components/service/ServiceHomeThree';
import services_exploring from "@/assets/img/new/a4.jpg";
import sound_box_icon from "@/assets/img/sound_box_icon.jpg";
import service_slider_1 from "@/assets/img/new/r1.jpg";
import service_slider_2 from  "@/assets/img/new/r2.jpg";
import hero_img from '@/assets/img/new/renewable.jpg';
import HeroHomeFour from '@/components/hero/HeroHomeFour';


export const metadata = {
  title: "Industrial Electrical",
};

const mainData = {
  title_1: "Renewable",
  title_2: "Energy",
  des: `Helping Glasgow and Scotland transition to a greener future with renewable energy systems for homes and businesses.`,
  image: hero_img
};


const heroData = {
  title: "Renewable Energy",
  description: `Helping Glasgow and Scotland transition to a greener future with renewable energy systems for homes and businesses.`,
  features: [
    "Electric Vehicle (EV) Chargers",
    "Air Source Heat Pumps",
    "Solar Panels"
  ],
  image: "/assets/img/new/p3.jpg"
};


const service_content = {
  sub_title: "Services",
  title: "Leading the Charge with Innovative Renewable Energy Solutions",
  service_data: [
    { id: 1, title: "Electric Vehicle (EV) Chargers" },
    { id: 2, title: "	Air Source Heat Pumps" },
    { id: 3, title: "Solar Panels" },
  ],
  notice_title: `Why VDF Group?`,
  notice_des: `VDF Electrical, we’re committed to helping Glasgow and Scotland transition to a greener future. Our team of highly skilled renewables electricians specialises in the installation and maintenance of renewable energy systems in the domestic, commercial and industrial sectors. Contact our team today to discuss your requirements.`,
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