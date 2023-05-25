import React, { useEffect, useState, Navigate } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";

import './css/index.css';

// App Components
import SearchForm from "./components/SearchForm.js";
import PhotoContainer from "./components/PhotoContainer.js";

import apiKey from "./config.js";



function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");

  const { id } = useParams();
  console.log(id);
  
  useEffect(() => {
    handleQueryChange(query);
  }, [query]);

  const handleQueryChange = searchText => {
    setQuery(searchText);
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
       setPhotos(response.data.photos.photo);
      })
      .catch( error => {
        // handle error
        console.log("Error fetching and parsing data", error);
      })
  }

  return (
    <div className="container">
      <SearchForm changeQuery={handleQueryChange}/>
      <PhotoContainer data={photos} />
      <Routes>
        <Route path="/" element= "" />
        <Route path="cats" element= "" />
        <Route path="dogs" element="" />
        <Route path="computers" element= "" />
      </Routes>
    </div>
  );
}

export default App;
