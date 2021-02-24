import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import ReactFullpage from "@fullpage/react-fullpage";

function Page() {
  return (
    <Layout>
      <Head>
        <title>KVKK Uyumluluğunuzu Hemen Ücretsiz Test Edin! - KVKK Rehberi</title>
      </Head>
      <ReactFullpage
        scrollingSpeed = {1000} /* Options here */

        render={({ state, fullpageApi }) => {
            console.log(state)
            console.log(fullpageApi)
        return (
            <ReactFullpage.Wrapper>
            <div className="section">
                1
            </div>
            <div className="section">
                2
            </div>
            <div className="section">
                3
            </div>
            <div className="section">
                4
            </div>
            <div className="section">
                5
            </div>
            <div className="section">
                6
            </div>
            </ReactFullpage.Wrapper>
        );
        }}
    />
      
    </Layout>
  );
}

export default Page;
