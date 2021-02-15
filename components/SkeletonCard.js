import React from "react";
import Skeleton from "react-loading-skeleton";
const SkeletonCard = () => {
    return (
      <div className="skeleton">
        <Skeleton height={190} width={360} />
          <Skeleton height={15} width={360} />
          <Skeleton height={15} width={300} />   
          <Skeleton height={50} width={360} style={{marginTop: 30}} />     
      </div>
    );
  };
  export default SkeletonCard;