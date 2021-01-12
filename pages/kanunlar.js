import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import PageContent from "../components/PageContent";

function Page() {
  return (
    <Layout>
      <Head>
        <title>
          KVKK Rehberi - Kişisel Verilerin Korunması Kanunu Kapsamında Zorunlu
          Eğitim
        </title>
      </Head>
      <PageContent pageTitle="Kanunlar">
        <h2>Kanunlar</h2>
        <p>
          <a
            href="https://www.mevzuat.gov.tr/MevzuatMetin/1.5.6698.pdf"
            target="_blank"
          >
            6698 sayılı KVKK kanununu
          </a>
        </p>
        <p>
          <a
            href="https://www.kvkk.gov.tr/Icerik/5257/Yonetmelikler"
            target="_blank"
          >
            https://www.kvkk.gov.tr/Icerik/5257/Yonetmelikler
          </a>
        </p>
        <p>
          <a
            href="https://www.kvkk.gov.tr/Icerik/4214/Kurul-Kararlari"
            target="_blank"
          >
            https://www.kvkk.gov.tr/Icerik/4214/Kurul-Kararlari
          </a>
        </p>
        <p>
          <a
            href="https://www.kvkk.gov.tr/Icerik/5258/Tebligler"
            target="_blank"
          >
            https://www.kvkk.gov.tr/Icerik/5258/Tebligler
          </a>
        </p>
      </PageContent>
    </Layout>
  );
}

export default Page;
