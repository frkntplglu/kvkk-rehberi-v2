import React from "react";
import Link from "next/link";
import Image from 'next/image';
import slugify from 'slugify';


function BlogPost(props) {
  return <div className="blog-post">
    <div className="blog-post-image"> <img src={props.postImageURL} alt={props.postTitle} /></div>
    <div className="blog-post-content">
      {props.postAuthor ? <div className="blog-post-author">Yazar : {props.postAuthor}</div> : null}
      <h1 className="blog-post-title">{props.postTitle}</h1>
      {props.postSummary ?  <div className="blog-post-summary">{props.postSummary}</div> : null}
      
    </div>
    <Link href={{
      pathname: '/makaleler/[category]/[slug]',
      query:{
        category: slugify(props.postCategory).toLowerCase(),
        slug: props.slug
      }
    }} ><a className="blog-post-more">DEVAMI</a></Link>
  </div>;
}

export default BlogPost;
