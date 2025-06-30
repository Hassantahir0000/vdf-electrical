import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ServiceItem {
  id: number;
  title: string;
}

interface DataType {
  sub_title: string;
  title: string;
  service_data: ServiceItem[];
  notice_title: string;
  notice_des: string;
  servicesImage: StaticImageData;
  iconImage: StaticImageData;
}

const ServiceHomeThree = ({
  sub_title,
  title,
  service_data,
  notice_title,
  notice_des,
  servicesImage,
  iconImage,
}: DataType) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="cs_service_exploring">
            <div className="cs_service_exploring_1">
              <div className="cs_section_heading cs_style_1">
                <div className="cs_section_heading_text">
                  <div className="cs_section_subtitle anim_div_ShowZoom">
                    {sub_title}
                  </div>
                  <h2 className="cs_section_title anim_heading_title">
                    {title}
                  </h2>
                </div>
              </div>
              <div className="cs_height_150 cs_height_lg_20"></div>

              <ul className="cs_list_style_none cs_color_1 anim_div_ShowLeftSide">
                {service_data.map((item) => (
                  <li key={item.id}>
                    {/* <Link href="/service-details"> */}
                      <h3 style={{fontSize: "38px"}}>{item.title}</h3>
                    {/* </Link> */}
                  </li>
                ))}
              </ul>
            </div>

            <div className="cs_service_exploring_2">
              <div className="cs_service_exploring_img">
                <div className="anim_div_ShowRightSide">
                  <Image src={servicesImage} className="cs_img" alt="services_exploring" />
                </div>
                <div className="cs_service_exploring_img_text cs_style_1 cs_color_1 anim_div_ShowDowns">
                  <Image src={iconImage} alt="sound_box_icon" />
                  <h6 className="cs_white_color">{notice_title}</h6>
                  <p className="cs_font_16">{notice_des}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHomeThree;
