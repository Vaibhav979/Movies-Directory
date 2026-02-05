import { getTopMovies } from "@/lib/tmdb";
import MovieGrid from "@/components/MovieGrid";
import PageWrapper from "@/components/PageWrapper";

export default async function MoviesPage() {
  const movies = await getTopMovies();

  return (
    <PageWrapper>
      <h1 className="text-4xl font-extrabold mb-6 text-black-900 dark:text-gray-100">
        All Top Rated Movies
      </h1>


      <MovieGrid movies={movies} />
    </PageWrapper>
  );
}
