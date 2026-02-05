import { getTopMovies } from "@/lib/tmdb";
import MovieCard from "@/components/MovieCard";
import 

export default async function MoviesPage() {
  const movies = await getTopMovies();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        All Top Rated Movies
      </h1>
        <MovieGrid movies={movies} />
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
