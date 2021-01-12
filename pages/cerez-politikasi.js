import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import PageContent from "../components/PageContent";
import AccordionElement from "../components/AccordionElement";

function Page() {
  return (
    <Layout>
      <Head>
        <title>KVKK Rehberi - Çerez Politikası</title>
      </Head>
      <PageContent pageTitle="Çerez Politikası">
        <h1 className="text-center">ÇEREZ POLİTİKASI</h1>
        <AccordionElement title="1. Amaç ve Veri Sorumlusunun Kimliği">
          <p>Rasyotek İnsan Kaynakları Bilişim A.Ş. (“Rasyotek”) olarak web sitemizde (www.rasyotek.com.tr) kullanılmakta olan çerez (cookie) türleri, çerezlerin neden kullanıldıkları ve bu çerezlerin yönetilmesi hakkında 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamındaki yükümlülüklere uymak amacıyla bilgilendirmede bulunulmuştur.</p>
          <p>İşbu Çerez Politikasında, web sitesinin ziyaretçilerine daha iyi bir hizmet sağlanması ve işlevsel bir çevrimiçi ortam sağlamak adına kullanılan çerezler ziyaretçilere açıklanmış, KVKK’ya uygun olarak elde edilen kişisel verilerin işlenmesinin nasıl olduğu ve kullanıcının kanuni hak ve yetkileri belirtilmiştir.</p>
        </AccordionElement>
      </PageContent>
    </Layout>
  );
}

export default Page;
