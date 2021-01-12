import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import PageContent from "../components/PageContent";

function Page() {
  return (
    <Layout>
      <Head>
        <title>KVKK Rehberi - İletişim</title>
      </Head>
      <PageContent pageTitle="İletişim">
        <div className="contact">
          <div className="contact-info">
            <div className="contact-title">İletişim bilgileri</div>
            <h1>Rasyotek İnsan Kaynakları Bilişim A.Ş.</h1>
            <ul>
              <li>
                <span>Adres:</span>
                Yenibosna Merkez Mah. Kavak Sok. No: 11 Business Port Kat: 8
                Ofis No: 38-39 Bahçelievler / İSTANBUL
              </li>
              <li>
                <span>Telefon:</span>
                0212 803 18 74 - 75
              </li>
              <li>
                <span>Fax:</span>
                0212 803 18 76
              </li>
              <li>
                <span>E-mail:</span>info@rasyotek.com.tr
              </li>
            </ul>
            <Link href="tel://+904444908">
              <a className="call-support">444 4 908</a>
            </Link>
          </div>
          <div className="contact-form">
            <div className="contact-title">İletişim formu</div>
            <form>
              <input className="half" type="text" placeholder="Ad" />
              <input className="half" type="text" placeholder="Soyad" />
              <input type="text" placeholder="E-posta adresiniz" />
              <input type="text" placeholder="Telefon" />
              <input type="text" placeholder="Ünvan" />
              <input type="text" placeholder="Şirket" />
              <select>
                <option>Bilgi Talep Edilen Hizmet</option>
                <option>KVKK Genel Danışmanlık</option>
                <option>KVKK Denetim Hizmeti</option>
                <option>KVKK Eğitimi Hizmeti</option>
              </select>
              <textarea placeholder="Mesajınız"></textarea>
              <div className="clarification-text"></div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="Check1"
                  id="Check1"
                  value="false"
                  required=""
                />
                <label htmlFor="Check1">
                  İşbu Aydınlatma Metni’ ni okuduğumu, bu kapsamda RASYOTEK’ in
                  bir veri işleme süreci gerçekleştirdiği hususu hakkında tam ve
                  eksiksiz olarak bilgi sahibi olduğumu ve verilerin silinmesi
                  ile ilgili olarak bilgilendirildiğimi kabul, beyan ve taahhüt
                  ederim.
                </label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="Check2"
                  id="Check2"
                  value="false"
                  required=""
                />
                <label htmlFor="Check2">
                  Web sitesine giriş yaptığım andan başlayarak, iletişim formunu
                  kullanmam da dahil ayrılmamla son bulan süreçte, Aydınlatma
                  Metninde ayrıntılı olarak bahsedilen verilerin işlendiği
                  konusunda bilgilendirildiğimi ve bu kapsamda RASYOTEK
                  tarafından gerçekleştirilecek veri işleme sürecine açık
                  rızamın olduğunu kabul, beyan ve taahhüt ederim.
                </label>
              </div>
              <div className="captcha"></div>
              <button>Gönder</button>
            </form>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d96337.51784924384!2d28.74547473041088!3d41.0132778020364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x14cabbacffffffe9%3A0xf70378dd120b6a9a!2sRasyotek+%C4%B0nsan+Kaynaklar%C4%B1+Bili%C5%9Fim+A.%C5%9E.%2C+Yenibosna+Merkez+Mahallesi+Kavak+Sokak%2C+No%3A11+Kat%3A8+Business+Port+Ofis+No%3A38-39%2C+34197+Bah%C3%A7elievler%2F%C4%B0stanbul!3m2!1d41.013298999999996!2d28.815514999999998!4m5!1s0x14cabbacffffffe9%3A0xf70378dd120b6a9a!2sRasyotek+%C4%B0nsan+Kaynaklar%C4%B1+Bili%C5%9Fim+A.%C5%9E.%2C+Yenibosna+Merkez+Mahallesi+Kavak+Sokak%2C+No%3A11+Kat%3A8+Business+Port+Ofis+No%3A38-39%2C+34197+Bah%C3%A7elievler%2F%C4%B0stanbul!3m2!1d41.013298999999996!2d28.815514999999998!5e0!3m2!1str!2str!4v1483893313215"
              width="100%"
              height="500"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </PageContent>
    </Layout>
  );
}

export default Page;
