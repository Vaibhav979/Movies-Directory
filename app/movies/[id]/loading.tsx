export default function LoadingMovieDetail() {
  return (
    <main className="max-w-5xl mx-auto p-6 animate-pulse">

      <div className="grid md:grid-cols-2 gap-10 bg-white dark:bg-gray-800 rounded-xl shadow p-6">

        {/* Poster */}
        <div className="h-[500px] bg-gray-300 dark:bg-gray-700 rounded-xl" />

        {/* Info */}
        <div className="space-y-4">

          <div className="h-10 w-3/4 bg-gray-400 dark:bg-gray-600 rounded" />

          <div className="h-4 w-full bg-gray-400 dark:bg-gray-600 rounded" />
          <div className="h-4 w-full bg-gray-400 dark:bg-gray-600 rounded" />
          <div className="h-4 w-5/6 bg-gray-400 dark:bg-gray-600 rounded" />

          <div className="space-y-2 pt-4">
            <div className="h-4 w-1/3 bg-gray-400 dark:bg-gray-600 rounded" />
            <div className="h-4 w-1/3 bg-gray-400 dark:bg-gray-600 rounded" />
            <div className="h-4 w-1/3 bg-gray-400 dark:bg-gray-600 rounded" />
          </div>

        </div>

      </div>

    </main>
  );
}
