import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import PageContent from "../components/PageContent";

function Page() {
  return (
    <Layout>
      <Head>
        <title>
          KVKK Rehberi - Kişisel Verilerin Korunması Kanunu Uyumluluk Denetimi
        </title>
      </Head>
      <PageContent pageTitle="KVKK Hizmetleri">
        <h2>EĞİTİM KARELERİMİZ</h2>
        <h2>KVKK DANIŞMANLIĞI</h2>
        <p>
          İhtiyacınıza göre, kısmi süreli ya da sürekli KVKK danışmanlığı
          hizmeti sunmaktayız.
        </p>
        <p>
          6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamındaki idari ve
          teknik tedbirler çerçevesinde; kanuna tabi gerçek ve tüzel kişilerin
          hazırlanması gereken dökümanlar olduğu gibi, günlük iş süreçlerinin de
          idari tedbirlerdeki başlıklara uygun hale getirilmesi ya da mevcut
          hazırlık çalışmalarının da bu başlıklara ve kurumun taleplerine uygun
          hale olarak güncellenmesi gerekmektedir.
        </p>
        <p>
          Rasyotek’in bütünleşik danışmanlık hizmetlerinin içeriği ve konu
          hakkında diğer detaylar için lütfen bizimle iletişime geçiniz.
        </p>
        <p>
          <a href="/iletisim" className="colored-link">
            İletişime Geçiniz...
          </a>
        </p>
        <h2>KVKK DENETİMİ</h2>
        <p>
          Kişisel Verileri Koruma Kanunu kapsamında birçok kurum idari ve teknik
          tedbir başlıklarında belli başlı hazırlıklarını yapmış bulunmaktadır.
          Yapılan bu çalışmaların tedbirlerin genel yapısına uygunluğunun ve
          mevcut süreçlerin kanun kapsamına girip girmediği konusunda denetim
          hizmeti sunmaktayız.
        </p>
        <p>
          Denetim hizmetimizin içeriği ve konu hakkında diğer detaylar için
          lütfen bizimle iletişime geçiniz.
        </p>
        <p>
          <a href="/iletisim" className="colored-link">
            İletişime Geçiniz...
          </a>
        </p>
        <h2>KVKK EĞİTİMİ</h2>
        <p>
          <strong>
            Kanun kapsamında kurum personeline KVKK eğitimlerinin verilmesi
            zorunludur.
          </strong>
          Rasyotek hukuki ve teknik tedbirleri bütünleşik olarak tek bir
          farkındalık eğitiminde sunmaktadır. Hukuk ve bilişim uzmanlarının
          verdiği eğitimlerimizde, ilgili idari ve teknik tedbirler tüm
          yönleriyle değerlendirilmekte, dikkat edilmesi gereken başlıkları ile
          detaylı anlatılmakta, farklı yorumlanabilen konularda günlük hayatta
          yaşanan olaylardan örnekler verilmektedir.
        </p>
        <p>
          <strong>
            Kurumsal KVKK Eğitimi (Firma personelinin KVKK süreçleri ile ilgili
            bilgilendirilmesi):
          </strong>
          .
        </p>
        <ul>
          <li>
            - 6698 sayılı KVKK kapsamında yer alan kavramlar ( Kişisel Veri –
            Özel Nitelikli Kişisel Veri – Veri Sorumlusu – Veri İşleyen –Açık
            Rıza – İlgili Kişi vs.)
          </li>
          <li>- Veri Sorumlusu ve Veri İşleyen’ in Sorumlulukları</li>
          <li>- Verilerin İşlenme Süreçleri - Alınması Gereken Önlemler</li>
          <li>
            - Açık Rıza – Rıza Alırken Dikkat Edilecek Hususlar - İstisna
            Halleri)
          </li>
          <li>
            - Verilerin Silinmesi - Yok Edilmesi - Anonim Hale Getirilmesi
          </li>
          <li>- Verilerin Yurtiçi ve Yurtdışına Aktarılması</li>
          <li>- VERBİS ( Veri Sorumluları Sicili)</li>
          <li>
            - Yükümlülüklere - KVKK ve Türk Ceza Kanunu kapsamında -uyulmayan
            hallerde uygulanacak adli ve idari yaptırımlar
          </li>
          <li>
            - Yetkilendirme Matrisi ve Yetki Kontrolü Süreçlerinin Yönetimi
          </li>
          <li>- Loglama Sisteminin Kontrolü</li>
          <li>- Ağ Güvenliğine İlişkin Teknik Tedbirler</li>
          <li>- Veri Güvenliğinin Sağlanamaması Riski</li>
          <li>- Veri Sızıntısı Örnek Vaka İncelemeleri</li>
          <li>- Siber Güvenlik</li>
          <li>- KVKK ve Regülasyonlar için Doğru Teknoloji Yatırımı</li>
          <li>- Kişisel Veri Güvenliğini Sağlamaya Yönelik Tedbirler</li>
          <li>- Silme, Yok Etme, Anonim Hale Getirme nedir?</li>
          <li>
            - Sızma Testi, Veri Maskeleme, Güvenlik Duvarları ve Anti Virüs
            Yazılımları Hakkında Bilgilendirmeler
          </li>
        </ul>
        <p>
          <strong>“KVKK Danışmanlığı / Veri Güvenliği” </strong> konusunda
          kanunu ve size özel süreçleri detaylandırmak üzere dilediğiniz zaman
          bizimle iletişime geçebilirsiniz.
        </p>
      </PageContent>
    </Layout>
  );
}

export default Page;
