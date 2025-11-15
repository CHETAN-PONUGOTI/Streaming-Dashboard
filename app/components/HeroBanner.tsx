import { Movie } from "@/types/movie";
import Image from "next/image";

interface HeroBannerProps {
  movie: Movie | null;  // allow null for safety
}

export default function HeroBanner({ movie }: HeroBannerProps) {
  if (!movie || movie.Response === "False") {
    return (
      <div className="w-full h-[400px] bg-gray-900 flex items-center justify-center text-white">
        No movie found
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px]">
      <Image
        src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
        alt={movie.Title}
        fill
        className="object-cover"
      />

      <div className="absolute bottom-5 left-5 bg-black/60 p-4 rounded-lg">
        <h1 className="text-3xl font-bold">{movie.Title}</h1>
        <p className="text-gray-300">{movie.Year}</p>
      </div>
    </div>
  );
}
