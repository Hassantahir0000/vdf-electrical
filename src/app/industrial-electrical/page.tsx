
 

import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import AboutHomeFour from '@/components/about/AboutHomeFour';
import HeroServiceDetails from '@/components/hero/HeroServiceDetails';
import DetailsBanner from '@/components/details/DetailsBanner';
import ServiceDetailsFaq from '@/components/faq/ServiceDetailsFaq';
import ServiceHomeThree from '@/components/service/ServiceHomeThree';
import services_exploring from "@/assets/img/new/a3.jpg";
import sound_box_icon from "@/assets/img/sound_box_icon.jpg";
import service_slider_1 from "@/assets/img/new/about2.jpg";
import service_slider_2 from  "@/assets/img/new/about.jpg";
import hero_img from '@/assets/img/new/industry-2.jpg';
import HeroHomeFour from '@/components/hero/HeroHomeFour';


export const metadata = {
  title: "Industrial Electrical",
};

const mainData = {
  title_1: "Industrial",
  title_2: "Electrical",
  des: `Industrial electrician working across Glasgow and the surrounding areas of Scotland.`,
  image: hero_img
};


const heroData = {
  title: "Industrial Electrical",
  description: `VDF Electrical delivers specialist industrial electrical solutions for manufacturing plants, warehouses, and industrial facilities across Glasgow and Scotland. Our fully qualified and highly experienced team has extensive experience in handling complex industrial electrical systems with a focus on safety, reliability, and efficiency.`,
  features: [
    `Specialist installations for industrial machinery and equipment.`,
    `Power distribution system upgrades and fault diagnostics.`,
    `Routine maintenance to prevent downtime and ensure safety.`,
    `Industrial testing, inspection, and regulatory compliance.`,
  ],
  image: "/assets/img/new/industry-2.jpg"
};

const service_content = {
  sub_title: "Services",
  title: "Enhancing Efficiency with Tailored Industrial Electrical Solutions",
  service_data: [
    { id: 1, title: "3-Phase Power Installation" },
    { id: 2, title: "Renewable Energy Solutions" },
    { id: 3, title: "Control System Installation" },
    { id: 4, title: "Plant Maintenance" },
    { id: 5, title: "Industrial Lighting" },
    { id: 6, title: "Machinery Installation & Wiring" },
  ],
  notice_title: `Why VDF Group?`,
  notice_des: `Our industrial team understands the critical nature of your operations. We work efficiently to minimize disruption and can schedule maintenance during planned shutdowns. All our industrial electrical work complies with the latest regulations and safety standards.`,
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