import { Movie } from "@/types/movie";

type Props = {
    movie: Movie;
};

export default function MovieCard({ movie }: Props) {
    return (
        <div className="border p-3 rounded">
            <h2 className="text-xl font-bold">{movie.title}</h2>
        </div>
    )
}