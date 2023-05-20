import React from "react";
import Photos from "./Photos.js";
import NotFound from "./NotFound.js"

const PhotoContainer = () => {
    return (
        <div class="photo-container">
        <h2>Results</h2>
        <ul>
          <Photos />
          <NotFound />
        </ul>
      </div>
    )
}

export default PhotoContainer;