import React from "react";
import Breadcrumb from './Breadcrumb'
import PageCover from './PageCover'

function PageContent(props) {
  return (
    <>
    <Breadcrumb pageTitle={props.pageTitle} />
    <PageCover />
    <div className="page-content">
      <div className="container">{props.children}</div>
    </div>
    </>
  );
}

export default PageContent;
