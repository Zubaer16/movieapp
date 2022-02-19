const API_KEY = 'cfe6e49760b8f02085257553baa8237a'

const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_geners=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_geners=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_geners=99`,
}

export default requests
