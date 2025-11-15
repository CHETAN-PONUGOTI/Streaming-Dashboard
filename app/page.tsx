import MovieRow from "./components/MovieRow";
import HeroBanner from "./components/HeroBanner";

const API_KEY = process.env.OMDB_KEY;

async function fetchMovies(search: string) {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();
  return data.Search || [];
}

export default async function Home() {
  const trending = await fetchMovies("marvel");
  const topRated = await fetchMovies("batman");
  const newReleases = await fetchMovies("spider");
  const comedy = await fetchMovies("comedy");

  return (
    <main className="flex flex-col gap-10 p-4">
      {trending.length > 0 && <HeroBanner movie={trending[0]} />}

      <MovieRow title="Trending Now" movies={trending} />
      <MovieRow title="Top Rated" movies={topRated} />
      <MovieRow title="New Releases" movies={newReleases} />
      <MovieRow title="Comedy" movies={comedy} />
    </main>
  );
}
