import React, { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';

const imgBaseUrl = "https://image.tmdb.org/t/p/original";

function Slider() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    try {
      const resp = await GlobalApi.getTrendingVideos();  // Fetch data using fetch API
      setMovieList(resp.results);  // Set the fetched movie data to state
    } catch (error) {
      console.error('Error fetching movies:', error);  // Handle error
    }
  };

  return (
    <div>
      {movieList.map((item, index) => (
        <img
          key={index}
          src={imgBaseUrl + item.backdrop_path}
          alt={`Movie ${index}`}
          className="min-w-full h-[310px] object-cover"
        />
      ))}
    </div>
  );
}

export default Slider;
