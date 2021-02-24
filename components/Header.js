import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <img src="/images/logo.png" alt="KVKK Rehberi"></img>
          </Link>
        </div>
        <div className="main-menu">
          <div className="menu-btn">
            <button type="button">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <ul>
            <li>
              <Link href="/hakkimizda">Hakkımızda</Link>
            </li>
            <li className="has-submenu">
              <Link href="/kvkk-hizmetleri">KVKK Hizmetlerimiz</Link>
              <ul>
                <li>
                  <Link href="/kvkk-hizmetleri">KVKK Hizmetlerimiz</Link>
                </li>
                <li>
                  <Link href="/kvkk-denetimi">KVKK Denetimi</Link>
                </li>
                <li>
                  <Link href="/kvkk-egitimi">KVKK Eğitimi</Link>
                </li>
                <li>
                  <Link href="/kvkk-danismanligi">KVKK Danışmanlığı</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/test">KVKK Hazırlık Testi</Link>
            </li>
            <li className="has-submenu">
              <Link href="/makaleler">Blog</Link>
              <ul>
                <li>
                  <Link href="/makaleler">Makaleler</Link>
                </li>
                <li>
                  <Link href="/videolar">Videolar</Link>
                </li>
              </ul>
            </li>
            <li className="has-submenu">
              <Link href="/tanimlar">Bilgi Bankası</Link>
              <ul>
                <li>
                  <Link href="/tanimlar">Tanımlar</Link>
                </li>
                <li>
                  <Link href="/kanunlar">Kanunlar</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/iletisim">İletişim</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
