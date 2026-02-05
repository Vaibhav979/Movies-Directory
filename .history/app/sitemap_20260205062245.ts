import type { MetadataRoute } from "next";
import { getTopMovies } from "@/lib/tmdb";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://your-vercel-url.vercel.app"; // CHANGE THIS

  let movieUrls: MetadataRoute.Sitemap = [];

  try {
    const movies = await getTopMovies();

    movieUrls = movies.map((movie: any) => ({
      url: `${baseUrl}/movies/${movie.id}`,
      lastModified: new Date(),
    }));
  } catch (error) {
    console.error("Sitemap fetch failed:", error);
    // Fail silently → don't break build
  }

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
