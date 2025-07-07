
 

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
  description: `Delivering safe, high-quality electrical services tailored to the needs of every home in Glasgow and surrounding areas. Whether it’s full rewiring, new installations, or fuse board upgrades, our certified electricians provide dependable and compliant solutions. We pride ourselves on attention to detail, minimal disruption, and long-lasting results. No job is too big or small — we’re here to power your home with confidence.`,
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
  notice_title: `Why Choose Us for Your Home's Electrical Needs?`,
  notice_des: `We understand the importance of safety, reliability, and efficiency when it comes to domestic electrical work. Our qualified electricians deliver high-quality service tailored to your home's needs, ensuring peace of mind for you and your family.`,
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