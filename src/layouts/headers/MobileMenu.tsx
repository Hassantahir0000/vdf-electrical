'use client'

import Link from 'next/link';
import React, { useState } from 'react';



interface DataType {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menu?: {
    id: number;
    title: string;
    link: string;
  }[]
}


const menu_data: DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "/",
		has_dropdown: false,
	},
	{
		id: 2,
		title: "About",
		link: '/about',
		has_dropdown: false
	},
	{
		id: 3,
		title: "Domestic Electrical",
		link: "/domestic-electrical",
		has_dropdown: false,
	},
	{
		id: 5,
		title: "Commercial Electrical",
		link: "/commercial-electrical",
		has_dropdown: false,
	},
		{
		id: 6,
		title: "Industrial Electrical",
		link: "/industrial-electrical",
		has_dropdown: false,
	},
	// {
	// 	id: 7,
	// 	title: "Blog",
	// 	link: "/blog",
	// 	has_dropdown: true,
	// 	sub_menu: [
	// 		{
	// 			id: 1,
	// 			title: "Blog",
	// 			link: "/blog",
	// 		},
	// 		{
	// 			id: 2,
	// 			title: "Blog Details",
	// 			link: "/blog-details",
	// 		}
	// 	]
	// },
		{
		id: 7,
		title: "Renewable Energy",
		link: "/renewable-energy",
		has_dropdown: false,
	},
	{
		id: 8,
		title: "Contact",
		link: "/contact",
		has_dropdown: false,
	}


]


const MobileMenu = ({active, navTitle, openMobileMenu} : any) => {

  return (
    <>
      <ul className="cs_nav_list" style={{ display: active ? "block" : "none" }}>
        {menu_data.map((menu) => (
          <li style={{ marginRight:"28px !important"}} key={menu.id} className={`${menu.has_dropdown ? "menu-item-has-children" : ""} ${navTitle === menu.title ? "active" : ""}`}>
            <Link style={{fontSize:"14px"}} href={menu.link}>{menu.title}</Link>
            {menu.has_dropdown && (
              <>
              <ul className="cs_mega_wrapper" style={{ display: navTitle === menu.title ? "block" : "none", }}>
                {menu.sub_menu?.map((subMenu) => (
                  <li key={subMenu.id}>
                    <Link href={subMenu.link}>{subMenu.title}</Link>
                  </li>
                ))}
              </ul>
              <span onClick={() => openMobileMenu(menu.title)} className={`cs_munu_dropdown_toggle ${navTitle === menu.title ? "active" : ""}`}></span>               
              </>
            )}
          </li>
        ))} 
      </ul>

       
    </>
  );
};

export default MobileMenu;