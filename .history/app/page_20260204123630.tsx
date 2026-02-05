import { getTopMovies } from "@/lib/tmdb";
import MovieCard from "@/components/MovieCard";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";

export default async function Home() {
  const movies = await getTopMovies();

  return (
    <PageWrapper>

      {/* Hero */}
      <section className="mb-16 text-center flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-2xl p-16">

        <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Movie Directory
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl">
          Explore top rated movies from TMDB
        </p>

      </section>

      {/* Preview Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {movies.slice(0, 8).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/movies"
          className="inline-block px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg font-medium hover:opacity-90 transition"
        >
          View All Movies →
        </Link>
      </div>

    </PageWrapper>
  );
}
