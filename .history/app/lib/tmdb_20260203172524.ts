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
