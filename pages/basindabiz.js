import React,{useEffect,useState} from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import PageContent from "../components/PageContent";
import BlogPost from "../components/BlogPost";
import SkeletonCard from "../components/SkeletonCard";
import axios from "axios";



function Page(props) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    
    setTimeout(fetchData, 2000);

  },[])

  const fetchData = () => {
    console.log("data çektik")
    axios.get('http://kvkk-api.herokuapp.com/api')
    .then(response => {
      setNews(response.data)
    }).catch(err => {
      console.log(err)
    })
  }
  
  return (
    <Layout>
      <Head>
        <title>KVKK Rehberi - Basında Biz</title>
      </Head>
      <PageContent pageTitle="Basında Biz">
        <div className="blog-list">
          
        { 
          news.length === 0 ? 
          <div className="skeleton-wrap">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
          :
          news.map(post => {
            return(
              <BlogPost
              key={post.id}
              postImageURL={post.image} 
              postTitle={post.title}
          
              postID={post.id} 
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

// export const getStaticProps = async () => {
//   const response = await fetch('http://kvkk-api.herokuapp.com/api');
//   const data = await response.json();
//   return {
//     props: {data }, // will be passed to the page component as props
//     revalidate: 1
//   }
// }