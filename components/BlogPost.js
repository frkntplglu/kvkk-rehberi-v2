import React from "react";
import Link from "next/link";
import slugify from "slugify";

function BlogPost(props) {
  return <div className="blog-post">
    <div className="blog-post-image"><img src={props.postImageURL} alt={props.postTitle} /></div>
    <div className="blog-post-content">
      <div className="blog-post-author">Yazar : {props.postAuthor}</div>
      <h1 className="blog-post-title">{props.postTitle}</h1>
      <div className="blog-post-summary">{props.postSummary}</div>
      
    </div>
    {/* <Link href={`makaleler/${slugify(props.postCategory)}/${props.postID}`} as={`makaleler/${slugify(props.postCategory).toLowerCase()}/${slugify(props.postTitle).toLowerCase()}`}><a className="blog-post-more">DEVAMI</a></Link> */}
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