import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import Layout from "../../../components/Layout";
import PageContent from "../../../components/PageContent";

function Page({data}) {
  function createMarkup() { return {__html: data[0].content}; };

  return (
    <Layout>
      <Head>
        <title>{data[0].title}</title>
      </Head>
      <PageContent pageTitle={data[0].title}>
        <h1>{data[0].title}</h1>
        <div className="dynamic-content" dangerouslySetInnerHTML={createMarkup()} />  
      </PageContent>
    </Layout>
  );
}

export default Page;

export const getServerSideProps = async (ctx) => {
  const {slug} = ctx.params;
  const response = await fetch(`http://kvkk-api.herokuapp.com/api/${slug}`);
  const data = await response.json();
  return {
    props: {data }, // will be passed to the page component as props
  }
}
