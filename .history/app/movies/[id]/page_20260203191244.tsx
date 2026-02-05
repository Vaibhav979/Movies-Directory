import { getMovieById } from "@/lib/tmdb";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MoviePage({ params }: Props) {
  const { id } = await params; // ✅ unwrap Promise

  const movie = await getMovieById(id);

if (!movie) {
  return (
    <main className="p-6 text-center">
      <h1 className="text-2xl font-bold">
        Movie Not Found 😕
      </h1>

      <p className="mt-2 text-gray-500">
        This movie is unavailable on TMDB.
      </p>
    </main>
  );
}


  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    
    <main className="p-6 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Poster */}
        <img
          src={imageUrl}
          alt={movie.title}
          className="rounded"
        />

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold mb-3">
            {movie.title}
          </h1>

          <p className="text-gray-600 mb-4">
            {movie.overview}
          </p>

          <p className="mb-2">
            ⭐ Rating: {movie.vote_average}
          </p>

          <p className="mb-2">
            📅 Release: {movie.release_date}
          </p>

          <p>
            🎬 Runtime: {movie.runtime} min
          </p>
        </div>
      </div>
    </main>
  );
}
