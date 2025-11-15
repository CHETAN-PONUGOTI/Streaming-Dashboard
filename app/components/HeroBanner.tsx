export default function HeroBanner({ movie }) {
  if (!movie || movie.Response === "False") {
    return (
      <div className="w-full h-[400px] bg-gray-900 flex items-center justify-center text-white">
        No movie found
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px]">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-6 left-6 text-white">
        <h1 className="text-4xl font-bold">{movie.Title}</h1>
        <p className="opacity-80">{movie.Year}</p>
      </div>
    </div>
  );
}

