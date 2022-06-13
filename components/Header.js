import Link from "next/link";
// import Mega from "./nav.js";
// import { useRouter } from 'next/router'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import { useContext } from 'react'

import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="container">
        <ul>
          <li className="menu">
            <Link href="http://www.OpticalAutomation.com" passHref>
              <h2>Optical Automation</h2>
            </Link>
            <Image
              className="menu_image"
              alt="logo"
              src="../public/images/posts/oa1.png"
              width="50px"
              height="50px"
            />
            <Link href="/" passHref>
              <h2>Americana Place</h2>
            </Link>
            <Link href="/" passHref>
              <h2>ShopperLady</h2>
            </Link>
            <Link href="/" passHref>
              <h2>MyPersonalOrganizer</h2>
            </Link>
            <Link href="/" passHref>
              <h2>MyBusinessOrganizer</h2>
            </Link>
            <Link href="/" passHref>
              <h2>MyTechnologyHouse</h2>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
