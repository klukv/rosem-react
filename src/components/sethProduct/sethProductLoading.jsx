import React from "react";
import ContentLoader from "react-content-loader";

function SethProductLoading() {
  return (
    <ContentLoader
      speed={2}
      width={288}
      height={412}
      viewBox="0 0 288 412"
      backgroundColor="#bababa"
      foregroundColor="#ecebeb"
    >
      <rect x="1" y="8" rx="0" ry="0" width="244" height="233" />
      <rect x="130" y="133" rx="0" ry="0" width="1" height="0" />
      <rect x="0" y="257" rx="0" ry="0" width="169" height="60" />
      <rect x="18" y="368" rx="0" ry="0" width="93" height="31" />
      <rect x="0" y="327" rx="0" ry="0" width="169" height="23" />
      <rect x="137" y="362" rx="6" ry="6" width="102" height="35" />
    </ContentLoader>
  );
}

export default SethProductLoading;
