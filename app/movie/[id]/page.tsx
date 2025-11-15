import { fetchMovieById } from "@/lib/omdb";
import Image from "next/image";

export default async function MoviePage({ params }: { params: { id: string } }) {
  const movie = await fetchMovieById(params.id);

  const poster =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "/no-image.png";

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <Image
          src={poster}
          alt={movie.Title}
          width={500}
          height={700}
          className="rounded-lg object-cover"
          unoptimized
        />

        <div>
          <h1 className="text-4xl font-bold">{movie.Title}</h1>
          <p className="text-gray-400 mt-2">{movie.Released}</p>

          <p className="mt-4 text-lg">{movie.Plot}</p>

          <div className="mt-4 space-y-2 text-gray-300">
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
