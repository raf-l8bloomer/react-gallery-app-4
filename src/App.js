import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import './css/index.css';

// App Components
import SearchForm from "./components/SearchForm.js";
import Nav from "./components/Nav.js";
import PhotoContainer from "./components/PhotoContainer.js";


function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {

    axios.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=99277c0f3ec693ba0aedf92a6e4e333c&tags=cats&per_page=24&format=json&nojsoncallback=1")
      .then(response => {
       setPhotos(response.data.photos.photo);
      })
      .catch( error => {
        // handle error
        console.log("Error fetching and parsing data", error);
      })
  }, []);

  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <PhotoContainer data={photos} />
      <Routes>
        <Route path="cats" element="" />
        <Route path="dogs" element="" />
        <Route path="computers" element="" />
      </Routes>
    </div>
  );
}

export default App;
