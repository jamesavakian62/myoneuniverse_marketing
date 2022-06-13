import Link from "next/link";
// import Mega from "./nav.js";
// import { useRouter } from 'next/router'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import { useContext } from 'react'

export default function Header() {
  return (
    <header>
      <div className="container">
        <ul>
          <li className="menu">
            <Link href="/" passHref>
              <h2>Dev Bl11og</h2>
            </Link>
            <Link href="/" passHref>
              <h2>Dev Blo11g</h2>
            </Link>
            <Link href="/" passHref>
              <h2>Dev Blog11</h2>
            </Link>
            <Link href="/" passHref>
              <h2>Dev Blog1</h2>
            </Link>
            <Link href="/" passHref>
              <h2>Dev Blog11</h2>
            </Link>
            <Link href="/" passHref>
              <h2>ddddd</h2>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
