import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import PageContent from "../../components/PageContent";
import VideoList from "../../components/VideoList";


function Page() {
  return (
    <Layout>
      <Head>
        <title>KVKK Rehberi - Rasyotek İnsan Kaynakları Bilişim A.Ş.</title>
      </Head>
      <PageContent pageTitle="Videolar">
        <h1>Videolar</h1>
        <VideoList />
      </PageContent>
    </Layout>
  );
}

export default Page;
