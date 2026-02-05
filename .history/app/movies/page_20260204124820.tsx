import { getTopMovies } from "@/lib/tmdb";
import MovieGrid from "@/components/MovieGrid";
import PageWrapper from "@/components/PageWrapper";

export default async function MoviesPage() {
  const movies = await getTopMovies();

  return (
    <PageWrapper>

      <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        All Top Rated Movies
      </h1>
      <MovieGrid movies={movies} />

    </PageWrapper>
  );
}
