import { Movie } from "@/types/movie";
import Link from "next/link";


type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="border rounded overflow-hidden hover:scale-105 transition">
      <img
        src={imageUrl}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-3">
        <h2 className="font-semibold text-sm">
          {movie.title}
        </h2>

        <p className="text-xs text-gray-500">
          ⭐ {movie.vote_average}
        </p>
      </div>
    </div>
  );
}
