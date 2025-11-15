const API = "https://www.omdbapi.com/";

export async function fetchPopularMovies() {
  const url = `${API}?apikey=${process.env.OMDB_API_KEY}&s=batman`;

  const res = await fetch(url);
  const data = await res.json();

  return data.Search || [];
}

export async function fetchMovieById(id: string) {
  const url = `${API}?apikey=${process.env.OMDB_API_KEY}&i=${id}&plot=full`;

  const res = await fetch(url);
  const data = await res.json();

  return data;
}
