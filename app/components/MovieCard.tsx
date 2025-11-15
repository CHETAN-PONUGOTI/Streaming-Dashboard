import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types/movie";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link 
      href={`/movie/${movie.imdbID}`}
      className="block min-w-[150px] max-w-[180px] hover:scale-105 transition duration-300 ease-in-out transform shadow-lg rounded-lg overflow-hidden"
    >
      <div className="relative w-full aspect-[2/3]">
        <Image
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
          alt={movie.Title}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-sm mt-2 text-center font-medium">{movie.Title}</p>
    </Link>
  );
}

