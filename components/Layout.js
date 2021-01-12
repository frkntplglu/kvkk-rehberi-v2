import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }, ...props) {
  return (
    <>
      <Head>
        <title>KVKK Rehberi</title>
        {/* <!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1' /><![endif]--> */}
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1"
        />
        <meta name="description" content={props.description} />
        <meta property="og:description" content={props.ogDescription} />
        <meta property="og:image" content={props.ogImage} />
        <meta property="og:title" content={props.ogTitle} />
        <meta property="og:url" content={props.ogUrl} />
        <meta name="twitter:description" content={props.twitterDescription} />
        <meta name="twitter:image" content={props.twitterImage} />
        <meta name="twitter:title" content={props.twitterTitle} />
        <link href="https://www.kvkkrehberi.com/" rel="canonical" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content="KVKKRehberi" />
        <link rel="shortcut icon" href="/images/favicon.png"></link>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
