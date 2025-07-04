
 

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import HeroServiceDetails from '@/components/hero/HeroServiceDetails';
import DetailsBanner from '@/components/details/DetailsBanner';
import ServiceDetailsFaq from '@/components/faq/ServiceDetailsFaq';
import ServiceHomeThree from '@/components/service/ServiceHomeThree';
import services_exploring from "@/assets/img/new/a2.jpg";
import sound_box_icon from "@/assets/img/sound_box_icon.jpg";
import service_slider_1 from "@/assets/img/new/c1.jpg";
import service_slider_2 from  "@/assets/img/new/c2.jpg";
import HeroHomeFour from '@/components/hero/HeroHomeFour';
import hero_img from '@/assets/img/new/commercial.webp';


export const metadata = {
  title: "Commercial Electrical",
};

const mainData = {
  title_1: "Commercial",
  title_2: "Electrical",
  des: `Commercial electrician working across Glasgow and the surrounding areas of Scotland.`,
  image: hero_img
};

const heroData = {
  title: "Commercial Electrical",
  description: `VDF Electrical provides comprehensive commercial electrical solutions for businesses across Glasgow and Scotland. As NAPIT approved contractors, we deliver reliable, efficient, and compliant electrical services tailored to the needs of businesses in Glasgow and across Scotland.
Contact our team today to discuss your requirements.`,
  features: [
    `Complete electrical installations for commercial properties.`,
    `Maintenance and repair of lighting, power, and distribution systems.`,
    `Upgrades to electrical infrastructure and safety compliance.`,
    `Periodic inspection, testing, and certification services.`,
  ],
  image: "/assets/img/new/commercial-1.jpg"
};

const service_content = {
  sub_title: "Services",
  title: "Powering Businesses with Expert Commercial Electrical Services",
  service_data: [
    { id: 1, title: "Renewable Energy Solutions" },
    { id: 2, title: "Office Lighting Solutions" },
    { id: 3, title: "Emergency Lighting Systems" },
    { id: 4, title: "Power Distribution" },
    { id: 5, title: "Data Cabling & Networking" },
    { id: 6, title: "Electrical Testing & Inspections" },
  ],
  notice_title: `Why VDF Group?`,
  notice_des: `Our commercial team understands that minimal disruption to your operations is essential. We work around your business hours and provide clear timelines for all projects. All our work is fully compliant with current regulations, giving you peace of mind.`,
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