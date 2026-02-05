import { getTopMovies } from "@/lib/tmdb";
import MovieGrid from "@/components/MovieGrid";
import PageWrapper from "@/components/PageWrapper";

export default async function MoviesPage() {
  const movies = await getTopMovies();

  return (
    <PageWrapper>
      

      <MovieGrid movies={movies} />
    </PageWrapper>
  );
}
