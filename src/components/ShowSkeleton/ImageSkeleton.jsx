import React from "react";
import Skeleton from 'react-loading-skeleton'
import './imageskeleton.css'
function ImageSkeleton() {
  return (
    <div className="imagesSkeleton">
        <div className="singleSkeleton"><Skeleton height={190}/></div>
        <p className="imageTitle"><Skeleton /></p>
        <p className="imageLink"><Skeleton /></p>
    </div>
  );
}

export default ImageSkeleton;
