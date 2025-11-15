import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/types/movie';


interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {

  return (
    <Link 
      href={`/movie/${movie.id}`} 
      className="block min-w-[150px] max-w-[180px] hover:scale-105 transition duration-300 ease-in-out transform shadow-lg rounded-lg overflow-hidden"
    >
      <div className="relative w-full aspect-[2/3]"> 
        <Image
          src={movie.poster_url || '/placeholder.svg'} // Use the full URL
          alt={movie.title}
          fill
          sizes="(max-width: 600px) 150px, 180px"
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-0 w-full p-2 bg-black bg-opacity-70 text-white text-xs text-center truncate">
        {movie.title}
      </div>
    </Link>
  );
}
