import React from "react";
import Link from "next/link";

function Breadcrumb(props) {
  return <div className="breadcrumb">
    <div className="container">
      <Link href="/"><a className="breadcrumb-base-link">Anasayfa</a></Link>
      <h1>{props.pageTitle}</h1>
    </div>
  </div>;
}

export default Breadcrumb;
