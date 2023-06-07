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

  // All states
  const [photos, setPhotos] = useState([]);
  const [catImages, setCatImages] = useState([])
  const [dogImages, setDogImages] = useState([])
  const [computerImages, setComputerImages] = useState([])
  const [query, setQuery] = useState("waterfalls");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    handleQueryChange(query);
    handleQueryChange("cats");
    handleQueryChange("dogs");
    handleQueryChange("computers");
  }, [query]);

  // Takes search text and gets flickrAPI while saving default nav categories in state
  const handleQueryChange = searchText => {
    let activeFetch = true;
    setLoading(true);
    setQuery(searchText);
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchText}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        if (activeFetch) {
          if (searchText === "cats") {
            setCatImages(response.data.photos.photo)
          } else if (searchText === "dogs") {
            setDogImages(response.data.photos.photo);
          } else if (searchText === "computers") {
            setComputerImages(response.data.photos.photo);
          } else {
            setPhotos(response.data.photos.photo);
            setLoading(false);
          }
        }
      })
      .catch(error => {
        // handle error
        console.log("Error fetching and parsing data", error);
      });
    return () => { activeFetch = false };
  }


  return (
    <div className="container">

      <SearchForm changeQuery={handleQueryChange} />
      <nav className="main-nav">
        <Nav />
      </nav>
      <div className="photo-container">
        {
          (loading)
            ? <p>Loading...</p>
            : null } 
            <Routes>
              <Route path="/" element={<Navigate to="/search" />} />
              <Route path="search" element={<PhotoContainer data={photos} query={query} />} />
              <Route path="search/:searching" element={<PhotoContainer data={photos} query={query} />} />
              <Route path="cats" element={<PhotoContainer data={catImages} query="cats"/>} />
              <Route path="dogs" element={<PhotoContainer data={dogImages} query="dogs"/>} />
              <Route path="computers" element={<PhotoContainer data={computerImages} query="computers" />} />
              

            </Routes>
      
      </div>
    </div>
  );
}

export default App;
