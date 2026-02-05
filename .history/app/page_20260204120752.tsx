import { Movie } from '@/types/movie';
import { getTopMovies } from "@/lib/tmdb";
import MovieCard from "@/components/MovieCard";
import Link from "next/link";

export default async function Home() {
  const movies = await getTopMovies();

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <section className="mb-16 text-center flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-16">
      <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Movie Directory
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl">
        Explore top rated movies from TMDB
      </p>
      </section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.slice(0, 8).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
         <Link href="/movies" className="inline-block mt-6 px-4 py-2 bg-black text-white rounded">View All Movies →</Link>
      </div>
    </main>
  );
}
