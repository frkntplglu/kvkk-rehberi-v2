import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <Link href="/">
            <img src="/images/rasyotek-logo.png" alt="" />
          </Link>
        </div>
        <div className="footer-nav">
          <ul>
            <li>
              <Link href="/hakkimizda">Hakkımızda</Link>
            </li>
            <li>
              <Link href="/cerez-politikasi">Çerez Politikamız</Link>
            </li>
            <li>
              <Link href="/aydinlatma-metni">Aydınlatma Metni</Link>
            </li>
            <li>
              <Link href="/">KVKK Başvuru Formu</Link>
            </li>
            <li>
              <Link href="/kvkk-hizmetleri">KVKK Hizmetlerimiz</Link>
            </li>
            <li>
              <Link href="/tanimlar">Tanımlar</Link>
            </li>
            <li>
              <Link href="/makaleler">Makaleler</Link>
            </li>
            <li>
              <Link href="/videolar">Videolar</Link>
            </li>
            <li>
              <Link href="/kanunlar">Kanunlar</Link>
            </li>
            <li>
              <Link href="/basindabiz">Basında Biz</Link>
            </li>
          </ul>
        </div>
        <div className="rasyotek-logo">
          <a href="" target="_blank">
            <img
              src="/images/rasyotek-teknolojik-insan.png"
              alt="Rasyotek AŞ"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
