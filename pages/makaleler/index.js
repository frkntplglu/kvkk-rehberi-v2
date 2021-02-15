import React,{useEffect,useState} from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import PageContent from "../../components/PageContent";
import BlogPost from "../../components/BlogPost";
import Loader from "../../components/Loader";


function Page(props) {
  return (
    <Layout>
      <Head>
        <title>KVKK Rehberi - Makaleler</title>
      </Head>
      <PageContent pageTitle="Makaleler">
        <div className="blog-list">
        {
          props.data === 0 ? <Loader /> : 
          props.data.map(post => {
            return(
              <BlogPost
              key={post.id}
              postImageURL={post.image} 
              postAuthor={post.author}
              postTitle={post.title}
              postSummary="Kvkk teknik tedbirler arasında siber güvenliğin sağlanması, kişisel verilerin yedeklenmesi, kişisel veri güvenliğinin takibi gibi konular bulunmaktadır. ..."  
              postCategory="Bilişim"
              link={`makaleler/bilisim/${post.slug}`}
            />
            )
          })
        }
        
        
        

        </div>
      </PageContent>
        
    </Layout>
  );
}

export default Page;

export const getServerSideProps = async () => {
  const response = await fetch('http://kvkk-api.herokuapp.com/api');
  const data = await response.json();
  return {
    props: {data }, // will be passed to the page component as props
  }
}