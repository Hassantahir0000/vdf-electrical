

'use client'

import React, { useState } from 'react';
// import portfolio_data from '@/data/portfolio_data';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import portfolio_img_6 from "@/assets/img/portfolio_1.jpg";
import portfolio_img_7 from "@/assets/img/portfolio_2.jpg";
import portfolio_img_8 from "@/assets/img/portfolio_3.jpg";
import portfolio_img_9 from "@/assets/img/portfolio_5.jpg";
import portfolio_img_10 from "@/assets/img/portfolio_6.jpg";
import portfolio_img_11 from "@/assets/img/portfolio_7.jpg"; 


interface DataType {
  id: number;
  img: StaticImageData;
  title: string;
}

const portfolio_data: DataType[] = [
  // portfolio pages
	{
		id: 1,

		img: portfolio_img_6,
		title: "Complete Home Rewiring",
	},
	{
		id: 2,
		img: portfolio_img_7,
		title: "Consumer Unit Replacement",
	},
	{
		id: 3,
		img: portfolio_img_8,
		title: "Lighting Installation",
	},
	{
		id: 4,
		img: portfolio_img_9,
		title: "Project Task Management",
	},
]

const HeroService = () => {


  return (
    <>
      <div className="cs_height_219 cs_height_lg_120"></div>

      <section>
        <div className="container">
          <div className="cs_section_heading cs_style_1 cs_type_1">
            <div className="cs_section_heading_text">
              <h2 className="cs_section_title anim_text_writting">
               Our Services
              </h2>
            </div>
          </div>
        </div>
      </section>


      <div className="cs_height_50 cs_height_lg_25"></div>
      <section className="cs_ui_design">
        <div className="container">
          <div>

            <div className="cs_isotop_items_details row">
              {portfolio_data.map((item, i) => (
                <div key={i} className="col-md-4 cs_item cs_ui_design cs_development">
                  <Link href="/portfolio-details" className="cs_portfolio cs_style_1">
                    <div className="cs_portfolio_img">
                      <Image src={item.img} className="img-fluid" alt="Thumb" />
                    </div>
                    <div className="cs_portfolio_overlay"></div>
                    <div className="cs_portfolio_info">
                      <h2 className="cs_portfolio_title">
                        {item.title}
                      </h2>
                     
                    </div>
                  </Link>
                </div>
              ))} 

            </div>
          </div>
          <div className="cs_height_70 cs_height_lg_30"></div>
        </div>
      </section>
    </>
  );
};

export default HeroService;





// import React from 'react';
// import Link from 'next/link';


// interface DataType {
//   id: number;
//   title: string;
//   description: string;
// }

// const banner_data:DataType[] = [
//   {
//     id: 1,
//     title: "Application Development",
//     description: "Welcome to our digital agency We specialise in helping businesses like yours succeed online. From website design and development to digital marketing agency.",
//   },
//   {
//     id: 2,
//     title: "Web Development",
//     description: "Welcome to our digital agency We specialise in helping businesses like yours succeed online. From website design and development to digital marketing agency.",
//   },
//   {
//     id: 3,
//     title: "Digital Services",
//     description: "Welcome to our digital agency We specialise in helping businesses like yours succeed online. From website design and development to digital marketing agency.",
//   },
//   {
//     id: 4,
//     title: "Digital Product Design",
//     description: "Welcome to our digital agency We specialise in helping businesses like yours succeed online. From website design and development to digital marketing agency.",
//   },
//   {
//     id: 5,
//     title: "Digital Marketing",
//     description: "Welcome to our digital agency We specialise in helping businesses like yours succeed online. From website design and development to digital marketing agency.",
//   },
//   {
//     id: 6,
//     title: "IOS App Development",
//     description: "Welcome to our digital agency We specialise in helping businesses like yours succeed online. From website design and development to digital marketing agency.",
//   },

// ]

// const HeroService = () => {
//   return (
//     <>
//       <div className="cs_height_219 cs_height_lg_120"></div>
//       <section className="position-relative">
//         <div className="container">
//           <div className="cs_section_heading cs_style_1">
//             <div className="cs_section_heading_text">
//               <h2 className="cs_section_title anim_word_writting">
//                 Transform Your Online Presence with Our Digital Agency Services
//               </h2>
//             </div>
//           </div>
//           <div className="cs_height_100 cs_height_lg_60"></div>
//           <div className="cs_card_1_list">
//             {banner_data.map((item, i) =>
//               <div key={i} className="cs_card cs_style_1 anim_div_ShowDowns">
//                 <div className="cs_card_left">
//                   <div className="cs_card_number cs_primary_font" style={{ backgroundImage: `url('/assets/img/hero_img_1.jpg')` }}>
//                     0{i + 1}
//                   </div>
//                 </div>
//                 <div className="cs_card_right">
//                   <div className="cs_card_right_in">
//                     <h2 className="cs_card_title">
//                       <Link href="/service-details">{item.title}</Link>
//                     </h2>
//                     <div className="cs_card_subtitle">{item.description}</div>
//                   </div>
//                 </div>
//                 <div className="cs_card_link_wrap">
//                   <Link href="/service-details" className="cs_card_link">
//                     <span>
//                       <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
//                         xmlns="http://www.w3.org/2000/svg">
//                         <path fill-rule="evenodd" clip-rule="evenodd"
//                           d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
//                           fill="currentColor"></path>
//                         <path fill-rule="evenodd" clip-rule="evenodd"
//                           d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
//                           fill="currentColor"></path>
//                       </svg>
//                     </span>
//                     <span>
//                       <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
//                         xmlns="http://www.w3.org/2000/svg">
//                         <path fill-rule="evenodd" clip-rule="evenodd"
//                           d="M0.340728 29.2063C0.722095 29.5875 1.34043 29.5875 1.72188 29.2063L29.0656 1.8625C29.4469 1.48106 29.4469 0.862698 29.0656 0.481253C28.6842 0.100002 28.0658 0.100002 27.6844 0.481253L0.340728 27.825C-0.0406592 28.2064 -0.0406592 28.8248 0.340728 29.2063Z"
//                           fill="currentColor"></path>
//                         <path fill-rule="evenodd" clip-rule="evenodd"
//                           d="M28.375 26.5625C28.9143 26.5625 29.3516 26.1252 29.3516 25.5859V1.17188C29.3516 0.632618 28.9143 0.195312 28.375 0.195312H3.96094C3.42168 0.195312 2.98438 0.632618 2.98438 1.17188C2.98438 1.71113 3.42168 2.14844 3.96094 2.14844H27.3984V25.5859C27.3984 26.1252 27.8357 26.5625 28.375 26.5625Z"
//                           fill="currentColor"></path>
//                       </svg>
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             )} 

//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HeroService;