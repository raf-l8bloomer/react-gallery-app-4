import React from "react";
import Photos from "./Photos.js";
import NotFound from "./NotFound.js"

const PhotoContainer = props => {
  const results = props.data;
  let photos = results.length > 0 ? results.map(photo => <Photos url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />)
  : <NotFound />;

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {photos}
      </ul>
    </div>
  )
}

export default PhotoContainer;