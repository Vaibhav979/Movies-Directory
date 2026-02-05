export default function LoadingMovies() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8 animate-pulse">

      <div className="h-10 w-64 bg-gray-300 dark:bg-gray-700 rounded mb-6" />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

        {Array.from({ length: 15 }).map((_, i) => (
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
