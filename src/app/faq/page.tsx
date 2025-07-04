 
'use client'

import FaqArea from '@/components/faq/FaqArea';
import Wrapper from '@/layouts/Wrapper';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';



// export const metadata = {
//   title: "Faq VDF Group - Domestic, Commercial & Industrial Electricians, Glasgow",
// };

const index = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <FaqArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
};

export default index;