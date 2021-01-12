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
      <PageContent  pageTitle="KVKK Eğitimi">
        <h1>KVKK Eğitimi </h1>
        <p>
        7 Nisan 2016 tarihinde hayatımıza giren 6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) hem sosyal hayatımızda hem de iş hayatımızda gerçekleştirdiğimiz faaliyetlerde birçok konuyu gündeme getirmiş oldu. Bu başlıklardan birisi de “KVKK” mevzuatı hakkında kişilerin bilgilendirilmesidir.
        </p>
        <p>
        Kanunda ve daha sonra “Kişisel Verileri Koruma Kurumu” tarafından hazırlanan diğer yayınlarda; Türkiye’de faaliyet gösteren işletmelerin çalışanlarına “KVKK Farkındalık Eğitimleri” vermesi zorunluluğuna atıfta bulunulmaktadır.
        </p>
        <p>
        İşletmeler, çalışanlarından kaynaklı kişisel veri ihlallerinde, KVKK ile ilgili eğitim ve bilgilendirmelerin ispat edilmesi gerekeceğini unutmamalıdır.
        </p>
        <p>
        Rasyotek tarafından geliştirilen <a  className="dark-link" href="https://superportal.com" rel="dofollow">Süper Portal</a> platformunda yer alan dijital eğitim altyapısı “Rasyotek Akademi” ile tüm çalışanların “KVKK Farkındalık Eğitimleri”ni dijital olarak istediği zaman istediği yerde izlemesi mümkün olacaktır. Bu eğitimi izleyen kişilerin farkındalığı ve ispatı eğitim sonunda yapılan test şeklinde sınavlar ve sistemsel olarak alınan log kayıtları ile sağlanmaktadır.
        </p>
        <p>
        Detaylar için aşağıdaki linki inceleyebilirsiniz:
        </p>
        <p>
          <a className="dark-link" href="https://www.rasyotekakademi.com/egitimlerimiz/kvkk-personel-farkindalik-egitimi">KVKK Personel Farkındalık Eğitimi</a>
        </p>
        <p style={{color:"#2c415a"}}><strong>KVKK Farkındalık Eğitim İçeriği</strong></p>
        <ol className="syllabus">
          <li>
          1.	Kişisel Verilerin Korunması İhtiyacı ve KVKK
          </li>
          <li>
          2.	Kişisel Veri Nedir?
          </li>
          <li>
          3.	Özel Nitelikli Kişisel Veri Nedir?
          </li>
          <li>
          4.	İlgili Kişi Kimdir? İlgili Kişinin Hakları Nelerdir?
          </li>
          <li>
          5.	Kişisel Verilerin İşlenmesi
          </li>
          <li>
          6.	Veri Sorumlusu ve Veri İşleyen
          </li>
          <li>
          7.	Açık Rıza
          </li>
          <li>
          8.	Kişisel Verilerin İşlenmesinde Genel İlkeler
          </li>
          <li>
          9.	Kişisel Verilerin İşlenme Şartları
          </li>
          <li>
          10.	Aydınlatma Yükümlülüğü
          </li>
          <li>
          11.	Kişisel Verilerin Aktarılması ve Aktarım Şartları
          </li>
          <li>
          12.	Kişisel Verilerin İmha Edilmesi
          </li>
          <li>
          13.	Suçlar ve Kabahatler
          </li>
          <li>14.	Eğitim Sonu ve Kapanış</li>
        </ol>
      </PageContent>
    </Layout>
  );
}

export default Page;
