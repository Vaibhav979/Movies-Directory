import { getMovieById } from "@/lib/tmdb";

type Props = {
  params: {
    id: string;
  };
};

export default async function MoviePage({ params }: Props) {
  const movie = await getMovieById(params.id);

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
