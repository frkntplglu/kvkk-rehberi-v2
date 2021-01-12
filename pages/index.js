import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import MainBanner from "../components/MainBanner";
import TestButton from "../components/TestButton";

function Homepage() {
  return (
    <Layout>
      <Head>
        <title>KVKK Rehberi Anasayfa</title>
        
      </Head>
      <TestButton />
      <MainBanner />
      <div className="home-section">
        <div className="container">
          <div className="home-section-text aos-init aos-animate" data-aos="fade-right">
            <h2>KVKK Nedir?</h2>
            <p>
            7 Nisan 2016 tarihinde yayımlanarak yürürlüğe giren ‘6698 sayılı Kişisel Verilerin Korunması Kanunu’; kişisel verilerin işlenmesinde başta özel hayatın gizliliği olmak üzere kişilerin temel hak ve özgürlüklerini korumak ve kişisel verileri işleyen gerçek ve tüzel kişilerin yükümlülükleri ve uyacakları kuralları düzenleme amacını taşımaktadır
            </p>
            <p>
            Kişisel verilerin elde edilmesi, kaydedilmesi, depolanması, muhafaza edilmesi, değiştirilmesi, yeniden düzenlenmesi, açıklanması, aktarılması, devralınması veya sınıflandırılması gibi her türlü işlem kişisel veri işleme olarak kabul edilmektedir ve kanunda düzenlenen kurallara uygun olmalıdır.
            </p>
            <p>
            İnternet üzerinden iş ve işlemler gerçekleştiren her kurum 5651 sayılı kanuna; kişisel bir bilgi tutan her kurum ise KVKK’ na tabidir.
            </p>
          </div>
          <div className="home-section-image aos-init aos-animate"  data-aos="fade-left">
            <img src="images/kvkk-nedir.png" alt="KVKK Nedir?"/>
          </div>
        </div>
      </div>

      <div className="home-section home-section-blue">
        <div className="container">
        <div className="home-section-image aos-init aos-animate" data-aos="fade-left">
            <img src="images/kisisel-veri-nedir.png" alt="Kişisel Veri Nedir?"/>
          </div>
          <div className="home-section-text aos-init aos-animate" data-aos="fade-right">
            <h2>Kişisel Veri Nedir?</h2>
            <p>
            Kanundaki tanımıyla; kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgiyi ifade etmektedir. Kişinin adı, soyadı, vatandaşlık numarası, banka bilgileri gibi pek çok başlıkta sınıflandırılmaktadır.
            </p>
          </div>
          
        </div>
      </div>

      <div className="home-section">
        <div className="container">
        
          <div className="home-section-text aos-init aos-animate" data-aos="fade-right">
            <h2>Kimler Kişisel Verileri Koruma Kanuna Tabidir?</h2>
            <p>
            Kişisel veri bulunduran, aktaran ya da saklayan her gerçek ya da tüzel kişi kanuna uymakla yükümlüdür.
            </p>
          </div>
          <div className="home-section-image aos-init aos-animate" data-aos="fade-left">
            <img src="images/verileri-koruma-kanuna.png" alt="Kimler Kişisel Verileri Koruma Kanuna Tabidir?"/>
          </div>
          
        </div>
      </div>

      <div className="home-section home-section-green">
        <div className="container">
        <div className="home-section-image aos-init aos-animate" data-aos="fade-right">
            <img src="images/verbise-kayit-yukumlugu.png" alt="Verbis’e Kayıt Yükümlülüğü Nedir?"/>
          </div>
          <div className="home-section-text aos-init aos-animate" data-aos="fade-left">
            <h2>Verbis’e Kayıt Yükümlülüğü Nedir?</h2>
            <p>
            Yıllık çalışan sayısı 50’den çok veya yıllık mali bilanço toplamı 25 milyon TL’den çok olan gerçek ve tüzel kişi veri sorumluları ile yurtdışında yerleşik gerçek ve tüzel kişi veri sorumluları için VERBİS’e kayıt olmak zorunludur.
            </p>
          </div>
          
        </div>
      </div>

      <div className="home-section">
        <div className="container">
        
          <div className="home-section-text aos-init aos-animate" data-aos="fade-left">
            <h2>Kanuna Göre Belirlenen Cezalar Nelerdir?</h2>
            <p>
            Farklı başlıklarda 5.000 TL ile 1.000.000 TL arasındaki tutarlarda idari para cezaları uygulanmaktadır.
            </p>
          </div>
          <div className="home-section-image aos-init aos-animate" data-aos="fade-right">
            <img src="images/kanuna-goren-cezalar.png" alt="Kanuna Göre Belirlenen Cezalar Nelerdir?"/>
          </div>
          
        </div>
      </div>
      
    </Layout>
  );
}

export default Homepage;
