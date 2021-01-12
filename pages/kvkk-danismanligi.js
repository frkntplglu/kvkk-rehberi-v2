import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import PageContent from "../components/PageContent";

function Page() {
  return (
    <Layout>
      <Head>
        <title>KVKK Danışmanlığı Hizmeti – KVKK Rehberi</title>
      </Head>
      <PageContent pageTitle="KVKK Danışmanlığı">
        <h1>KVKK Danışmanlığı</h1>
        <p>Sürekli danışmanlık hizmeti ile destek sağladığımız başlıklar:</p>
        <ul>
          <li>
            - Kanun kapsamında hazırlanması gereken politika, veri envanteri
            gibi dokümanları şirketin süreçlerine uygun şekilde hazırlanmasını
            sağlamak,
          </li>
          <li>
            - Teknik tedbirler kapsamında yetki ve erişim matrislerinin
            oluşturulması ve güncellenmesi,
          </li>
          <li>
            - Şirketin farklı sistemlerinde dolaşan kişisel veriyi saldırılardan
            ve kayıplardan korumak için yöntemler oluşturmak,
          </li>
          <li>
            - Kanun kapsamında yaşanacak gelişmeler ile ilgili sürekli bilgi
            vermek,
          </li>
          <li>
            - Felaket senaryoları, test e-Postaları, uzaktan ya da yerinde
            denetim faaliyetleri ile süreçleri denetim altında tutmak,
          </li>
          <li>
            - Düzenli eğitim organizasyonları ile personelinizin konu hakkında
            farkındalığını oluşturmak ve her geçen gün arttırmak
          </li>
          <li>
            - Sertifikalı eğitimler ve online testler ile ölçülebilir bilgi
            seviyesini standart hale getirmek
          </li>
        </ul>
      </PageContent>
    </Layout>
  );
}

export default Page;
