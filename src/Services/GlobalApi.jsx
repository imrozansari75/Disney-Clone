// import axios from "axios";

// const movieBaseUrl = "https://api.themoviedb.org/3";
// const api_Key = "08cc33bd5ae3b75a6be4cc350f682795";

// const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_Key);

// export default {
//     getTrendingVideos
// };

// const movieBaseUrl = "https://api.themoviedb.org/3";
// const api_Key = "08cc33bd5ae3b75a6be4cc350f682795";

// const getTrendingVideos = async () => {
//   try {
//     const response = await fetch(
//       `${movieBaseUrl}/trending/all/day?api_key=${api_Key}`
//     );

//     if (!response.ok) {
//       throw new Error('Failed to fetch data');
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching trending videos:", error);
//     throw error;  // Optionally re-throw the error to be handled in the component
//   }
// };

// export default {
//   getTrendingVideos,
// };
