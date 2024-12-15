import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_Key = "08cc33bd5ae3b75a6be4cc350f682795";

const getTrendingVideos = axios.get(this.movieBaseUrl + "/trending/all/day?api_key=" + api_Key);

export default {
    getTrendingVideos
};
