import Image from "next/image";
import { Movie } from "@/types/movie";

interface MovieRowProps {
  title: string;
  movies: Movie[];
}

export default function MovieRow({ title, movies }: MovieRowProps) {
  // Remove duplicates by imdbID
  const uniqueMovies = Array.from(
    new Map(movies.map((m) => [m.imdbID, m])).values()
  );

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>

      <div className="flex space-x-4 overflow-x-scroll no-scrollbar">
        {uniqueMovies.map((movie, index) => (
          <div
            key={`${title}-${movie.imdbID}-${index}`}
            className="w-40 flex-shrink-0"
          >
            <Image
              src={movie.Poster === "N/A" ? "/placeholder.png" : movie.Poster}
              alt={movie.Title}
              width={160}
              height={240}
              className="rounded-lg"
            />
            <p className="text-sm mt-1">{movie.Title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



