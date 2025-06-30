import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface DetailsBannerProps {
  imageOne: StaticImageData;
  imageTwo: StaticImageData;
}

const DetailsBanner: React.FC<DetailsBannerProps> = ({ imageOne, imageTwo }) => {
  return (
    <>
      <div className="cs_height_150 cs_height_lg_60"></div> 
      <div className="container">
        <div className="d-flex gap-2 gap-md-5">
          <div>
            <Image src={imageOne} alt="image-1" />
          </div>
          <div>
            <Image src={imageTwo} alt="image-2" />
          </div>
        </div>
      </div> 
    </>
  );
};

export default DetailsBanner;
