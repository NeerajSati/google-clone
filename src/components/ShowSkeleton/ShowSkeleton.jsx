import React from "react";
import "./showSkeleton.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function ShowSkeleton() {
  return (
    <div className="allresults">
      <div className="skeletonLink">
        <Skeleton/>
      </div>
      <h2 className="skeletonLink"><Skeleton /></h2>
      <p className="aboutLink">
      <Skeleton count={2} />
      </p>
    </div>
  );
}

export default ShowSkeleton;
