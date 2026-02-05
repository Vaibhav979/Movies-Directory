import { Movie } from '@/types/movie';
import { getTopMovies } from "@/lib/tmdb";
import MovieCard from "@/components/MovieCard";

export default async function Home() {
  const movies = await getTopMovies();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Top Rated Movies
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.slice(0, 8).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
