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
    
    <main className="p-6 max-w-5xl mx-auto">

  <div className="grid md:grid-cols-2 gap-10 bg-white dark:bg-gray-800 rounded-xl shadow p-6">
    {/* Poster */}
    <img
      src={imageUrl}
      alt={movie.title}
      className="rounded-xl"
    />

    {/* Info */}
    <div className="flex flex-col justify-center">

      <h1 className="text-4xl font-bold mb-3">
        {movie.title}
      </h1>

      <p className="text-gray-600 :text-gray-400 mb-6">
        {movie.overview}
      </p>

      <div className="space-y-2 text-sm">

        <p>⭐ Rating: {movie.vote_average}</p>

        <p>📅 Release: {movie.release_date}</p>

        <p>🎬 Runtime: {movie.runtime} min</p>

      </div>

    </div>

  </div>

</main>

  );
}
