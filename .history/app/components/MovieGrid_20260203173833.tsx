import React from 'react'
"use client";

import { useState } from "react";
import { Movie } from "@/types/movie";
import MovieCard from "./MovieCard";

type Props = {
    movies: Movie[];
}

const MovieGrid = () => {
    const [query, setQuery] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full mb-6 p-2 border rounded"
      />

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieGrid