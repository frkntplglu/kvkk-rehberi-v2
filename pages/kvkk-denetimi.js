import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import PageContent from "../components/PageContent";

function Page() {
  return (
    <Layout>
      <Head>
        <title>KVKK Süreç Denetimi Hizmeti – KVKK Rehberi</title>
      </Head>
      <PageContent pageTitle="KVKK Denetimi">
        <h1>KVKK Denetimi</h1>
        <p>
          Bu denetim kapsamında, avukatımız ve bilişim uzmanımız, mevcut
          süreçlerinizi ve KVKK kapsamındaki hazırlıklarınızı inceleyerek hatalı
          ve eksik kısımlar tespit eder, detaylı bir durum analiz raporu
          hazırlamaktadır.
        </p>
        <h2>
          KVKK Kapsamında İdari Tedbirlerin Alınması ve Halihazırda Alınan İdari
          Tedbirlerin Denetimi
        </h2>
        <ul>
          <li>
            - Kişisel Verilerin Korunması Politikasının İncelenerek Gerekli
            Revizyonlarının Yapılması
          </li>
          <li>- Kişisel Veri İşleme Envanterinin Oluşturulması</li>
          <li>- Aydınlatma Metninin Oluşturulması</li>
          <li>- Başvuru Formunun Oluşturulması</li>
          <li>
            - Şirketin Personel Sözleşmelerinin İncelenerek KVKK’ ya Uygun Hale
            Getirilmesi
          </li>
          <li>
            - Tedarik Sözleşmelerinin İncelenerek KVKK’ ya Uygun Hale
            Getirilmesi
          </li>
          <li>
            - Gizlilik Sözleşmelerinin İncelenerek KVKK’ ya Uygun Hale
            Getirilmesi
          </li>
          <li>
            - Şirket Personelinin KVKK kapsamında günlük işleyişte uymaları
            gerekli prosedürlerin anlatılması
          </li>
          <li>- Şirketin VERBİS’ e kayıt aşamasına hazır hale getirilmesi</li>
        </ul>
        <h2>Teknik Tedbirler Kapsamında yapılacak Sağlık Taraması işlemleri</h2>
        <ul>
          <li>- Web Uygulamaları Hakkında Bilgiler</li>
          <li>- Sunucu ve Sunucu İşletim Sistemleri</li>
          <li>- Network Sistemleri</li>
          <li>- Domain Sistemleri</li>
          <li>- DNS Servisleri</li>
          <li>- E-Posta Sistemleri</li>
          <li>- Veri Tabanı Sistemleri</li>
          <li>- İletişim Alt Yapısı</li>
          <li>- Firewall Rule (Kural) İncelemesi,</li>
        </ul>
      </PageContent>
    </Layout>
  );
}

export default Page;
