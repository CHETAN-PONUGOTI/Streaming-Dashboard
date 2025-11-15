import Image from "next/image";

export default function MovieRow({ title, movies }) {
  // Remove duplicates by imdbID
  const uniqueMovies = Array.from(
    new Map(movies.map((m) => [m.imdbID, m])).values()
  );

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>

      <div className="flex space-x-4 overflow-x-scroll no-scrollbar">
        {uniqueMovies.map((movie) => {
          const poster =
            movie.Poster && movie.Poster !== "N/A"
              ? movie.Poster
              : "/placeholder.png";

          return (
            <div
              key={movie.imdbID}
              className="w-40 flex-shrink-0"
            >
              <Image
                src={poster}
                alt={movie.Title}
                width={160}
                height={240}
                className="rounded-lg"
                unoptimized
              />
              <p className="text-sm mt-1">{movie.Title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}


