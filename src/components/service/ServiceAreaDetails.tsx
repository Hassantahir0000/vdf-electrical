import React from 'react';

interface DataType {
  id: string;
  title: string;
  description: string;
}

const ServiceAreaDetails = ({ service_data }: { service_data: DataType[] }) => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_50"></div>
      <section>
        <div className="container">
          <div className="cs_work cs_work_text">
            <h4 className="anim_heading_title">
              Specialization & Services
            </h4>
          <p className="cs_mp0 anim_text">
            At VDF Electrical, we specialize in delivering high-quality electrical services across domestic, commercial, and industrial sectors. From installations and rewiring to fault finding and inspections, our certified electricians ensure safety, reliability, and compliance every step of the way.
          </p>
          </div>
          <div className="cs_height_80 cs_height_lg_40"></div>
          <div>
            <div className="cs_work cs_work_1">
              <div className="cs_card_work cs_style_1">
                {service_data.map((item, i) => (
                  <div key={i} className="cs_card cs_mt_nthchild_0 anim_div_ShowLeftSide">
                    <div className="cs_card cs_style_1">
                      <div className="cs_posagation">
                        <div className="cs_work_style_1"></div>
                        <div className="cs_work_style_2"></div>
                      </div>
                      <div className="cs_stroke_number">
                        <span>{item.id}</span>
                      </div>
                    </div>
                    <h6 className="cs_work_title">{" "}</h6>
                    <p className="cs_work_subtitle">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaDetails;
