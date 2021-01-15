import React from "react";
import Image from 'next/image';

function PageCover(props) {
  return <div className="page-cover"><Image src="/images/hakkimizda.jpg" alt={props.title} width={1920}  height={598} /></div>;
}

export default PageCover;
