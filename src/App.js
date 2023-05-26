import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

import './css/index.css';

// App Components
import SearchForm from "./components/SearchForm.js";
import PhotoContainer from "./components/PhotoContainer.js";
import Nav from "./components/Nav.js";
import apiKey from "./config.js";



function App() {
  const [photos, setPhotos] = useState([]);
  const [catImages, setCatImages] = useState([])
  const [dogImages, setDogImages] = useState([])
  const [computerImages, setComputerImages] = useState([])
  const [query, setQuery] = useState("cats");
  
  useEffect(() => {

    handleQueryChange(query);
    handleNavImages("cats", setCatImages);
    handleNavImages("dogs", setDogImages);
    handleNavImages("computers", setComputerImages);
  }, [query]);

  const handleQueryChange = searchText => {
    setQuery(searchText);
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchText}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        setPhotos(response.data.photos.photo);
      })
      .catch(error => {
        // handle error
        console.log("Error fetching and parsing data", error);
      })
  }

  const handleNavImages = (defaultTopics, setDefaultImages) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${defaultTopics}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        setDefaultImages(response.data.photos.photo);
      })
      .catch(error => {
        // handle error
        console.log("Error fetching and parsing data", error);
      })
  }
  
 
  return (
    <div className="container">
      <SearchForm changeQuery={handleQueryChange} />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate replace to="cats" />} />
        <Route path="cats" element={<PhotoContainer data={catImages} />} />
        <Route path="dogs" element={<PhotoContainer data={dogImages} />} />
        <Route path="computers" element={<PhotoContainer data={computerImages} />} />
      </Routes>
    </div>
  );
}

export default App;
