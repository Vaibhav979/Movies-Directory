import { Movie } from "@/types/movie";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

type TMDBResponse = {
  results: Movie[];
};

export async function getTopMovies(): Promise<Movie[]> {
  const res = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data: TMDBResponse = await res.json();

  return data.results;
}

export async function searchMovies(query: string): Promise<Movie[]> {
  if (!query) return [];

  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );

  if (!res.ok) {
    throw new Error("Failed to search movies");
  }

  const data = await res.json();

  return data.results;
}

export async function getMovieById(id: string): Promise<Movie | null> {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );

  if (!res.ok) {
    console.error("TMDB error:", res.status, id);
    return null;
  }

  return res.json();
}

export async function getMoviesByGenre(genreId: string) {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=vote_average.desc`
  );

  const data = await res.json();
  return data.results;
}


