"use client";

import SkeletonCard from "./SkeletonCard";
import { useEffect, useState } from "react";
import { Movie } from "@/types/movie";
import MovieCard from "./MovieCard";
import { searchMovies } from "@/lib/tmdb";

type Props = {
  movies: Movie[];
};

export default function MovieGrid({ movies }: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>(movies);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchSearch() {
      if (!query) {
        setResults(movies);
        return;
      }

      setLoading(true);

      try {
        const data = await searchMovies(query);
        setResults(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchSearch();
  }, [query, movies]);

  return (
    <div>
      {/* Search */}
      <input
  type="text"
  placeholder="🔍 Search movies..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  className="w-full mb-6 p-3 rounded-xl border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      {loading && (
  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
    {Array.from({ length: 10 }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
)}
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
