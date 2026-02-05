import PageWrapper from "@/components/PageWrapper";
import MovieGrid from "@/components/MovieGrid";

import {
  getMoviesByGenre,
  getMoviesByYear,
  getMoviesByPerson,
} from "@/lib/tmdb";

type Props = {
  params: {
    slug: string;
  };
};

const COLLECTIONS: Record<
  string,
  { title: string; type: string; value: string }
> = {
  crime: {
    title: "Best Crime Movies",
    type: "genre",
    value: "80", // TMDB Crime ID
  },

  action: {
    title: "Top Action Movies",
    type: "genre",
    value: "28",
  },

  "2023": {
    title: "Best Movies of 2023",
    type: "year",
    value: "2023",
  },

  nolan: {
    title: "Best Christopher Nolan Movies",
    type: "person",
    value: "525", // Nolan TMDB ID
  },
};

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;

  const config = COLLECTIONS[slug];

  if (!config) {
    return <p>Collection not found</p>;
  }

  let movies = [];

  if (config.type === "genre") {
    movies = await getMoviesByGenre(config.value);
  }

  if (config.type === "year") {
    movies = await getMoviesByYear(config.value);
  }

  if (config.type === "person") {
    movies = await getMoviesByPerson(config.value);
  }

  if (config.type === "person") {
  const person = await searchPerson(config.value);
  movies = await getMoviesByPerson(person.id);
}


  return (
    <PageWrapper>
      <h1 className="text-4xl font-extrabold mb-6">
        {config.title}
      </h1>

      <MovieGrid movies={movies} />
    </PageWrapper>
  );
}
