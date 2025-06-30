import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface HeroDataType {
  title_1: string;
  title_2: string;
  des: string;
  image: StaticImageData;
}

const HeroHomeFour = ({ data }: { data: HeroDataType }) => {
  const { title_1, title_2, des, image } = data;

  return (
    <>
      <section>
        <div className="cs_hero cs_style3 cs_bg_color">
          <div style={{height: "-webkit-fill-available"}} className="cs_banner_img">
          <Image
            src={image}
            alt="creative_banner_img"
            className="h-100 w-100"
            style={{ objectFit: "cover", filter: "blur(3.0px)" }}
          />

          </div>
          <div className="container">
            <div className="cs_hero_text">
              <h1 className="cs_hero_title anim_banner_text_left">{title_1}</h1>
              <h1 className="cs_hero_subTitle anim_banner_text_right">{title_2}</h1>
              <p className="cs_hero_p cs_subtext anim_subtext">{des}</p>
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default HeroHomeFour;
