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
              <Link href="/kvkk-hizmetleri"><a>KVKK Hizmetlerimiz</a></Link>
              <ul>
                <li>
                  <Link href="/kvkk-hizmetleri"><a>KVKK Hizmetlerimiz</a></Link>
                </li>
                <li>
                  <Link href="/kvkk-denetimi"><a>KVKK Denetimi</a></Link>
                </li>
                <li>
                  <Link href="/kvkk-egitimi"><a>KVKK Eğitimi</a></Link>
                </li>
                <li>
                  <Link href="/kvkk-danismanligi"><a>KVKK Danışmanlığı</a></Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/test"><a>KVKK Hazırlık Testi</a></Link>
            </li>
            <li className="has-submenu">
              <Link href="/makaleler"><a>Blog</a></Link>
              <ul>
                <li>
                  <Link shallow href="/makaleler"><a>Makaleler</a></Link>
                </li>
                <li>
                  <Link href="/videolar"><a>Videolar</a></Link>
                </li>
              </ul>
            </li>
            <li className="has-submenu">
              <Link href="/tanimlar"><a>Bilgi Bankası</a></Link>
              <ul>
                <li>
                  <Link href="/tanimlar"><a>Tanımlar</a></Link>
                </li>
                <li>
                  <Link href="/kanunlar"><a>Kanunlar</a></Link>
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
