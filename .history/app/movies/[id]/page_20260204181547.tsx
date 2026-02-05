import { getMovieById, getMovieCredits } from "@/lib/tmdb";


type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MoviePage({ params }: Props) {
  const { id } = await params; // ✅ unwrap Promise

  const movie = await getMovieById(id);
  const credits = await getMovieCredits(id);
  const cast = credits.cast.slice(0, 8); // Top 8 actors

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

  <div className="grid md:grid-cols-2 gap-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl shadow p-6">

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

      <p className="text-gray-600 dark:text-gray-400 mb-6">
        {movie.overview}
      </p>

      <div className="space-y-2 text-sm">

        <p>⭐ Rating: {movie.vote_average}</p>

        <p>📅 Release: {movie.release_date}</p>

        <p>🎬 Runtime: {movie.runtime} min</p>

      </div>

    </div>

  </div>

{/* Cast Section */}
<section className="mt-12">

  <h2 className="text-2xl font-extrabold mb-6 text-gray-900 dark:text-white border-l-4 border-blue-700 dark:border-blue-400 py-2
  bg-white/80 dark:bg-gray-900/80
  backdrop-blur
  rounded-r-md
">
  🎭 Cast
</h2>


  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

    {cast.map((actor: any) => {
      const profile = actor.profile_path
        ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
        : "/avatar.png"; // fallback

      return (
        <div
          key={actor.id}
          className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow text-center"
        >

          <img
            src={profile}
            alt={actor.name}
            className="w-full h-48 object-cover rounded mb-2"
          />

          <h3 className="font-semibold text-sm">
            {actor.name}
          </h3>

          <p className="text-xs text-gray-600 dark:text-gray-400">
            {actor.character}
          </p>

        </div>
      );
    })}

      </div>

    </section>

  </main>


  );
}
