"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface PortfolioDetailsProps {
  title: string;
  challengesText: string;
  challengesList: string[];
  challengeImage: StaticImageData;
  sideImages: StaticImageData[];
  solutionsText: string;
  solutionImages: StaticImageData[];
}

const PortfolioDetailsArea: React.FC<PortfolioDetailsProps> = ({
  title,
  challengesText,
  challengesList,
  challengeImage,
  sideImages,
  solutionsText,
  solutionImages,
}) => {
  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">{title}</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_100 cs_height_lg_60"></div>
      <div className="cs_height_75 cs_height_lg_45"></div>

      <section>
        <div className="container">
          <div className="cs_portfolio_details">
            <div className="reveal">
              <Image src={challengeImage} alt="challenge_image" />
            </div>
            <div className="cs_height_100 cs_height_lg_60"></div>
            <div className="anim_div_ShowDowns">
              <div className="cs_img_show_text cs_text_style_1">
                <h4 className="cs_heading_text anim_heading_title">Core Services</h4>
                <p className="cs_text_style_body">{challengesText}</p>
              </div>
              <div className="cs_ul_ml">
                <ul>
                  {challengesList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cs_height_75 cs_height_lg_45"></div>


      <section>
        <div>
          <div className="container">
            <div className="cs_portfolio_details">
              <div className="cs_solutions_section anim_div_ShowDowns">
                <div>
                  <h4 className="cs_heading_text anim_heading_title">Why Choose Us?</h4>
                  <p className="cs_text_style_body">{solutionsText}</p>
                </div>
                <div className="cs_solutions_section_img_show">
                  {solutionImages.map((img, i) => (
                    <div key={i} className={`portfolio_solution_${i + 1} reveal`}>
                      <Image src={img} alt={`solution_image_${i}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetailsArea;
