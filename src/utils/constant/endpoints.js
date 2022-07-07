const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const ENDPOINTS = {
  MOVIE: {
    LATEST: `${BASE_URL}/movie/latest?api_key=${API_KEY}`,
    POPULAR(pageNumber = 1) {
      return `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${pageNumber}`;
    },
    NOW_PLAYING(pageNumber = 1) {
      return `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=${pageNumber}`;
    },
    TOP_RATED(pageNumber = 1) {
      return `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${pageNumber}`;
    },
    UPCOMING(pageNumber = 1) {
      return `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${pageNumber}`;
    },
    HERO: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    RECOMMENDATION(id) {
      return `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`;
    },
    DETAIL(id, otherResponse = ["videos"]) {
      return `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=${otherResponse}`;
    },
  },
  TV_SHOW: {
    POPULAR(pageNumber = 1) {
      return `${BASE_URL}/tv/popular?api_key=${API_KEY}&page=${pageNumber}`;
    },
    ON_THE_AIR(pageNumber = 1) {
      return `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&page=${pageNumber}`;
    },
    TOP_RATED(pageNumber = 1) {
      return `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&page=${pageNumber}`;
    },
    AIRING_TODAY(pageNumber = 1) {
      return `${BASE_URL}/tv/airing_today?api_key=${API_KEY}&page=${pageNumber}`;
    },
    RECOMMENDATION(id) {
      return `${BASE_URL}/tv/${id}/recommendations?api_key=${API_KEY}`;
    },
    DETAIL(id, otherResponse = ["videos"]) {
      return `${BASE_URL}/tv/${id}?api_key=${API_KEY}&append_to_response=${otherResponse}`;
    },
  },
  SEARCH_MOVIE(query) {
    return `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${query}`;
  },
};

export default ENDPOINTS;
