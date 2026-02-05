"use client";

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
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />

      {loading && <p className="mb-4">Searching...</p>}

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
