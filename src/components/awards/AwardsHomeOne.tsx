'use client'
import React, { useState } from 'react';
import award_img_1 from "@/assets/img/award_1.svg";
import award_img_2 from "@/assets/img/award_2.svg";
import award_img_3 from "@/assets/img/award_3.svg";

import award_thumb_1 from "@/assets/img/new/napit.png";
import award_thumb_2 from "@/assets/img/new/p7.jpg";
import award_thumb_3 from "@/assets/img/new/p8.jpg";
import Image, { StaticImageData } from 'next/image';


interface DataType {
  id: number;
  ward_img: any;
  img: StaticImageData;
  brand: string;
  title: string;
  des: string;
}[]

const award_data: DataType[] = [
  {
    id: 1,
    ward_img: award_img_1,
    img: award_thumb_1,
    brand: ``,
    title: `NAPIT Approved Contractor`,
    des: `Our status as a NAPIT approved contractor ensures all work meets rigorous safety standards.`,
  },
  {
    id: 2,
    ward_img: award_img_1,
    img: award_thumb_2,
    brand: ``,
    title: `Fully Qualified, Highly Experienced`,
    des: `Our qualifications are backed years of invaluable industry experience.`,
  },
  {
    id: 3,
    ward_img: award_img_1,
    img: award_thumb_3,
    brand: ``,
    title: `Commitment to renewable energy solutions`,
    des: `Looking after the environment and bringing your energy bills down..`,
  },
   {
    id: 4,
    ward_img: award_img_1,
    img: award_thumb_3,
    brand: ``,
    title: `Competitive Pricing`,
    des: `We provide honest, competitive quotes without compromising on quality.`,
  },
   {
    id: 5,
    ward_img: award_img_1,
    img: award_thumb_3,
    brand: ``,
    title: `Customer Focused`,
    des: `We’re driven by your satisfaction and always aim to exceed your expectations.`,
  },
]

const AwardsHomeOne = ({style_2}: any) => {

  const [activeTab, setActiveTab] = useState(0);
  const handleMouseEnter = (index: any) => {
    setActiveTab(index);
  };

  return (
    <>
    {style_2 ? <div className="cs_height_145 cs_height_lg_60"></div> : null}
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1 swiper-slide swiper-slide-active">
            <div className="cs_section_heading_text">
              <div className="cs_section_subtitle anim_div_ShowZoom">
               Why Choose Us?
              </div>
              <h2 className="cs_section_title anim_heading_title">
                 One trusted name – <br></br> VDF Electrical.
              </h2>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_60"></div>
          <div className="cs_card_2_list">
            {award_data.map((item, i) =>
              <div key={i}
                onMouseEnter={() => handleMouseEnter(i)}
                className={`cs_card cs_style_2 cs_hover_tab anim_div_ShowDowns ${activeTab === i ? 'active' : ''}`}>
                <div className="cs_card_left">
                  <div className="cs_card_logo">
                    <Image src={item.ward_img} alt="Award" />
                  </div>
                  <div>
                    <h2 className="cs_card_title">{item.title}</h2>
                    <div className="cs_card_subtitle">
                      {item.des}
                    </div>
                  </div>
                </div>
                {/* <div className="cs_card_right">
                  <h2 className="cs_card_brand">{item.brand}</h2>
                </div> */}
                <div className="cs_card_hover_img">
                  <Image src={item.img} alt="Thumb" />
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
      <div className="cs_height_145 cs_height_lg_60"></div>
    </>
  );
};

export default AwardsHomeOne;