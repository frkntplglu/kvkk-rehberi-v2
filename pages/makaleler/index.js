import React,{useEffect,useState} from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import PageContent from "../../components/PageContent";
import BlogPost from "../../components/BlogPost";
import Loader from "../../components/Loader";
import Router from 'next/router';

function Page(props) {
  const [loader,setLoader] = useState(false);
  useEffect(() => {
    setTimeout(setLoader(true), 1500);
  })
  return (
    <Layout>
      <Head>
        <title>KVKK Rehberi - Makaleler</title>
      </Head>
      {
        loader ? 
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
      : 
      "Yükleniyor..."
      }
      
        
    </Layout>
  );
}

export default Page;

export const getStaticProps = async () => {
  const response = await fetch('http://kvkk-api.herokuapp.com/api');
  const data = await response.json();
  return {
    props: {data },
    revalidate: 100
  }
}