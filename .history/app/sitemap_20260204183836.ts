import { getTopMovies } from "@/lib/tmdb";

export default async function sitemap() {
  const baseUrl = "http://localhost:3000";

  const movies = await getTopMovies();

  const movieUrls = movies.map((movie: any) => ({
    url: `${baseUrl}/movies/${movie.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/movies`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/collections/crime`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/collections/action`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/collections/2023`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/collections/nolan`,
      lastModified: new Date(),
    },

    ...movieUrls,
  ];
}
