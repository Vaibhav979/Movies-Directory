import { Movie } from "@/types/movie";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Link href={`/movies/${movie.id}`}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
  className="group rounded-xl overflow-hidden bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow hover:shadow-xl cursor-pointer"
>
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={imageUrl}
            alt={movie.title}
            className="w-full h-72 object-cover group-hover:scale-110 transition duration-300"
          />
        </div>

        {/* Info */}
        <div className="p-4 space-y-1">
          <h2 className="font-semibold text-sm line-clamp-2">
            {movie.title}
          </h2>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            ⭐ {movie.vote_average}
          </p>
        </div>
      </div>
    </Link>
  );
}
