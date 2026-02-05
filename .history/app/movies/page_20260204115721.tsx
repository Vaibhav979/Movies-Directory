// "use client";

import { getTopMovies } from "@/lib/tmdb";
import MovieCard from "@/components/MovieCard";
import MovieGrid from "@/components/MovieGrid";
import { motion } from "framer-motion";

export default async function MoviesPage() {
  const movies = await getTopMovies();

  return (
    <motion.main
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.4 }}
  className="max-w-7xl mx-auto px-6 py-8"
>
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100">
        All Top Rated Movies
      </h1>
        <MovieGrid movies={movies} />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </motion.main>
  );
}
