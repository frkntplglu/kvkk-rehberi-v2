import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import PageContent from "../components/PageContent";

function Page() {
  return (
    <Layout>
      <Head>
        <title>KVKK Rehberi - Rasyotek İnsan Kaynakları Bilişim A.Ş.</title>
      </Head>
      
      <PageContent pageTitle="Hakkımızda">
        <p>
          2015 yılında kurulan Rasyotek tüm faaliyet alanlarında, teknolojiyi en
          üst seviyede kullanarak uzmanlık gerektiren konularda dijital
          hizmetler sunmaktadır.
        </p>
        <p>
          <strong>Rasyotek</strong>, teknolojik altyapısı ve geliştirdiği
          yazılımları ile <strong>“Teknolojik İnsan”</strong> kurgusunda{" "}
          <strong>“Bütünleşik Hizmetler”</strong> sunmaktadır. Uzmanlık
          alanlarını Üretici, Esnek ve Bağımsız yapısını Güvenli ve Teknolojik
          dijital dönüşüm sürecinde hayata geçirir.
        </p>
        <p>
          İşletmelerin ana faaliyet konuları, yani varlık sebepleri dışında
          kalan tüm iş süreçlerinde, teknolojik verimlilik esasıyla asiste
          hizmetler sunan Rasyotek; bu sayede günümüz iş dünyasında, farklı
          uzmanlık alanlarını işletmeler adına üstlenerek, müşterilerinin asıl
          işlerine olan konsantrasyonuna imkan tanır. Rekabet gücü artan
          işletmeler, aynı zamanda operasyon yüküne katlanmadan arzu ettikleri
          teknolojik derinliklere ulaşarak verimliliklerini bu alanlarda da
          arttırırlar.
        </p>
        <p>
          Rasyotek; hizmet verdiği firmalar için Büyük Veriyi yorumlayan,
          firmaların verileriyle analizler üreten, hızlı ve verimli raporlama
          çözümleri ile hatalı işlemlerden uzak entegratör yazılımları ile
          faaliyetlerine devam etmektedir.
        </p>
        <p>
          Bilişim kabiliyetlerini, konusunda uzman personelleri ile geliştirdiği
          yüksek standartlı raporlar ve merkezi hizmetler olarak müşterilerine
          sunmaktadır.
        </p>
        <p>
          Sosyal faaliyetleri önemseyen Rasyotek, yine bu faaliyetlerini de
          uzmanlık alanında yoğunlaştırmıştır. Verdiği bilişim eğitimleri ile
          birçok gencimizin geçerli meslek grupları içerisinde bulunan bilişim
          alanında iş sahibi olmasını sağlamaktadır.
        </p>
        <p>
          Yazılımlarını geliştirdiği Teknokent ofisi ve Genel Müdürlük merkezi
          ile ülke genelinde tüm illerde hizmet sağlamaktadır.{" "}
        </p>
        <p>
          Milli Eğitim Bakanlığına bağlı Özel Öğretim Kurumu Ruhsatı,Çalışma
          Bakanlığına bağlı Özel İstihdam Bürosu Ruhsatı gibi çeşitli kurum ve
          kuruluşlarca yetkilendirilmiş ehliyetlere sahip Rasyotek, güvenilir
          alt yapısı ile hizmetlerine devam etmektedir.
        </p>
      </PageContent>
    </Layout>
  );
}

export default Page;
