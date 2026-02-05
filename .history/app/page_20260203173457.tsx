import { Movie } from '@/types/movie';
import { getTopMovies } from "@/lib/tmdb";
import MovieCard from "@/components/MovieCard";
import Link from "next/link";

export default async function Home() {
  const movies = await getTopMovies();

  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold mb-6">
        Movie Directory
      </h1>
      <p className="mb-6 text-gray-600">
        Explore top rated movies from TMDB
        </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
       

        {movies.slice(0, 8).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
         <Link href="/movies"
  className="inline-block mt-6 px-4 py-2 bg-black text-white rounded"
>
  View All Movies →
</Link>
      </div>
    </main>
  );
}
