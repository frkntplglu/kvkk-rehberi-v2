import React from "react";
import Link from "next/link";
import Image from 'next/image';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


function BlogPost(props) {
  
  return <SkeletonTheme color="#202020" highlightColor="#444">
    <div className="blog-post">
    <Skeleton count={5}/>
    <div className="blog-post-image"> <img src={props.postImageURL} alt={props.postTitle} /></div>
    <div className="blog-post-content">
      <div className="blog-post-author">Yazar : {props.postAuthor || <Skeleton duration={5} height={10}  width={100}/>}</div>
      <h1 className="blog-post-title">{props.postTitle || <Skeleton duration={5}  height={10} width={100}/>}</h1>
      <div className="blog-post-summary">{props.postSummary || <Skeleton count={5}  height={10} duration={5}  width={100}/>}</div>
      
    </div>
    <Link href={props.link}><a target={props.target || '_self'} className="blog-post-more">DEVAMI</a></Link>
  </div></SkeletonTheme>;
}

export default BlogPost;
