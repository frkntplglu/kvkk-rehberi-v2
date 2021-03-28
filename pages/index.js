import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Image from 'next/image';
import MainBanner from "../components/MainBanner";
import TestButton from "../components/TestButton";
import HomeBar from "../components/HomeBar";

function Homepage() {
  return (
    <Layout>
      <Head>
        <title>KVKK Rehberi Anasayfa</title>
        
      </Head>
      <TestButton />
      <MainBanner />
      <HomeBar
        title="KVKK Nedir?"
        animationContent="fade-right"
        animationImage="fade-left"
        imageURL="/images/kvkk-nedir.png"
      >
        <p>
            7 Nisan 2016 tarihinde yayımlanarak yürürlüğe giren ‘6698 sayılı Kişisel Verilerin Korunması Kanunu’; kişisel verilerin işlenmesinde başta özel hayatın gizliliği olmak üzere kişilerin temel hak ve özgürlüklerini korumak ve kişisel verileri işleyen gerçek ve tüzel kişilerin yükümlülükleri ve uyacakları kuralları düzenleme amacını taşımaktadır
            </p>
            <p>
            Kişisel verilerin elde edilmesi, kaydedilmesi, depolanması, muhafaza edilmesi, değiştirilmesi, yeniden düzenlenmesi, açıklanması, aktarılması, devralınması veya sınıflandırılması gibi her türlü işlem kişisel veri işleme olarak kabul edilmektedir ve kanunda düzenlenen kurallara uygun olmalıdır.
            </p>
            <p>
            İnternet üzerinden iş ve işlemler gerçekleştiren her kurum 5651 sayılı kanuna; kişisel bir bilgi tutan her kurum ise KVKK’ na tabidir.
            </p>
      </HomeBar>
      <HomeBar
        title="Kişisel Veri Nedir?"
        animationContent="fade-right"
        animationImage="fade-left"
        imageURL="/images/kisisel-veri-nedir.png"
        color="blue"
        align="left-image">
        <p>
            Kanundaki tanımıyla; kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgiyi ifade etmektedir. Kişinin adı, soyadı, vatandaşlık numarası, banka bilgileri gibi pek çok başlıkta sınıflandırılmaktadır.
            </p>
      </HomeBar>
      <HomeBar
        title="Kimler Kişisel Verileri Koruma Kanuna Tabidir?"
        animationContent="fade-right"
        animationImage="fade-left"
        imageURL="/images/verileri-koruma-kanuna.png"
      >
        <p>
            Kişisel veri bulunduran, aktaran ya da saklayan her gerçek ya da tüzel kişi kanuna uymakla yükümlüdür.
            </p>
      </HomeBar>
      <HomeBar
        title="Verbis’e Kayıt Yükümlülüğü Nedir?"
        animationContent="fade-right"
        animationImage="fade-left"
        imageURL="/images/verbise-kayit-yukumlugu.png"
        color="green"
        align="left-image">
        <p>
            Yıllık çalışan sayısı 50’den çok veya yıllık mali bilanço toplamı 25 milyon TL’den çok olan gerçek ve tüzel kişi veri sorumluları ile yurtdışında yerleşik gerçek ve tüzel kişi veri sorumluları için VERBİS’e kayıt olmak zorunludur.
            </p>
      </HomeBar>
      <HomeBar
        title="Kanuna Göre Belirlenen Cezalar Nelerdir?"
        animationContent="fade-right"
        animationImage="fade-left"
        imageURL="/images/kanuna-goren-cezalar.png"
      >
        <p>
            Farklı başlıklarda 5.000 TL ile 1.000.000 TL arasındaki tutarlarda idari para cezaları uygulanmaktadır.
            </p>
      </HomeBar>      
    </Layout>
  );
}

export default Homepage;
