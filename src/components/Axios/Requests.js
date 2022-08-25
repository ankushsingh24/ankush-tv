export const API_KEY = "2b08d6e34027bd2aa1f78d7d275c340d";

const requests = {
  fetchTrendingMovie: `/trending/movie/week?api_key=${API_KEY}`,
  fetchTrendingShow: `/trending/tv/week?api_key=${API_KEY}`,
  fetchTopRatedMovie: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedShow: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
};

export default requests;
