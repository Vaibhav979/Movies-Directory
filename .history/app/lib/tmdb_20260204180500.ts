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

export async function getMoviesByYear(year: string) {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&primary_release_year=${year}&sort_by=vote_average.desc`
  );

  const data = await res.json();
  return data.results;
}

export async function getMoviesByPerson(personId: string) {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_people=${personId}&sort_by=vote_average.desc`
  );

  const data = await res.json();
  return data.results;
}

export async function searchPerson(name: string) {
  const res = await fetch(
    `${BASE_URL}/search/person?api_key=${API_KEY}&query=${encodeURIComponent(name)}`
  );

  const data = await res.json();
  return data.results?.[0]; // best match
}

export default function LoadingHome() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8 animate-pulse">

      {/* Hero Section */}
      <section className="mb-16 text-center flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-2xl p-16">

        <div className="h-14 w-96 bg-gray-300 dark:bg-gray-600 rounded mb-4" />

        <div className="h-5 w-72 bg-gray-300 dark:bg-gray-600 rounded" />

      </section>

      {/* Section Title */}
      <div className="h-8 w-64 bg-gray-300 dark:bg-gray-600 rounded mb-6" />

      {/* Movie Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700"
          >
            <div className="h-72 bg-gray-300 dark:bg-gray-600" />

            <div className="p-3 space-y-2">
              <div className="h-4 bg-gray-400 dark:bg-gray-500 rounded w-3/4" />
              <div className="h-3 bg-gray-400 dark:bg-gray-500 rounded w-1/2" />
            </div>
          </div>
        ))}

      </div>

    </main>
  );
}
