
'use client' 
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";


interface DataType {
  img: string;
  sub_title: string;
  title: string;
  des: string;
}

const hero_slider: DataType[] = [
  {
    img: `/assets/img/new/p7.jpg`,
    sub_title: "Domestic, Commercial & Industrial Electricians",
    title: "Welcome to VDF Group",
    des: `We’re a NAPIT approved electrical contractor serving domestic, commercial and industrial clients throughout Glasgow and across Scotland.`
  },
  {
    img: `/assets/img/new/p3.jpg`,
    sub_title: "Team of Professionals",
    title: "Renewable Energy Solutions, Glasgow",
    des: `Trusted, Qualified Electrical Contractor in Glasgow. VDF Group is powering Glasgow with safety and reliability.`
  },
]


const HeroHomeOne = () => {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="cs_slider cs_slider_1">
        {hero_slider.map((item, index) =>
          <SwiperSlide key={index} className="swiper-slide">
            <div className="cs_hero cs_style1 cs_center cs_parallax">
              <div className="cs_hero_bg cs_bg cs_parallax_bg" style={{ backgroundImage: `url(${item.img})` }}></div>
              <div className="container">
                <div className="cs_hero_text">
                  <div className="cs_hero_mini_title">
                    <svg width="134" height="12" viewBox="0 0 134 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M133.53 6.53033C133.823 6.23744 133.823 5.76256 133.53 5.46967L128.757 0.696699C128.464 0.403806 127.99 0.403806 127.697 0.696699C127.404 0.989593 127.404 1.46447 127.697 1.75736L131.939 6L127.697 10.2426C127.404 10.5355 127.404 11.0104 127.697 11.3033C127.99 11.5962 128.464 11.5962 128.757 11.3033L133.53 6.53033ZM0 6.75H133V5.25H0V6.75Z"
                        fill="#101010" />
                    </svg>
                    {item.sub_title}
                  </div>
                  <div className="cs_height_20 cs_height_lg_20"></div>
                  <h1 className="cs_hero_title">
                    {item.title}
                  </h1>
                  <div className="cs_height_70 cs_height_lg_60"></div>
                  <div className="cs_hero_text_in">
                    <div className="cs_hero_subtitle">
                      {item.des}
                    </div>
                    <div className="cs_height_65 cs_height_lg_40"></div>
                    {/* <div className="cs_hero_btn_wrap">
                      <div className="cs_round_btn_wrap">
                        <Link href="/portfolio"
                          className="cs_hero_btn cs_round_btn btn-item"><span></span>
                          Our
                          Projects</Link>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        <div className="cs_pagination cs_style1"></div>
      </Swiper>
    </>
  );
};

export default HeroHomeOne;